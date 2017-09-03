
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/hacktivoverflow', function(err){
  if(err) {console.log(err);}
  else {
  console.log('db connected');}
})
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

app.use(cors());

const question = require('./routes/question')		// cek
const registration = require('./routes/registration')		// cek

app.get('/', function(req,res){			// test di localhost:3000
  res.send('express is listening')
})

app.use('/registration', registration)				//cek
app.use('/question', question)				//cek

app.listen(3000)
