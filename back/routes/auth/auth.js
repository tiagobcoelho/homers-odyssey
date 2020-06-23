const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db');

router.post('/signup', function(req, res, next) {

    const formData = req.body;

    return connection.query('INSERT INTO users SET ?' , [formData], (err, results) => {
        if(err) {
            return res.status(500).json({
                error: err.message,
                sql: err.sql,
            });
        }
        return connection.query('SELECT * FROM users WHERE id = ?', results.insertId, (err2, records) => {
            if(err2){
                return res.status(500).json({
                    error: err2.message,
                    sql: err2.sql,
                });
            }
            const InsertedUser = records[0];
            return res.status(201)
            .json(InsertedUser)
        });
    });
  });

module.exports = router;
