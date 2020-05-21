'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3001');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/', (req, res, next) => {
  res.status(200);
  res.send('Home page');
});

app.post('/delivery/:vendor/:order-id', (req, res, next) => {
  let order = {
    vendor: req.params.vendor,
    orderId: req.params.orderId,
  };
  // socket.on('flowerOrder-queued', (payload) => {
  //   res.status(200);
  //   res.send('delivery-order successfully queued', payload);
  // });

  socket.emit('delivered', order);
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});
