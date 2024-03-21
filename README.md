# Dwarf II

Wrapper functions for Dwarf II (aka Dwarf 2) API V2.

Dwarf Lab's [API V2 documentation](https://tinyphoton.feishu.cn/docx/GBkcdldTIo3SrdxFJDscYVYDnvf?fbclid=IwAR0_Vypm8DPk1PPtwllptpWDZmxbCgi3NKVQKV8khDXIvnNay_o67AUgtq4).

[Documentation](https://stevejcl.github.io/dwarfii_api/) for this package.

## Install

```
npm install dwarfii_api
```

## Install for Javascript
Using this library in pure javascript is possible.
Use the dist_js repertory and follow the instructions in the file index.html

## Usage

The Dwarf API uses websockets with binary protobuf format. 

The URL of the websockets depends on if you use Dwarf wifi or if you use the Dwarf in STA mode.

Example of sending a Goto command.

```js
import { messageAstroStartGotoDso, WebSocketHandler } from "dwarfii_api";

// Create WebSocketHandler if need
const webSocketHandler = new WebSocketHandler(IPDwarf);

// define a customMessageHandler to handle the message in return send by the API
let goto_end_status = false;

const customMessageHandler = (txt_info, result_data) => {
  if ( result_data.cmd == Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_GOTO_DSO ) {
    if (result_data.data.code != Dwarfii_Api.DwarfErrorCode.OK) {
      console.error("Error GOTO : " + result_data.data.errorTxt);
      if (
        result_data.data.code ==
          Dwarfii_Api.DwarfErrorCode.CODE_ASTRO_GOTO_FAILED ||
        result_data.data.code ==
          Dwarfii_Api.DwarfErrorCode.CODE_ASTRO_FUNCTION_BUSY
      )
        goto_end_status = true;
    }
  } else if (
    !goto_end_status &&
    result_data.cmd == Dwarfii_Api.DwarfCMD.CMD_NOTIFY_STATE_ASTRO_GOTO
  ) {
      console.log(result_data.data.stateText);
    }
  } else if (
    !goto_end_status &&
    result_data.cmd == Dwarfii_Api.DwarfCMD.CMD_NOTIFY_STATE_ASTRO_TRACKING
  ) {
    if (
      result_data.data.state ==
        Dwarfii_Api.OperationState.OPERATION_STATE_RUNNING &&
      result_data.data.targetName == targetName
    ) {
        goto_end_status = true;
        console.info("Start Tracking");
      }
  } else {
    // other frame result
    console.log(txt_info + ": " + result_data);
    return;
  }
  // log frame result
  console.log(txt_info + ": " + result_data);
};


let txtInfoCommand = "Start Goto";

// create a packet message for the command, you can send a tabs of Packets also
let WS_Packet = messageAstroStartGotoDso(
  RA_number,
  declination_number,
  targetName
);

// prepre the messages to send
webSocketHandler.prepare(
  WS_Packet,
  txtInfoCommand,
  // Tab of commands to listen to, can be "*" for getting All received Data
  // the others are not sending back to customMessageHandler
  [
    Dwarfii_Api.DwarfCMD.CMD_ASTRO_START_GOTO_DSO,
    Dwarfii_Api.DwarfCMD.CMD_NOTIFY_STATE_ASTRO_GOTO,
    Dwarfii_Api.DwarfCMD.CMD_NOTIFY_STATE_ASTRO_TRACKING,
  ],
  customMessageHandler
);
// start sending and receiving
if (!webSocketHandler.run()) {
  console.error(" Can't launch Web Socket Run Action!");
}


