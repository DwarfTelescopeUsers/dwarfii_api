/**
 * 4.1.1 UTC+0 time
 * @param {string} IP
 * @returns {string}
 */
export function formatUtcUrl(IP: string): string;
/**
 * 4.1.2 correction
 * @param {number} latitude
 * @param {number} longitude
 * @returns {Object}
 */
export function calibrateGoto(latitude: number, longitude: number): any;
/**
 * 4.1.3 Start goto
 * @param {number|null} planet
 * @param {number} rightAscension
 * @param {number} declination
 * @param {number} latitude
 * @param {number} longitude
 * @returns {Object}
 */
export function startGoto(planet: number | null, rightAscension: number, declination: number, latitude: number, longitude: number): any;
/**
 * 4.1.4 Take raw pictures
 * @param {number} rightAscension
 * @param {number} declination
 * @param {number} exposureTime
 * @param {number} gain
 * @param {number} binning
 * @param {number} count
 * @param {number} fileFormat
 * @returns {Object}
 */
export function takeAstroPhoto(rightAscension: number, declination: number, exposureTime: number, gain: number, binning?: number, count?: number, fileFormat?: number): any;
/**
 * 4.1.7 Stop taking RAW images
 * @returns {Object}
 */
export function stopAstroPhoto(): any;
/**
 * 4.1.9 Switch the RAW preview source
 * @param {number} source
 * @returns {Object}
 */
export function updateRawPreviewSource(source?: number): any;
/**
 * 4.1.10 Taking dark field
 * @param {number} binning
 * @param {number} exposure
 * @param {number} count
 * @returns {Object}
 */
export function takeAstroDarks(binning: number, exposure: number, count?: number): any;
/**
 * 4.1.11 Query the shot field
 * @param {number} binning
 * @returns {Object}
 */
export function queryShotField(binning: number): any;
//# sourceMappingURL=astro.d.ts.map