const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(express.static('.'));
app.use(express.json());

const port = process.env.PORT || 3000;

const db = require('./database/databasepg.js')

// app.get('/', (req,res) => {
//     try {
//         res.sendFile(path.join(__dirname, '.', 'index.html'));
//     } catch (error){
//         res.status(500).end();
//     }
// })

// app.get('/cars/:id', (req,res) => {
//     try {
//         res.sendFile(path.join(__dirname + '/index.html'));
//     } catch (error){
//         res.status(500).end();
//     }
// })

app.get('/api/getCarsSpec', async (req, res) => {
    try {
        const result = await db.getCarsSpec();
        if (!result){
            res.status(500).end();
        }
        res.json(result);
    } catch (error){
        res.status(500).end();
    }
});

app.post('/api/postCar', async (req, res) => {
    try {
        const result = await db.createProductCar(req);
        if (!result){
            res.status(500).end();
        }
        res.json(result);
        return res;
    } catch (error){
        res.status(500).end();
    }
})

app.get('/api/getOneCarSpec/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await db.getOneCarSpec(id);
        if (!result){
            res.status(500).end();
        }
        res.json(result[0]);
    } catch (error){
        res.status(500).end();
    }
});

app.put('/api/updateCarSpec', async (req, res) => {
    try {
        const result = await db.putCarSpec(req);
        if (!result){
            res.status(500).end();
        }
        res.json(result);
    } catch (error){
        res.status(500).end();
    }
});

app.delete('/api/deleteCarSpec/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await db.deleteCarSpec(id);
    } catch (error){
        res.status(500).end();
    }
});

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
})
