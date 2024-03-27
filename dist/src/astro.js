/** @module astro */
// Import the generated protobuf module
import $root from "./protobuf/protobuf.js";
const Dwarfii_Api = $root;
import { createPacket } from "./api_utils.js";
import { cmdMapping } from "./cmd_mapping.js";
/*** ---------------------------------------------- ***/
/*** ---------------- MODULE ASTRO ---------------- ***/
/*** ---------------------------------------------- ***/
/**
 * 3.10.2 Start calibration
 * Create Encoded Packet for the command CMD_ASTRO_START_CALIBRATION
 * @returns {Uint8Array}
 */
export function messageAstroStartCalibration() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_CALIBRATION;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
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
 * 3.10.3 Stop calibration
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CALIBRATION
 * @returns {Uint8Array}
 */
export function messageAstroStopCalibration() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_CALIBRATION;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
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
 * 3.10.4 Start GOTO and track deep space objects
 * Create Encoded Packet for the command CMD_ASTRO_START_GOTO_DSO
 * @param {number} ra Right Ascension
 * @param {number} dec Declination
 * @param {string} target_name
 * @returns {Uint8Array}
 */
export function messageAstroStartGotoDso(ra, dec, target_name) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_GOTO_DSO;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({
        ra: ra,
        dec: dec,
        targetName: target_name,
    });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.10.5 Start GOTO and track solar system targets
 * Create Encoded Packet for the command CMD_ASTRO_START_GOTO_SOLAR_SYSTEM
 * @param {number} index SolarSystemTargetNumber
 * @param {number} lon Longitude
 * @param {number} lat Lattitude
 * @param {string} targetName
 * @returns {Uint8Array}
 */
export function messageAstroStartGotoSolarSystem(index, lon, lat, targetName) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_GOTO_SOLAR_SYSTEM;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({
        index: index,
        lon: lon,
        lat: lat,
        targetName: targetName,
    });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.10.6 Stop GOTO
 * Create Encoded Packet for the command CMD_ASTRO_STOP_GOTO
 * @returns {Uint8Array}
 */
export function messageAstroStopGoto() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_GOTO;
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
 * 3.10.7 Start Sun track & & Moon track
 * Create Encoded Packet for the command CMD_ASTRO_START_TRACK_SPECIAL_TARGET
 * @returns {Uint8Array}
 */
export function messageAstroStartTrackSpecialTarget(index, lon, lat) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_TRACK_SPECIAL_TARGET;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({
        index: index,
        lon: lon,
        lat: lat,
    });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.10.8 Stop sun and moon tracking
 * Create Encoded Packet for the command CMD_ASTRO_STOP_TRACK_SPECIAL_TARGET
 * @returns {Uint8Array}
 */
export function messageAstroStopTrackSpecialTarget() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_TRACK_SPECIAL_TARGET;
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
 * 3.10.9 Start stack
 * Create Encoded Packet for the command CMD_ASTRO_START_CAPTURE_RAW_LIVE_STACKING
 * @returns {Uint8Array}
 */
export function messageAstroStartCaptureRawLiveStacking() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_CAPTURE_RAW_LIVE_STACKING;
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
 * 3.10.10 stop stack
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CAPTURE_RAW_LIVE_STACKING
 * @returns {Uint8Array}
 */
export function messageAstroStopCaptureRawLiveStacking() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_CAPTURE_RAW_LIVE_STACKING;
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
 * 3.10.11 Inquire about the dark field that has been shot
 * Create Encoded Packet for the command CMD_ASTRO_CHECK_GOT_DARK
 * @returns {Uint8Array}
 */
export function messageAstroCheckGotDark() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_CHECK_GOT_DARK;
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
 * 3.10.12 Start shooting dark scenes
 * Create Encoded Packet for the command CMD_ASTRO_START_CAPTURE_RAW_DARK
 * @param {number} reshoot // Whether to reshoot, 0: No; 1: Remake
 * @returns {Uint8Array}
 */
export function messageAstroStartCaptureRawDark(reshoot) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_CAPTURE_RAW_DARK;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain classname depending of the command
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({ reshoot: reshoot });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.10.13 Stop shooting dark scenes
 * Create Encoded Packet for the command CMD_ASTRO_STOP_CAPTURE_RAW_DARK
 * @returns {Uint8Array}
 */
export function messageAstroStopCaptureRawDark() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_STOP_CAPTURE_RAW_DARK;
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
 * 3.10.14 GO LIVE interface
 * Create Encoded Packet for the command CMD_ASTRO_GO_LIVE
 * @returns {Uint8Array}
 */
export function messageAstroGoLive() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_ASTRO;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_ASTRO_GO_LIVE;
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
