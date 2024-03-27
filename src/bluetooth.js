/** @module ble */
// Import the generated protobuf module
import $root from "./protobuf/protobuf.js";
const Dwarfii_Api = $root;
import { cmdMapping, responseMapping } from "./cmd_mapping.js";

/*** -------------------------------------------- ***/
/*** ---------------- MODULE_BLE ---------------- ***/
/*** -------------------------------------------- ***/
/**
 * Calculates the buffers crc16.
 *
 * @param {any} buffer the data buffer.
 * @return {number} the calculated crc16.
 *
 * Source: github.com/yaacov/node-modbus-serial
 */
function calculateCRC16(buffer) {
  var crc = 0xffff;
  var odd;

  for (var i = 0; i < buffer.length; i++) {
    crc = crc ^ buffer[i];

    for (var j = 0; j < 8; j++) {
      odd = crc & 0x0001;
      crc = crc >> 1;
      if (odd) {
        crc = crc ^ 0xa001;
      }
    }
  }

  return crc;
}
/**
 * GetArrayFromHexString
 * @param {string} data
 * @returns {array}
 */
function getArrayFromHexString(data) {
  let c = [];
  while (data.length) {
    let x = data.substr(0, 2);
    let z = parseInt(x, 16); // hex string to int
    z = (z + 0xff + 1) & 0xff; // twos complement
    c.push(z);
    data = data.substr(2);
  }
  return c;
}
/**
 * getDecimalToHexString
 * @param {number} number
 * @returns {string}
 */
function getDecimalToHex16bString(number) {
  let x = number + 0xffff + 1; // twos complement
  let result = x.toString(16); // to hex
  result = ("0000" + result).substr(-4);
  return result;
}
/*
export function testEncode() {
  let a = [128, -24, 255, 10];
  alert("Original is " + JSON.stringify(a)); // [3546,-24,99999,3322]

  let b = a
    .map(function (x) {
      x = x + 0xff + 1; // twos complement
      x = x.toString(16); // to hex
      x = ("00" + x).substr(-2); // zero-pad to 2-digits
      return x;
    })
    .join("");
  alert("Hex string " + b); // 00000ddaffffffe80001869f00000cfa

  c = [];
  while (b.length) {
    var x = b.substr(0, 2);
    x = parseInt(x, 16); // hex string to int
    x = (x + 0xff + 1) & 0xff; // twos complement
    c.push(x);
    b = b.substr(2);
  }
  alert("Converted back: " + JSON.stringify(c)); // [3546,-24,99999,3322]
}
*/
/**
 * Execute Decoding Received Bluetooth Packet from the Dwarf II
 * @param {Uint8Array} buffer
 * @param {Object} classDecode Class of Message depending on the command
 * @returns {Object}
 */
export function decodePacketBle(buffer, classDecode) {
  // eslint-disable-next-line no-undef
  // Obtain a message type
  let decoded = classDecode.decode(buffer);
  console.log(`decoded data = ${JSON.stringify(decoded)}`);
  return decoded;
}
/**
 * Generic Create Encoded Bluetooth Packet Function
 * @param {number} cmd
 * @param {Object} message
 * @param {Object} class_message
 * @returns {Uint8Array}
 */
