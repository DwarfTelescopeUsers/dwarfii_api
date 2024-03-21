/** @module focus */
// Import the generated protobuf module
import $root from "./protobuf/protobuf.js";
const Dwarfii_Api = $root;
import { createPacket } from "./api_utils.js";
import { cmdMapping } from "./cmd_mapping.js";

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
export function messageFocusAutoFocus(mode, center_x, center_y) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_FOCUS;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_FOCUS_AUTO_FOCUS;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    mode: mode,
    centerX: center_x,
    centerY: center_y,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * Create Encoded Packet for the command CMD_FOCUS_START_ASTRO_AUTO_FOCUS
 * 3.8.4 Start astronomical autofocus
 * @param {number} mode ; 0: slow focus; 1: fast focus
 * @returns {Uint8Array}
 */
export function messageFocusStartAstroAutoFocus(mode) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_FOCUS;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_FOCUS_START_ASTRO_AUTO_FOCUS;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({ mode: mode });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.8.5 Stop astronomical autofocus
 * Create Encoded Packet for the command CMD_FOCUS_STOP_ASTRO_AUTO_FOCUS
 * @returns {Uint8Array}
 */
export function messageFocusStopAstroAutoFocus() {
  let module_id = Dwarfii_Api.ModuleId.MODULE_FOCUS;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_FOCUS_STOP_ASTRO_AUTO_FOCUS;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.8.6 Manual single-step focusing
 * Create Encoded Packet for the command CMD_FOCUS_MANUAL_SINGLE_STEP_FOCUS
 * @param {number} direction //Focus direction 0: far focus 1: near focus ;
 * @returns {Uint8Array}
 */
export function messageFocusManualSingleStepFocus(direction) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_FOCUS;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_FOCUS_MANUAL_SINGLE_STEP_FOCUS;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({ direction: direction });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.8.7 Start manual continuous focus
 * Create Encoded Packet for the command CMD_FOCUS_START_MANUAL_CONTINU_FOCUS
 * @param {number} direction //Focus direction 0: far focus 1: near focus ;
 * @returns {Uint8Array}
 */
export function messageFocusStartManualContinuFocus(direction) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_FOCUS;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_FOCUS_START_MANUAL_CONTINU_FOCUS;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({ direction: direction });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
/**
 * 3.8.8 Stop manual continuous focus
 * Create Encoded Packet for the command CMD_FOCUS_STOP_MANUAL_CONTINU_FOCUS
 * @returns {Uint8Array}
 */
export function messageFocusStopManualContinuFocus(binning = false) {
  let module_id = Dwarfii_Api.ModuleId.MODULE_FOCUS;
  let interface_id = Dwarfii_Api.DwarfCMD.CMD_FOCUS_STOP_MANUAL_CONTINU_FOCUS;
  let type_id = Dwarfii_Api.MessageTypeId.TYPE_REQUEST;
  // Obtain classname depending of the command
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({});
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacket(message, class_message, module_id, interface_id, type_id);
}
