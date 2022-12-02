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








// export class Databasepg {
//     getConnections() {
//         const { Pool } = require('pg');
//         const pool = new Pool({
//             user: 'postgres',
//             password: 'qwerty',
//             host: 'localhost',
//             port: '5432',
//             database: 'vkproject'
//         });
//         return pool;
//     }
// }
//
// module.exports = new Databasepg();





    // const {Databasepg} = require('pg');
    //
    // const client = new Client({
    //     host: 'localhost',
    //     user: 'postgres',
    //     port: '5432',
    //     password: 'qwerty',
    //     database: 'vkproject'
    // })
    //
    // client.connect();
    //
    // client.query(`Select * from carspec`, (err, res)=> {
    //     if(!err){
    //         console.log(res.rows);
    //     } else {
    //         console.log(err.message);
    //     }
    //     client.end;
    // })
