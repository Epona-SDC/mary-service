const nr = require('newrelic');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const client = require('../databases/connection.js');

const port = 3004;
const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(cors());
app.use(bodyParser.json());




//GET listing and host data based on listing id
app.get('/listing/:id', (req, res) => {
  const queryStr = `SELECT * FROM listings INNER JOIN hosts ON listings.host=hosts.id WHERE listings.id=${req.params.id}`;
  client.query(queryStr, (err, data) => {
    if (err) {
      console.error('server.js error getting listing by id', err.stack);
      res.sendStatus(500, 'try again later');
    } else {
      res.json(data.rows[0]);
    }
  });
});

//POST create a new listing
app.post('/listing', (req, res) => {
  const num = 10000011;
  const queryStr = `INSERT INTO listings (id, host, image, ratings, reviews, neighborhood, gettingaround, rules) values (${num}, 2, 'https://ep-sdc-images.s3-us-west-2.amazonaws.com/30.jpg', 3.9269188095712453, 470, 'Quisquam dolorem esse. Nihil sequi cupiditate laborum. Dolore incidunt unde rerum modi. Tenetur velit vitae sed quisquam nemo error iste. Error laboriosam non quidem cupiditate eum. Hic qui doloribus.', 'Officiis et beatae ex aut. Est ipsam enim labore iusto culpa harum architecto rem. Voluptatem quia laudantium.', 'Doloremque dignissimos animi ducimus quia soluta quo');`;
  client.query(queryStr, (err, result) => {
    if (err) {
      console.log('could not insert listing', err);
      res.sendStatus(500, 'please try again later');
    } else {
      res.status(201).send('inserted listing');
    }
  });
});

//DELETE listing by id
app.delete('/listing/:id', (req, res) => {
  const queryStr = `DELETE FROM listings WHERE id=${req.params.id}`;
  client.query(queryStr, (err) => {
    if (err) {
      res.status(500).send('try again later');
    } else {
      res.send('deleted listing');
    }
  });
});

//PUT update a listing to change image
app.put('/listing/:id', (req, res) => {
  //const {image} = req.body;
  //change set image=${image};
  const queryStr = `UPDATE listings SET image='https://ep-sdc-images.s3-us-west-2.amazonaws.com/30.jpg' WHERE id=${req.params.id}`;
  client.query(queryStr, (err) => {
    if (err) {
      res.status(500).send('try again later');
    } else {
      res.send('updated listing');
    }
  });
});


app.listen(port, () => console.log(`mary's app listening on port ${port}!`));