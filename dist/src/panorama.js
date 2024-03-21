/** @module panorama */
// Import the generated protobuf module
import $root from "./protobuf/protobuf.js";
const Dwarfii_Api = $root;
import { createPacket } from "./api_utils.js";
import { cmdMapping } from "./cmd_mapping.js";
/*** ------------------------------------------------ ***/
/*** ---------------- MODULE PANORAMA---------------- ***/
/*** ------------------------------------------------ ***/
/**
 * 3.15.3 Start Panorama
 * Create Encoded Packet for the command CMD_PANORAMA_START_GRID
 * @param {number} rows ; // number of rows
 * @param {number} cols ; // number of cols
 * @returns {Uint8Array}
 */
export function messagePanoramaStartGrid(rows, cols) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_PANORAMA;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_PANORAMA_START_GRID;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({ rows: rows, cols: cols });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.15.4 Stop Panorama
 * Create Encoded Packet for the command CMD_PANORAMA_STOP
 * @returns {Uint8Array}
 */
export function messagePanoramaStop() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_PANORAMA;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_PANORAMA_STOP;
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
