// Test Code no need finally
/*
// Seems somtimes the encode function doesn't reture UintArray
function convert_to_binary_if_need(message_buffer) {
  // Check message_buffer as string encoded
  if (
    message_buffer instanceof Uint8Array ||
    message_buffer instanceof ArrayBuffer
  )
    return message_buffer;
  // Check message_buffer as string encoded
  if (typeof message_buffer === "string") {
    // Count the occurrences of commas
    const numberOfCommas = (message_buffer.match(/,/g) || []).length;

    if (numberOfCommas > 5) {
      console.log(" -> Convert Text data Found..as binary");

      // Split the string into an array of numeric strings
      const numericValues = message_buffer
        .toString()
        .split(",")
        .map(Number)
        .filter((value) => !isNaN(value));

      // Create a Uint8Array from the numeric values
      return new Uint8Array(numericValues);
    }
  }
  return message_buffer;
}

export function messageTeleGetSystemWorkingState_TEST() {
  let module_id = Dwarfii_Api.ModuleId["MODULE_CAMERA_TELE"];
  let interface_id =
    Dwarfii_Api.DwarfCMD["CMD_CAMERA_TELE_GET_SYSTEM_WORKING_STATE"];
  let type_id = Dwarfii_Api.MessageTypeId["TYPE_REQUEST"];
  // Obtain a message class
  const cmdClass = cmdMapping[interface_id];
  console.log(`cmdClass: ${cmdClass}`);
  let class_message = eval(`Dwarfii_Api.${cmdClass}`);
  // Encode message
  let message = Dwarfii_Api.ReqGetSystemWorkingState.create({});
  console.log(`created message => ${JSON.stringify(message)}`);
  // return encoded Message Packet
  let major_version = Dwarfii_Api.WsMajorVersion.WS_MAJOR_VERSION_NUMBER;
  let minor_version = Dwarfii_Api.WsMinorVersion.WS_MINOR_VERSION_NUMBER;
  let device_id = 1; // DWARF II
  // message
  let message_buffer =
    Dwarfii_Api.ReqGetSystemWorkingState.encode(message).finish();
  console.log(
    `message buffer => ${Array.prototype.toString.call(message_buffer)}`
  );
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
  let errMsg = Dwarfii_Api.WsPacket.verify(payload);
  console.log(`error = ${errMsg}`);
  if (errMsg) throw Error(errMsg);
  // Create a new message
  let message_payload = Dwarfii_Api.WsPacket.create(payload); // or use .fromObject if conversion is necessary
  console.log(`sending message_payload = ${JSON.stringify(message_payload)}`);
  // Encode a message to an Uint8Array (browser) or Buffer (node)
  let buffer = Dwarfii_Api.WsPacket.encode(message_payload).finish();
  console.log(`sending buffer = ${Array.prototype.toString.call(buffer)}`);
  // ... return the encoded buffer
  return buffer;
}

*/
