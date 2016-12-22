const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('file'), function(req, res) {
  if (!req.file) {
    return res.status(400).json({
      "error": "Bad Request"
    });
  }

  res.json({
    name: req.file.originalname,
    size: req.file.size
  });
});

app.listen(port, function() {
  console.log('App is live!');
});
