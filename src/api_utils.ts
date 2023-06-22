export function now(): string {
  return new Date().toISOString().replace("T", " ").slice(0, 19);
}

export function nowFileName() {
  let date = new Date();
  let matches = date.toISOString().match(/\d+/g);
  if (matches) {
    return matches.join("");
  }
}

export function socketSend(
  socket: WebSocket, // eslint-disable-line no-undef
  command: { [k: string]: any }
): void {
  // eslint-disable-next-line no-undef
  console.log("send", command);
  socket.send(JSON.stringify(command));
}
