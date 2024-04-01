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
    database: 'pos',
    port: 3307
})

app.post('/SignUp', (req, res) => {
    const sql = 'INSERT INTO admins(`username`, `email`, `password`) VALUES (?)'
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
    let sql = 'SELECT * FROM admins WHERE email = ? and password = ?'

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            req.session.username = data[0].username;
            req.session.admin_id = data[0].admin_id;

            return res.json({Login: true, Admin: true})
        } else {
            sql = 'SELECT * FROM employee WHERE email = ? and password = ?'
            db.query(sql, [req.body.email, req.body.password], (err, data) => {
                if(err) {
                    return res.json("Error");
                }
                if (data.length > 0) {
                    req.session.username = data[0].username;
                    req.session.admin_id = data[0].admin_id;

                    return res.json({Login: true, Admin: false})
                } else {
                    return res.json({Login: false, Admin: false})
                }
            })
            return res.json({Login: false})
        }
    })
})

app.get('/Products', (req, res) => {
    const sql = 'SELECT * FROM product WHERE admin_id = ?';

    db.query(sql, [req.session.admin_id], (err, data) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ error: 'Error fetching products' });
        }
        return res.json(data);
    });
});


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
