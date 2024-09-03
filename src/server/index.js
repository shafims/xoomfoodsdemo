import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import  bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// require('dotenv').config();

//create  express app
const app = express();
const PORT = '5000'

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'developer',
  database: 'shopping',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
    db.query('SELECT * FROM demo', (err, result) => {
        if(err) throw err;
        res.send(result);
    });
})
app.post('/send', (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    // let hashedPassword = bcrypt.hashSync(password, 10);

    db.query('INSERT INTO demo (name, email, password, confirmPassword) values (?, ?, ?, ?)',[name, email, password, confirmPassword] , (err, result) => {
        if(err) throw err;
        res.send(result);
        res.send('Data inserted successfully');
    });
})




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));