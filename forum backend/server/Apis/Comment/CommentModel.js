const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:false
  },
  postId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"post",
    required:false
  },
  comment: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  replies: [{
    // username: String,
    // comment: String,
    // timestamp: { type: Date, default: Date.now }
    type:mongoose.Schema.Types.ObjectId,
    ref:"Comment",
    require:false
    }]
}, {timestamps:true});

const CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = CommentModel;
