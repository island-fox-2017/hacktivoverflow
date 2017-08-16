'use strict'

const mongoose = require('mongoose');
const answerSchema = require('./Answer');
const Schema = mongoose.Schema

const questionSchema = Schema({
  title:{
    type:String,
    required: true
  },
  content:{
    type:String,
    required: true
  },
  author:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  answer: [answerSchema],
  upvotes: [{type: Schema.Types.ObjectId, ref: 'User', unique: true}],
  downvotes: [{type: Schema.Types.ObjectId, ref: 'User', unique: true}]
},{
  timestamps:true
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question;
