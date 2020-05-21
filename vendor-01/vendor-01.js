'use strict';
const sic = require('socket.io-client');
const flowerSocket = sic.connect('http://localhost:3001');

flowerSocket.on('queue', (payload) => {
  if (payload && payload.Id) {
    console.log('Thank you for delivering order'.payload.Id);
    flowerSocket.emit('received', flowerVendor);
  }
});
