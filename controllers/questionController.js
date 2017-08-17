'use strict'

const Question = require('../models/Question')


function voteAnswer(req,res) {
  const idAnswer = '599443f94aa4e03f73118ca9'
  Question.findById(req.params.id)
  .then(response => {
    const newData = response.answer.map(function(ans){
      if(ans._id == idAnswer){
        ans.upvotes.push(req.params.iduser)
        return ans
      }else {
        return ans
      }
    })

    console.log(newData);
    // res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function voteQuestion(req,res) {
  Question.findById(req.params.id)
  .then(response => {
    var status = false

    for (let i = 0; i < response.downvotes.length; i++) {
      response.upvotes[i] == req.params.iduser
      status = true
    }

    for (let i = 0; i < response.upvotes.length; i++) {
      response.upvotes[i] == req.params.iduser
      status = true
    }

    if(status){
      res.send({msg: 'Already Vote'})
    }else {
      if(req.body.status == 'up'){
        Question.where({
          _id: req.params.id
        })
        .update({
          $push: {
            upvotes: req.params.iduser
          }
        })
        .then(response => {
          res.send({msg: 'voteSukses'})
        })
        .catch(err => {
          res.send(err)
        })
      }else {
        Question.where({
          _id: req.params.id
        })
        .update({
          $push: {
            downvotes: req.params.iduser
          }
        })
        .then(response => {
          res.send({msg: 'voteSukses'})
        })
        .catch(err => {
          res.send(err)
        })
      }
    }
  })
  .catch(err => {
    res.send(err)
  })
}

function getAllQuestion(req,res){
  Question.find()
  .populate('author', 'name username email')
  .populate('answer.author', 'name username email')
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function getOneQuestion(req,res){
  Question.findById(req.params.id)
  .populate('author', 'name username email')
  .populate('answer.author', 'name username email')
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function createQuestion(req,res){
  Question.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    answer: [],
    upvotes: [],
    downvotes: []
  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function deleteQuestion(req,res){
  Question.deleteOne({
    _id: req.params.id
  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function editQuestion(req,res){
  Question.where({
    _id:req.params.id
  })
  .update({
    title:req.body.title,
    content: req.body.content
  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}

function addAnswer(req,res){
  Question.where({
    _id: req.params.id
  })
  .update({
    $push:{
      answer: {
        author: req.body.author,
        content: req.body.content,
        upvotes: [],
        downvotes: []
      }
    }
  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
}


module.exports = {
  getAllQuestion,
  getOneQuestion,
  createQuestion,
  addAnswer,
  deleteQuestion,
  voteQuestion,
  voteAnswer
};
