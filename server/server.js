const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.static('.'));
app.use(express.json());

const port = process.env.PORT || 3000;

const db = require('./database/databasepg.js')

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
})

app.get('/car:id', (req,res) => {
    const idCar = req.params.id ;
    res.sendFile(path.join(__dirname, '.', 'index.html'));
})

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
})

app.get('/getCarSpec', async (req, res) => {
    const result = await db.getCarSpec();
    res.json(result);
    console.log(res);
});

app.post('/post', async (req, res) => {
    const result = await db.createProductCar(req);
    res.json(result);
    return res;
})

app.get('/getOneCarSpec/:id', async (req, res) => {
    const id = req.params.id;
    const result = await db.getOneCarSpec(id);
    res.json(result);
    console.log(res);
});

app.put('/updateCarSpec', async (req, res) => {
    const result = await db.putCarSpec(req);
    res.json(result);
    console.log(res);
});

app.delete('/deleteCarSpec/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const result = await db.deleteCarSpec(id);
    res.json(result);
    console.log(res);
});
