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
export function startMotion(motor: number, mode: number, mStep: number, speed: number, direction: number, pulse: number, accelStep: number): any;
/**
 * 5.2 Stop
 * @param {number} motor
 * @param {number} decelStep
 * @returns {Object}
 */
export function stopMotion(motor: number, decelStep: number): any;
/**
 * 5.3 Set speed
 * @param {number} motor
 * @param {number} speed
 * @param {number} accelStep
 * @param {number} trend
 * @returns {Object}
 */
export function setSpeed(motor: number, speed: number, accelStep: number, trend: number): any;
/**
 * 5.4 Set direction
 * @param {number} motor
 * @param {number} direction
 * @returns {Object}
 */
export function setDirection(motor: number, direction: number): any;
/**
 * 5.5 Set subdivide
 * @param {number} motor
 * @param {number} mStep
 * @returns {Object}
 */
export function setSubdivide(motor: number, mStep: number): any;
//# sourceMappingURL=motion_control.d.ts.map