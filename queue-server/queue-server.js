'use strict';
const io = require('socket.io');
const server = io(3001);

let queue = {};
console.log('Message Queue Server up and running on 3001');
server.on('connection', (socket) => {
  console.log('connected ', socket.id);

  socket.on('delivered', (payload) => {
    console.log('order saved in the queue', payload);

    if (queue[payload.vendor]) {
      queue[payload.vendor].push([payload.vendor.id]);
      server.to(payload.vendor).emit('queue', queue[payload.vendor]);
    } else {
      queue[payload.vendor] = [payload.vendor];
      server.to(payload.vendor).emit('queue', queue[payload.vendor]);
    }
  });
});
