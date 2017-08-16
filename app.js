'use strict'

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
// const url = "mongodb://sukmahd:vongola12@cluster0-shard-00-00-h9kzb.mongodb.net:27017,cluster0-shard-00-01-h9kzb.mongodb.net:27017,cluster0-shard-00-02-h9kzb.mongodb.net:27017/hacktiv-overflow?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
mongoose.connect('mongodb://localhost/hacktiv-overflow-sukmo')

const cors = require('cors')

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

app.use(cors());

const user = require('./routes/user')
const question = require('./routes/question')

app.get('/', function(req,res){
  res.send('hello its me')
})

app.use('/user', user)
app.use('/question', question)

app.listen(3000)
