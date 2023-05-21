export function now() {
  return new Date().toISOString().replace("T", " ").slice(0, 19);
}

export function socketSend(socket, command) {
  // eslint-disable-next-line no-undef
  console.log("send", command);
  socket.send(JSON.stringify(command));
}
