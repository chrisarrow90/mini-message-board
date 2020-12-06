var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages});
});

/* GET on /new - display message form to client */
router.get('/new', function(req, res, next) {
  res.render('form')
})

/* POST message */
router.post('/new', function(req, res, next) {
  // add new message to the array
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()
  })
  // send user back to homepage
  res.redirect('/')
})

module.exports = router;