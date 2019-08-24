const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 6000;

const test = require('./routes/api/test');

app.use(bodyParser.json());

app.use('/api/test', test);

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});