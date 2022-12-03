const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'vkproject',
    password: 'qwerty',
    port: '5432'
})

async function getCarSpec() {
    try {
        const result = await pool.query('Select * from carspec')
        return result.rows
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getCarSpec,
}

