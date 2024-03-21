/*** ---------------------------------------------- ***/
/*** ---------------- MODULE_MOTOR ---------------- ***/
/*** ---------------------------------------------- ***/
/**
 * 3.13.3 Motor motion
 * Create Encoded Packet for the command CMD_STEP_MOTOR_RUN
 * @param {number} id ; //0: Rotation axis 1: Pitch axis
 * @param {number} speed ; //5 gears: 0.1, 1, 5, 10, 30 degrees/s, supports maximum speed of 32 degrees/s
 * @param {boolean} direction ; //0: left/down 1: right/up
 * @param {number} speed_ramping ; //Acceleration and deceleration: 0-1000, 100 gears, a total of 11 gears
 * @param {number} resolution_level ; //Subdivision: 5:32 subdivision
 * @returns {Uint8Array}
 */
export function messageStepMotorMotion(id: number, speed: number, direction: boolean, speed_ramping: number, resolution_level: number): Uint8Array;
/**
 * Create Encoded Packet for the command CMD_STEP_MOTOR_STOP
 * 3.13.4 Motor stop
 * @param {number} id ; //0: Rotation axis 1: Pitch axis
 * @returns {Uint8Array}
 */
export function messageStepMotorStop(id: number): Uint8Array;
/**
 * 3.13.5 Joystick
 * Create Encoded Packet for the command CMD_STEP_MOTOR_SERVICE_JOYSTICK
 * @param {number} vector_angle ; //The angle of the direction vector, indicating the direction of motion of the field of view, 0-360 degrees, 0 degrees starting from the positive x-axis and increasing counterclockwise
 * @param {number} vector_length ; //The length of the direction vector represents the scaling factor of the speed, 0-1, and the speed is finely adjusted according to the range of the joystick drag
 * @param {number} speed ; //speed along the direction vector, 0.1 �/s-30 �/s
 * @returns {Uint8Array}

 */
export function messageStepMotorServiceJoystick(vector_angle: number, vector_length: number, speed: number): Uint8Array;
/**
 * 3.13.6 Short press the arrow keys with the joystick
 * Create Encoded Packet for the command CMD_STEP_MOTOR_SERVICE_JOYSTICK_FIXED_ANGLE
 * @param {number} vector_angle ; //The angle of the direction vector, indicating the direction of motion of the field of view, 0-360 degrees, 0 degrees starting from the positive x-axis and increasing counterclockwise
 * @param {number} vector_length ; //The length of the direction vector represents the scaling factor of the speed, 0-1, and the speed is finely adjusted according to the range of the joystick drag
 * @param {number} speed ; //speed along the direction vector, 0.1 �/s-30 �/s
 * @returns {Uint8Array}
 */
export function messageStepMotorServiceJoystickFixedAngle(vector_angle: number, vector_length: number, speed: number): Uint8Array;
/**
 * 3.13.7 Stop joystick
 * Create Encoded Packet for the command CMD_STEP_MOTOR_SERVICE_JOYSTICK_STOP
 * @returns {Uint8Array}
 */
export function messageStepMotorServiceJoystickStop(): Uint8Array;
/**
 * 3.13.8 Dual camera linkage
 * Create Encoded Packet for the command CMD_STEP_MOTOR_SERVICE_DUAL_CAMERA_LINKAGE
 * @param {number} x ;
 * @param {number} y ;
 * @returns {Uint8Array}
 */
export function messageStepMotorServiceDualCameraLinkage(x: number, y: number): Uint8Array;
//# sourceMappingURL=motor.d.ts.map