export function createPacketBle(cmd, message, class_message) {
  let frame_header = 0xaa;
  let frame_end = 0x0d;
  let protocol_id = 0x01;
  let package_id = 0x00;
  let total_id = 0x01;
  let reserved1_id = 0x00;
  let reserved2_id = 0x00;
  // message
  let message_buffer = message;
  message_buffer = class_message.encode(message).finish();

  let buffer = [];

  // payload
  let payload_init = [
    frame_header,
    protocol_id,
    cmd,
    package_id,
    total_id,
    reserved1_id,
    reserved2_id,
  ];
  console.log(`Packet payload = ${JSON.stringify(payload_init)}`);
  buffer.push(...payload_init);

  // data lenght
  let data_length = message_buffer.length;
  let data_length_hexa = getDecimalToHex16bString(data_length);
  let data_length_array = getArrayFromHexString(data_length_hexa);
  console.log(`Data lenght = ${JSON.stringify(data_length_array)}`);
  buffer.push(...data_length_array);

  // data
  console.debug(
    `message_buffer = ${Array.prototype.toString.call(message_buffer)}`
  );
  buffer.push(...message_buffer);

  let CRC16 = calculateCRC16(buffer);

  let CRC16_array = getArrayFromHexString(getDecimalToHex16bString(CRC16));
  buffer.push(...CRC16_array);
  buffer.push(frame_end);

  console.debug(`buffer = ${Array.prototype.toString.call(buffer)}`);
  return new Uint8Array(buffer);
}
/**
 * Generic Analysing Encoded Received BLE Packet Function
 * @param {ArrayBuffer|string} message_buffer Encoded Message Buffer
 * @returns {string}
 */
export function analyzePacketBle(message_buffer, input_data = true) {
  // Check if binary message_buffer
  if (
    message_buffer instanceof Uint8Array ||
    message_buffer instanceof ArrayBuffer
  ) {
    // binary frame
    console.debug(" -> Binary data .....");
  } else {
    // Handle the case where message_buffer is undefined or null
    return JSON.stringify({ text: "" });
  }
  // Get buffer received
  let data_rcv = new Uint8Array(message_buffer);
  console.debug(data_rcv);
  // verify the data : 12 octets minimum
  if (data_rcv.length < 12) {
    console.error(
      `analyzePacketBle error Decoding not enought data received ! nb bytes: ${data_rcv.length}`
    );
    return "";
  }
  // Obtain a message type
  let decoded_message = {};
  let Response_message = {};
  let data_class = "";
  // Decoding buffer received
  let cmd = data_rcv[2];
  let data_length = data_rcv[7] * 256 + data_rcv[8];
  let data_buffer = new Uint8Array([]);
  if (data_length > 0) data_buffer = data_rcv.slice(9, 9 + data_length);
  console.debug(`receive message cmd = ${cmd}`);
  console.debug(`receive message data_length = ${data_length}`);

  // Analyze Data : depends of cmd
  const cmdClass = cmdMapping[cmd];
  console.debug(`cmdClass: ${cmdClass}`);
  const responseClass = responseMapping[cmd];
  console.debug(`responseClass: ${responseClass}`);

  // Automatic Analyse Data
  // Get Response Class Object
  if (input_data) {
    console.debug(`cmdClass: ${cmdClass}`);
    data_class = "Dwarfii_Api." + cmdClass;
    Response_message = eval(`new Dwarfii_Api.${cmdClass}()`);
    Response_message = decodePacketBle(
      data_buffer,
      eval(`Dwarfii_Api.${cmdClass}`)
    );
    console.debug(`Not all Data!>> ${JSON.stringify(Response_message)}`);
  } else {
    // Response
    console.debug(`responseClass: ${responseClass}`);
    data_class = "Dwarfii_Api." + responseClass;
    Response_message = eval(`new Dwarfii_Api.${responseClass}()`);
    Response_message = decodePacketBle(
      data_buffer,
      eval(`Dwarfii_Api.${responseClass}`)
    );
    console.debug(`Not all Data!>> ${JSON.stringify(Response_message)}`);
  }
  // replace data value with new keys and also prototype key assigned by default.
  // escape toJSON property of object
  decoded_message = Object.assign({}, Response_message);
  for (let key in Response_message) {
    if (key !== "toJSON") {
      decoded_message[key] = Response_message[key];
    }
  }
  console.log(`End Analyze Packet >> ${JSON.stringify(decoded_message)}`);

  return JSON.stringify(decoded_message);
}
/**
 * 3.1.1 Request data
 * Create Encoded Packet for the command Getconfig
 * CMD instruction, value is 1
 * @param {string} ble_psd ; //Default: "DWARF_12345678"
 * @returns {Uint8Array}
 */
