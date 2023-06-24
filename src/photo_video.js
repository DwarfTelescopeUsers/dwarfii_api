import {
  telephotoCamera,
  photoSingleShot,
  takePhotoCmd,
  startRecordingCmd,
  stopRecordingCmd,
  startTimelapseCmd,
  stopTimelapseCmd,
} from "./api_codes.js";
import { now } from "./api_utils.js";

/**
 * 3.2.1 Photograph
 * @param {number} camera
 * @param {number} photoMode
 * @param {number} count
 * @param {string} name
 * @returns {Object}
 */
export function takePhoto(
  camera = telephotoCamera,
  photoMode = photoSingleShot,
  count = 1,
  name = `Photo ${now()}`
) {
  const options = {
    interface: takePhotoCmd,
    camId: camera,
    mode: photoMode,
    count: count,
    name: name,
  };
  return options;
}

/**
 * 3.2.2 Start recording
 * @param {string} name
 * @returns {Object}
 */
export function startVideo(name = `Video ${now()}`) {
  const options = {
    interface: startRecordingCmd,
    camId: telephotoCamera,
    name: name,
  };
  return options;
}

/**
 * 3.2.3 Stop recording
 * @returns {Object}
 */
export function stopVideo() {
  const options = {
    interface: stopRecordingCmd,
    camId: telephotoCamera,
  };
  return options;
}

/**
 * 3.2.4 Start time lapse photography
 * @param {number} intervalTime
 * @param {number} outTime
 * @param {string} name
 * @returns {Object}
 */
export function startTimeLapse(
  intervalTime,
  outTime,
  name = `Timelapse ${now()}`
) {
  // intervalTime value: 1s-60s
  const options = {
    interface: startTimelapseCmd,
    camId: telephotoCamera,
    interval: intervalTime,
    outTime: outTime,
    name: name,
  };
  return options;
}

/**
 * 3.2.5 Stop time-lapse photography
 * @returns {Object}
 */
export function stopTimeLapse() {
  const options = {
    interface: stopTimelapseCmd,
    camId: telephotoCamera,
  };
  return options;
}
