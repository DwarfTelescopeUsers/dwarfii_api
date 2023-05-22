import {
  traceInitCmd,
  startTrackingCmd,
  stopTrackingCmd,
  telephotoCamera,
} from "./api_codes";

// 4.2.1 Trace initialization
export function startTrace() {
  const options = { interface: traceInitCmd };
  return options;
}

// 4.2.2 Start tacking
export function startTracking(
  x: number,
  y: number,
  width: number,
  height: number
) {
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

// 4.2.3 Stop tracking
export function stopTracking() {
  const options = {
    interface: stopTrackingCmd,
  };
  return options;
}
