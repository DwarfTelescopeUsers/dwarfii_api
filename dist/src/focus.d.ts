/*** ---------------------------------------------- ***/
/*** ---------------- MODULE_FOCUS ---------------- ***/
/*** ---------------------------------------------- ***/
/**
 * 3.8.3 Normal autofocus
 * Create Encoded Packet for the command CMD_FOCUS_AUTO_FOCUS
 * @param {number} mode ; //0: global focus 1: area focus
 * @param {number} center_x ; //Area focus x coordinates
 * @param {number} center_y ; //Area focus y coordinates
 * @returns {Uint8Array}
 */
export function messageFocusAutoFocus(mode: number, center_x: number, center_y: number): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_FOCUS_START_ASTRO_AUTO_FOCUS
 * 3.8.4 Start astronomical autofocus
 * @param {number} mode ; 0: slow focus; 1: fast focus
 * @returns {Uint8Array}
 */
export function messageFocusStartAstroAutoFocus(mode: number): Uint8Array;
/**
 * 3.8.5 Stop astronomical autofocus
 * Create Encoded Packet for the command CMD_FOCUS_STOP_ASTRO_AUTO_FOCUS
 * @returns {Uint8Array}
 */
export function messageFocusStopAstroAutoFocus(): Uint8Array;
/**
 * 3.8.6 Manual single-step focusing
 * Create Encoded Packet for the command CMD_FOCUS_MANUAL_SINGLE_STEP_FOCUS
 * @param {number} direction //Focus direction 0: far focus 1: near focus ;
 * @returns {Uint8Array}
 */
export function messageFocusManualSingleStepFocus(direction: number): Uint8Array;
/**
 * 3.8.7 Start manual continuous focus
 * Create Encoded Packet for the command CMD_FOCUS_START_MANUAL_CONTINU_FOCUS
 * @param {number} direction //Focus direction 0: far focus 1: near focus ;
 * @returns {Uint8Array}
 */
export function messageFocusStartManualContinuFocus(direction: number): Uint8Array;
/**
 * 3.8.8 Stop manual continuous focus
 * Create Encoded Packet for the command CMD_FOCUS_STOP_MANUAL_CONTINU_FOCUS
 * @returns {Uint8Array}
 */
export function messageFocusStopManualContinuFocus(binning?: boolean): Uint8Array;
//# sourceMappingURL=focus.d.ts.map