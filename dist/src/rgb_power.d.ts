/*** -------------------------------------------------- ***/
/*** ---------------- MODULE RGB POWER ---------------- ***/
/*** -------------------------------------------------- ***/
/**
 * 3.12.3 Turn on the ring light
 * Create Encoded Packet for the command CMD_RGB_POWER_OPEN_RGB
 * @returns {Uint8Array}
 */
export function messageRgbPowerOpenRGB(): Uint8Array;
/**
 * 3.12.4 Turn off the ring light
 * Create Encoded Packet for the command CMD_RGB_POWER_CLOSE_RGB
 * @returns {Uint8Array}
 */
export function messageRgbPowerCloseRGB(): Uint8Array;
/**
 * 3.12.5 Turn on the battery indicator
 * Create Encoded Packet for the command CMD_RGB_POWER_POWERIND_ON
 * @returns {Uint8Array}
 */
export function messageRgbPowerPowerIndON(): Uint8Array;
/**
 * 3.12.6 Turn off battery indicator
 * Create Encoded Packet for the command CMD_RGB_POWER_POWERIND_OFF
 * @returns {Uint8Array}
 */
export function messageRgbPowerPowerIndOFF(): Uint8Array;
/**
 * 3.12.7 Shut down
 * Create Encoded Packet for the command CMD_RGB_POWER_POWER_DOWN
 * @returns {Uint8Array}
 */
export function messageRgbPowerDown(): Uint8Array;
/**
 * 3.12.8 Restart
 * Create Encoded Packet for the command CMD_RGB_POWER_REBOOT
 * @returns {Uint8Array}
 */
export function messageRgbPowerReboot(): Uint8Array;
//# sourceMappingURL=rgb_power.d.ts.map