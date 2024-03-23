/** @module websocket_class */
/* eslint no-unused-vars: 0 */

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

import { wsURL } from "./api_codes.js";
import { analyzePacket } from "./api_utils.js";

class Queue {
  constructor(...elements) {
    // Initializing the queue with given arguments
    this.elements = [...elements];
  }
  // Proxying the push/shift methods
  push(...args) {
    return this.elements.push(...args);
  }
  shift(...args) {
    return this.elements.shift();
  }
  // Add some length utility methods
  get length() {
    return this.elements.length;
  }
  set length(length) {
    this.elements.length = length;
  }
}

/**
 * WebSocketHandler is the main interface to send messages to the Dwarf II via websocket
 * It will analyse all messages received by the Dwarf II and send the recieved messages to the caller
 * It's a singleton class
 * @class
 * @constructor
 * @public
 */
export class WebSocketHandler {
  static instance = undefined;
  socket = null;
  is_opened = false;

  IPDwarf = undefined;
  WS_Packet = {};

  isCallbackMessages = false;
  packetCallbackMessages = {};
  isCallbackErrors = false;
  packetCallbackErrors = {};
  isCallbackConnectStates = false;
  packetCallbackConnectStates = {};

  callbackReconnectFunction = undefined;

  /**
   * closeSocketTimer : Timer could be defined to manage a connection time of the dwarf that is too long
   */
  closeSocketTimer = undefined;

  /**
   * closeTimerHandler : function could be defined : to close the timeout timer.
   */
  closeTimerHandler = function () {};

  /**
   * onStopTimerHandler : function could be defined : this function will be called in case of error during connection
   */
  onStopTimerHandler = function () {};

  keep_connection = false;
  is_running = false;
  is_sending = false;
  is_receiving = false;
  is_stopping = false;
  is_buffered = false;
  sendingQueue = new Queue();

  is_pong_received = false;
  is_ping_stopped = true;
  signal_ping_stop = false;
  ping_interval = 10;
  nb_reconnect_default = 5;
  nb_reconnect = 5;

  /**
   * Create a link to the Api and set the IP address of the dwarf II to connect to
   * @param {string | undefined} IPDwarf ; Set the IP address of the dwarf II to connect to
   */
  constructor(IPDwarf) {
    if (IPDwarf) this.IPDwarf = IPDwarf;
    if (!WebSocketHandler.instance) {
      WebSocketHandler.instance = this;
      console.info("Creating a new WebSocketHandler with IP: ", IPDwarf);
    }
    return WebSocketHandler.instance;
  }

  /**
   * Set the IP address of the dwarf II to connect to
   * @param {string} IPDwarf ; Set the IP address of the dwarf II to connect to, force another one that was configured when calling the constructor.
   * @returns {Promise<void>}
   */
  async setNewIpDwarf(IPDwarf) {
    console.debug("websocket_class : setIpDwarf : ", IPDwarf);
    if (IPDwarf != this.IPDwarf) {
      console.debug(
        "websocket_class : new IP received, closing old one :",
        this.IPDwarf
      );
      this.close();
      await sleep(1000);
    }
    this.IPDwarf = IPDwarf;
    console.debug("websocket_class : new Ip : ", this.IPDwarf);
  }

  /**
   * Set the intervall of the build in Ping function defult is 10s
   * @param {number} IntervalInSecond ; in Seconds
   * @returns {void}
   */
  setPingInterval(IntervalInSecond) {
    if (IntervalInSecond) {
      this.ping_interval = IntervalInSecond;
    }
  }

  /**
   * Set the nb of times for trying to reconnect to the dwarf if the connection closes, default is 5.
   * @param {number} nbTimes ;
   * @returns {void}
   */
  setDefaultReconnect(nbTimes) {
    this.nb_reconnect_default = nbTimes;
  }

  /**
   * Verify the status of the connection with the Dwarf II
   * @returns {boolean} status of the connection
   */
  isConnected() {
    if (
      this.socket &&
      this.is_opened &&
      this.socket.readyState === WebSocket.OPEN
    )
      return true;
    else return false;
  }

