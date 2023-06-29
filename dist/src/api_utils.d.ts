/** @module api_utils */
/**
 * Returns the now time as 'yyyy-mm-dd hh:mm:ss'
 * @returns {string}
 */
export function now(): string;
/**
 * Returns the now time as 'yyyymmddhhmmss'
 * @returns {string|undefined}
 */
export function nowFileName(): string | undefined;
/**
 * Execute socket's send command
 * @param {WebSocket} socket
 * @param {Object} command
 */
export function socketSend(socket: WebSocket, command: any): void;
//# sourceMappingURL=api_utils.d.ts.map