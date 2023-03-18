'use strict';

const express = require('express');
const path = require('path');
const app = express();
const body = require('body-parser');
const cors = require('cors');
var cookieParser = require('cookie-parser')
const fs = require("fs");

const options = {
    setHeaders: function (res, path, stat) {
        res.set('Service-Worker-Allowed', '/');
    },
};

app.use(cookieParser());
app.use('/',express.static(path.resolve(__dirname, '../dist'), options));

app.use(body.json());
app.use(cors({
	origin: ['http://localhost:3000', 'https://localhost:3000','http://localhost:8088', 'http://localhost:8080', 'http://127.0.0.1:5500',
	'https://movie-gate.online:8088'],
	credentials: true,
}));

// const users = {
// 	'Dop123@mail.ru': {
// 		'nickname': 'StepByyyy',
// 		'email': 'Dop123@mail.ru',
// 		'password': 'Dop123@mail.ru',
// 		'avatar': 'assets/img/users/invisibleMan.jpeg'
// 	},
// };
// const DEFAULT_AVATAR = 'assets/img/users/default_user.jpg'
// const ids = {};

const genres = {
	'Блюз': 'genres/blues.png',
};

;

app.post('/api/v1/adsa',  (req, res) => {
	const password = req.body.password;
	const email = req.body.email;
	if (!password || !email) {
		return res.status(401).json({error: 'Не указан E-Mail или пароль'});
	}
	if (!users[email] || users[email].password !== password) {
		return res.status(400).json({error: 'Не верный E-Mail и/или пароль'});
	}

	const id = 1;
	ids[id] = email;

	res.cookie('red', id, {expires: new Date(Date.now() + 1000 * 60 * 10)});
	res.status(200).json({nickname: users[email].nickname ,email: users[email].email,avatar: users[email].avatar});
});

app.get('/api/v1/genres',  (req, res) => {
	console.log(genres);
	res.status(200).json(genres);
});

app.get('/api/v1/image',  (req, res) => {
	const path = req.query.path;
	fs.readFile(`${__dirname}/${path}`, function (error, data) {
		if (error) {
			res.statusCode = 405;
			res.end('Resourse not found!')
		} else {
			res.setHeader("Content-Type", "image/png");
			res.end(data)
		}
	});
});

const default_port = 80;
let currentPort = process.argv[2]
if (!currentPort) {
	currentPort = default_port
}

const port = process.env.PORT || (+currentPort);

app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
