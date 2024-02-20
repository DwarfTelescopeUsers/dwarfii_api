/*** ---------------------------------------------------- ***/
/*** ---------------- MODULE CAMERA TELE ---------------- ***/
/*** ---------------------------------------------------- ***/
/**
 * 3.7.3 Turn on the camera
 * Create Encoded Packet for the command CMD_CAMERA_TELE_OPEN_CAMERA
 * @param {boolean} binning ;
 * @returns {Uint8Array}
 */
export function messageCameraTeleOpenCamera(binning?: boolean): Uint8Array;
/**
 * 3.7.4 Turn off the camera
 * Create Encoded Packet for the command CMD_CAMERA_TELE_CLOSE_CAMERA
 * @returns {Uint8Array}
 */
export function messageCameraTeleCloseCamera(): Uint8Array;
/**
 * 3.7.5 Set all camera parameters
 * Create Encoded Packet for the command CMD_CAMERA_TELE_SET_ALL_PARAMS
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
export function messageCameraTeleSetAllParams(exp_mode: number, exp_index: number, gain_mode: number, gain_index: number, ircut_value: number, wb_mode: number, wb_index_type: number, wb_index: number, brightness: number, contrast: number, hue: number, saturation: number, sharpness: number, jpg_quality: number): Uint8Array;
/**
 * 3.7.6 Get all camera parameters
 * Create Encoded Packet for the command CMD_CAMERA_TELE_GET_ALL_PARAMS
 * @returns {Uint8Array}
 */
export function messageCameraTeleGetAllParams(): Uint8Array;
/**
 * 3.7.7 Set feature parameters
 * Create Encoded Packet for the command CMD_CAMERA_TELE_SET_FEATURE_PARAM
 * @param {boolean} has_auto
 * @param {number} auto_mode
 * @param {number} id
 * @param {number} mode_index
 * @param {number} index
 * @param {number} continue_value
 * @returns {Uint8Array}
 */
export function messageCameraTeleSetFeatureParams(has_auto: boolean, auto_mode: number, id: number, mode_index: number, index: number, continue_value: number): Uint8Array;
/**
 * 3.7.8 Get all feature parameters
 * Create Encoded Packet for the command CMD_CAMERA_TELE_GET_ALL_FEATURE_PARAMS
 * @returns {Uint8Array}
 */
export function messageCameraTeleGetAllFeatureParams(): Uint8Array;
/**
 * 3.7.9 Get the working status of the whole machine
 * Create Encoded Packet for the command CMD_CAMERA_TELE_GET_SYSTEM_WORKING_STATE
 * @returns {Uint8Array}
 */
export function messageCameraTeleGetSystemWorkingState(): Uint8Array;
/**
 * 3.7.10 Take photos
 * Create Encoded Packet for the command CMD_CAMERA_TELE_PHOTOGRAPH
 * @returns {Uint8Array}
 */
export function messageCameraTelePhotograph(): Uint8Array;
/**
 * 3.7.11 Start continuous shooting
 * Create Encoded Packet for the command CMD_CAMERA_TELE_BURST
 * @returns {Uint8Array}
 */
export function messageCameraTeleStartBurst(): Uint8Array;
/**
 * 3.7.12 Stop continuous shooting
 * Create Encoded Packet for the command CMD_CAMERA_TELE_STOP_BURST
 * @returns {Uint8Array}
 */
export function messageCameraTeleStopBurst(): Uint8Array;
/**
 * 3.7.13 Start recording
 * Create Encoded Packet for the command CMD_CAMERA_TELE_START_RECORD
 * @returns {Uint8Array}
 */
export function messageCameraTeleStartRecord(): Uint8Array;
/**
 * 3.7.14 Stop recording
 * Create Encoded Packet for the command CMD_CAMERA_TELE_STOP_RECORD
 * @returns {Uint8Array}
 */
export function messageCameraTeleStopRecord(): Uint8Array;
/**
 * 3.7.15 Start time-lapse photography
 * Create Encoded Packet for the command CMD_CAMERA_TELE_START_TIMELAPSE_PHOTO
 * @returns {Uint8Array}
 */
export function messageCameraTeleStartTimeLapsePhoto(): Uint8Array;
/**
 * 3.7.16 Stop time-lapse photography
 * Create Encoded Packet for the command CMD_CAMERA_TELE_STOP_TIMELAPSE_PHOTO
 * @returns {Uint8Array}
 */
export function messageCameraTeleStopTimeLapsePhoto(): Uint8Array;
/**
 * 3.7.17 Set exposure mode
 * Create Encoded Packet for the command CMD_CAMERA_TELE_SET_EXP_MODE
 * @param {number} mode ; //0: Auto 1: Manual  ;
 * @returns {Uint8Array}
 */
export function messageCameraTeleSetExpMode(mode: number): Uint8Array;
/**
 * 3.7.18 Acquire exposure mode
 * Create Encoded Packet for the command CMD_CAMERA_TELE_GET_EXP_MODE
 * @returns {Uint8Array}
 */
export function messageCameraTeleGetExpMode(): Uint8Array;
/**
 * 3.7.19 Set exposure value
 * Create Encoded Packet for the command CMD_CAMERA_TELE_SET_EXP
 * @param {number} index  ;
 * @returns {Uint8Array}
 */
export function messageCameraTeleSetExp(index: number): Uint8Array;
/**
 * 3.7.20 Get exposure value
 * Create Encoded Packet for the command CMD_CAMERA_TELE_GET_EXP
 * @returns {Uint8Array}
 */
export function messageCameraTeleGetExp(): Uint8Array;
/**
 * 3.7.21 Set gain mode
 * Create Encoded Packet for the command CMD_CAMERA_TELE_SET_GAIN_MODE
 * @param {number} mode ; //0: Auto 1: Manual  ;
 * @returns {Uint8Array}
 */
export function messageCameraTeleSetGainMode(mode: number): Uint8Array;
/**
 * 3.7.22 Acquisition gain mode
 * Create Encoded Packet for the command CMD_CAMERA_TELE_GET_GAIN_MODE
 * @returns {Uint8Array}
 */
export function messageCameraTeleGetGainMode(): Uint8Array;
/**
 * 3.7.23 Set gain value
 * Create Encoded Packet for the command CMD_CAMERA_TELE_SET_GAIN
 * @param {number} index  ;
 * @returns {Uint8Array}
 */
export function messageCameraTeleSetGain(index: number): Uint8Array;
/**
 * 3.7.24 Get gain value
 * Create Encoded Packet for the command CMD_CAMERA_TELE_GET_GAIN
 * @returns {Uint8Array}
 */
export function messageCameraTeleGetGain(): Uint8Array;
/**
 * 3.7.25 Set IRCUT
 * Create Encoded Packet for the command CMD_CAMERA_TELE_SET_IRCUT
 * @param {number} value  ; //IRCUT value 0: CUT 1: PASS
 * @returns {Uint8Array}
 */
export function messageCameraTeleSetIRCut(value: number): Uint8Array;
/**
 * 3.7.26 Get IRCUT status
 * Create Encoded Packet for the command CMD_CAMERA_TELE_GET_IRCUT
 * @returns {Uint8Array}
 */
export function messageCameraTeleGetIRCut(): Uint8Array;
/**
 * 3.7.43 Set jpg preview quality
 * Create Encoded Packet for the command CMD_CAMERA_TELE_SET_JPG_QUALITY
 * @param {number} quality  ;
 * @returns {Uint8Array}
 */
export function messageCameraTeleSetJPGQuality(quality: number): Uint8Array;
//# sourceMappingURL=camera_tele.d.ts.map