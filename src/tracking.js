/** @module tracking */

import {
  traceInitCmd,
  startTrackingCmd,
  stopTrackingCmd,
  telephotoCamera,
} from "./api_codes.js";

/**
 * 4.2.1 Trace initialization
 * @returns {Object}
 */
export function startTrace() {
  const options = { interface: traceInitCmd };
  return options;
}

/**
 * 4.2.2 Start tracking
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @returns {Object}
 */
export function startTracking(x, y, width, height) {
  // x 0-1920
  // y 0-1080
  // w 0-1920
  // h 0-1080
  const options = {
    interface: startTrackingCmd,
    camId: telephotoCamera,
    x,
    y,
    w: width,
    h: height,
  };
  return options;
}

/**
 * 4.2.3 Stop tracking
 * @returns {Object}
 */
export function stopTracking() {
  const options = {
    interface: stopTrackingCmd,
  };
  return options;
}
