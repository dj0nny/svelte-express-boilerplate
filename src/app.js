const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 1000;

const test = require('./routes/api/test');

app.use(bodyParser.json());
app.use(cors());

app.use('/api/test', test);

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});