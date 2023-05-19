2.	const express = require('express');
3.	const http = require('http');
4.	const socketIO = require('socket.io');
5.	
6.	const app = express();
7.	const server = http.createServer(app);
8.	const io = socketIO(server);
9.	
10.	io.on('connection', (socket) => {
11.	  console.log('A client connected.');
12.	
13.	  socket.on('message', (data) => {
14.	    console.log('Received message:', data);
15.	    // Broadcast the received message to all connected clients
16.	    io.emit('message', data);
17.	  });
18.	
19.	  socket.on('disconnect', () => {
20.	    console.log('A client disconnected.');
21.	  });
22.	});
23.	
24.	server.listen(3000, () => {
25.	  console.log('Server listening on port 3000');
26.	});
