const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST ?? 'localhost',
    database: process.env.POSTGRES_DB ,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
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
        const {altimg, srcimg, namecar, spec, price, yearcar, mileage, nameowner, numberowner, descriptioncar} = req.body;
        const newCar = await pool.query('INSERT INTO carspec (altimg, srcimg, namecar, spec, price, yearcar, mileage, nameowner, numberowner, descriptioncar) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [altimg, srcimg, namecar, spec, price, yearcar, mileage, nameowner, numberowner, descriptioncar]);
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
        const {id, altimg, srcimg, namecar, spec, price, yearcar, mileage, nameowner, numberowner, descriptioncar} = req.body;
        const result = await pool.query('UPDATE carspec set altimg = $1, srcimg = $2, namecar = $3, spec = $4, price = $5, yearcar = $6, mileage = $7, nameowner = $8, numberowner = $9, descriptioncar = $10 WHERE id = $11 RETURNING *', [altimg, srcimg, namecar, spec, price, yearcar, mileage,  nameowner, numberowner, descriptioncar, id])
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

