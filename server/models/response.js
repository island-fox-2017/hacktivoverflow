const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema({
  responseContent: {
    type: String,
    required: [true, 'response content tidak boleh kosong']
  }
}, {
  timestamps: true
});

const Response  = mongoose.model('Response', responseSchema);

module.exports = Response;
