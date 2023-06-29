/** @module system_settings */
import { shutDownCmd } from "./api_codes.js";
/**
 * 7.11 Shut down
 * @returns {Object}
 */
export function shutDown() {
    const options = {
        interface: shutDownCmd,
    };
    return options;
}
