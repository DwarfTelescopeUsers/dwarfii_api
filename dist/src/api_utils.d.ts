/** @module api_utils */
/**
 * Returns the now UTC time as 'yyyy-mm-dd hh:mm:ss'
 * @returns {string}
 */
export function nowUTC(): string;
/**
 * Returns the now local time as 'yyyy-mm-dd hh:mm:ss'
 * @returns {string}
 */
export function nowLocal(): string;
/**
 * Returns the now UTC time as 'yyyymmddhhmmss'
 * @returns {string|undefined}
 */
export function nowUTCFileName(): string | undefined;
/**
 * Returns the now local time as 'yyyymmddhhmmss'
 * @returns {string|undefined}
 */
export function nowLocalFileName(): string | undefined;
/**
 * Execute socket's send command
 * @param {WebSocket} socket
 * @param {Object} command
 */
export function socketSend(socket: WebSocket, command: any): void;
//# sourceMappingURL=api_utils.d.ts.map