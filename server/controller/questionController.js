const question = require ('../models/question')

function findAllQuestion(req, res) {
  question.find()
  .populate('author', 'fullname')
  // udah dpt tp full semuane.. klo mau cuma dptin fullname?
  .then ( response => {
    res.send(response)
  })
  .catch( err => {
    res.send(err)
  })
}

function findByIdQuestion(req, res){
  question.findOne({
    _id: req.params.id
  })
  .populate('author')
  // author asal e dari author: req.body.author, di createQuestion dibawah
      // klo perlu = nambah upvote n downvotes ( ini ObjectId user jg )
  .populate('answers.author')
      // ini memang akses ke dlm answers tp ngeluarin semuane.. bukan cuma bagian e ky fullanem, dll
      // jadi memang answers punya author (isine semua dari user)
  .populate('answers.downvotes')
  .populate('answers.upvotes')
    // ok ini cara utk nampilin di postman ( data siapa yg ngevote + downvotes komplit)
  .then( response => {
    res.send(response)
  })
  .catch( err => {
    res.send(err)
  })
}

function createQuestion(req, res){
  question.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    answers: [],
    upvotes: [],
    downvotes: []
  })
  .then( response => {
    res.send(response)
  })
  .catch( err => {
    res.send(err)
  })
}

function updateQuestion (req, res){
  question.where({
    _id: req.params.id
  })
  .update({
    title: req.body.title,
    content: req.body.content
  })
  .then( response => {
    res.send(response)
  })
  .catch( err => {
    res.send(err)
  })
}

function deleteQuestion( req, res){
  question.deleteOne({
    _id: req.params.id
  })
  .then(response => {
    res.send(response)
  })
  .catch(err=> {
    res.send(err)
  })
}

// for Answer
// Tank.findByIdAndUpdate(id, { $set: { size: 'large' }}, { new: true }, function (err, tank) {
//   if (err) return handleError(err);
//   res.send(tank);
// });

function createAnswer (req,res){
  question.findByIdAndUpdate(req.params.id, {
    $push: {'answers': req.body}
    // yup bener .. ada save2an e di postman
    // jadi ikuti url di router nya trus input aja spt biasa di body
  }, {
    safe: true,
    upsert: true,
    new: true
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

// find the question by id dulu trus baru answers didlmnya..
function findAnswers (req,res){
  question.findOne({
    _id: req.params.id
  })
  .then(response => {
    res.send(response.answers)
    // yg dikirim lgs answers e saja ( dari pertanyaan id diatas )
  })
  .catch(err => {
    res.send(err)
  })
}


module.exports = {
  findAnswers,
  createAnswer,
  deleteQuestion,
  updateQuestion,
  createQuestion,
  findByIdQuestion,
  findAllQuestion
}



































//------------
