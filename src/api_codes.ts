/* eslint no-unused-vars: 0 */

const IP = "192.168.88.1";
export const wsURL = `ws://${IP}:9900`;
export const wideangleURL = `http://${IP}:8092/thirdstream`;
export const telephotoURL = `http://${IP}:8092/mainstream`;
export const rawPreviewURL = `http://${IP}:8092/rawstream`;
export const utcURL = `http://${IP}:8092/date?date=`;

// ===============
// 3.1 image transmission
// ===============

// camera
export const turnOnCameraCmd = 10000;
export const turnOffCameraCmd = 10017;

export const telephotoCamera = 0;
export const wideangleCamera = 1;

export const previewImageQuality = 10016;

// ===============
// 3.2 photo and video
// ===============

// photo
export const takePhotoCmd = 10006;
export const photoSingleShot = 0;
export const photoContinuous = 1;

// video
export const startRecordingCmd = 10007;
export const stopRecordingCmd = 10009;

// timelapse photos
export const startTimelapseCmd = 10018;
export const stopTimelapseCmd = 10019;

// ===============
// 3.3 ISP settings
// ===============

export const modeAuto = 0;
export const modeManual = 1;

// brightness
export const setBrightnessValueCmd = 10204;

// contrast
export const setContrastValueCmd = 10205;

// saturation
export const setSaturationValueCmd = 10206;

// hue
export const setHueValueCmd = 10207;

// sharpness
export const setSharpnessValueCmd = 10208;

// exposure
export const setExposureModeCmd = 10001;
export const setExposureValueCmd = 10003;
export const exposureTelephotoModeAuto = 0;
export const exposureWideangleModeAuto = 3;

// gain
export const setGainModeCmd = 10004;
export const setGainValueCmd = 10005;

// autofocus
export const autofocusCmd = 10211;
const autofocusGlobal = 0;
export const autofocusArea = 1;

// whitebalance
export const setWhiteBalanceModeCmd = 10212;
export const setWhiteBalanceScenceCmd = 10213;
const whiteBalanceScenesIDValue = {
  0: "incandescent lamp",
  1: "fluorescent lamp",
  2: "warm fluorescent lamp",
  3: "sunlight",
  4: "overcast sky",
  5: "evening twilight",
  6: "shadow",
};
export const whiteBalanceScenesValueID = {
  "incandescent lamp": 0,
  "fluorescent lamp": 1,
  "warm fluorescent lamp": 2,
  sunlight: 3,
  "overcast sky": 4,
  "evening twilight": 5,
  shadow: 6,
};
export const setWhiteBalanceColorCmd = 10214;

// IR
export const setIRCmd = 10203;
export const IRCut = 0;
const IRPass = 3;

// ===============
// 3.4 status
// ===============

// telephoto
export const statusTelephotoCmd = 10215;
export const statusIRTelephotoCmd = 10216;
export const statusWorkingStateTelephotoCmd = 10022;

// wideangle
export const statusWideangleCmd = 10217;

// ===============
// 4.1 Astro
// ===============

// goto
export const calibrateGotoCmd = 11205;
export const startGotoCmd = 11203;

const planetsValueId = {
  Mercury: 0,
  Venus: 1,
  Mars: 2,
  Jupiter: 3,
  Saturn: 4,
  Uranus: 5,
  Neptune: 6,
  Moon: 7,
};

const planetsIdValue = {
  0: "Mercury",
  1: "Venus",
  2: "Mars",
  3: "Jupiter",
  4: "Saturn",
  5: "Uranus",
  6: "Neptune",
  7: "Moon",
};

// RAW astro photo
export const takeAstroPhotoCmd = 10011;
export const stopAstroPhotoCmd = 10015;

export const binning1x1 = 0;
export const binning2x2 = 1;

const fileFits = 0;
export const fileTiff = 1;

const numberRawImagesCmd = 10014;
const numberSuperImposedImages = 10023;

// raw preview
export const setRAWPreviewCmd = 10020;
export const rawPreviewContinousSuperimpose = 0;
const rawPreviewSingle15 = 1;
const rawPreviewSingleComposite = 2;

// astro dark frames
export const takeAstroDarkFramesCmd = 10026;
export const darkGainDefault = 65528;

// query shot field
export const queryShotFieldCmd = 10027;

// ===============
// 4.2 tracking
// ===============

export const traceInitCmd = 11200;
export const startTrackingCmd = 11201;
export const stopTrackingCmd = 11202;

// ===============
// 4.3 panoromic
// ===============

export const startPanoCmd = 10103;
export const stopPanoCmd = 10106;

// ===============
// 5 motion control
// ===============

export const startMotionCmd = 10100;
export const continuous_mode = 1;
export const pulse_mode = 2;

export const stopMotionCmd = 10101;

export const setSpeedCmd = 10107;
export const speedDecelerate = 0;
export const speedAccelerate = 1;

export const setDirectionCmd = 10108;
const anticlockwise = 0;
const clockwise = 1;

export const setSubdivideCmd = 10109;

export const spinMotor = 1;
export const pitchMotor = 2;

// ===============
// 7.1 system status
// ===============

const systemStatusCmd = 11407;

// ===============
// 7.2 microsd card status
// ===============

const microsdStatusCmd = 11405;
const microsdAvailableCmd = 11409;

// ===============
// 7.4 dwarf status
// ===============

const dwarfSoftwareVersionCmd = 11410;
const dwarfChargingStatusCmd = 11011;

// ===============
// 7.11 shut down
// ===============

export const shutDownCmd = 11004;
