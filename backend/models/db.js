// backend/models/db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost', // Replace with your MySQL host
  user: 'root', // Replace with your MySQL user
  password: 'Common@123', // Replace with your MySQL password
  database: 'node-complete', // Use the name of the database you created
  connectionLimit: 10,
});

module.exports = pool;
