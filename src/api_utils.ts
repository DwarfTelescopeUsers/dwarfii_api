export function now(): string {
  return new Date().toISOString().replace("T", " ").slice(0, 19);
}

export function socketSend(
  socket: WebSocket, // eslint-disable-line no-undef
  command: { [k: string]: any }
): void {
  // eslint-disable-next-line no-undef
  console.log("send", command);
  socket.send(JSON.stringify(command));
}
