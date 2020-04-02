const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/db', { useNewUrlParser: true, useUnifiedTopology: true  });

module.exports = db;