  /**
   * Main function, to call after prepare function, send the message and start dialogue with the Dwarf II
   * @returns {Promise<boolean>} false if the IP has not been set or if old Socket can't be closed
   */
  async run() {
    // Check if ipDwarf is defined before calling wsURL
    if (!this.IPDwarf) {
      console.error("IPDwarf is undefined. Unable to create WebSocket.");
      return false;
    }

    console.debug("websocket_class : running function starting...");

    await sleep(10);
    this.keep_connection = false;

    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      console.log("Keep old Websocket opened");
      this.keep_connection = true;
    } else {
      if (this.socket && this.socket.readyState !== WebSocket.OPEN) {
        // Socket still hangs, hard close
        this.socket.close();
        console.log("Old Websocket force close");
        let nb = 10;
        while (
          nb &&
          this.socket &&
          this.socket.readyState !== WebSocket.CLOSED
        ) {
          await sleep(1000);
          nb = nb - 1;
          if (nb < 0) nb = 0;
        }
        if (
          nb == 0 &&
          this.socket &&
          this.socket.readyState != WebSocket.CLOSED
        ) {
          console.log("Can't close old Websocket!");
          return false;
        }
      }
    }

    if (this.keep_connection) {
      // Need Stopping Ping
      await this.wait_ping_stop();
      // Start manually no open event
      this.start();
    } else {
      // restarting
      // verify Stopping Ping
      await this.wait_ping_stop();
      this.is_stopping = false;
      this.is_opened = false;
      let new_socket = undefined;
      new_socket = new WebSocket(wsURL(this.IPDwarf));
      console.log("Open new Socket");

      this.socket = new_socket;
      console.debug("new socket created", new_socket);

      this.socket.onopen = () => {
        this.is_opened = true;

        // Socket Binary Mode
        this.socket.binaryType = "arraybuffer";

        console.debug(`websocket_class : open... on IP : ${this.IPDwarf}`);

        // Start on the open event
        this.start();
      };

      this.socket.onmessage = async (event) => {
        console.debug("websocket_class : onmessage function...");
        while (this.is_sending || this.is_buffered) {
          await sleep(10);
        }
        console.debug("websocket_class : onmessage function starting...");

        this.is_receiving = true;
        await this.handleMessage(event);
        this.is_receiving = false;

        console.debug("websocket_class : onmessage function ending...");
      };

      this.socket.onerror = (message) => {
        if (this.is_opened) {
          this.handleError(message);
        }
      };

      this.socket.onclose = async (message) => {
        if (this.is_opened) {
          await this.handleClose(message);
        }
        this.cleanup();
      };
    }
    console.debug("class instance :", this);

