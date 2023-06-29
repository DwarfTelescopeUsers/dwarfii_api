/** @module image_transmission */
import { telephotoCamera, binning2x2, turnOnCameraCmd, turnOffCameraCmd, previewImageQuality, } from "./api_codes.js";
/**
 * 3.1.1 Turn on the camera
 * @param {number} binning
 * @param {number} camera
 * @returns {Object}
 */
export function turnOnCamera(binning = binning2x2, camera = telephotoCamera) {
    const options = {
        interface: turnOnCameraCmd,
        camId: camera,
        binning: binning,
    };
    return options;
}
/**
 * 3.1.2 Turn off the camera
 * @param {number} camera
 * @returns {Object}
 */
export function turnOffCamera(camera = telephotoCamera) {
    const options = { interface: turnOffCameraCmd, camId: camera };
    return options;
}
/**
 * 3.1.4 Set preview image quality
 * @param {number} previewQuality
 * @returns {Object}
 */
export function setPreviewImageQuality(previewQuality) {
    // previewQuality value: 30-85
    const options = {
        interface: previewImageQuality,
        value: previewQuality,
    };
    return options;
}
