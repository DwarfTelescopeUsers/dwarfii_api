import {
  telephotoCamera,
  photoSingleShot,
  takePhotoCmd,
  startRecordingCmd,
  stopRecordingCmd,
  startTimelapseCmd,
  stopTimelapseCmd,
} from "./api_codes";
import { now } from "./api_utils";

// 3.2.1 Photograph
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

// 3.2.2 Start recording
export function startVideo(name = `Video ${now()}`) {
  const options = {
    interface: startRecordingCmd,
    camId: telephotoCamera,
    name: name,
  };
  return options;
}

// 3.2.3 Stop recording
export function stopVideo() {
  const options = {
    interface: stopRecordingCmd,
    camId: telephotoCamera,
  };
  return options;
}

// 3.2.4 Start time lapse photography
export function startTimeLapse(
  intervalTime: number,
  outTime: number,
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

// 3.2.5 Stop time-lapse photography
export function stopTimeLapse() {
  const options = {
    interface: stopTimelapseCmd,
    camId: telephotoCamera,
  };
  return options;
}
