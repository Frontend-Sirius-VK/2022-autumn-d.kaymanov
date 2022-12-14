const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'vkproject',
    password: 'qwerty',
    port: '5432'
})

async function getCarsSpec() {
    try {
        const result = await pool.query('Select * from carspec')
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

async function createProductCar(req){
    try {
        const {altimg, srcimg, namecar, spec, price, yearcar, mileage} = req.body;
        const newCar = await pool.query('INSERT INTO carspec (altimg, srcimg, namecar, spec, price, yearcar, mileage) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [altimg, srcimg, namecar, spec, price, yearcar, mileage]);
        return newCar.body;
    } catch (error) {
    console.log(error)
}
}

async function getOneCarSpec(id) {
    try {
        const oneCar = await  pool.query('SELECT * FROM carspec WHERE id = $1', [id])
        return oneCar.rows
    } catch (error) {
        console.log(error)
    }
}

async function putCarSpec(req) {
    try {
        const {id, altimg, srcimg, namecar, spec, price, yearcar, mileage} = req.body;
        const result = await pool.query('UPDATE carspec set altimg = $1, srcimg = $2, namecar = $3, spec = $4, price = $5, yearcar = $6, mileage = $7 WHERE id = $8 RETURNING *', [altimg, srcimg, namecar, spec, price, yearcar, mileage, id])
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

async function deleteCarSpec(id) {
    try {
        const oneCar = await pool.query('DELETE FROM carspec WHERE id = $1', [id])
        return oneCar.body
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getCarsSpec,
    createProductCar,
    getOneCarSpec,
    putCarSpec,
    deleteCarSpec,
}

