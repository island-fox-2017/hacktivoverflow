const user = require('../models/user')
const jwt = require('jsonwebtoken')
const helper = require('../helpers/registration')
require('dotenv').config()

function getAllUser(req, res){
  user.find()
    .then(response => {
      res.send(response)
    })
    .catch(err => {
      res.send(err)
    })
}

function signup(req,res){
  let salt = helper.random();
  let pass = helper.cryptoPass(req.body.password, salt)
  user.create({
    fullname: req.body.fullname,
    email: req.body.email,
    username: req.body.username,
    password: pass,
    salt: salt
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function signin (req, res){
  //console.log('secret nih ', process.env.SECRET_KEY)
  user.findOne({
    username: req.body.username
  })
  .then(response => {
    let salt = response.salt
    let pass = helper.cryptoPass(req.body.password, salt )
    if(response.password == pass){
      let token = jwt.sign({
        id: response._id,
        fullname: response.fullname,
        username: response.username,
        email: response.email
      }, process.env.SECRET_KEY)
      // req.headers.token = token
          // ga kepake lg.. soal sudah ga jadi middleware lg! - di server..
          // klo di client dia bukan middleware
      let objectGabungan = {
        token: token,
        id: response._id,
        fullname: response.fullname
      }
      console.log('obj gbngn');
      res.send(objectGabungan)
      // disini proses auth e dah kelar!! - ntar tinggal otorisasi ne..

      // token dpt di client,, trus disimpen !! ( token ga ada password koq.. jd no problem)

    } else {
      res.send('incorrect password!')
    }
  })
  .catch(err =>{
    console.log('ternyata error', err)
    res.send(err)
  })
}


module.exports = {
  signup,
  signin,
  getAllUser
};
