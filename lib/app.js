let express = require('express');
let app = module.exports = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
