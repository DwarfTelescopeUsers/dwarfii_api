/** @module motion_control */

import {
  startMotionCmd,
  stopMotionCmd,
  setSpeedCmd,
  setDirectionCmd,
  setSubdivideCmd,
} from "./api_codes.js";

/**
 * 5.1 Start
 * @param {number} motor
 * @param {number} mode
 * @param {number} mStep
 * @param {number} speed
 * @param {number} direction
 * @param {number} pulse
 * @param {number} accelStep
 * @returns {Object}
 */
export function startMotion(
  motor,
  mode,
  mStep,
  speed,
  direction,
  pulse,
  accelStep
) {
  // motor: 1:spin 2:pitch
  // mode: 1:continuous mode 2:pulse mode
  // mStep: 1 2 4 8 16 32 64 128 256
  // speed: range:0-65536（1-50000&&<1000*mStep）
  // direction: 0:anticlockwise 1:clockwise
  // pulse: range:>=2（mStep<=32）>=5(mStep>32)
  // accelStep: 0-1000
  const options = {
    interface: startMotionCmd,
    id: motor,
    mode,
    mStep,

    speed,
    accelStep,

    direction,

    pulse,
  };
  return options;
}

/**
 * 5.2 Stop
 * @param {number} motor
 * @param {number} decelStep
 * @returns {Object}
 */
export function stopMotion(motor, decelStep) {
  // motor: 1:spin 2:pitch
  // decelStep: 0-1000
  const options = {
    interface: stopMotionCmd,
    id: motor,
    decelStep,
  };
  return options;
}

/**
 * 5.3 Set speed
 * @param {number} motor
 * @param {number} speed
 * @param {number} accelStep
 * @param {number} trend
 * @returns {Object}
 */
export function setSpeed(motor, speed, accelStep, trend) {
  // speed: 0-50000
  // accelStep: 0-1000
  // trend: 0:decelerate 1:accelerate
  const options = {
    interface: setSpeedCmd,
    id: motor,
    speed,
    accelStep,
    trend,
  };
  return options;
}

/**
 * 5.4 Set direction
 * @param {number} motor
 * @param {number} direction
 * @returns {Object}
 */
export function setDirection(motor, direction) {
  // direction: 0:anticlockwise 1:clockwise
  const options = {
    interface: setDirectionCmd,
    id: motor,
    direction,
  };
  return options;
}

/**
 * 5.5 Set subdivide
 * @param {number} motor
 * @param {number} mStep
 * @returns {Object}
 */
export function setSubdivide(motor, mStep) {
  // 1 2 4 8 16 32 64 128 256
  const options = {
    interface: setSubdivideCmd,
    id: motor,
    mStep,
  };
  return options;
}
