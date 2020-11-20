const express = require('express');
const app = express();
const path = require('path');
const port = 3005;
const bodyParser = require('body-parser');
const database = require('./database/db.js');



app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//
app.get('/api/campsites/:propertyId', (req, res) => {
  let id = req.params.propertyId;
  let queryStr = `SELECT * FROM campsites WHERE propertyId = ${id}`;
  database.query(queryStr, function(err, results) {
    res.send(results);
  });
});


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
  });
}

//added for jest?
module.exports = app;