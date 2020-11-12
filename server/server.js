const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const database = require('./database/db.js');



app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/campsites', (req, res) => {
  let queryStr = 'SELECT * FROM campsites';
  database.query(queryStr, function(err, results) {
    console.log(results);
    res.send(results);
  });
});




app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});

