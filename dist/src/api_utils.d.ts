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
 * @param {Object} WS_Packet
 */
export function socketSend(socket: WebSocket, WS_Packet: any): void;
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
export function analyzePacket(message_buffer: ArrayBuffer | string): string;
export function messageTeleGetSystemWorkingState_TEST(): any;
/**
 * Create Encoded Packet for the command messageTeleGetSystemWorkingState
 * @returns {Uint8Array}
 */
export function messageTeleGetSystemWorkingState(): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_SYSTEM_SET_TIME
 * @returns {Uint8Array}
 */
export function messageSetTime(): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_SYSTEM_SET_TIME_ZONE
 * @param {string} timezone
 * @returns {Uint8Array}
 */
export function messageSetTimezone(timezone: string): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_ASTRO_START_CALIBRATION
 * @returns {Uint8Array}
 */
export function messageAstroStartCalibration(): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CALIBRATION
 * @returns {Uint8Array}
 */
export function messageAstroStopCalibration(): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_ASTRO_START_GOTO_DSO
 * @param {number} ra Right Ascension
 * @param {number} dec Declination
 * @param {string} target_name
 * @returns {Uint8Array}
 */
export function messageAstroStartGotoDso(ra: number, dec: number, target_name: string): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_ASTRO_START_GOTO_SOLAR_SYSTEM
 * @param {number} index SolarSystemTargetNumber
 * @param {number} lon Longitude
 * @param {number} lat Lattitude
 * @param {string} targetName
 * @returns {Uint8Array}
 */
export function messageAstroStartGotoSolarSystem(index: number, lon: number, lat: number, targetName: string): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_ASTRO_STOP_GOTO
 * @returns {Uint8Array}
 */
export function messageAstroStopGoto(): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_RGB_POWER_POWER_DOWN
 * @returns {Uint8Array}
 */
export function messageRgbPowerDown(): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_RGB_POWER_REBOOT
 * @returns {Uint8Array}
 */
export function messageRgbPowerReboot(): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_CAMERA_TELE_OPEN_CAMERA
 * @param {boolean} binning ;
 * @returns {Uint8Array}
 */
export function messageCameraTeleOpenCamera(binning?: boolean): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_CAMERA_TELE_CLOSE_CAMERA
 * @returns {Uint8Array}
 */
export function messageCameraTeleCloseCamera(): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_OPEN_CAMERA
 * @returns {Uint8Array}
 */
export function messageCameraWideOpenCamera(): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_CLOSE_CAMERA
 * @returns {Uint8Array}
 */
export function messageCameraWideCloseCamera(): Uint8Array;
export const Dwarfii_Api: any;
export class ping_dwarf {
    constructor(socket: any);
    pingInterval: number;
    ws: any;
    ping(): void;
    timoutId: NodeJS.Timeout;
    close(): void;
}
//# sourceMappingURL=api_utils.d.ts.map