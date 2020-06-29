const  http  =  require('http');
const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  app  =  express();
const connection = require('./helpers/db');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const authRouter = require('./routes/auth/auth');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

app.use('/auth', authRouter);

app.get("/profile", passport.authenticate('jwt', { session:  false }), function (req, res) {
    res.send(req.user);
  });

app.get("/", (req,res) => {
    res.send("youhou");
})

app.use(function(req, res, next) {
    var  err  =  new  Error('Not Found');
    err.status  =  404;
    next(err);
});

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        session: false
    },
    function (email, password, cb) {
        
        return connection.query('SELECT * FROM users WHERE email = ?' , [email], (err, results) => {
            if (err)
                return cb(err)
            if(!results.length){
                return cb(null, false, { message: 'email  not found.' })
            } else {
                const isSame = bcrypt.compareSync(password, results[0].password)
                if(isSame){
                    return cb(null, results[0])
                } else {
                    return cb(null, false, { message: 'wrong password' })
                }
            }
        });
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'your_jwt_secret'
},
    function (jwtPayload, cb) {
        return cb(null, jwtPayload);
    }
));

let  server  =  app.listen( process.env.PORT  ||  5000, function(){
    console.log('Listening on port '  +  server.address().port);
});