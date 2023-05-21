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
} from "./api_codes";
import { now } from "./api_utils";

// 4.1.1 UTC+0 time
export function formatUtcUrl() {
  return `${utcURL}${now()}`;
}

// 4.1.2 correction
export function calibrateGoto(latitude, longitude) {
  const options = {
    interface: calibrateGotoCmd,
    camId: telephotoCamera,
    lon: longitude,
    lat: latitude,
    date: now(),
    path: "DWARF_GOTO_timestamp",
  };
  return options;
}

// 4.1.3 Start goto
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
    date: now(),
    path: "DWARF_GOTO_timestamp",
  };

  if (planet !== undefined && planet !== null) {
    options.planet = planet;
  } else {
    options.ra = rightAscension;
    options.dec = declination;
  }
  return options;
}

// 4.1.4 Take raw pictures
export function takeAstroPhoto(
  rightAscension,
  declination,
  exposureTime,
  gain,
  binning = binning2x2,
  count = 1,
  fileFormat = fileTiff
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
    name: `Astro ${now()}`,
    overlayCount: 1,
    format: fileFormat,
  };
  return options;
}

// 4.1.7 Stop taking RAW images
export function stopAstroPhoto() {
  const options = {
    interface: stopAstroPhotoCmd,
  };
  return options;
}

// 4.1.9 Switch the RAW preview source
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

// 4.1.10 Taking dark field
// BUG: response is {interface: 11003, value: 100, code: 0} when darks already exists
export function takeAstroDarks(binning, exposure, count = 40) {
  const options = {
    interface: takeAstroDarkFramesCmd,
    camId: telephotoCamera,
    count,
    name: `DWARF_DARK ${now()}`,
    binning: binning,
    darkGain: darkGainDefault,
    darkExposure: exposure,
  };
  return options;
}

// 4.1.11 Query the shot field
export function queryShotField(binning) {
  const options = {
    interface: queryShotFieldCmd,
    camId: telephotoCamera,
    binning: binning,
  };
  return options;
}