export function messageGetconfig(ble_psd) {
  // Obtain classname depending of the command
  // Obtain a message class
  var cmd = 1;
  const cmdClass = cmdMapping[cmd];
  // let class_message = eval(`Dwarfii_Api.${cmdClass}`); // error in production!
  let class_message = Dwarfii_Api.ReqGetconfig;
  // Encode message
  let message = class_message.create({
    cmd: cmd,
    blePsd: ble_psd,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacketBle(cmd, message, class_message);
}
/**
 * 3.2 Configure WiFi AP mode
 * Create Encoded Packet for the command Configure WiFi AP mode
 * CMD instruction, value is 2
 * @param {Number} wifi_type ; // 0-5G 1-2.4G
 * @param {Number} auto_start ; // WiFi boot configuration 0 - boot not start 1 - boot start
 * @param {Number} country_list ; // 0- do not configure country_list 1- configure country_list
 * @param {string} country ; //
 * @param {string} ble_psd ; //Default: "DWARF_12345678"
 * @returns {Uint8Array}
 */
export function messageWifiAP(
  wifi_type,
  auto_start,
  country_list,
  country,
  ble_psd
) {
  // Obtain classname depending of the command
  // Obtain a message class
  var cmd = 2;
  const cmdClass = cmdMapping[cmd];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    cmd: cmd,
    wifiType: wifi_type,
    autoStart: auto_start,
    countryList: country_list,
    country: country,
    blePsd: ble_psd,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacketBle(cmd, message, class_message);
}
/**
 * 3.3 Configure WiFi STA mode
 * Create Encoded Packet for the command Configure WiFi AP mode
 * CMD instruction, value is 2
 * @param {Number} auto_start ; // WiFi boot configuration 0 - boot not start 1 - boot start
 * @param {string} ble_psd ; // Default: "DWARF_12345678"
 * @param {string} ssid ; //  WiFi name of router to connect
 * @param {string} psd ; // WiFi password of the router to be connected
 * @returns {Uint8Array}
 */
export function messageWifiSTA(auto_start, ble_psd, ssid, psd) {
  // Obtain classname depending of the command
  // Obtain a message class
  var cmd = 3;
  const cmdClass = cmdMapping[cmd];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    cmd: cmd,
    autoStart: auto_start,
    blePsd: ble_psd,
    ssid: ssid,
    psd: psd,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacketBle(cmd, message, class_message);
}
/**
 * 3.4 Reset Bluetooth WiFi
 * Create Encoded Packet for the command Reset Bluetooth WiFi
 * CMD instruction, value is 5
 * @returns {Uint8Array}
 */
export function messageResetWifi() {
  // Obtain classname depending of the command
  // Obtain a message class
  var cmd = 5;
  const cmdClass = cmdMapping[cmd];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    cmd: cmd,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacketBle(cmd, message, class_message);
}
/**
 * 3.5 Get WiFi list
 * Create Encoded Packet for the command Get WiFi list
 * CMD instruction, value is 6
 * @returns {Uint8Array}
 */
export function messageGetWifiList() {
  // Obtain classname depending of the command
  // Obtain a message class
  var cmd = 6;
  const cmdClass = cmdMapping[cmd];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    cmd: cmd,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacketBle(cmd, message, class_message);
}
/**
 * 3.6 Obtain device information
 * Create Encoded Packet for the command Get device information
 * CMD instruction, value is 7
 * @returns {Uint8Array}
 */
export function messageGetSystemInfo() {
  // Obtain classname depending of the command
  // Obtain a message class
  var cmd = 7;
  const cmdClass = cmdMapping[cmd];
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = class_message.create({
    cmd: cmd,
  });
  console.log(
    `class Message = ${cmdClass} created message = ${JSON.stringify(message)}`
  );
  // return encoded Message Packet
  return createPacketBle(cmd, message, class_message);
}
