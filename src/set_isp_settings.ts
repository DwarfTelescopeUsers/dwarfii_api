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
} from "./api_codes";

// 3.3.1 brightness
export function setBrightness(camera = telephotoCamera, value: number) {
  // telephoto values: 0-255 default：128
  // wideangle values: -64-64 default：0
  const options = {
    interface: setBrightnessValueCmd,
    camId: camera,
    value,
  };
  return options;
}

// 3.3.2 contrast
export function setContrast(camera = telephotoCamera, value: number) {
  // telephoto values: 0-255 default：128
  // wideangle values: 0-95 default：0
  const options = {
    interface: setContrastValueCmd,
    camId: camera,
    value,
  };
  return options;
}

// 3.3.3 saturation
export function setSaturation(camera = telephotoCamera, value: number) {
  // telephoto values: 0-255 default：128
  // wideangle values: 0-100 default：80
  const options = {
    interface: setSaturationValueCmd,
    camId: camera,
    value,
  };
  return options;
}

// 3.3.4 hue
export function setHue(camera = telephotoCamera, value: number) {
  // telephoto values: 0-255 default：128
  // wideangle values: -2000-2000 default：0
  const options = {
    interface: setHueValueCmd,
    camId: camera,
    value,
  };
  return options;
}

// 3.3.5 sharpness
export function setSharpness(camera = telephotoCamera, value: number) {
  // telephoto values: 0-100 default：50
  // wideangle values: 1-7 default：2
  const options = {
    interface: setSharpnessValueCmd,
    camId: camera,
    value,
  };
  return options;
}

// 3.3.6 Set exposure mode
export function setExposureMode(camera = telephotoCamera, mode = modeManual) {
  const options = {
    interface: setExposureModeCmd,
    camId: camera,
    mode: mode,
  };
  return options;
}

// 3.3.7 Set exposure value
export function setExposure(camera = telephotoCamera, value: number) {
  // Long focal camera:0.0000-15.0000
  // Wide-angle camera：0.0003-1.0
  const options = {
    interface: setExposureValueCmd,
    camId: camera,
    value,
  };
  return options;
}

// 3.3.8 Set gain mode
export function setGainMode(camera = telephotoCamera, mode = modeManual) {
  const options = {
    interface: setGainModeCmd,
    camId: camera,
    mode: mode,
  };
  return options;
}

// 3.3.9 Set gain value
export function setGain(camera = telephotoCamera, value: number) {
  // Long focal camera:0-240
  // Wide-angle camera:64-8000
  const options = {
    interface: setGainValueCmd,
    camId: camera,
    value,
  };
  return options;
}

// 3.3.10 Start autofocus
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

// 3.3.11 Set the white balance mode
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

// 3.3.12 Set the white balance scene
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

// 3.3.13 Set the white balance color temperature parameter
export function setWhiteBalanceColor(camera = telephotoCamera, value: number) {
  // Long focal camera: 2800-7500
  // Wide-angle camera: 2800-6000
  const options = {
    interface: setWhiteBalanceColorCmd,
    camId: camera,
    value,
  };
  return options;
}

// 3.3.14 IR_CUT
export function setIR(value = IRCut) {
  const options = {
    interface: setIRCmd,
    camId: telephotoCamera,
    value,
  };
  return options;
}
