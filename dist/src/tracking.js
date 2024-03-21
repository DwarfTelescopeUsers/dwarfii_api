/** @module track */
// Import the generated protobuf module
import $root from "./protobuf/protobuf.js";
const Dwarfii_Api = $root;
import { createPacket } from "./api_utils.js";
import { cmdMapping } from "./cmd_mapping.js";
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
export function messageTrackStartTrack(x, y, w, h) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_TRACK;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_TRACK_START_TRACK;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({ x: x, y: y, w: w, h: h });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.14.4 Stop tracking
 * Create Encoded Packet for the command CMD_TRACK_STOP_TRACK
 * @returns {Uint8Array}
 */
export function messageTrackStopTrack() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_TRACK;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_TRACK_STOP_TRACK;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({});
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
