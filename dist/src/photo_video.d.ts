/**
 * 3.2.1 Photograph
 * @param {number} camera
 * @param {number} photoMode
 * @param {number} count
 * @param {string} name
 * @returns {Object}
 */
export function takePhoto(camera?: number, photoMode?: number, count?: number, name?: string): any;
/**
 * 3.2.2 Start recording
 * @param {string} name
 * @returns {Object}
 */
export function startVideo(name?: string): any;
/**
 * 3.2.3 Stop recording
 * @returns {Object}
 */
export function stopVideo(): any;
/**
 * 3.2.4 Start time lapse photography
 * @param {number} intervalTime
 * @param {number} outTime
 * @param {string} name
 * @returns {Object}
 */
export function startTimeLapse(intervalTime: number, outTime: number, name?: string): any;
/**
 * 3.2.5 Stop time-lapse photography
 * @returns {Object}
 */
export function stopTimeLapse(): any;
//# sourceMappingURL=photo_video.d.ts.map