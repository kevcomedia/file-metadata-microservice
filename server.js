const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();

const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.post('/upload', upload.single('file'), function(req, res) {
  res.json({
    size: req.file.size
  });
});

app.listen(port, function() {
  console.log('App is live!');
});
