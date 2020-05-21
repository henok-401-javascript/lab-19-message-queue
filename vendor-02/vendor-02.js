'use strict';
const sic = require('socket.io-client');
const candySocket = sic.connect('http://localhost:3001');

candySocket.on('queue', (payload) => {
  if (payload && payload.Id) {
    console.log('Thank you for delivering order', payload.Id);
    candySocket.emit('received', 'candyVendor');
  }
});
