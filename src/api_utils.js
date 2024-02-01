// Import the generated protobuf module
import $root from "./protobuf/protobuf.js";
/** @module api_utils */
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
  return `${year}-${pad(month)}-${pad(day)} ${pad(hour)}:${pad(minute)}:${pad(
    second
  )}`;
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
export function test_apiV2(socket) {
  let WS_Packet = messageTeleGetSystemWorkingStat();
  //if (WS_Packet){
  socketSend(socket, WS_Packet);
  //}
}
/**
 * Execute socket's send command
 * @param {WebSocket} socket
 * @param {Object} WS_Packet
 */
export function socketSend(socket, WS_Packet) {
  // eslint-disable-next-line no-undef
  socket.send(WS_Packet);
}
export function decodePacket(WS_Packet, classDecode) {
  // eslint-disable-next-line no-undef
  // Obtain a message type
  let decoded = classDecode.decode(WS_Packet);
  console.log(`decoded data = ${JSON.stringify(decoded)}`);
  return decoded;
}
export function messageTeleGetSystemWorkingStat() {
  let module_id = 1; // MODULE_TELEPHOTO
  let interface_id = 10039; // CMD_CAMERA_TELE_GET_SYSTEM_WORKING_STATE
  let type_id = 0; // REQUEST
  // Obtain a message type
  let message = $root.ReqGetSystemWorkingState.create({});
  console.log(`created message = ${JSON.stringify(message)}`);
  let buffer = $root.ReqGetSystemWorkingState.encode(message).finish();
  console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);
  let WsPacket_buffer = createPacket(buffer, module_id, interface_id, type_id);
  return WsPacket_buffer;
}
export function createPacket(message_buffer, module_id, interface_id, type_id) {
  let major_version = 1;
  let minor_version = 1;
  let device_id = 1; // DWARF II
  // payload
  let payload = {
    majorVersion: major_version,
    minorVersion: minor_version,
    deviceId: device_id,
    moduleId: module_id,
    cmd: interface_id,
    type: type_id,
    data: message_buffer,
    clientId: "0000DAF2-0000-1000-8000-00805F9B34FB",
  };
  console.log(`payload = ${JSON.stringify(payload)}`);
  // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
  let errMsg = $root.WsPacket.verify(payload);
  if (errMsg) throw Error(errMsg);
  // Create a new message
  let message = $root.WsPacket.create(payload); // or use .fromObject if conversion is necessary
  console.log(`sending message = ${JSON.stringify(message)}`);
  // Encode a message to an Uint8Array (browser) or Buffer (node)
  let buffer = $root.WsPacket.encode(message).finish();
  console.log(`sending buffer = ${Array.prototype.toString.call(buffer)}`);
  // ... do something with buffer
  return buffer;
}
export function analysePacket(message_buffer) {
  // Obtain a message type
  let return_code = -1;
  let WsPacket_message = new $root.WsPacket();
  WsPacket_message = decodePacket(message_buffer, $root.WsPacket);
  console.log(
    `receive message.majorVersion = ${WsPacket_message.majorVersion}`
  );
  console.log(
    `receive message.minorVersion = ${WsPacket_message.minorVersion}`
  );
  console.log(`receive message.deviceId = ${WsPacket_message.deviceId}`);
  console.log(`receive message.moduleId = ${WsPacket_message.moduleId}`);
  console.log(`=> ${$root.ModuleId[WsPacket_message.moduleId]}`);
  console.log(`receive message.cmd = ${WsPacket_message.cmd}`);
  console.log(`=> ${$root.AstroCMD[WsPacket_message.cmd]}`);

  console.log(`receive message.type = ${WsPacket_message.type}`);
  console.log(`receive message.clientId = ${WsPacket_message.clientId}`);

  // Analyse Data
  if (WsPacket_message.type == 0) console.log("Get Request Frame");
  if (WsPacket_message.type == 1) {
    console.log("Decoding Response Request Frame");
    let ComResponse_message = new $root.ComResponse();
    ComResponse_message = decodePacket(
      WsPacket_message.data,
      $root.ComResponse
    );
    console.log(`receive request response data >> ${ComResponse_message.code}`);
    console.log(`>> ${JSON.stringify(ComResponse_message)}`);
    return_code = ComResponse_message.code;
  }
  if (WsPacket_message.type == 2) {
    console.log("Decoding Notification Frame");
    let ResNotifyStateAstroGoto_message = new $root.ResNotifyStateAstroGoto();
    ResNotifyStateAstroGoto_message = decodePacket(
      WsPacket_message.data,
      $root.ResNotifyStateAstroGoto
    );
    console.log(
      `receive request response data >> ${ResNotifyStateAstroGoto_message.state}`
    );
    console.log(`>> ${JSON.stringify(ResNotifyStateAstroGoto_message)}`);
    return_code = ResNotifyStateAstroGoto_message.state;
  }
  if (WsPacket_message.type == 3) {
    console.log("Decoding Response Notification Frame");
    let ResNotifyStateAstroGoto_message = new $root.ResNotifyStateAstroGoto();
    ResNotifyStateAstroGoto_message = decodePacket(
      WsPacket_message.data,
      $root.ResNotifyStateAstroGoto
    );
    console.log(
      `receive request response data >> ${ResNotifyStateAstroGoto_message.state}`
    );
    console.log(`>> ${JSON.stringify(ResNotifyStateAstroGoto_message)}`);
    return_code = ResNotifyStateAstroGoto_message.state;
  }
  return return_code;
}
