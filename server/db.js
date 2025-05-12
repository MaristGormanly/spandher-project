
const { Pool } = require('pg');

const pool = new Pool({
  user: 'uc_user',
  host: 'localhost',
  database: 'universalconnect',
  password: 'uc_pass',
  port: 5432
});

pool.query("SET search_path TO uc_schema"); // if using custom schema

module.exports = pool;
