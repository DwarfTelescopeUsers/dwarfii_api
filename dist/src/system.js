/** @module system */
// Import the generated protobuf module
import $root from "./protobuf/protobuf.js";
const Dwarfii_Api = $root;
import { createPacket } from "./api_utils.js";
import { cmdMapping } from "./cmd_mapping.js";
/*** ----------------------------------------------- ***/
/*** ---------------- MODULE SYSTEM ---------------- ***/
/*** ----------------------------------------------- ***/
/**
 * 3.11.3 Set the system time
 * Create Encoded Packet for the command CMD_SYSTEM_SET_TIME
 * @returns {Uint8Array}
 */
export function messageSystemSetTime() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_SYSTEM;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_SYSTEM_SET_TIME;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({
        timestamp: Math.floor(Date.now() / 1000),
    });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.11.4 Set the time zone
 * Create Encoded Packet for the command CMD_SYSTEM_SET_TIME_ZONE
 * @param {string} timezone
 * @returns {Uint8Array}
 */
export function messageSystemSetTimezone(timezone) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_SYSTEM;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_SYSTEM_SET_TIME_ZONE;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({ timezone: timezone });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.11.5 Set MTP mode
 * Create Encoded Packet for the command CMD_SYSTEM_SET_MTP_MODE
 * @param {number} mode //Can be omitted, default is on, cannot be closed
 * @returns {Uint8Array}
 */
export function messageSystemSetMtpMode(mode) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_SYSTEM;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_SYSTEM_SET_MTP_MODE;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({ mode: mode });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.11.6 Set CPU mode
 * Create Encoded Packet for the command CMD_SYSTEM_SET_CPU_MODE
 * @param {number} mode //0: Normal mode 1: Performance mode
 * @returns {Uint8Array}
 */
export function messageSystemSetCpuMode(mode) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_SYSTEM;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_SYSTEM_SET_CPU_MODE;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({ mode: mode });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
