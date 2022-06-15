const express = require('express');
const router = require('./router');
require('./database');

const app = express();

app.use(express.json());

app.use(router)

app.listen(8080,err => {
	if (err) console.error(err);
	console.log('server running http://localhost:8080');
})