const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
const Comments = mongoose.model('Comment', commentSchema);

module.exports = Comments;