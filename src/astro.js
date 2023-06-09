/** @module astro */

import {
  telephotoCamera,
  calibrateGotoCmd,
  startGotoCmd,
  binning2x2,
  fileTiff,
  takeAstroPhotoCmd,
  takeAstroDarkFramesCmd,
  darkGainDefault,
  utcURL,
  stopAstroPhotoCmd,
  rawPreviewContinousSuperimpose,
  queryShotFieldCmd,
  setRAWPreviewCmd,
} from "./api_codes.js";
import { nowUTC, nowLocal, nowLocalFileName } from "./api_utils.js";

/**
 * 4.1.1 UTC+0 time
 * @param {string} IP
 * @returns {string}
 */
export function formatUtcUrl(IP) {
  return `${utcURL(IP)}${nowUTC()}`;
}

/**
 * 4.1.2 correction
 * @param {number} latitude
 * @param {number} longitude
 * @returns {Object}
 */
export function calibrateGoto(latitude, longitude) {
  const options = {
    interface: calibrateGotoCmd,
    camId: telephotoCamera,
    lon: longitude,
    lat: latitude,
    date: nowLocal(),
    path: `DWARF_GOTO_${nowLocalFileName()}`,
  };
  return options;
}

/**
 * 4.1.3 Start goto
 * @param {number|null} planet
 * @param {string} rightAscension
 * @param {string} declination
 * @param {number} latitude
 * @param {number} longitude
 * @returns {Object}
 */
export function startGoto(
  planet,
  rightAscension,
  declination,
  latitude,
  longitude
) {
  const options = {
    interface: startGotoCmd,
    camId: telephotoCamera,
    lon: longitude,
    lat: latitude,
    date: nowLocal(),
    path: `DWARF_GOTO_${nowLocalFileName()}`,
  };

  if (planet !== undefined && planet !== null) {
    options.planet = planet;
  } else {
    options.ra = rightAscension;
    options.dec = declination;
  }
  return options;
}

/**
 * 4.1.4 Take raw pictures
 * @param {string} rightAscension
 * @param {string} declination
 * @param {number} exposureTime
 * @param {number} gain
 * @param {number} binning
 * @param {number} count
 * @param {number} fileFormat
 * @param {string} fileName
 * @returns {Object}
 */
export function takeAstroPhoto(
  rightAscension,
  declination,
  exposureTime,
  gain,
  binning = binning2x2,
  count = 1,
  fileFormat = fileTiff,
  fileName = `DWARF_RAW_${nowLocalFileName()}`
) {
  const options = {
    interface: takeAstroPhotoCmd,
    camId: telephotoCamera,
    target: "NULL",
    RA: rightAscension,
    DEC: declination,
    exp: exposureTime,
    gain: gain,
    binning: binning,
    count: count,
    name: fileName,
    overlayCount: 1,
    format: fileFormat,
  };
  return options;
}

/**
 * 4.1.7 Stop taking RAW images
 * @returns {Object}
 */
export function stopAstroPhoto() {
  const options = {
    interface: stopAstroPhotoCmd,
  };
  return options;
}

/**
 * 4.1.9 Switch the RAW preview source
 * @param {number} source
 * @returns {Object}
 */
export function updateRawPreviewSource(
  source = rawPreviewContinousSuperimpose
) {
  // 0:Continuous superposition graph
  // 1:Single 15s exposure graph
  // 2:Single sheet according to exposure time (more than 15s) composite image
  const options = {
    interface: setRAWPreviewCmd,
    camId: telephotoCamera,
    source,
  };
  return options;
}

// BUG: response is {interface: 11003, value: 100, code: 0} when darks already exists
/**
 * 4.1.10 Taking dark field
 * @param {number} binning
 * @param {number} exposure
 * @param {number} count
 * @param {string} fileName
 * @returns {Object}
 */
export function takeAstroDarks(
  binning,
  exposure,
  count = 40,
  fileName = `DWARF_DARK_${nowLocalFileName()}`
) {
  const options = {
    interface: takeAstroDarkFramesCmd,
    camId: telephotoCamera,
    count,
    name: fileName,
    binning: binning,
    darkGain: darkGainDefault,
    darkExposure: exposure,
  };
  return options;
}

/**
 * 4.1.11 Query the shot field
 * @param {number} binning
 * @returns {Object}
 */
export function queryShotField(binning) {
  const options = {
    interface: queryShotFieldCmd,
    camId: telephotoCamera,
    binning: binning,
  };
  return options;
}
