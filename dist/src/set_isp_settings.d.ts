/**
 * 3.3.1 brightness
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setBrightness(camera: number, value: number): any;
/**
 * 3.3.2 contrast
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setContrast(camera: number, value: number): any;
/**
 * 3.3.3 saturation
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setSaturation(camera: number, value: number): any;
/**
 * 3.3.4 hue
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setHue(camera: number, value: number): any;
/**
 * 3.3.5 sharpness
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setSharpness(camera: number, value: number): any;
/**
 * 3.3.6 Set exposure mode
 * @param {number} camera
 * @param {number} mode
 * @returns {Object}
 */
export function setExposureMode(camera?: number, mode?: number): any;
/**
 * 3.3.7 Set exposure value
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setExposure(camera: number, value: number): any;
/**
 * 3.3.8 Set gain mode
 * @param {number} camera
 * @param {number} mode
 * @returns {Object}
 */
export function setGainMode(camera?: number, mode?: number): any;
/**
 * 3.3.9 Set gain value
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setGain(camera: number, value: number): any;
/**
 * 3.3.10 Start autofocus
 * @param {number} camera
 * @param {number} mode
 * @param {number} x
 * @param {number} y
 * @returns {Object}
 */
export function autoFocus(camera?: number, mode?: number, x?: number, y?: number): any;
/**
 * 3.3.11 Set the white balance mode
 * @param {number} camera
 * @param {number} mode
 * @returns {Object}
 */
export function setWhiteBalanceMode(camera?: number, mode?: number): any;
/**
 * 3.3.12 Set the white balance scene
 * @param {number} mode
 * @returns {Object}
 */
export function setWhiteBalanceScene(mode?: number): any;
/**
 * 3.3.13 Set the white balance color temperature parameter
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setWhiteBalanceColor(camera: number, value: number): any;
/**
 * 3.3.14 IR_CUT
 * @param {number} value
 * @returns {Object}
 */
export function setIR(value?: number): any;
//# sourceMappingURL=set_isp_settings.d.ts.map