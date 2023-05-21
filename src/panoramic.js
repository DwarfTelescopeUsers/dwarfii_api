import { startPanoCmd, stopPanoCmd } from "./api_codes";
import { now } from "./api_utils";

// 4.3.1 Start panorama
export function startPano(
  numRows,
  numColumns,
  mStep1,
  mStep2,
  speed1,
  speed2,
  pulse1,
  pulse2,
  accelStep1,
  accelStep2
) {
  // mStep 1 2 4 8 16 32 64 128 256
  // speed 0-1000*mStep
  // pulse >=2
  // accelStep 0-1000
  const options = {
    interface: startPanoCmd,
    row: numRows,
    col: numColumns,
    mStep1,
    mStep2,
    speed1,
    speed2,
    pulse1,
    pulse2,
    imgPath: `DWARF_PANORAMA_${now()}`,
    accelStep1,
    accelStep2,
  };
  return options;
}

// 4.3.2 Stop panorama
export function stopPano() {
  const options = {
    interface: stopPanoCmd,
  };
  return options;
}
