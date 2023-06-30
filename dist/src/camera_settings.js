/** @module camera_settings */
import { telephotoCamera, statusTelephotoCmd, statusWideangleCmd, statusIRTelephotoCmd, statusWorkingStateTelephotoCmd, } from "./api_codes.js";
/**
 * 3.4.1 Get telephoto ISP parameters
 * 3.4.4 Returns the wide-angle ISP parameter
 * @param {number} camera
 * @returns {Object}
 */
export function cameraSettings(camera = telephotoCamera) {
    let command;
    if (camera === telephotoCamera) {
        command = statusTelephotoCmd;
    }
    else {
        command = statusWideangleCmd;
    }
    const options = { interface: command, camId: camera };
    return options;
}
/**
 * 3.4.2 Get telephoto IRCUT state (when shooting raw)
 * @returns {Object}
 */
export function iRSettings() {
    const options = { interface: statusIRTelephotoCmd, camId: telephotoCamera };
    return options;
}
/**
 *  3.4.3 Returns to the camera working state
 * @param {number} camera
 * @returns {Object}
 */
export function cameraWorkingState(camera = telephotoCamera) {
    if (camera === telephotoCamera) {
        const options = {
            interface: statusWorkingStateTelephotoCmd,
            camId: telephotoCamera,
        };
        return options;
    }
}
