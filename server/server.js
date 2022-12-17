const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.static('.'));
app.use(express.json());

const port = process.env.PORT || 3000;

const db = require('./database/databasepg.js')

app.get('/api/cars', async (req, res) => {
    try {
        const result = await db.getCarsSpec();
        if (!result){
            res.status(500).end();
        }
        if (result.code === 'ECONNREFUSED') {
            res.status(500).end();
        }
        res.json(result);
    } catch (error){
        res.status(500).end();
    }
});

app.post('/api/cars', async (req, res) => {
    try {
        const result = await db.createProductCar(req);
        if (!result){
            res.status(500).end();
        }
        if (result.name === 'error') {
            res.status(404).end();
        }
        res.json(result);
        return res;
    } catch (error){
        res.status(500).end();
    }
})

app.get('/api/cars/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await db.getOneCarSpec(id);
        if (!result){
            res.status(500).end();
        }
        if (result.name === 'error') {
            res.status(404).end();
        }
        res.json(result[0]);
    } catch (error){
        res.status(500).end();
    }
});

app.put('/api/cars', async (req, res) => {
    try {
        const result = await db.putCarSpec(req);
        if (!result){
            res.status(500).end();
        }
        if (result.name === 'error') {
            res.status(404).end();
        }
        res.json(result);
    } catch (error){
        res.status(500).end();
    }
});

app.delete('/api/cars/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await db.deleteCarSpec(id);
        res.status(200).end();
    } catch (error){
        res.status(500).end();
    }
});

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
})
