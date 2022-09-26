const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    port: 5432,
    host: 'localhost',
    password: 'Cambior1972',
    database: 'perntodo'
});

module.exports = pool;