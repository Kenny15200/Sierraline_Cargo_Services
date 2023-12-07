
//connecting to the server
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
	host: 'localhost',
	user: 'sierraline_1',
	password: '16@Kehinde123',
	database: 'sierraline_1db',
});

db.connect((err) => {
	if (err) throw err;
	console.log('Connect to the databse');
});

//My routes and APIs 
//
//Iser Registration Routes

app.post('/register', (req, res) => {

	const user = req.body;

    // Validate user input
    if (!user.firstName || !user.lastName || !user.email || !user.password_hash) {
        return res.status(400).json({ error: "Failed to register the user", details: "Missing required fields" });
    }

// Save user data to the database

	db.query('INSERT INTO users SET ?', user, (err, result) => {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: 'Failed to register the user', details: err.message });
		}

		res.json({ message: 'User registerd successfully' });
	});
});

app.listen(port, 'localhost', () => {
	console.log(`Server is running on port http://localhost:${port}`);
});
