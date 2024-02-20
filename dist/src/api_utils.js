/** @module api_utils */
// Import the generated protobuf module
import $root from "./protobuf/protobuf.js";
export const Dwarfii_Api = $root;
import { cmdMapping, responseMapping, notifyMapping, notifyResponseMapping, getClassStateMappings, getClassModeMappings, } from "./cmd_mapping.js";
var DwarfClientID = "0000DAF2-0000-1000-8000-00805F9B34FB";
/** Set clientID value if need : defaut is "0000DAF2-0000-1000-8000-00805F9B34FB"
 * @param {string} clientID
 * @returns {boolean}
 */
export function setDwarfClientID(clientID) {
    // Check if the value is a string
    if (typeof clientID !== "string") {
        return false;
    }
    // Define a regular expression pattern for the specified UUID format
    const uuidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    // Test if the clientID matches the pattern
    if (uuidPattern.test(clientID)) {
        DwarfClientID = clientID;
        return true;
    }
    else {
        return false;
    }
}
/**
 * Returns the now UTC time as 'yyyy-mm-dd hh:mm:ss'
 * @returns {string}
 */
export function nowUTC() {
    return new Date().toISOString().replace("T", " ").slice(0, 19);
}
/**
 * Returns the now local time as 'yyyy-mm-dd hh:mm:ss'
 * @returns {string}
 */
export function nowLocal() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let pad = (num) => num.toString().padStart(2, "0");
    return `${year}-${pad(month)}-${pad(day)} ${pad(hour)}:${pad(minute)}:${pad(second)}`;
}
/**
 * Returns the now UTC time as 'yyyymmddhhmmss'
 * @returns {string|undefined}
 */
export function nowUTCFileName() {
    let date = new Date();
    let matches = date.toISOString().match(/\d+/g);
    if (matches) {
        return matches.join("");
    }
}
/**
 * Returns the now local time as 'yyyymmddhhmmss'
 * @returns {string|undefined}
 */
export function nowLocalFileName() {
    let matches = nowLocal().match(/\d+/g);
    if (matches) {
        return matches.join("");
    }
}
/**
 * Execute Decoding Received Packet from the Dwarf II
 * @param {Uint8Array} WS_Packet
 * @param {Object} classDecode Class of Message depending on the command
 * @returns {Object}
 */
export function decodePacket(WS_Packet, classDecode) {
    // eslint-disable-next-line no-undef
    // Obtain a message type
    let decoded = classDecode.decode(WS_Packet);
    console.log(`decoded data = ${JSON.stringify(decoded)}`);
    return decoded;
}
/**
 * Generic Create Encoded Packet Function
 * @param {Object} message
 * @param {Object} class_message
 * @param {number} module_id
 * @param {number} interface_id instruction
 * @param {number} type_id Message type
 * @returns {Uint8Array}
 */
export function createPacket(message, class_message, module_id, interface_id, type_id) {
    let major_version = Dwarfii_Api.WsMajorVersion.WS_MAJOR_VERSION_NUMBER;
    let minor_version = Dwarfii_Api.WsMinorVersion.WS_MINOR_VERSION_NUMBER;
    let device_id = 1; // DWARF II
    // message
    let message_buffer = undefined;
    message_buffer = class_message.encode(message).finish();
    console.debug(`message_buffer = ${Array.prototype.toString.call(message_buffer)}`);
    // payload
    let payload = {
        majorVersion: major_version,
        minorVersion: minor_version,
        deviceId: device_id,
        moduleId: module_id,
        cmd: interface_id,
        type: type_id,
        data: message_buffer,
        clientId: DwarfClientID,
    };
    console.log(`Packet payload = ${JSON.stringify(payload)}`);
    // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
    let errMsg = Dwarfii_Api.WsPacket.verify(payload);
    if (errMsg)
        throw Error(errMsg);
    // Create a new message
    let message_payload = Dwarfii_Api.WsPacket.create(payload); // or use .fromObject if conversion is necessary
    console.log(`Sending message_payload = ${JSON.stringify(message_payload)}`);
    // Encode Final Buffer
    let buffer = Dwarfii_Api.WsPacket.encode(message_payload).finish();
    console.debug(`buffer to Send = ${Array.prototype.toString.call(buffer)}`);
    // For Testing Only : try to decode it
    let result_buffer = analyzePacket(buffer, false);
    return buffer;
}
/**
 * Generic Analysing Encoded Received Packet Function
 * @param {ArrayBuffer|string} message_buffer Encoded Message Buffer
 * @returns {string}
 */
