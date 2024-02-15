/*** ---------------------------------------------- ***/
/*** ---------------- MODULE ASTRO ---------------- ***/
/*** ---------------------------------------------- ***/
/**
 * 3.10.2 Start calibration
 * Create Encoded Packet for the command CMD_ASTRO_START_CALIBRATION
 * @returns {Uint8Array}
 */
export function messageAstroStartCalibration(): Uint8Array;
/**
 * 3.10.3 Stop calibration
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CALIBRATION
 * @returns {Uint8Array}
 */
export function messageAstroStopCalibration(): Uint8Array;
/**
 * 3.10.4 Start GOTO and track deep space objects
 * Create Encoded Packet for the command CMD_ASTRO_START_GOTO_DSO
 * @param {number} ra Right Ascension
 * @param {number} dec Declination
 * @param {string} target_name
 * @returns {Uint8Array}
 */
export function messageAstroStartGotoDso(ra: number, dec: number, target_name: string): Uint8Array;
/**
 * 3.10.5 Start GOTO and track solar system targets
 * Create Encoded Packet for the command CMD_ASTRO_START_GOTO_SOLAR_SYSTEM
 * @param {number} index SolarSystemTargetNumber
 * @param {number} lon Longitude
 * @param {number} lat Lattitude
 * @param {string} targetName
 * @returns {Uint8Array}
 */
export function messageAstroStartGotoSolarSystem(index: number, lon: number, lat: number, targetName: string): Uint8Array;
/**
 * 3.10.6 Stop GOTO
 * Create Encoded Packet for the command CMD_ASTRO_STOP_GOTO
 * @returns {Uint8Array}
 */
export function messageAstroStopGoto(): Uint8Array;
/**
 * 3.10.7 Start Sun track & & Moon track
 * Create Encoded Packet for the command CMD_ASTRO_START_TRACK_SPECIAL_TARGET
 * @returns {Uint8Array}
 */
export function messageAstroStartTrackSpecialTarget(index: any, lon: any, lat: any): Uint8Array;
/**
 * 3.10.8 Stop sun and moon tracking
 * Create Encoded Packet for the command CMD_ASTRO_STOP_TRACK_SPECIAL_TARGET
 * @returns {Uint8Array}
 */
export function messageAstroStopTrackSpecialTarget(): Uint8Array;
/**
 * 3.10.9 Start stack
 * Create Encoded Packet for the command CMD_ASTRO_START_CAPTURE_RAW_LIVE_STACKING
 * @returns {Uint8Array}
 */
export function messageAstroStartCaptureRawLiveStacking(): Uint8Array;
/**
 * 3.10.10 stop stack
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CAPTURE_RAW_LIVE_STACKING
 * @returns {Uint8Array}
 */
export function messageAstroStopCaptureRawLiveStacking(): Uint8Array;
/**
 * 3.10.11 Inquire about the dark field that has been shot
 * Create Encoded Packet for the command CMD_ASTRO_CHECK_GOT_DARK
 * @returns {Uint8Array}
 */
export function messageAstroCheckGotDark(): Uint8Array;
/**
 * 3.10.12 Start shooting dark scenes
 * Create Encoded Packet for the command CMD_ASTRO_START_CAPTURE_RAW_DARK
 * @param {number} reshoot // Whether to reshoot, 0: No; 1: Remake
 * @returns {Uint8Array}
 */
export function messageAstroStartCaptureRawDark(reshoot: number): Uint8Array;
/**
 * 3.10.13 Stop shooting dark scenes
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CAPTURE_RAW_DARK
 * @returns {Uint8Array}
 */
export function messageAstroStopCaptureRawDark(): Uint8Array;
/**
 * 3.10.14 GO LIVE interface
 * Create Encoded Packet for the command CMD_ASTRO_GO_LIVE
 * @returns {Uint8Array}
 */
export function messageAstroGoLive(): Uint8Array;
//# sourceMappingURL=astro.d.ts.map