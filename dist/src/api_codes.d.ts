/** @module api_codes */
export const DwarfIP: "192.168.88.1";
export function wsURL(IP: string): string;
export function wideangleURL(IP: string): string;
export function telephotoURL(IP: string): string;
export function rawPreviewURL(IP: string): string;
export function utcURL(IP: string): string;
export const turnOnCameraCmd: 10000;
export const turnOffCameraCmd: 10017;
export const telephotoCamera: 0;
export const wideangleCamera: 1;
export const previewImageQuality: 10016;
export const takePhotoCmd: 10006;
export const photoSingleShot: 0;
export const photoContinuous: 1;
export const startRecordingCmd: 10007;
export const stopRecordingCmd: 10009;
export const startTimelapseCmd: 10018;
export const stopTimelapseCmd: 10019;
export const modeAuto: 0;
export const modeManual: 1;
export const setBrightnessValueCmd: 10204;
export const setContrastValueCmd: 10205;
export const setSaturationValueCmd: 10206;
export const setHueValueCmd: 10207;
export const setSharpnessValueCmd: 10208;
export const setExposureModeCmd: 10001;
export const setExposureValueCmd: 10003;
export const exposureTelephotoModeAuto: 0;
export const exposureWideangleModeAuto: 3;
export const setGainModeCmd: 10004;
export const setGainValueCmd: 10005;
export const autofocusCmd: 10211;
export const autofocusGlobal: 0;
export const autofocusArea: 1;
export const setWhiteBalanceModeCmd: 10212;
export const setWhiteBalanceScenceCmd: 10213;
export const whiteBalanceScenesIDValue: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
};
export const whiteBalanceScenesValueID: {
    "incandescent lamp": number;
    "fluorescent lamp": number;
    "warm fluorescent lamp": number;
    sunlight: number;
    "overcast sky": number;
    "evening twilight": number;
    shadow: number;
};
export const setWhiteBalanceColorCmd: 10214;
export const setIRCmd: 10203;
export const IRCut: 0;
export const IRPass: 3;
export const statusTelephotoCmd: 10215;
export const statusIRTelephotoCmd: 10216;
export const statusWorkingStateTelephotoCmd: 10022;
export const statusWideangleCmd: 10217;
export const calibrateGotoCmd: 11205;
export const startGotoCmd: 11203;
export namespace planetsValueId {
    let Mercury: number;
    let Venus: number;
    let Mars: number;
    let Jupiter: number;
    let Saturn: number;
    let Uranus: number;
    let Neptune: number;
    let Moon: number;
}
export const planetsIdValue: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
};
export const takeAstroPhotoCmd: 10011;
export const stopAstroPhotoCmd: 10015;
export const binning1x1: 0;
export const binning2x2: 1;
export const fileFits: 0;
export const fileTiff: 1;
export const numberRawImagesCmd: 10014;
export const numberSuperImposedImages: 10023;
export const setRAWPreviewCmd: 10020;
export const rawPreviewContinousSuperimpose: 0;
export const rawPreviewSingle15: 1;
export const rawPreviewSingleComposite: 2;
export const takeAstroDarkFramesCmd: 10026;
export const darkGainDefault: 65528;
export const queryShotFieldCmd: 10027;
export const traceInitCmd: 11200;
export const startTrackingCmd: 11201;
export const stopTrackingCmd: 11202;
export const startPanoCmd: 10103;
export const stopPanoCmd: 10106;
export const startMotionCmd: 10100;
export const continuous_mode: 1;
export const pulse_mode: 2;
export const stopMotionCmd: 10101;
export const setSpeedCmd: 10107;
export const speedDecelerate: 0;
export const speedAccelerate: 1;
export const setDirectionCmd: 10108;
export const anticlockwise: 0;
export const clockwise: 1;
export const setSubdivideCmd: 10109;
export const spinMotor: 1;
export const pitchMotor: 2;
export const systemStatusCmd: 11407;
export const microsdStatusCmd: 11405;
export const microsdAvailableCmd: 11409;
export const dwarfSoftwareVersionCmd: 11410;
export const dwarfChargingStatusCmd: 11011;
export const shutDownCmd: 11004;
//# sourceMappingURL=api_codes.d.ts.map