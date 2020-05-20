'use strict';
const io = require('socket.io');
const server = io(3001);

server.on('connection', (socket) => {
  console.log('socket connection api', socket.id);
  socket.on('delivery-order', (payload) => {
    console.log('order saved in the queue', payload);
    socket.emit('flowerOrder-queued', payload);
  });
});
