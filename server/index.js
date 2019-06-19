const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const fs = require("fs");

const db = require('../database-mysql');

const app = express();
const PORT = 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const clientDist = path.join(__dirname, '/..', '/client/dist');
app.use(express.static(clientDist));



app.get('/', (req, res) => {
  console.log('%s %s %s', req.method, req.url, req.path)
  res.status(200).send('Not Supported');
});

app.get('/product/:id', (req, res) => {
  console.log('%s %s %s', req.method, req.url, req.path)
  console.log(req.params.id);
  res.status(200).send(JSON.stringify({
    id: 1,
    price: 6.99,
    expected_shipping: "one-day",
    free_delivery: true,
    available_quantity: 1,
    sold_by: "sold by vendorName",
    fulfilled_by: "fulfilled by vendorName",
    gift_wrap_available: true,
    user_zip: "78726"
  }));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
