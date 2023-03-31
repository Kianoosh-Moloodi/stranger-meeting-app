const socket = io('/');
socket.on('connect', () => {
  console.log('connected to the socket.io server');
  console.log(socket.id);
});
