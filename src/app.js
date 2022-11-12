const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const api = require('./api');
const { notFound, errorHandler } = require('./middlewares/errors.middleware');

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/public'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
	});
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.status(200).json({
		message: '📦 Svelte Express Boilerplate 📦',
	});
});

app.use('/api/v1', api);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
