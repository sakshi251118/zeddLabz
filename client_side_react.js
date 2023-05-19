import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const MyComponent = () => {
  const [message, setMessage] = useState('');
  const socket = socketIOClient('http://localhost:3000'); // Connect to the Socket.IO server

  useEffect(() => {
    // Subscribe to 'message' events from the server
    socket.on('message', (data) => {
      setMessage(data);
    });

    // Clean up the event listener on component unmount
    return () => {
      socket.off('message');
    };
  }, [socket]);

  const sendMessage = () => {
    socket.emit('message', 'Hello from the client!');
  };

  return (
    <div>
      <p>Received message: {message}</p>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default MyComponent;
