/** @module rgp_power */
// Import the generated protobuf module
import $root from "./protobuf/protobuf.js";
const Dwarfii_Api = $root;
import { createPacket } from "./api_utils.js";
import { cmdMapping } from "./cmd_mapping.js";
/*** -------------------------------------------------- ***/
/*** ---------------- MODULE RGB POWER ---------------- ***/
/*** -------------------------------------------------- ***/
/**
 * 3.12.3 Turn on the ring light
 * Create Encoded Packet for the command CMD_RGB_POWER_OPEN_RGB
 * @returns {Uint8Array}
 */
export function messageRgbPowerOpenRGB() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_RGB_POWER;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_RGB_POWER_OPEN_RGB;
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
/**
 * 3.12.4 Turn off the ring light
 * Create Encoded Packet for the command CMD_RGB_POWER_CLOSE_RGB
 * @returns {Uint8Array}
 */
export function messageRgbPowerCloseRGB() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_RGB_POWER;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_RGB_POWER_CLOSE_RGB;
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
/**
 * 3.12.5 Turn on the battery indicator
 * Create Encoded Packet for the command CMD_RGB_POWER_POWERIND_ON
 * @returns {Uint8Array}
 */
export function messageRgbPowerPowerIndON() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_RGB_POWER;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_RGB_POWER_POWERIND_ON;
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
/**
 * 3.12.6 Turn off battery indicator
 * Create Encoded Packet for the command CMD_RGB_POWER_POWERIND_OFF
 * @returns {Uint8Array}
 */
export function messageRgbPowerPowerIndOFF() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_RGB_POWER;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_RGB_POWER_POWERIND_OFF;
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
/**
 * 3.12.7 Shut down
 * Create Encoded Packet for the command CMD_RGB_POWER_POWER_DOWN
 * @returns {Uint8Array}
 */
export function messageRgbPowerDown() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_RGB_POWER;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_RGB_POWER_POWER_DOWN;
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
/**
 * 3.12.8 Restart
 * Create Encoded Packet for the command CMD_RGB_POWER_REBOOT
 * @returns {Uint8Array}
 */
export function messageRgbPowerReboot() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_RGB_POWER;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_RGB_POWER_REBOOT;
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
