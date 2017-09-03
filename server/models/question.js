const mongoose = require('mongoose');
const answerSchema = require('./answer');
const Schema = mongoose.Schema;

let questionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  answers: [answerSchema],
  upvotes: [{type: Schema.Types.ObjectId, ref: 'user'}],
  downvotes: [{type: Schema.Types.ObjectId, ref: 'user'}]
}, {
  timestamps: true
});

let question = mongoose.model('question', questionSchema);

module.exports = question;
