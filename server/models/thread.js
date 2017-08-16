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
  }
}, {
  timestamps: true
});

const Thread  = mongoose.model('Thread', threadSchema);

module.exports = Thread;
