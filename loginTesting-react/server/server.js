const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')


const app = express();
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'logintest',
    port: 3307
})

app.post('/SignUp', (req, res) => {
    const sql = 'INSERT INTO user(`username`, `email`, `password`) VALUES (?)'
    const values = [
        req.body.username,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json;
    })
})

app.post('/Login', (req, res) => {
    const sql = 'SELECT * FROM user WHERE email = ? and password = ?'

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            req.session.username = data[0].username;

            return res.json({Login: true})
        } else {
            return res.json({Login: false})
        }
    })
})

app.get('/', (req, res) => {
    if(req.session.username) {
        return res.json({valid: true, username: req.session.username})
    } else {
        return res.json({valid: false})
    }
})

app.listen(8081, () =>{
    console.log("listening")
})
