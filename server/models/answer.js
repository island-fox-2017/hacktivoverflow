const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let answerSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  content: {
    type: String,
    required: true
  },
  upvotes: [{type: Schema.Types.ObjectId, ref: 'user'}],
  downvotes: [{type: Schema.Types.ObjectId, ref: 'user'}]
}, {
  timestamps: true
})

// ga didaftarin.. ckp as schema
module.exports = answerSchema;
