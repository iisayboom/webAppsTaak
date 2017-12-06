var mongoose = require('mongoose');

var ThreadSchema = new mongoose.Schema({
    titel: String,
    inhoud: String,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref:'Post' }],
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User' }
})

ThreadSchema.pre('remove', function(next){
    this.model('User').update({}, {$pull: {threads: this._id}}, {safe: true, multi: true}, next);
});

mongoose.model('Thread', ThreadSchema);