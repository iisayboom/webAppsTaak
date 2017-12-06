var express = require('express');
var router = express.Router();

let jwt = require('express-jwt');

let auth = jwt({
  secret: process.env.BACKEND_SECRET,
  userProperty: 'payload'
});

let mongoose = require('mongoose');
let Thread = mongoose.model('Thread');
let Post = mongoose.model('Post');
let User = mongoose.model('User');

router.get('/threads/getAll', function (req, res, next) {
  let query = Thread.find().populate("user");
  query.exec(function (err, threads) {
    if (err) return next(err);
    if (!threads) return next(new Error('No threads found'));
    res.json(threads);
  });
});

router.get('/threads/:id/getAllPostsForThread', function (req, res, next) {
  let query = Thread.findById(req.params.id).populate({
    path: "posts",
    model: "Post",
    populate: {
      path: "user",
      model: "User"
    }
  });
  query.exec(function (err, thread) {
    if (err) return next(err);
    if (!thread) return next(new Error('No thread found'));
    res.json(thread.posts);
  });
});

router.get('/Profile/:username/getAllThreadsForUser', function (req, res, next) {


  let query = User.findOne({
    username: req.params.username
  }).populate({
    path: "threads",
    model: "Thread",
    populate: {
      path: "posts",
      model: "Post"
    }
  });

  query.exec(function (err, user) {
    if (err) return next(err);
    if (!user) return next(new Error('No user found'));
    res.json(user.threads);
  });
});

router.get('/threads/getThread/:id', function (req, res, next) {
  let query = Thread.findById(req.params.id).populate('user').populate({
    path: 'posts',
    model: 'Post',
    populate: {
      path: 'user',
      model: 'User'
    }
  });
  query.exec(function (err, t) {
    if (err) return next(err);
    if (!t) return next(new Error('No thread found'));
    res.json(t);
  });
});

router.post('/threads/:username/addThread', auth, function (req, res, next) {
  User.findOne({
    username: req.params.username
  }, function (err, user) {
    if (err) return next(err);
    if (!user) return next(new Error("User not found"));
    let thread = new Thread(req.body);
    thread.user = user;
    thread.save(function (err, t) {
      if (err) {
        return next(err);
      }
      user.threads.push(t);
      user.save(function(err, u){
        if(err) return next(err);
        res.json(t);
      });
    });
  });
});


router.delete('/threads/delete/thread/:threadId', function (req, res, next) {
  Thread.findById(req.params.threadId, function (err, t) {
    if (err) return next(err);
    if (!t) return next(new Error('Thread not found'));
    for (var i = 0; i < t.posts.length; i++) {
      Post.findById(t.posts[i], function (err, post) {
        if (err) return next(err);
        if (!post) return next(new Error('Post not found'));
        post.remove(function (err, s) {
          if (err) return next(err);
        });
      });
    }
    t.remove(function (err, thread) {
      if (err) return next(err);
      res.json("DOOOOOOOOOOOONNNNNNNNNNNEEEEEEEEEE");
    });
  });
});

router.post('/threads/:id/addThreadReply', function (req, res, next) {
  Thread.findById(req.params.id, function (err, t) {
    if (err) return next(err);
    if (!t) return next(new Error('No thread found'));
    User.findOne({
      username: req.body.afzender
    }, function (err, user) {
      if (err) return next(err);
      if (!user) return next(new Error('No user found'));
      let reply = new Post(req.body);
      reply.user = user;
      reply.save(function (err, r) {
        if (err) return next(err);
        t.posts.push(r);
        t.save(function (err, thread) {
          if (err) return next(err);
          res.json(thread);
        });
      });
    });
  });
});

router.post('/threads/:threadId/:userId/addPost', function (req, res, next) {
  Thread.findById(req.params.threadId, function (err, t) {
    if (err) return next(err);
    if (!t) return next(new Error('No thread found'));
    User.findById(req.params.userId, function (err, user) {
      if (err) return next(err);
      if (!user) return next(new Error('No user found'));
      let post = new Post(req.body);
      post.user = user;
      post.save(function (err, p) {
        if (err) return next(err);
        t.posts.push(p);
        t.save(function (err, thread) {
          if (err) return next(err);
          res.json(thread);
        });
      });
    });
  });
});

module.exports = router;