const express = require('express');

let app = express();

let path  = require('path');

const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


const knex = require('knex') ({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'password',
        database: 'htwf',
        port: 5432
    }
})

app.get('/', (req,res) => {
    let query = knex.select().from('db');
    query.toString();
    query.then(phrase => {
        res.render('index', {phrase: phrase});
    })
})

app.post("/newphrase", (req, res)=> {
    res.render('index');
});


app.listen(port, () => console.log('How to win friends is listening'));