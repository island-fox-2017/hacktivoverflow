const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const threadSchema = new Schema ({
  title: {
    type: String,
    required: [true, 'Title tidak boleh kosong']
  },
  threadContent: {
    type: String,
    required: [true, 'Content tidak boleh kosong']
  },
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  replies: [{type: Schema.Types.ObjectId, ref: 'Response' }],
  upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
  timestamps: true
});

const Thread  = mongoose.model('Thread', threadSchema);

module.exports = Thread;
