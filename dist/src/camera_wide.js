/** @module camera_wide */
// Import the generated protobuf module
import $root from "./protobuf/protobuf.js";
const Dwarfii_Api = $root;
import { createPacket } from "./api_utils.js";
import { cmdMapping } from "./cmd_mapping.js";
/*** ---------------------------------------------------- ***/
/*** ---------------- MODULE CAMERA WIDE ---------------- ***/
/*** ---------------------------------------------------- ***/
/**
 * 3.9.3 Turn on the camera
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_OPEN_CAMERA
 * @returns {Uint8Array}
 */
export function messageCameraWideOpenCamera() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_OPEN_CAMERA;
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
 * 3.9.4 Turn off the camera
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_CLOSE_CAMERA
 * @returns {Uint8Array}
 */
export function messageCameraWideCloseCamera() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_CLOSE_CAMERA;
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
 * 3.9.5 Take photos
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_PHOTOGRAPH
 * @returns {Uint8Array}
 */
export function messageCameraWidePhotograph() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_PHOTOGRAPH;
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
 * 3.9.6 Start continuous shooting
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_BURST
 * @returns {Uint8Array}
 */
export function messageCameraWideStartBurst() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_BURST;
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
 * 3.9.7 Stop continuous shooting
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_STOP_BURST
 * @returns {Uint8Array}
 */
export function messageCameraWideStopBurst() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_STOP_BURST;
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
 * 3.9.8 Get all parameters
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_GET_ALL_PARAMS
 * @returns {Uint8Array}
 */
export function messageCameraWideGetAllParams() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_GET_ALL_PARAMS;
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
 * 3.9.9 Set exposure mode
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_EXP_MODE
 * @param {number} mode ; //0: Auto 1: Manual  ;
 * @returns {Uint8Array}
 */
export function messageCameraWideSetExpMode(mode) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_SET_EXP_MODE;
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
 * 3.9.10 Acquire exposure mode
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_GET_EXP_MODE
 * @returns {Uint8Array}
 */
export function messageCameraWideGetExpMode() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_GET_EXP_MODE;
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
 * 3.9.11 Set exposure value
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_EXP
 * @param {number} index  ;
 * @returns {Uint8Array}
 */
export function messageCameraWideSetExp(index) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_SET_EXP;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({ index: index });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.9.12 Get exposure value
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_GET_EXP
 * @returns {Uint8Array}
 */
export function messageCameraWideGetExp() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_GET_EXP;
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
 * 3.9.13 Set gain mode
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_GAIN_MODE
 * @param {number} mode ; //0: Auto 1: Manual  ;
 * @returns {Uint8Array}
 */
export function messageCameraWideSetGainMode(mode) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_SET_GAIN_MODE;
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
 * 3.9.14 Acquisition gain mode
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_GET_GAIN_MODE
 * @returns {Uint8Array}
 */
export function messageCameraWideGetGainMode() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_GET_GAIN_MODE;
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
 * 3.9.15 Set gain value
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_GAIN
 * @param {number} index  ;
 * @returns {Uint8Array}
 */
export function messageCameraWideSetGain(index) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_SET_GAIN;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({ index: index });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.9.16 Get gain value
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_GET_GAIN
 * @returns {Uint8Array}
 */
export function messageCameraWideGetGain() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_GET_GAIN;
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
 * 3.9.23 Start time-lapse photography
 * Not documented
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_START_TIMELAPSE_PHOTO
 * @returns {Uint8Array}
 */
export function messageCameraWideStartTimeLapsePhoto() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_START_TIMELAPSE_PHOTO;
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
 * 3.9.24 Stop time-lapse photography
 * Not documented
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_STOP_TIMELAPSE_PHOTO
 * @returns {Uint8Array}
 */
export function messageCameraWideStopTimeLapsePhoto() {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_STOP_TIMELAPSE_PHOTO;
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
 * 3.9.25 Set all camera parameters
 * Not documented
 * Create Encoded Packet for the command CMD_CAMERA_WIDE_SET_ALL_PARAMS
 * @param {number} exp_mode ; // 0: Auto 1: Manual
 * @param {number} exp_index ;
 * @param {number} gain_mode ;
 * @param {number} gain_index ;
 * @param {number} ircut_value ; //IRCUT value 0: CUT 1: PASS
 * @param {number} wb_mode ; //white balance mode 0: automatic 1: manual
 * @param {number} wb_index_type ; //White Balance Manual Mode Index Type: 0: Color Temperature Mode 1: Scene Mode
 * @param {number} wb_index ;
 * @param {number} brightness ;
 * @param {number} contrast ;
 * @param {number} hue ;
 * @param {number} saturation ;
 * @param {number} sharpness ;
 * @param {number} jpg_quality ;
 * @returns {Uint8Array}
 */
export function messageCameraWideSetAllParams(exp_mode, exp_index, gain_mode, gain_index, ircut_value, wb_mode, wb_index_type, wb_index, brightness, contrast, hue, saturation, sharpness, jpg_quality) {
    let module_id = Dwarfii_Api.ModuleId.MODULE_CAMERA_WIDE;
    let interface_id = Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_SET_ALL_PARAMS;
    let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
    // Obtain a message class
    const cmdClass = cmdMapping[interface_id];
    let class_message = eval(`Dwarfii_Api.${cmdClass}`);
    // Encode message
    let message = class_message.create({
        expMode: exp_mode,
        expIndex: exp_index,
        gainMode: gain_mode,
        gainIndex: gain_index,
        ircutValue: ircut_value,
        wbMode: wb_mode,
        wbIndex_type: wb_index_type,
        wbIndex: wb_index,
        brightness: brightness,
        contrast: contrast,
        hue: hue,
        saturation: saturation,
        sharpness: sharpness,
        jpgQuality: jpg_quality,
    });
    console.log(`class Message = ${cmdClass} created message = ${JSON.stringify(message)}`);
    // return encoded Message Packet
    return createPacket(message, class_message, module_id, interface_id, type_id);
}
