const mongoose = require('mongoose')

const replySchema = new mongoose.Schema({
    ReplyID: { type: Number, default: 0 },
    Comment: { type: String, default: '' },
    UserID: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'user' },
    // PostID: { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'post' },
    Status: { type: Boolean, default: true }
},{timestamps:true})

module.exports = new mongoose.model('reply', replySchema)


