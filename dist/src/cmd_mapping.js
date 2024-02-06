// Access the class name associated with a command
// const openCameraClass = cmdMapping[10000];
// console.log(openCameraClass); // diplay "ReqOpenCamera"
export const cmdMapping = {
    10000: "ReqOpenCamera", // Turn on the camera
    10001: "ReqCloseCamera", // Turn off the camera
    10002: "ReqPhoto", // Take photos
    10003: "ReqBurstPhoto", // Start continuous shooting
    10004: "ReqStopBurstPhoto", // Stop continuous shooting
    10005: "ReqStartRecord", // Start recording
    10006: "ReqStopRecord", // Stop recording
    10007: "ReqSetExpMode", // Set exposure mode
    10008: "ReqGetExpMode", // Acquire exposure mode
    10009: "ReqSetExp", // Set exposure value
    10010: "ReqGetExp", // Get exposure value
    10011: "ReqSetGainMode", // Set gain mode
    10012: "ReqGetGainMode", // Acquisition gain mode
    10013: "ReqSetGain", // Set gain value
    10014: "ReqGetGain", // Get gain value
    10015: "ReqSetBrightness", // Set brightness
    10016: "ReqGetBrightness", // Acquire brightness
    10017: "ReqSetContrast", // Set contrast
    10018: "ReqGetContrast", // Get contrast
    10019: "ReqSetSaturation", // Set saturation
    10020: "ReqGetSaturation", // Acquire saturation
    10021: "ReqSetHue", // Set tone
    10022: "ReqGetHue", // Get hue
    10023: "ReqSetSharpness", // Set sharpness
    10024: "ReqGetSharpness", // Acquire sharpness
    10025: "ReqSetWBMode", // Set white balance mode
    10026: "ReqGetWBMode", // Acquire white balance mode
    10027: "ReqSetWBSence", // Set white balance scene
    10028: "ReqGetWBSence", // Get white balance scene
    10029: "ReqSetWBCT", // Set the white balance color temperature value
    10030: "ReqGetWBCT", // Obtain the white balance color temperature value
    10031: "ReqSetIrCut", // Set IRCUT
    10032: "ReqGetIrcut", // Get IRCUT status
    10033: "ReqStartTimeLapse", // Start time-lapse photography
    10034: "ReqStopTimeLapse", // Stop time-lapse photography
    10035: "ReqSetAllParams", // Set all parameters
    10036: "ReqGetAllParams", // Get all parameters
    10037: "ReqSetFeatureParams", // Set feature parameters
    10038: "ReqGetAllFeatureParams", // Get all feature parameters
    10039: "ReqGetSystemWorkingState", // Get the working status of the whole machine
    10040: "ReqSetJpgQuality", // Set jpg preview quality
    11000: "ReqStartCalibration", // Start calibration
    11001: "ReqStopCalibration", // Stop calibration
    11002: "ReqGotoDSO", // Start GOTO Deep Space Object
    11003: "ReqGotoSolarSystem", // Start GOTO Solar System Target
    11004: "ReqStopGoto", // Stop GOTO
    11005: "ReqCaptureRawLiveStacking", // Start stacking
    11006: "ReqStopCaptureRawLiveStacking", // Stop overlay
    11007: "ReqCaptureDarkFrame", // Start shooting dark scenes
    11008: "ReqStopCaptureDarkFrame", // Stop filming darkfield
    11009: "ReqCheckDarkFrame", // Inquire about the dark field that has been shot
    11010: "ReqGoLive", // GO LIVE interface
    11011: "ReqTrackSpecialTarget", // Start tracking the sun and moon
    11012: "ReqStopTrackSpecialTarget", // Stop tracking the sun and moon
    12000: "ReqOpenCamera", // Turn on the camera
    12001: "ReqCloseCamera", // Turn off the camera
    12002: "ReqSetExpMode", // Set exposure mode
    12003: "ReqGetExpMode", // Acquire exposure mode
    12004: "ReqSetExp", // Set exposure value
    12005: "ReqGetExp", // Get exposure value
    12006: "ReqSetGain", // Set gain
    12007: "ReqGetGain", // Acquisition gain
    12008: "ReqSetBrightness", // Set brightness
    12009: "ReqGetBrightness", // Acquire brightness
    12010: "ReqSetContrast", // Set contrast
    12011: "ReqGetContrast", // Get contrast
    12012: "ReqSetSaturation", // Set saturation
    12013: "ReqGetSaturation", // Acquire saturation
    12014: "ReqSetHue", // Set tone
    12015: "ReqGetHue", // Get hue
    12016: "ReqSetSharpness", // Set sharpness
    12017: "ReqGetSharpness", // Acquire sharpness
    12018: "ReqSetWBMode", // Set white balance mode
    12019: "ReqGetWBMode", // Acquire white balance mode
    12020: "ReqSetWBCT", // Set white balance color temperature
    12021: "ReqGetWBCT", // Obtain white balance color temperature
    12022: "ReqPhoto", // Take photos
    12023: "ReqBurstPhoto", // Continuous shooting
    12024: "ReqStopBurstPhoto", // Stop continuous shooting
    12025: "ReqStartTimeLapse", // Start time-lapse photography
    12026: "ReqStopTimeLapse", // Stop time-lapse photography
    12027: "ReqSetAllParams", // Get all parameters
    12028: "ReqGetAllParams", // Set all parameters
    13000: "ReqSetTime", // Set the system time
    13001: "ReqSetTimezone", // Set the time zone
    13002: "ReqSetMtpMode", // Set MTP mode
    13003: "ReqSetCpuMode", // Set CPU mode
    13500: "ReqOpenRgb", // Turn on the ring light
    13501: "ReqCloseRgb", // Turn off the ring light
    13502: "ReqPowerDown", // Shut down
    13503: "ReqOpenPowerInd", // Turn on the battery indicator
    13504: "ReqClosePowerInd", // Turn off battery indicator =
    13505: "ReqReboot", // Restart
    15000: "ReqNormalAutoFocus", // Normal mode autofocus
    15001: "ReqManualSingleStepFocus", // Manual single-step focusing
    15002: "ReqManualContinuFocus", // Start manual continuous focus
    15003: "ReqStopManualContinuFocus", // Stop manual continuous focus
    15004: "ReqAstroAutoFocus", // Start astronomical autofocus
    15005: "ReqStopAstroAutoFocus", // Stop astronomical autofocus
};
export const responseMapping = {
    10000: "ComResponse", // Turn on the camera
    10001: "ComResponse", // Turn off the camera
    10002: "ComResponse", // Take photos
    10003: "ComResponse", // Start continuous shooting
    10004: "ComResponse", // Stop continuous shooting
    10005: "ComResponse", // Start recording
    10006: "ComResponse", // Stop recording
    10007: "ComResponse", // Set exposure mode
    10008: "ComResponse", // Acquire exposure mode
    10009: "ComResponse", // Set exposure value
    10010: "ComResponse", // Get exposure value
    10011: "ComResponse", // Set gain mode
    10012: "ComResponse", // Acquisition gain mode
    10013: "ComResponse", // Set gain value
    10014: "ComResponse", // Get gain value
    10015: "ComResponse", // Set brightness
    10016: "ComResponse", // Acquire brightness
    10017: "ComResponse", // Set contrast
    10018: "ComResponse", // Get contrast
    10019: "ComResponse", // Set saturation
    10020: "ComResponse", // Acquire saturation
    10021: "ComResponse", // Set tone
    10022: "ComResponse", // Get hue
    10023: "ComResponse", // Set sharpness
    10024: "ComResponse", // Acquire sharpness
    10025: "ComResponse", // Set white balance mode
    10026: "ComResponse", // Acquire white balance mode
    10027: "ComResponse", // Set white balance scene
    10028: "ComResponse", // Get white balance scene
    10029: "ComResponse", // Set the white balance color temperature value
    10030: "ComResponse", // Obtain the white balance color temperature value
    10031: "ComResponse", // Set IRCUT
    10032: "ComResponse", // Get IRCUT status
    10033: "ComResponse", // Start time-lapse photography
    10034: "ComResponse", // Stop time-lapse photography
    10035: "ComResponse", // Set all parameters
    10036: "ResGetAllParams", // Get all parameters
    10037: "ComResponse", // Set feature parameters
    10038: "ResGetAllFeatureParams", // Get all feature parameters
    10039: "ComResponse", // Get the working status of the whole machine
    10040: "ComResponse", // Set jpg preview quality
    11000: "ComResponse", // Start calibration
    11001: "ComResponse", // Stop calibration
    11002: "ComResponse", // Start GOTO Deep Space Object
    11003: "ComResponse", // Start GOTO Solar System Target
    11004: "ComResponse", // Stop GOTO
    11005: "ComResponse", // Start stacking
    11006: "ComResponse", // Stop overlay
    11007: "ComResponse", // Start shooting dark scenes
    11008: "ComResponse", // Stop filming darkfield
    11009: "ResCheckDarkFrame", // Inquire about the dark field that has been shot
    11010: "ComResponse", // GO LIVE interface
    11011: "ComResponse", // Start tracking the sun and moon
    11012: "ComResponse", // Stop tracking the sun and moon
    12000: "ComResponse", // Turn on the camera
    12001: "ComResponse", // Turn off the camera
    12002: "ComResponse", // Set exposure mode
    12003: "ComResponse", // Acquire exposure mode
    12004: "ComResponse", // Set exposure value
    12005: "ComResponse", // Get exposure value
    12006: "ComResponse", // Set gain
    12007: "ComResponse", // Acquisition gain
    12008: "ComResponse", // Set brightness
    12009: "ComResponse", // Acquire brightness
    12010: "ComResponse", // Set contrast
    12011: "ComResponse", // Get contrast
    12012: "ComResponse", // Set saturation
    12013: "ComResponse", // Acquire saturation
    12014: "ComResponse", // Set tone
    12015: "ComResponse", // Get hue
    12016: "ComResponse", // Set sharpness
    12017: "ComResponse", // Acquire sharpness
    12018: "ComResponse", // Set white balance mode
    12019: "ComResponse", // Acquire white balance mode
    12020: "ComResponse", // Set white balance color temperature
    12021: "ComResponse", // Obtain white balance color temperature
    12022: "ComResponse", // Take photos
    12023: "ComResponse", // Continuous shooting
    12024: "ComResponse", // Stop continuous shooting
    12025: "ComResponse", // Start time-lapse photography
    12026: "ComResponse", // Stop time-lapse photography
    12027: "ResGetAllParams", // Get all parameters
    12028: "ComResponse", // Set all parameters
    13000: "ComResponse", // Set the system time
    13001: "ComResponse", // Set the time zone
    13002: "ComResponse", // Set MTP mode
    13003: "ComResponse", // Set CPU mode
    13500: "ComResponse", // Turn on the ring light
    13501: "ComResponse", // Turn off the ring light
    13502: "ComResponse", // Shut down
    13503: "ComResponse", // Turn on the battery indicator
    13504: "ComResponse", // Turn off battery indicator =
    13505: "ComResponse", // Restart
    15000: "ComResponse", // Normal mode autofocus
    15001: "ComResponse", // Manual single-step focusing
    15002: "ComResponse", // Start manual continuous focus
    15003: "ComResponse", // Stop manual continuous focus
    15004: "ComResponse", // Start astronomical autofocus
    15005: "ComResponse", // Stop astronomical autofocus
};
export const notifyMapping = {
    15200: "ResNotifyPictureMatching", // Telephoto wide-angle image matching
    15201: "ComResWithInt", // Battery Notification
    15202: "ComResWithInt", // Charge status notification
    15203: "ResNotifySDcardInfo", // SD card capacity notification
    15204: "ResNotifyRecordTime", // Recording time
    15205: "ResNotifyTimeLapseOutTime", // Telephoto time-lapse photography time
    15206: "ResNotifyOperationState", // Dark field shooting state
    15207: "ResNotifyProgressCaptureRawDark", // Dark field shooting progress
    15208: "ResNotifyOperationState", // Astronomical overlay shooting status
    15209: "ResNotifyProgressCaptureRawLiveStacking", // Astronomical overlay shooting progress
    15210: "ResNotifyStateAstroCalibration", // Astronomical calibration status
    15211: "ResNotifyStateAstroGoto", // Astronomical GOTO status
    15212: "ResNotifyStateAstroTracking", // Astronomical tracking status
    15213: "ResNotifyParam", // Telephoto parameter echo
    15214: "ResNotifyParam", // Wide-angle parametric echo
    15215: "ResNotifyCamFunctionState", // Telephoto functional status
    15216: "ResNotifyCamFunctionState", // Wide-angle functional status
    15217: "ResNotifyParam", // Feature parameter echo
    15218: "ResNotifyBurstProgress", // Telephoto continuous shooting progress
    15219: "ResNotifyPanoramaProgress", // Telephoto panoramic shooting progress
    15220: "ResNotifyBurstProgress", // Wide-angle continuous shooting progress
    15221: "ResNotifyRgbState", // RGB Ring Light Status
    15222: "ResNotifyPowerIndState", // Power indicator status
    15223: "ResNotifyHostSlaveMode", // Leader/follower mode notification
    15224: "ResNotifyMTPState", // MTP mode notification
    15225: "ResNotifyTrackResult", // Tracking result notification
    15226: "ResNotifyTimeLapseOutTime", // Wide-angle time-lapse photography time
    15227: "ResNotifyCPUMode", // CPU mode
    15228: "ResNotifyStateAstroTrackingSpecial", // Sun and moon tracking status
    15229: "ResNotifyPowerOff", // Shutdown notification
};
