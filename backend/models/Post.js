var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    inhoud: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User' }
})

mongoose.model('Post', PostSchema);