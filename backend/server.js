
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookdb'
});

db.connect();

app.get('/books', (req, res) => {
  const genre = req.query.genre;
  db.query('SELECT title FROM books WHERE genre = ?', [genre], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results.map(r => r.title));
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
