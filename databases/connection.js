const {Pool, Client} = require('pg');

const client = new Client({
  user: 'me',
  host: 'localhost',
  database: 'airbnb',
  password: 'root',
  port: 5433,
});

client.connect(err => {
  if (err) {
    console.log('cannot connect to postgres', err.stack);
  } else {
    console.log('connected to postgres');
  }
});

module.exports = client;


// const { Pool } = require('pg');
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'airbnb',
//   password: null,
//   port: 5433,
// });

// // pool.connect(err => {
// //   if (err) {
// //     console.log('error connecting to postgres', err.stack);
// //   } else {
// //     console.log('connected to postgres');
// //   }
// // });

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

// module.exports = pool;