const express = require('express');
const app = express();

const port = 8392;

app.use('/api', require('./api'));

app.listen(port, err => {
  if (err) {
    throw new Error(err);
  }

  console.log('Listening on http://localhost:' + port);
});
