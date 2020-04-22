const {Pool, Client} = require('pg');
/*
const client = new Client({
 user: 'postgres',
 host: 'ec2-18-236-131-133.us-west-2.compute.amazonaws.com',
 database: 'myBnB',
  password: 'root',
  port: 5432,
});

client.connect(err => {
 if (err) {
  console.log('cannot connect to postgres', err.stack);
 } else {
  console.log('connected to postgres');
 }
});

module.exports = client;
*/
const pool = new Pool({
   user: 'postgres',
   host: 'ec2-54-186-245-180.us-west-2.compute.amazonaws.com',
   database: 'myBnB',
   password: 'root',
   port: 5432,
 });

 pool.connect(err => {
   if (err) {
     console.log('error connecting to postgres', err.stack);
   } else {
     console.log('connected to postgres with pool');
   }
 });

 module.exports = pool;
 
