const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('./index.js');

const hostSchema = new Schema({
  _id: Number,
  listingId: Number,
  zip: String,
  name: String,
  image: String,
  city: String,
  state: String,
  body: String,
  interaction: String,
  superhost: String,
  verified: String,
  monthJoined: String,
  yearJoined: String,
  review: Number,
  rules: {
    checkin: String,
    checkout: String,
    body: String
  },
  location: {
    body: String,
    gettingAround: String
  }
});

const areaSchema = new Schema({
  listingId: Number,
  zip: String,
  properties: [
    {
      propType: String,
      image: String,
      ratings: Number,
      review: Number,
      description: String,
      cost: String
    }
  ],
  thingsToDo: [
    {
      image: String,
      thingsType: String,
      description: String,
      cost: String
    }
  ]
});

const Host = mongoose.model('host', hostSchema);
const Area = mongoose.model('areas', areaSchema);
module.exports.Host = Host;
module.exports.Area = Area;