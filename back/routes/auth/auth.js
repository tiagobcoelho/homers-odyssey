const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db');

router.post('/signup', function(req, res, next) {

    const formData = req.body;

    return connection.query('INSERT INTO users SET ?' , [formData], (err, results) => {
        if (err)
            res.status(500).json({ flash:  err.message });
        else
            res.status(200).json({ flash: "User has been signed up!" });
    });
  });


  router.post('/signin', function(req, res, next) {

    const formData = req.body;

    const email = formData.email


    return connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err)
            res.status(500).json({ flash:  err.message });
        else
            res.status(200).json(results);
    });
  });

module.exports = router;
