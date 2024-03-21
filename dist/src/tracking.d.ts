/*** --------------------------------------------- ***/
/*** ---------------- MODULE TRACK---------------- ***/
/*** --------------------------------------------- ***/
/**
 * 3.14.3 Started tracking
 * Create Encoded Packet for the command CMD_TRACK_START_TRACK
 * @param {number} x ; //x coordinate of the upper left point of the target box
 * @param {number} y ; // The y coordinate of the upper left point of the target box
 * @param {number} w ; // width of the target box
 * @param {number} h ; //The length of the target box
 * @returns {Uint8Array}
 */
export function messageTrackStartTrack(x: number, y: number, w: number, h: number): Uint8Array;
/**
 * 3.14.4 Stop tracking
 * Create Encoded Packet for the command CMD_TRACK_STOP_TRACK
 * @returns {Uint8Array}
 */
export function messageTrackStopTrack(): Uint8Array;
//# sourceMappingURL=tracking.d.ts.map