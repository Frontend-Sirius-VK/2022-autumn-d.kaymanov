

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.static('.'));

const port = process.env.PORT || 3000;

const db = require('./database/databasepg.js')
const {getCarSpec} = require("./database/databasepg");

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
})

app.get('/login', (req,res) => {
    // TODO
})

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
})

app.get('/getCarSpec', async (req, res) => {
    const result = await db.getCarSpec();
    res.json(result);
    console.log(res);
});
