/** Set clientID value if need : defaut is "0000DAF2-0000-1000-8000-00805F9B34FB"
 * @param {string} clientID
 * @returns {boolean}
 */
export function setDwarfClientID(clientID: string): boolean;
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
 * Execute Decoding Received Packet from the Dwarf II
 * @param {Uint8Array} WS_Packet
 * @param {Object} classDecode Class of Message depending on the command
 * @returns {Object}
 */
export function decodePacket(WS_Packet: Uint8Array, classDecode: any): any;
/**
 * Generic Create Encoded Packet Function
 * @param {Object} message
 * @param {Object} class_message
 * @param {number} module_id
 * @param {number} interface_id instruction
 * @param {number} type_id Message type
 * @returns {Uint8Array}
 */
export function createPacket(message: any, class_message: any, module_id: number, interface_id: number, type_id: number): Uint8Array;
/**
 * Generic Analysing Encoded Received Packet Function
 * @param {ArrayBuffer|string} message_buffer Encoded Message Buffer
 * @returns {string}
 */
export function analyzePacket(message_buffer: ArrayBuffer | string, input_data_log?: boolean): string;
export const Dwarfii_Api: any;
//# sourceMappingURL=api_utils.d.ts.map