import {
  telephotoCamera,
  setExposureModeCmd,
  setExposureValueCmd,
  setGainModeCmd,
  setGainValueCmd,
  IRCut,
  setIRCmd,
  autofocusArea,
  autofocusCmd,
  setBrightnessValueCmd,
  setContrastValueCmd,
  setSaturationValueCmd,
  setHueValueCmd,
  setSharpnessValueCmd,
  setWhiteBalanceModeCmd,
  setWhiteBalanceScenceCmd,
  whiteBalanceScenesValueID,
  setWhiteBalanceColorCmd,
  modeManual,
} from "./api_codes.js";

/**
 * 3.3.1 brightness
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setBrightness(camera = telephotoCamera, value) {
  // telephoto values: 0-255 default：128
  // wideangle values: -64-64 default：0
  const options = {
    interface: setBrightnessValueCmd,
    camId: camera,
    value,
  };
  return options;
}

/**
 * 3.3.2 contrast
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setContrast(camera = telephotoCamera, value) {
  // telephoto values: 0-255 default：128
  // wideangle values: 0-95 default：0
  const options = {
    interface: setContrastValueCmd,
    camId: camera,
    value,
  };
  return options;
}

/**
 * 3.3.3 saturation
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setSaturation(camera = telephotoCamera, value) {
  // telephoto values: 0-255 default：128
  // wideangle values: 0-100 default：80
  const options = {
    interface: setSaturationValueCmd,
    camId: camera,
    value,
  };
  return options;
}

/**
 * 3.3.4 hue
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setHue(camera = telephotoCamera, value) {
  // telephoto values: 0-255 default：128
  // wideangle values: -2000-2000 default：0
  const options = {
    interface: setHueValueCmd,
    camId: camera,
    value,
  };
  return options;
}

/**
 * 3.3.5 sharpness
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setSharpness(camera = telephotoCamera, value) {
  // telephoto values: 0-100 default：50
  // wideangle values: 1-7 default：2
  const options = {
    interface: setSharpnessValueCmd,
    camId: camera,
    value,
  };
  return options;
}

/**
 * 3.3.6 Set exposure mode
 * @param {number} camera
 * @param {number} mode
 * @returns
 */
export function setExposureMode(camera = telephotoCamera, mode = modeManual) {
  const options = {
    interface: setExposureModeCmd,
    camId: camera,
    mode: mode,
  };
  return options;
}

/**
 * 3.3.7 Set exposure value
 * @param {number} camera
 * @param {number} value
 * @returns
 */
export function setExposure(camera = telephotoCamera, value) {
  // Long focal camera:0.0000-15.0000
  // Wide-angle camera：0.0003-1.0
  const options = {
    interface: setExposureValueCmd,
    camId: camera,
    value,
  };
  return options;
}

/**
 * 3.3.8 Set gain mode
 * @param {number} camera
 * @param {number} mode
 * @returns {Object}
 */
export function setGainMode(camera = telephotoCamera, mode = modeManual) {
  const options = {
    interface: setGainModeCmd,
    camId: camera,
    mode: mode,
  };
  return options;
}

/**
 * 3.3.9 Set gain value
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setGain(camera = telephotoCamera, value) {
  // Long focal camera:0-240
  // Wide-angle camera:64-8000
  const options = {
    interface: setGainValueCmd,
    camId: camera,
    value,
  };
  return options;
}

/**
 * 3.3.10 Start autofocus
 * @param {number} camera
 * @param {number} mode
 * @param {number} x
 * @param {number} y
 * @returns {Object}
 */
export function autoFocus(
  camera = telephotoCamera,
  mode = autofocusArea,
  x = 0,
  y = 0
) {
  // centerX: 0-1920
  // centerY: 0-1080
  const options = {
    interface: autofocusCmd,
    camId: camera,
    mode,
    centerX: x,
    centerY: y,
  };
  return options;
}

/**
 * 3.3.11 Set the white balance mode
 * @param {number} camera
 * @param {number} mode
 * @returns {Object}
 */
export function setWhiteBalanceMode(
  camera = telephotoCamera,
  mode = modeManual
) {
  const options = {
    interface: setWhiteBalanceModeCmd,
    camId: camera,
    mode: mode,
  };
  return options;
}

/**
 * 3.3.12 Set the white balance scene
 * @param {number} mode
 * @returns {Object}
 */
export function setWhiteBalanceScene(
  mode = whiteBalanceScenesValueID["incandescent lamp"]
) {
  const options = {
    interface: setWhiteBalanceScenceCmd,
    camId: telephotoCamera,
    mode,
  };
  return options;
}

/**
 * 3.3.13 Set the white balance color temperature parameter
 * @param {number} camera
 * @param {number} value
 * @returns {Object}
 */
export function setWhiteBalanceColor(camera = telephotoCamera, value) {
  // Long focal camera: 2800-7500
  // Wide-angle camera: 2800-6000
  const options = {
    interface: setWhiteBalanceColorCmd,
    camId: camera,
    value,
  };
  return options;
}

/**
 * 3.3.14 IR_CUT
 * @param {number} value
 * @returns {Object}
 */
export function setIR(value = IRCut) {
  const options = {
    interface: setIRCmd,
    camId: telephotoCamera,
    value,
  };
  return options;
}