    return true;
  }

  start() {
    this.is_running = true;
    this.nb_reconnect = this.nb_reconnect_default;

    // Start ping command
    this.is_pong_received = true;
    this.pingDwarf();

    // start send function
    this.send();

    this.sendCallbackConnectStates(true);
  }

  /**
   * Prepare function : Define the message to send and the command to listen to and the callbacks functions
   * @param {Object|Object[]} WS_Packet ; Message or Array of Messages from the API to send to the Dwarf II
   * @param {string} senderId ; identifier of the sender
   * @param {string[]} expectedResponseCmd ; List of the Command Id to listen to, can be "*" to get all commands.
   * @param {function} callbackMessage ; Callback Fonction (const customMessageHandler = (txt_info:string, result_data:object)) to analyse reponses from the Dwarf II
   * @param {function} callbackConnectState ; Callback Fonction (const customStateHandler = (state)) to get the status result of the current connection of the Dwarf II
   * @param {function} callbackError ; Callback Fonction (const customErrorHandler = ()) called after an socket error.
   * @param {function} callbackReconnect ; Callback Fonction (const customReconnectHandler = ()) called after a socket reconnection.
   * @returns {Promise<void>}
   */
  async prepare(
    WS_Packet, // can be an array of Packets
    senderId,
    expectedResponseCmd = [],
    callbackMessage = function () {},
    callbackConnectState = function () {},
    callbackError = function () {},
    callbackReconnect = undefined
  ) {
    console.debug("websocket_class : prepare function...");

    while (this.is_sending || this.is_receiving) {
      await sleep(10);
    }

    console.debug("websocket_class : prepare function starting...");

    this.is_buffered = true;

    // Store the callback function and expected response types for later use
    if (senderId) {
      if (callbackMessage && typeof callbackMessage === "function") {
        if (!this.packetCallbackMessages[senderId]) {
          this.packetCallbackMessages[senderId] = {};
        }

        expectedResponseCmd.forEach((idCmd) => {
          console.log(` -> Prepare for  ${senderId} => ${idCmd}`);
          // empty the tab if exist : just one callback function per command
          this.packetCallbackMessages[senderId][idCmd] = [];
          this.packetCallbackMessages[senderId][idCmd].push(callbackMessage);
        });
      }

      if (callbackConnectState && typeof callbackConnectState === "function") {
        // empty the tab if exist : just one callback function per sender
        this.packetCallbackConnectStates[senderId] = [];

        this.packetCallbackConnectStates[senderId].push(callbackConnectState);
      }

      if (callbackError && typeof callbackError === "function") {
        // empty the tab if exist : just one callback function per sender
        this.packetCallbackErrors[senderId] = [];

        this.packetCallbackErrors[senderId].push(callbackError);
      }
      if (callbackReconnect && typeof callbackReconnect === "function") {
        // empty the tab if exist : just one callback Reconnect function
        this.callbackReconnectFunction = callbackReconnect;

        console.log(
          ` -> Add a callbackReconnect function => ${callbackReconnect}`
        );
      }
      this.verifyCallBacks();
    }

    if (Array.isArray(WS_Packet)) {
      console.log(` -> Prepare ${WS_Packet.length} packets for ${senderId}`);
      this.sendingQueue.push(...WS_Packet);
    } else {
      console.log(` -> Prepare one packet for ${senderId}`);
      this.sendingQueue.push(WS_Packet);
    }

    await sleep(50);

    this.is_buffered = false;

    console.debug("websocket_class : prepare function ending...");
  }

  async pingDwarf() {
    console.debug("websocket_class : init ping function...");

    this.is_ping_stopped = false;
    await sleep(10);

    while (!this.is_running) {
      await sleep(10);
    }

    console.debug("websocket_class : ping function...");
    console.debug("websocket_class : is_running...", this.is_running);
    console.debug("websocket_class : is_stopping...", this.is_stopping);
    console.debug(
      "websocket_class : signal_ping_stop...",
      this.signal_ping_stop
    );
    console.debug("websocket_class : is_stopping...", this.is_stopping);
    console.debug(
      "websocket_class : is_pong_received...",
      this.is_pong_received
    );

    this.is_sending = false;

    while (!this.is_stopping && !this.signal_ping_stop) {
      await sleep(100);

      if (!this.is_sending && this.is_pong_received && this.isConnected()) {
        console.debug("websocket_class : ping function starting...");
        this.is_sending = true;

        // Send Command:
        //this.socket.ping("");
        this.socket.send("ping");
        console.log("websocket_class : sending ping");
        this.is_sending = false;
        this.is_pong_received = false;

        console.debug("websocket_class : ping function waiting...");

        let interval = this.ping_interval;
        while (interval > 0 && !this.is_stopping && !this.signal_ping_stop) {
          await sleep(1000);
          interval = interval - 1;
        }
        console.debug("websocket_class : ping function stopping...");
      }
    }

    this.is_sending = false;
    this.is_ping_stopped = true;

    console.debug("websocket_class : ping function ending...");
  }

  async wait_ping_stop() {
    this.signal_ping_stop = true;
    while (!this.is_ping_stopped) await sleep(100);
    this.signal_ping_stop = false;
  }

  async send() {
    await sleep(250);

    while (!this.is_running) {
      await sleep(10);
    }

    console.debug("websocket_class : send function...");

    this.is_sending = false;

    while (!this.is_stopping) {
      await sleep(10);
      let lenQueue = this.sendingQueue.length;

      if (
        !this.is_buffered &&
        !this.is_sending &&
        this.sendingQueue.length > 0 &&
        this.isConnected()
      ) {
        console.debug("websocket_class : send function starting...");
        this.is_sending = true;

        this.WS_Packet = this.sendingQueue.shift();

        // Send Command:
        if (this.WS_Packet) {
          this.socket.send(this.WS_Packet);
          console.log(
            `websocket_class : sending buffer = ${Array.prototype.toString.call(
              this.WS_Packet
            )}`
          );
          await sleep(100);
        } else {
          console.error(
            `websocket_class : sending buffer empty : lenqueue = ${lenQueue}`
          );
        }
        this.is_sending = false;
        console.debug("websocket_class : send function stopping...");
      }
    }

    this.is_sending = false;

    console.debug("websocket_class : send function ending...");
  }

  stop(senderId) {
    this.deleteCallbacks(senderId);
  }

  deleteCallbacks(senderId = "") {
    console.debug(`deleteCallbacks for  : ${senderId}`);
    if (senderId) {
      if (this.packetCallbackMessages[senderId]) {
        this.packetCallbackMessages[senderId] = {};
      }
      if (this.packetCallbackConnectStates[senderId]) {
        this.packetCallbackConnectStates[senderId] = [];
        this.isCallbackConnectStates = false;
      }
      if (this.packetCallbackErrors[senderId]) {
        this.packetCallbackErrors[senderId] = [];
        this.isCallbackErrors = false;
      }
    } else {
      this.packetCallbackMessages = {};
      this.packetCallbackErrors = {};
      this.packetCallbackConnectStates = {};
      this.packetCallbackReconnect = [];
    }
    this.verifyCallBacks();
  }

  verifyCallBacks() {
    this.isCallbackMessages =
      Object.keys(this.packetCallbackMessages).length > 0;
    this.isCallbackConnectStates =
      Object.keys(this.packetCallbackConnectStates).length > 0;
    this.isCallbackErrors = Object.keys(this.packetCallbackErrors).length > 0;
  }

  sendCallbackConnectStates(state) {
    // Iterate over all stored callback functions
    Object.values(this.packetCallbackConnectStates).forEach(
      (callbacksConnectStates) => {
        console.log("Retrieve1 - Structure:", callbacksConnectStates);

        if (
          Array.isArray(callbacksConnectStates) &&
          callbacksConnectStates[0] &&
          typeof callbacksConnectStates[0] === "function"
        ) {
          // Call the callback function with the received data
          console.log(" -> Sending back data to callbackState....");
          callbacksConnectStates[0](state);
        }
      }
    );
  }

  sendCallbackErrors() {
    // Iterate over all stored callback functions
    Object.values(this.packetCallbackErrors).forEach((callbacksErrors) => {
      console.log("Retrieve2 - Structure:", callbacksErrors);

      if (
        Array.isArray(callbacksErrors) &&
        callbacksErrors[0] &&
        typeof callbacksErrors[0] === "function"
      ) {
        // Call the callback function with the received data
        console.log(" -> Sending back data to callbackError....");
        callbacksErrors[0]();
      }
    });
  }

  handleMessage(event) {
    // Close Timer if exist
    if (this.closeSocketTimer !== undefined) {
      clearTimeout(this.closeSocketTimer);
      if (this.closeTimerHandler !== undefined) this.closeTimerHandler();
    }
    // it can be a string like an array ??
    let find_real_string_buffer = false;
    if (typeof event.data === "string") {
      // Count the occurrences of commas
      const numberOfCommas = (event.data.match(/,/g) || []).length;

      if (numberOfCommas < 5) {
        console.log("Received: '" + event.data + "'");

        // test pong received ?
        if (event.data == "pong") {
          this.is_pong_received = true;
          console.log("Pong Received");
        }
        find_real_string_buffer = true;
      } else console.log("Received: a string buffer that matchs a binary one");
    }
    if (!find_real_string_buffer) {
      console.log(" -> Receiving data .....");

      // send Callback Status OK
      this.sendCallbackConnectStates(true);

      let decodedmessage = analyzePacket(event.data);
      console.log(decodedmessage);
      let result_data = JSON.parse(decodedmessage);

      // Call the subscriber if found
      let idCmd = "";
      if (result_data.cmd) {
        idCmd = result_data.cmd;
        console.log(`-> Sending back data for ${idCmd}`);

        // Retrieve the callback functions associated with the idCmd
        Object.entries(this.packetCallbackMessages).forEach(
          ([sender, callbacksMessageInfo]) => {
            // the special value "*" accepts all Cmd and will be transmited back
            const callbacksMessageCmd =
              callbacksMessageInfo[idCmd] || callbacksMessageInfo["*"] || {};

            console.log("Retrieve - Structure:", callbacksMessageCmd);

            if (
              Array.isArray(callbacksMessageCmd) &&
              callbacksMessageCmd[0] &&
              typeof callbacksMessageCmd[0] === "function"
            ) {
              // Call the callback function with the received data
              console.log(
                ` -> Sending back data to callbackInfo.... for ${sender}`
              );
              callbacksMessageCmd[0](sender, result_data);
            }
          }
        );
      }
    }
  }

  handleError(message) {
    // Stop Timer if exist
    if (this.closeSocketTimer !== undefined) {
      clearTimeout(this.closeSocketTimer);
      if (this.onStopTimerHandler !== undefined) this.onStopTimerHandler();
    }
    // send Callback Status KO
    this.sendCallbackConnectStates(false);
    // send Callback Error
    this.sendCallbackErrors();
  }

  /**
   * Handle close event of the socket connection with the dwarf II
   * To call from a timeout function during the connection with the dwarf II
   * @returns {Promise<void>}
   */
  async handleClose(message) {
    // Stop Timer if exist
    if (this.closeSocketTimer !== undefined) {
      clearTimeout(this.closeSocketTimer);
      if (this.onStopTimerHandler !== undefined) this.onStopTimerHandler();
    }
    // send Callback Status KO
    this.sendCallbackConnectStates(false);
    // send Callback Error
    this.sendCallbackErrors();
    // Stop ping command
    await this.wait_ping_stop();
  }

  /**
   * Force close the socket connection with the dwarf II
   * @returns {Promise<void>}
   */
  async close() {
    // need closing socket if connected
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      console.log("Websocket close");
      this.socket.close();
      await sleep(1000);
    }
    if (this.socket && (this.socket.OPEN || this.socket.CLOSING)) {
      // Socket still hangs, hard close
      this.socket.close();
      console.log("Websocket force close");
      await sleep(1000);
    }
  }

  async cleanup() {
    console.log("WebSocketHandler cleanup");
    let continue_cleanup = true;
    let needDisconnect = !this.is_running;
    if (this.is_running) {
      // need to verify if callback functions are still OK if running
      let testCallbackMessages =
        Object.keys(this.packetCallbackMessages).length > 0;
      let testCallbackConnectStates =
        Object.keys(this.packetCallbackConnectStates).length > 0;
      let testCallbackErrors =
        Object.keys(this.packetCallbackErrors).length > 0;
      if (
        testCallbackMessages != this.isCallbackMessages ||
        testCallbackConnectStates != this.isCallbackConnectStates ||
        testCallbackErrors != this.isCallbackErrors
      ) {
        needDisconnect = true;
        console.log("WebSocketHandler need to be disconnect");
      }
    }
    if (this.closeSocketTimer !== undefined)
      clearTimeout(this.closeSocketTimer);
    this.is_stopping = true;
    this.is_running = false;
    console.log("WebSocketHandler close ping");
    await this.wait_ping_stop();
    // Remove event listeners during cleanup
    if (this.socket) {
      this.socket.onopen = null;
      this.socket.onmessage = null;
      this.socket.onerror = null;
      this.socket.onclose = null;
      this.socket = undefined;
    }
    console.log(
      "WebSocketHandler try connection: %d",
      this.nb_reconnect_default
    );
    if (!needDisconnect && this.nb_reconnect > 0) {
      this.nb_reconnect -= 1;
      console.log(
        "WebSocketHandler retry connection: %d",
        this.nb_reconnect_default - this.nb_reconnect
      );
      continue_cleanup = await !this.run();
      if (!continue_cleanup) {
        console.log("WebSocketHandler retry connection OK");
        if (this.callbackReconnectFunction) {
          console.log("WebSocketHandler launch Reconnect function");
          this.callbackReconnectFunction();
        }
      }
    }
    if (continue_cleanup) {
      // delete CallbacksFunction
      console.log("WebSocketHandler final closing functions");
      this.stop();
      this.is_opened = false;
    }
  }
}

