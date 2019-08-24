const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 1000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/public'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}

const test = require('./routes/api/test');

app.use(bodyParser.json());
app.use(cors());

app.use('/api/test', test);

app.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});