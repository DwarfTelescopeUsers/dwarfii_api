/** @module api_utils */
/**
 * Returns the now UTC time as 'yyyy-mm-dd hh:mm:ss'
 * @returns {string}
 */
export function nowUTC() {
    return new Date().toISOString().replace("T", " ").slice(0, 19);
}
/**
 * Returns the now local time as 'yyyy-mm-dd hh:mm:ss'
 * @returns {string}
 */
export function nowLocal() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let pad = (num) => num.toString().padStart(2, "0");
    return `${year}-${pad(month)}-${pad(day)} ${pad(hour)}:${pad(minute)}:${pad(second)}`;
}
/**
 * Returns the now UTC time as 'yyyymmddhhmmss'
 * @returns {string|undefined}
 */
export function nowUTCFileName() {
    let date = new Date();
    let matches = date.toISOString().match(/\d+/g);
    if (matches) {
        return matches.join("");
    }
}
/**
 * Returns the now local time as 'yyyymmddhhmmss'
 * @returns {string|undefined}
 */
export function nowLocalFileName() {
    let matches = nowLocal().match(/\d+/g);
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
    socket.send(JSON.stringify(command));
}
