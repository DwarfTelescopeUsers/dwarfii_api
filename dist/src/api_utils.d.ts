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
export function test_apiV2(socket: any): void;
/**
 * Execute socket's send command
 * @param {WebSocket} socket
 * @param {Object} WS_Packet
 */
export function socketSend(socket: WebSocket, WS_Packet: any): void;
export function decodePacket(WS_Packet: any, classDecode: any): any;
export function messageTeleGetSystemWorkingStat(): any;
export function createPacket(message_buffer: any, module_id: any, interface_id: any, type_id: any): any;
export function analysePacket(message_buffer: any): number;
//# sourceMappingURL=api_utils.d.ts.map