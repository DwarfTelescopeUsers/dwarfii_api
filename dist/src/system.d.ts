/*** ----------------------------------------------- ***/
/*** ---------------- MODULE SYSTEM ---------------- ***/
/*** ----------------------------------------------- ***/
/**
 * 3.11.3 Set the system time
 * Create Encoded Packet for the command CMD_SYSTEM_SET_TIME
 * @returns {Uint8Array}
 */
export function messageSystemSetTime(): Uint8Array;
/**
 * 3.11.4 Set the time zone
 * Create Encoded Packet for the command CMD_SYSTEM_SET_TIME_ZONE
 * @param {string} timezone
 * @returns {Uint8Array}
 */
export function messageSystemSetTimezone(timezone: string): Uint8Array;
/**
 * 3.11.5 Set MTP mode
 * Create Encoded Packet for the command CMD_SYSTEM_SET_MTP_MODE
 * @param {number} mode //Can be omitted, default is on, cannot be closed
 * @returns {Uint8Array}
 */
export function messageSystemSetMtpMode(mode: number): Uint8Array;
/**
 * 3.11.6 Set CPU mode
 * Create Encoded Packet for the command CMD_SYSTEM_SET_CPU_MODE
 * @param {number} mode //0: Normal mode 1: Performance mode
 * @returns {Uint8Array}
 */
export function messageSystemSetCpuMode(mode: number): Uint8Array;
//# sourceMappingURL=system.d.ts.map