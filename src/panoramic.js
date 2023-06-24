/** @module panoramic */

import { startPanoCmd, stopPanoCmd } from "./api_codes.js";
import { now } from "./api_utils.js";

/**
 * 4.3.1 Start panorama
 * @param {number} numRows
 * @param {number} numColumns
 * @param {number} mStep1
 * @param {number} mStep2
 * @param {number} speed1
 * @param {number} speed2
 * @param {number} pulse1
 * @param {number} pulse2
 * @param {number} accelStep1
 * @param {number} accelStep2
 * @returns {Object}
 */
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

/**
 * 4.3.2 Stop panorama
 * @returns {Object}
 */
export function stopPano() {
  const options = {
    interface: stopPanoCmd,
  };
  return options;
}
