const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const connection = require('../../helpers/db');
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/signup', function(req, res, next) {

    const formData = req.body;

    const password = formData.password

    const hash = bcrypt.hashSync(password, 10);

    formData.password = hash 

    console.log(formData)

    return connection.query('INSERT INTO users SET ?' , [formData], (err, results) => {
        if (err)
            res.status(500).json({ flash:  err.message });
        else
            res.status(200).json({ flash: "User has been signed up!" });
    });
  });


  router.post('/signin', function(req, res, next) {

    passport.authenticate('local',(err, user, info) => {
        if(err) return res.status(500).send(err)
        if (!user) return res.status(400).json({message: info.message});
        const token = jwt.sign(JSON.stringify(user), 'your_jwt_secret');
        return res.json({user, token});
     })(req, res)
  });

module.exports = router;