export function analyzePacket(message_buffer, input_data_log = true) {
    // Check if binary message_buffer
    if (message_buffer instanceof Uint8Array ||
        message_buffer instanceof ArrayBuffer) {
        // binary frame
        console.debug(" -> Binary data .....");
    }
    else {
        // text frame ping ?
        if (message_buffer !== undefined && message_buffer !== null) {
            console.debug(" -> Text data .....");
            console.debug(`Text Frame Received : ${message_buffer}`);
            return JSON.stringify({ text: message_buffer });
        }
        else {
            // Handle the case where message_buffer is undefined or null
            return JSON.stringify({ text: "" });
        }
    }
    // Get buffer received
    let data_rcv = new Uint8Array(message_buffer);
    console.debug(data_rcv);
    // Obtain a message type
    let decoded_message = {};
    let WsPacket_message = new Dwarfii_Api.WsPacket();
    let Response_message = {};
    let data_class = "";
    // Decoding buffer received
    WsPacket_message = decodePacket(data_rcv, Dwarfii_Api.WsPacket);
    console.debug(`receive message.majorVersion = ${WsPacket_message.majorVersion}`);
    console.debug(`receive message.minorVersion = ${WsPacket_message.minorVersion}`);
    console.debug(`receive message.deviceId = ${WsPacket_message.deviceId}`);
    console.debug(`receive message.moduleId = ${WsPacket_message.moduleId}`);
    console.debug(`=> ${Dwarfii_Api.ModuleId[WsPacket_message.moduleId]}`);
    console.debug(`receive message.cmd = ${WsPacket_message.cmd}`);
    console.debug(`=> ${Dwarfii_Api.DwarfCMD[WsPacket_message.cmd]}`);
    console.debug(`receive message.type = ${WsPacket_message.type}`);
    console.debug(`receive message.clientId = ${WsPacket_message.clientId}`);
    // Analyze Data : depends of cmd and type value of response packet.
    const cmdClass = cmdMapping[WsPacket_message.cmd];
    console.debug(`cmdClass: ${cmdClass}`);
    const responseClass = responseMapping[WsPacket_message.cmd];
    console.debug(`responseClass: ${responseClass}`);
    const notifyClass = notifyMapping[WsPacket_message.cmd];
    console.debug(`notifyClass: ${notifyClass}`);
    const notifyResponseClass = notifyResponseMapping[WsPacket_message.cmd];
    console.debug(`notifyResponseClass: ${notifyResponseClass}`);
    // Automatic Analyse Data
    if (WsPacket_message.type == 0) {
        // Request
        console.debug(`Decoding Request Frame => ${Dwarfii_Api.DwarfCMD[WsPacket_message.cmd]}`);
        // Get Response Class Object
        console.debug(`cmdClass: ${cmdClass}`);
        data_class = "Dwarfii_Api." + cmdClass;
        Response_message = eval(`new Dwarfii_Api.${cmdClass}()`);
        Response_message = decodePacket(WsPacket_message.data, eval(`Dwarfii_Api.${cmdClass}`));
        console.debug(`Not all Data!>> ${JSON.stringify(Response_message)}`);
    }
    else if (WsPacket_message.type == 1) {
        // Response
        console.debug(`Decoding Response Request Frame => ${Dwarfii_Api.DwarfCMD[WsPacket_message.cmd]}`);
        console.debug(`responseClass: ${responseClass}`);
        data_class = "Dwarfii_Api." + responseClass;
        Response_message = eval(`new Dwarfii_Api.${responseClass}()`);
        Response_message = decodePacket(WsPacket_message.data, eval(`Dwarfii_Api.${responseClass}`));
        console.debug(`Not all Data!>> ${JSON.stringify(Response_message)}`);
    }
    else if (WsPacket_message.type == 2) {
        // Notification
        console.debug(`Decoding Notification Frame => ${Dwarfii_Api.DwarfCMD[WsPacket_message.cmd]}`);
        console.debug(`notifyClass: ${notifyClass}`);
        data_class = "Dwarfii_Api." + notifyClass;
        Response_message = eval(`new Dwarfii_Api.${notifyClass}()`);
        Response_message = decodePacket(WsPacket_message.data, eval(`Dwarfii_Api.${notifyClass}`));
        console.debug(`Not all Data!>> ${JSON.stringify(Response_message)}`);
    }
    else if (WsPacket_message.type == 3) {
        // Notification Response
        console.debug(`Decoding Notification Response Frame => ${Dwarfii_Api.DwarfCMD[WsPacket_message.cmd]}`);
        console.debug(`notifyResponseClass: ${notifyResponseClass}`);
        data_class = "Dwarfii_Api." + notifyResponseClass;
        Response_message = eval(`new Dwarfii_Api.${notifyResponseClass}()`);
        Response_message = decodePacket(WsPacket_message.data, eval(`Dwarfii_Api.${notifyResponseClass}`));
        console.debug(`Not all Data!>> ${JSON.stringify(Response_message)}`);
    }
    // replace data value with new keys and also prototype key assigned by default.
    // escape toJSON property of object
    decoded_message = Object.assign({}, WsPacket_message);
    // Ensure 'data' property is defined
    decoded_message.data = {};
    decoded_message.data.class = data_class;
    for (let key in Response_message) {
        if (key !== "toJSON") {
            decoded_message.data[key] = Response_message[key];
        }
    }
    // add command in plain text
    let value = "";
    if (decoded_message.cmd) {
        decoded_message.data.cmdText = {};
        decoded_message.data.cmdText = Dwarfii_Api.DwarfCMD[decoded_message.cmd];
    }
    // add mode response code in plain text
    if (decoded_message.data.mode !== undefined) {
        value = getClassModeMappings(data_class, decoded_message.data.mode);
        if (value) {
            decoded_message.data.modeText = {};
            decoded_message.data.modeText = value;
        }
    }
    // add state response code in plain text
    if (decoded_message.data.state !== undefined) {
        value = getClassStateMappings(data_class, decoded_message.data.state);
        if (value) {
            decoded_message.data.stateText = {};
            decoded_message.data.stateText = value;
        }
        else {
            // Protobuf get the correct Txt value with toObject function except for 0
            value = JSON.parse(JSON.stringify(Response_message)).state;
            if (value && typeof value == "string") {
                decoded_message.data.stateText = {};
                decoded_message.data.stateText = value;
            }
        }
    }
    // add error code in plain text
    if (decoded_message.data.hasOwnProperty("code")) {
        decoded_message.data.errorTxt = {};
        if (Dwarfii_Api.DwarfErrorCode[decoded_message.data.code])
            decoded_message.data.errorTxt =
                Dwarfii_Api.DwarfErrorCode[decoded_message.data.code];
    }
    if (input_data_log)
        console.log(`End Analyze Input Packet >> ${JSON.stringify(decoded_message)}`);
    else
        console.log(`End Analyze Output Packet >> ${JSON.stringify(decoded_message)}`);
    return JSON.stringify(decoded_message);
}
