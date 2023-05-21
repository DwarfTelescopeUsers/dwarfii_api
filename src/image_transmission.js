import {
  telephotoCamera,
  binning2x2,
  turnOnCameraCmd,
  turnOffCameraCmd,
  previewImageQuality,
} from "./api_codes";

// 3.1.1 Turn on the camera
export function turnOnCamera(binning = binning2x2, camera = telephotoCamera) {
  const options = {
    interface: turnOnCameraCmd,
    camId: camera,
    binning: binning,
  };
  return options;
}

// 3.1.2 Turn off the camera
export function turnOffCamera(camera = telephotoCamera) {
  const options = { interface: turnOffCameraCmd, camId: camera };
  return options;
}

// 3.1.4 Set preview image quality
export function setPreviewImageQuality(previewQuality) {
  // previewQuality value: 30-85
  const options = {
    interface: previewImageQuality,
    value: previewQuality,
  };
  return options;
}
