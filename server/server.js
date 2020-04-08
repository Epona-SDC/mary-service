const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { Host, Area } = require('./models/Schema.js');

const port = 3004;
const app = express();
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(cors());
app.use(bodyParser.json());


app.get('/area', function(req, res) {
  Area.find(req.query, (err, arr) => res.send(arr));
});

app.get('/host', function(req, res) {
  Host.find(req.query, (err, arr) => res.send(arr));
});

// app.get('/app.js', cors(), function (req, res) {
//   res.sendFile(path.join(__dirname, '../public/bundle.js'))
// });

app.get('/zip', cors(), function (req, res) {
  Host.find({}, 'zip', (err, data) => res.send(data));
});
//GET /read host data by listingId
app.get('/host/:id', (req, res) => {
  Host.find({listingId: req.params.id})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error('ERROR, listing does not exist');
      res.status(404).end();
    });

});

//need to rework the listingNumber
let listingNumber = 101;
//POST create a new record to the db
app.post('/host', (req, res) => {
  let doc = new Host({
    listingId: listingNumber,
    zip: req.body.zip,
    name: req.body.name,
    body: req.body.body,
    interaction: req.body.interaction,
    superhost: 'Superhost',
    verified: 'Verified',
    rules: {
      checkin: '12AM - 3PM',
      checkout: '10AM',
      body: 'A bunch of rules'
    },
    location: {
      body: 'A description',
      gettingAround: 'A car is recommended'
    }
  });
  Host.create(doc)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.error('error posting document to db', err);
      res.send(500, 'try again later');
    });
  listingNumber++;
});

//DELETE a record by id
app.delete('/host/:id', (req, res) => {
  Host.findByIdAndDelete(req.params.id)
    .then(result =>
      res.status(200).send(`deleted host number ${req.params.id}`)
    )
    .catch(err => {
      console.error('Error deleting record', err);
      res.status(500).send('try again');
    });
});

//PUT update a record to change rules
app.put('/host/:id', (req, res) => {
  let change = 'new Name';
  Host.findByIdAndUpdate(req.params.id, {name: change}, {new: true})
    .then(result => res.status(200).send(result))
    .catch(err => {
      res.status(500).send(err);
    });

});


app.listen(port, () => console.log(`mary's app listening on port ${port}!`));