/*

// Example usage:

    const customMessageHandler = (txt_info, result_data) => {
      if (result_data.cmd == Dwarfii_Api.DwarfCMD.CMD_NOTIFY_SDCARD_INFO) {
        setConnecting(false);
        return true;
      } else if (
        result_data.cmd ==
        Dwarfii_Api.DwarfCMD.CMD_CAMERA_TELE_GET_SYSTEM_WORKING_STATE
      ) {
        setConnecting(false);
      } else if (
        result_data.cmd == Dwarfii_Api.DwarfCMD.CMD_NOTIFY_WS_HOST_SLAVE_MODE
      ) {
        if (result_data.data.mode == 1) {
          console.log("WARNING SLAVE MODE");
          setSlavemode(true);
        } else {
          console.log("OK : HOST MODE");
          setSlavemode(false);
        }
        return true;
      } else {
        logger("", result_data, connectionCtx);
      }
      logger(txt_info, result_data, connectionCtx);
    };

    const customErrorHandler = () => {
      console.error("ConnectDwarf : Socket Close!");
      setConnecting(false);
      setConnectionStatus(false);
    };

    const customStateHandler = (state) => {
      setConnecting(false);
      setConnectionStatus(false);
    };

    // Create WebSocketHandler if need
    const webSocketHandler = new WebSocketHandler(IPDwarf);

    // Force IP
    webSocketHandler.setIpDwarf(IPDwarf);

    webSocketHandler.closeTimerHandler = () => {
      setConnecting(true);
    };
    webSocketHandler.onStopTimerHandler = () => {
      setConnecting(false);
    };

    // close socket is request takes too long
    webSocketHandler.closeSocketTimer = setTimeout(() => {
      webSocketHandler.handleClose("");
      console.log(" -> Close Timer.....");
      setConnecting(false);
      setConnectionStatus(false);
    }, 5000);


    // Send Commands : cmdCameraTeleGetSystemWorkingState
    let WS_Packet = messageCameraTeleGetSystemWorkingState();
    let WS_Packet1 = messageCameraTeleOpenCamera();
    let WS_Packet2 = messageCameraWideOpenCamera();
    let txtInfoCommand = "Connection";

    webSocketHandler.prepare(
      [WS_Packet, WS_Packet1, WS_Packet2],
      txtInfoCommand,
      [
        "*", // Get All Data
        Dwarfii_Api.DwarfCMD.CMD_NOTIFY_SDCARD_INFO,
        Dwarfii_Api.DwarfCMD.CMD_CAMERA_TELE_GET_SYSTEM_WORKING_STATE,
        Dwarfii_Api.DwarfCMD.CMD_NOTIFY_WS_HOST_SLAVE_MODE,
        Dwarfii_Api.DwarfCMD.CMD_CAMERA_TELE_OPEN_CAMERA,
        Dwarfii_Api.DwarfCMD.CMD_CAMERA_WIDE_OPEN_CAMERA,
      ],
      customMessageHandler,
      customStateHandler,
      customErrorHandler
    );
    
    if (!webSocketHandler.run()) {
      console.error(" Can't launch Web Socket Run Action!");
    }

*/
