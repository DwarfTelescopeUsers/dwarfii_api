/**
 * Execute Decoding Received Bluetooth Packet from the Dwarf II
 * @param {Uint8Array} buffer
 * @param {Object} classDecode Class of Message depending on the command
 * @returns {Object}
 */
export function decodePacketBle(buffer: Uint8Array, classDecode: any): any;
/**
 * Generic Create Encoded Bluetooth Packet Function
 * @param {number} cmd
 * @param {Object} message
 * @param {Object} class_message
 * @returns {Uint8Array}
 */
export function createPacketBle(cmd: number, message: any, class_message: any): Uint8Array;
/**
 * Generic Analysing Encoded Received BLE Packet Function
 * @param {ArrayBuffer|string} message_buffer Encoded Message Buffer
 * @returns {string}
 */
export function analyzePacketBle(message_buffer: ArrayBuffer | string, input_data?: boolean): string;
/**
 * 3.1.1 Request data
 * Create Encoded Packet for the command Getconfig
 * CMD instruction, value is 1
 * @param {string} ble_psd ; //Default: "DWARF_12345678"
 * @returns {Uint8Array}
 */
export function messageGetconfig(ble_psd: string): Uint8Array;
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
export function messageWifiAP(wifi_type: number, auto_start: number, country_list: number, country: string, ble_psd: string): Uint8Array;
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
export function messageWifiSTA(auto_start: number, ble_psd: string, ssid: string, psd: string): Uint8Array;
/**
 * 3.4 Reset Bluetooth WiFi
 * Create Encoded Packet for the command Reset Bluetooth WiFi
 * CMD instruction, value is 5
 * @returns {Uint8Array}
 */
export function messageResetWifi(): Uint8Array;
/**
 * 3.5 Get WiFi list
 * Create Encoded Packet for the command Get WiFi list
 * CMD instruction, value is 6
 * @returns {Uint8Array}
 */
export function messageGetWifiList(): Uint8Array;
/**
 * 3.6 Obtain device information
 * Create Encoded Packet for the command Get device information
 * CMD instruction, value is 7
 * @returns {Uint8Array}
 */
export function messageGetSystemInfo(): Uint8Array;
//# sourceMappingURL=bluetooth.d.ts.map