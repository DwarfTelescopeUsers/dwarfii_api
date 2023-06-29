/** @module api_utils */
/**
 * Returns the now time as 'yyyy-mm-dd hh:mm:ss'
 * @returns {string}
 */
export function now() {
    return new Date().toISOString().replace("T", " ").slice(0, 19);
}
/**
 * Returns the now time as 'yyyymmddhhmmss'
 * @returns {string|undefined}
 */
export function nowFileName() {
    let date = new Date();
    let matches = date.toISOString().match(/\d+/g);
    if (matches) {
        return matches.join("");
    }
}
/**
 * Execute socket's send command
 * @param {WebSocket} socket
 * @param {Object} command
 */
export function socketSend(socket, command) {
    // eslint-disable-next-line no-undef
    console.log("send", command);
    socket.send(JSON.stringify(command));
}
