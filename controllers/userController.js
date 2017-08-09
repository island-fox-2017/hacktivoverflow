'use strict'

const User = require('../models/User')
const jwt = require('jsonwebtoken')
const helper = require('../helpers/auth')


function register(req,res){
  const key = helper.randomKey();
  const pass = helper.hash(req.body.password, key)
  User.create({
    username:req.body.username,
    name: req.body.name,
    password: pass,
    email: req.body.email,
    key: key
  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.json({
      err: err,
      msg: 'Your registration was failed!!'
    })
  })
}

function login(req,res){
  User.findOne({
    username: req.body.username
  })
  .then(response=>{
    const key = response.key;
    const pass = helper.hash(req.body.password, key)
    if(response.password == pass){
      const token = jwt.sign({
        id: response._id,
        name: response.name,
        email: response.email,
        username: response.username
      }, 'AssFF9')
      req.headers.token = token
      res.json({token:token, id: response._id})
    }else {
      res.send('Wrong Password!')
    }
  })
  .catch(err=>{
    res.json({
      err: err,
      msg: 'User Not Found!!'
    })
  })
}

module.exports = {
  register,
  login
};
