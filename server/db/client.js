const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/sample_vg');

module.exports = client;
