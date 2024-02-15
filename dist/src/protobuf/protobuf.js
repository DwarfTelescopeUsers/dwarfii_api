/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
// @ts-nocheck
import $protobuf from "protobufjs/minimal.js";
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
$root.ReqStartCalibration = (function () {
    /**
     * Properties of a ReqStartCalibration.
     * @exports IReqStartCalibration
     * @interface IReqStartCalibration
     */
    /**
     * Constructs a new ReqStartCalibration.
     * @exports ReqStartCalibration
     * @classdesc Represents a ReqStartCalibration.
     * @implements IReqStartCalibration
     * @constructor
     * @param {IReqStartCalibration=} [properties] Properties to set
     */
    function ReqStartCalibration(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStartCalibration instance using the specified properties.
     * @function create
     * @memberof ReqStartCalibration
     * @static
     * @param {IReqStartCalibration=} [properties] Properties to set
     * @returns {ReqStartCalibration} ReqStartCalibration instance
     */
    ReqStartCalibration.create = function create(properties) {
        return new ReqStartCalibration(properties);
    };
    /**
     * Encodes the specified ReqStartCalibration message. Does not implicitly {@link ReqStartCalibration.verify|verify} messages.
     * @function encode
     * @memberof ReqStartCalibration
     * @static
     * @param {IReqStartCalibration} message ReqStartCalibration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStartCalibration.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStartCalibration message, length delimited. Does not implicitly {@link ReqStartCalibration.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStartCalibration
     * @static
     * @param {IReqStartCalibration} message ReqStartCalibration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStartCalibration.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStartCalibration message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStartCalibration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStartCalibration} ReqStartCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStartCalibration.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStartCalibration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStartCalibration message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStartCalibration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStartCalibration} ReqStartCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStartCalibration.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStartCalibration message.
     * @function verify
     * @memberof ReqStartCalibration
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStartCalibration.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStartCalibration message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStartCalibration
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStartCalibration} ReqStartCalibration
     */
    ReqStartCalibration.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStartCalibration)
            return object;
        return new $root.ReqStartCalibration();
    };
    /**
     * Creates a plain object from a ReqStartCalibration message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStartCalibration
     * @static
     * @param {ReqStartCalibration} message ReqStartCalibration
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStartCalibration.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStartCalibration to JSON.
     * @function toJSON
     * @memberof ReqStartCalibration
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStartCalibration.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStartCalibration
     * @function getTypeUrl
     * @memberof ReqStartCalibration
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStartCalibration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStartCalibration";
    };
    return ReqStartCalibration;
})();
$root.ReqStopCalibration = (function () {
    /**
     * Properties of a ReqStopCalibration.
     * @exports IReqStopCalibration
     * @interface IReqStopCalibration
     */
    /**
     * Constructs a new ReqStopCalibration.
     * @exports ReqStopCalibration
     * @classdesc Represents a ReqStopCalibration.
     * @implements IReqStopCalibration
     * @constructor
     * @param {IReqStopCalibration=} [properties] Properties to set
     */
    function ReqStopCalibration(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStopCalibration instance using the specified properties.
     * @function create
     * @memberof ReqStopCalibration
     * @static
     * @param {IReqStopCalibration=} [properties] Properties to set
     * @returns {ReqStopCalibration} ReqStopCalibration instance
     */
    ReqStopCalibration.create = function create(properties) {
        return new ReqStopCalibration(properties);
    };
    /**
     * Encodes the specified ReqStopCalibration message. Does not implicitly {@link ReqStopCalibration.verify|verify} messages.
     * @function encode
     * @memberof ReqStopCalibration
     * @static
     * @param {IReqStopCalibration} message ReqStopCalibration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopCalibration.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStopCalibration message, length delimited. Does not implicitly {@link ReqStopCalibration.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStopCalibration
     * @static
     * @param {IReqStopCalibration} message ReqStopCalibration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopCalibration.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStopCalibration message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStopCalibration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStopCalibration} ReqStopCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopCalibration.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStopCalibration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStopCalibration message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStopCalibration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStopCalibration} ReqStopCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopCalibration.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStopCalibration message.
     * @function verify
     * @memberof ReqStopCalibration
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStopCalibration.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStopCalibration message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStopCalibration
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStopCalibration} ReqStopCalibration
     */
    ReqStopCalibration.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStopCalibration)
            return object;
        return new $root.ReqStopCalibration();
    };
    /**
     * Creates a plain object from a ReqStopCalibration message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStopCalibration
     * @static
     * @param {ReqStopCalibration} message ReqStopCalibration
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStopCalibration.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStopCalibration to JSON.
     * @function toJSON
     * @memberof ReqStopCalibration
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStopCalibration.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStopCalibration
     * @function getTypeUrl
     * @memberof ReqStopCalibration
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStopCalibration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStopCalibration";
    };
    return ReqStopCalibration;
})();
$root.ReqGotoDSO = (function () {
    /**
     * Properties of a ReqGotoDSO.
     * @exports IReqGotoDSO
     * @interface IReqGotoDSO
     * @property {number|null} [ra] ReqGotoDSO ra
     * @property {number|null} [dec] ReqGotoDSO dec
     * @property {string|null} [targetName] ReqGotoDSO targetName
     */
    /**
     * Constructs a new ReqGotoDSO.
     * @exports ReqGotoDSO
     * @classdesc Represents a ReqGotoDSO.
     * @implements IReqGotoDSO
     * @constructor
     * @param {IReqGotoDSO=} [properties] Properties to set
     */
    function ReqGotoDSO(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqGotoDSO ra.
     * @member {number} ra
     * @memberof ReqGotoDSO
     * @instance
     */
    ReqGotoDSO.prototype.ra = 0;
    /**
     * ReqGotoDSO dec.
     * @member {number} dec
     * @memberof ReqGotoDSO
     * @instance
     */
    ReqGotoDSO.prototype.dec = 0;
    /**
     * ReqGotoDSO targetName.
     * @member {string} targetName
     * @memberof ReqGotoDSO
     * @instance
     */
    ReqGotoDSO.prototype.targetName = "";
    /**
     * Creates a new ReqGotoDSO instance using the specified properties.
     * @function create
     * @memberof ReqGotoDSO
     * @static
     * @param {IReqGotoDSO=} [properties] Properties to set
     * @returns {ReqGotoDSO} ReqGotoDSO instance
     */
    ReqGotoDSO.create = function create(properties) {
        return new ReqGotoDSO(properties);
    };
    /**
     * Encodes the specified ReqGotoDSO message. Does not implicitly {@link ReqGotoDSO.verify|verify} messages.
     * @function encode
     * @memberof ReqGotoDSO
     * @static
     * @param {IReqGotoDSO} message ReqGotoDSO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGotoDSO.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ra != null && Object.hasOwnProperty.call(message, "ra"))
            writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.ra);
        if (message.dec != null && Object.hasOwnProperty.call(message, "dec"))
            writer.uint32(/* id 2, wireType 1 =*/ 17).double(message.dec);
        if (message.targetName != null &&
            Object.hasOwnProperty.call(message, "targetName"))
            writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.targetName);
        return writer;
    };
    /**
     * Encodes the specified ReqGotoDSO message, length delimited. Does not implicitly {@link ReqGotoDSO.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGotoDSO
     * @static
     * @param {IReqGotoDSO} message ReqGotoDSO message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGotoDSO.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGotoDSO message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGotoDSO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGotoDSO} ReqGotoDSO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGotoDSO.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGotoDSO();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.ra = reader.double();
                    break;
                }
                case 2: {
                    message.dec = reader.double();
                    break;
                }
                case 3: {
                    message.targetName = reader.string();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGotoDSO message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGotoDSO
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGotoDSO} ReqGotoDSO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGotoDSO.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGotoDSO message.
     * @function verify
     * @memberof ReqGotoDSO
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGotoDSO.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ra != null && message.hasOwnProperty("ra"))
            if (typeof message.ra !== "number")
                return "ra: number expected";
        if (message.dec != null && message.hasOwnProperty("dec"))
            if (typeof message.dec !== "number")
                return "dec: number expected";
        if (message.targetName != null && message.hasOwnProperty("targetName"))
            if (!$util.isString(message.targetName))
                return "targetName: string expected";
        return null;
    };
    /**
     * Creates a ReqGotoDSO message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGotoDSO
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGotoDSO} ReqGotoDSO
     */
    ReqGotoDSO.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGotoDSO)
            return object;
        var message = new $root.ReqGotoDSO();
        if (object.ra != null)
            message.ra = Number(object.ra);
        if (object.dec != null)
            message.dec = Number(object.dec);
        if (object.targetName != null)
            message.targetName = String(object.targetName);
        return message;
    };
    /**
     * Creates a plain object from a ReqGotoDSO message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGotoDSO
     * @static
     * @param {ReqGotoDSO} message ReqGotoDSO
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGotoDSO.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ra = 0;
            object.dec = 0;
            object.targetName = "";
        }
        if (message.ra != null && message.hasOwnProperty("ra"))
            object.ra =
                options.json && !isFinite(message.ra) ? String(message.ra) : message.ra;
        if (message.dec != null && message.hasOwnProperty("dec"))
            object.dec =
                options.json && !isFinite(message.dec)
                    ? String(message.dec)
                    : message.dec;
        if (message.targetName != null && message.hasOwnProperty("targetName"))
            object.targetName = message.targetName;
        return object;
    };
    /**
     * Converts this ReqGotoDSO to JSON.
     * @function toJSON
     * @memberof ReqGotoDSO
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGotoDSO.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGotoDSO
     * @function getTypeUrl
     * @memberof ReqGotoDSO
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGotoDSO.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGotoDSO";
    };
    return ReqGotoDSO;
})();
$root.ReqGotoSolarSystem = (function () {
    /**
     * Properties of a ReqGotoSolarSystem.
     * @exports IReqGotoSolarSystem
     * @interface IReqGotoSolarSystem
     * @property {number|null} [index] ReqGotoSolarSystem index
     * @property {number|null} [lon] ReqGotoSolarSystem lon
     * @property {number|null} [lat] ReqGotoSolarSystem lat
     * @property {string|null} [targetName] ReqGotoSolarSystem targetName
     */
    /**
     * Constructs a new ReqGotoSolarSystem.
     * @exports ReqGotoSolarSystem
     * @classdesc Represents a ReqGotoSolarSystem.
     * @implements IReqGotoSolarSystem
     * @constructor
     * @param {IReqGotoSolarSystem=} [properties] Properties to set
     */
    function ReqGotoSolarSystem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqGotoSolarSystem index.
     * @member {number} index
     * @memberof ReqGotoSolarSystem
     * @instance
     */
    ReqGotoSolarSystem.prototype.index = 0;
    /**
     * ReqGotoSolarSystem lon.
     * @member {number} lon
     * @memberof ReqGotoSolarSystem
     * @instance
     */
    ReqGotoSolarSystem.prototype.lon = 0;
    /**
     * ReqGotoSolarSystem lat.
     * @member {number} lat
     * @memberof ReqGotoSolarSystem
     * @instance
     */
    ReqGotoSolarSystem.prototype.lat = 0;
    /**
     * ReqGotoSolarSystem targetName.
     * @member {string} targetName
     * @memberof ReqGotoSolarSystem
     * @instance
     */
    ReqGotoSolarSystem.prototype.targetName = "";
    /**
     * Creates a new ReqGotoSolarSystem instance using the specified properties.
     * @function create
     * @memberof ReqGotoSolarSystem
     * @static
     * @param {IReqGotoSolarSystem=} [properties] Properties to set
     * @returns {ReqGotoSolarSystem} ReqGotoSolarSystem instance
     */
    ReqGotoSolarSystem.create = function create(properties) {
        return new ReqGotoSolarSystem(properties);
    };
    /**
     * Encodes the specified ReqGotoSolarSystem message. Does not implicitly {@link ReqGotoSolarSystem.verify|verify} messages.
     * @function encode
     * @memberof ReqGotoSolarSystem
     * @static
     * @param {IReqGotoSolarSystem} message ReqGotoSolarSystem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGotoSolarSystem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.index);
        if (message.lon != null && Object.hasOwnProperty.call(message, "lon"))
            writer.uint32(/* id 2, wireType 1 =*/ 17).double(message.lon);
        if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
            writer.uint32(/* id 3, wireType 1 =*/ 25).double(message.lat);
        if (message.targetName != null &&
            Object.hasOwnProperty.call(message, "targetName"))
            writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.targetName);
        return writer;
    };
    /**
     * Encodes the specified ReqGotoSolarSystem message, length delimited. Does not implicitly {@link ReqGotoSolarSystem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGotoSolarSystem
     * @static
     * @param {IReqGotoSolarSystem} message ReqGotoSolarSystem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGotoSolarSystem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGotoSolarSystem message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGotoSolarSystem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGotoSolarSystem} ReqGotoSolarSystem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGotoSolarSystem.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGotoSolarSystem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.index = reader.int32();
                    break;
                }
                case 2: {
                    message.lon = reader.double();
                    break;
                }
                case 3: {
                    message.lat = reader.double();
                    break;
                }
                case 4: {
                    message.targetName = reader.string();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGotoSolarSystem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGotoSolarSystem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGotoSolarSystem} ReqGotoSolarSystem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGotoSolarSystem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGotoSolarSystem message.
     * @function verify
     * @memberof ReqGotoSolarSystem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGotoSolarSystem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.lon != null && message.hasOwnProperty("lon"))
            if (typeof message.lon !== "number")
                return "lon: number expected";
        if (message.lat != null && message.hasOwnProperty("lat"))
            if (typeof message.lat !== "number")
                return "lat: number expected";
        if (message.targetName != null && message.hasOwnProperty("targetName"))
            if (!$util.isString(message.targetName))
                return "targetName: string expected";
        return null;
    };
    /**
     * Creates a ReqGotoSolarSystem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGotoSolarSystem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGotoSolarSystem} ReqGotoSolarSystem
     */
    ReqGotoSolarSystem.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGotoSolarSystem)
            return object;
        var message = new $root.ReqGotoSolarSystem();
        if (object.index != null)
            message.index = object.index | 0;
        if (object.lon != null)
            message.lon = Number(object.lon);
        if (object.lat != null)
            message.lat = Number(object.lat);
        if (object.targetName != null)
            message.targetName = String(object.targetName);
        return message;
    };
    /**
     * Creates a plain object from a ReqGotoSolarSystem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGotoSolarSystem
     * @static
     * @param {ReqGotoSolarSystem} message ReqGotoSolarSystem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGotoSolarSystem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.index = 0;
            object.lon = 0;
            object.lat = 0;
            object.targetName = "";
        }
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.lon != null && message.hasOwnProperty("lon"))
            object.lon =
                options.json && !isFinite(message.lon)
                    ? String(message.lon)
                    : message.lon;
        if (message.lat != null && message.hasOwnProperty("lat"))
            object.lat =
                options.json && !isFinite(message.lat)
                    ? String(message.lat)
                    : message.lat;
        if (message.targetName != null && message.hasOwnProperty("targetName"))
            object.targetName = message.targetName;
        return object;
    };
    /**
     * Converts this ReqGotoSolarSystem to JSON.
     * @function toJSON
     * @memberof ReqGotoSolarSystem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGotoSolarSystem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGotoSolarSystem
     * @function getTypeUrl
     * @memberof ReqGotoSolarSystem
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGotoSolarSystem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGotoSolarSystem";
    };
    return ReqGotoSolarSystem;
})();
$root.ReqStopGoto = (function () {
    /**
     * Properties of a ReqStopGoto.
     * @exports IReqStopGoto
     * @interface IReqStopGoto
     */
    /**
     * Constructs a new ReqStopGoto.
     * @exports ReqStopGoto
     * @classdesc Represents a ReqStopGoto.
     * @implements IReqStopGoto
     * @constructor
     * @param {IReqStopGoto=} [properties] Properties to set
     */
    function ReqStopGoto(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStopGoto instance using the specified properties.
     * @function create
     * @memberof ReqStopGoto
     * @static
     * @param {IReqStopGoto=} [properties] Properties to set
     * @returns {ReqStopGoto} ReqStopGoto instance
     */
    ReqStopGoto.create = function create(properties) {
        return new ReqStopGoto(properties);
    };
    /**
     * Encodes the specified ReqStopGoto message. Does not implicitly {@link ReqStopGoto.verify|verify} messages.
     * @function encode
     * @memberof ReqStopGoto
     * @static
     * @param {IReqStopGoto} message ReqStopGoto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopGoto.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStopGoto message, length delimited. Does not implicitly {@link ReqStopGoto.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStopGoto
     * @static
     * @param {IReqStopGoto} message ReqStopGoto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopGoto.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStopGoto message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStopGoto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStopGoto} ReqStopGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopGoto.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStopGoto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStopGoto message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStopGoto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStopGoto} ReqStopGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopGoto.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStopGoto message.
     * @function verify
     * @memberof ReqStopGoto
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStopGoto.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStopGoto message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStopGoto
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStopGoto} ReqStopGoto
     */
    ReqStopGoto.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStopGoto)
            return object;
        return new $root.ReqStopGoto();
    };
    /**
     * Creates a plain object from a ReqStopGoto message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStopGoto
     * @static
     * @param {ReqStopGoto} message ReqStopGoto
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStopGoto.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStopGoto to JSON.
     * @function toJSON
     * @memberof ReqStopGoto
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStopGoto.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStopGoto
     * @function getTypeUrl
     * @memberof ReqStopGoto
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStopGoto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStopGoto";
    };
    return ReqStopGoto;
})();
$root.ReqCaptureRawLiveStacking = (function () {
    /**
     * Properties of a ReqCaptureRawLiveStacking.
     * @exports IReqCaptureRawLiveStacking
     * @interface IReqCaptureRawLiveStacking
     */
    /**
     * Constructs a new ReqCaptureRawLiveStacking.
     * @exports ReqCaptureRawLiveStacking
     * @classdesc Represents a ReqCaptureRawLiveStacking.
     * @implements IReqCaptureRawLiveStacking
     * @constructor
     * @param {IReqCaptureRawLiveStacking=} [properties] Properties to set
     */
    function ReqCaptureRawLiveStacking(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqCaptureRawLiveStacking instance using the specified properties.
     * @function create
     * @memberof ReqCaptureRawLiveStacking
     * @static
     * @param {IReqCaptureRawLiveStacking=} [properties] Properties to set
     * @returns {ReqCaptureRawLiveStacking} ReqCaptureRawLiveStacking instance
     */
    ReqCaptureRawLiveStacking.create = function create(properties) {
        return new ReqCaptureRawLiveStacking(properties);
    };
    /**
     * Encodes the specified ReqCaptureRawLiveStacking message. Does not implicitly {@link ReqCaptureRawLiveStacking.verify|verify} messages.
     * @function encode
     * @memberof ReqCaptureRawLiveStacking
     * @static
     * @param {IReqCaptureRawLiveStacking} message ReqCaptureRawLiveStacking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqCaptureRawLiveStacking.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqCaptureRawLiveStacking message, length delimited. Does not implicitly {@link ReqCaptureRawLiveStacking.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqCaptureRawLiveStacking
     * @static
     * @param {IReqCaptureRawLiveStacking} message ReqCaptureRawLiveStacking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqCaptureRawLiveStacking.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqCaptureRawLiveStacking message from the specified reader or buffer.
     * @function decode
     * @memberof ReqCaptureRawLiveStacking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqCaptureRawLiveStacking} ReqCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqCaptureRawLiveStacking.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqCaptureRawLiveStacking();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqCaptureRawLiveStacking message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqCaptureRawLiveStacking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqCaptureRawLiveStacking} ReqCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqCaptureRawLiveStacking.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqCaptureRawLiveStacking message.
     * @function verify
     * @memberof ReqCaptureRawLiveStacking
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqCaptureRawLiveStacking.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqCaptureRawLiveStacking message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqCaptureRawLiveStacking
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqCaptureRawLiveStacking} ReqCaptureRawLiveStacking
     */
    ReqCaptureRawLiveStacking.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqCaptureRawLiveStacking)
            return object;
        return new $root.ReqCaptureRawLiveStacking();
    };
    /**
     * Creates a plain object from a ReqCaptureRawLiveStacking message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqCaptureRawLiveStacking
     * @static
     * @param {ReqCaptureRawLiveStacking} message ReqCaptureRawLiveStacking
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqCaptureRawLiveStacking.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqCaptureRawLiveStacking to JSON.
     * @function toJSON
     * @memberof ReqCaptureRawLiveStacking
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqCaptureRawLiveStacking.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqCaptureRawLiveStacking
     * @function getTypeUrl
     * @memberof ReqCaptureRawLiveStacking
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqCaptureRawLiveStacking.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqCaptureRawLiveStacking";
    };
    return ReqCaptureRawLiveStacking;
})();
$root.ReqStopCaptureRawLiveStacking = (function () {
    /**
     * Properties of a ReqStopCaptureRawLiveStacking.
     * @exports IReqStopCaptureRawLiveStacking
     * @interface IReqStopCaptureRawLiveStacking
     */
    /**
     * Constructs a new ReqStopCaptureRawLiveStacking.
     * @exports ReqStopCaptureRawLiveStacking
     * @classdesc Represents a ReqStopCaptureRawLiveStacking.
     * @implements IReqStopCaptureRawLiveStacking
     * @constructor
     * @param {IReqStopCaptureRawLiveStacking=} [properties] Properties to set
     */
    function ReqStopCaptureRawLiveStacking(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStopCaptureRawLiveStacking instance using the specified properties.
     * @function create
     * @memberof ReqStopCaptureRawLiveStacking
     * @static
     * @param {IReqStopCaptureRawLiveStacking=} [properties] Properties to set
     * @returns {ReqStopCaptureRawLiveStacking} ReqStopCaptureRawLiveStacking instance
     */
    ReqStopCaptureRawLiveStacking.create = function create(properties) {
        return new ReqStopCaptureRawLiveStacking(properties);
    };
    /**
     * Encodes the specified ReqStopCaptureRawLiveStacking message. Does not implicitly {@link ReqStopCaptureRawLiveStacking.verify|verify} messages.
     * @function encode
     * @memberof ReqStopCaptureRawLiveStacking
     * @static
     * @param {IReqStopCaptureRawLiveStacking} message ReqStopCaptureRawLiveStacking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopCaptureRawLiveStacking.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStopCaptureRawLiveStacking message, length delimited. Does not implicitly {@link ReqStopCaptureRawLiveStacking.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStopCaptureRawLiveStacking
     * @static
     * @param {IReqStopCaptureRawLiveStacking} message ReqStopCaptureRawLiveStacking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopCaptureRawLiveStacking.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStopCaptureRawLiveStacking message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStopCaptureRawLiveStacking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStopCaptureRawLiveStacking} ReqStopCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopCaptureRawLiveStacking.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStopCaptureRawLiveStacking();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStopCaptureRawLiveStacking message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStopCaptureRawLiveStacking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStopCaptureRawLiveStacking} ReqStopCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopCaptureRawLiveStacking.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStopCaptureRawLiveStacking message.
     * @function verify
     * @memberof ReqStopCaptureRawLiveStacking
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStopCaptureRawLiveStacking.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStopCaptureRawLiveStacking message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStopCaptureRawLiveStacking
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStopCaptureRawLiveStacking} ReqStopCaptureRawLiveStacking
     */
    ReqStopCaptureRawLiveStacking.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStopCaptureRawLiveStacking)
            return object;
        return new $root.ReqStopCaptureRawLiveStacking();
    };
    /**
     * Creates a plain object from a ReqStopCaptureRawLiveStacking message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStopCaptureRawLiveStacking
     * @static
     * @param {ReqStopCaptureRawLiveStacking} message ReqStopCaptureRawLiveStacking
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStopCaptureRawLiveStacking.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStopCaptureRawLiveStacking to JSON.
     * @function toJSON
     * @memberof ReqStopCaptureRawLiveStacking
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStopCaptureRawLiveStacking.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStopCaptureRawLiveStacking
     * @function getTypeUrl
     * @memberof ReqStopCaptureRawLiveStacking
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStopCaptureRawLiveStacking.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStopCaptureRawLiveStacking";
    };
    return ReqStopCaptureRawLiveStacking;
})();
$root.ReqCheckDarkFrame = (function () {
    /**
     * Properties of a ReqCheckDarkFrame.
     * @exports IReqCheckDarkFrame
     * @interface IReqCheckDarkFrame
     */
    /**
     * Constructs a new ReqCheckDarkFrame.
     * @exports ReqCheckDarkFrame
     * @classdesc Represents a ReqCheckDarkFrame.
     * @implements IReqCheckDarkFrame
     * @constructor
     * @param {IReqCheckDarkFrame=} [properties] Properties to set
     */
    function ReqCheckDarkFrame(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqCheckDarkFrame instance using the specified properties.
     * @function create
     * @memberof ReqCheckDarkFrame
     * @static
     * @param {IReqCheckDarkFrame=} [properties] Properties to set
     * @returns {ReqCheckDarkFrame} ReqCheckDarkFrame instance
     */
    ReqCheckDarkFrame.create = function create(properties) {
        return new ReqCheckDarkFrame(properties);
    };
    /**
     * Encodes the specified ReqCheckDarkFrame message. Does not implicitly {@link ReqCheckDarkFrame.verify|verify} messages.
     * @function encode
     * @memberof ReqCheckDarkFrame
     * @static
     * @param {IReqCheckDarkFrame} message ReqCheckDarkFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqCheckDarkFrame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqCheckDarkFrame message, length delimited. Does not implicitly {@link ReqCheckDarkFrame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqCheckDarkFrame
     * @static
     * @param {IReqCheckDarkFrame} message ReqCheckDarkFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqCheckDarkFrame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqCheckDarkFrame message from the specified reader or buffer.
     * @function decode
     * @memberof ReqCheckDarkFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqCheckDarkFrame} ReqCheckDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqCheckDarkFrame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqCheckDarkFrame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqCheckDarkFrame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqCheckDarkFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqCheckDarkFrame} ReqCheckDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqCheckDarkFrame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqCheckDarkFrame message.
     * @function verify
     * @memberof ReqCheckDarkFrame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqCheckDarkFrame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqCheckDarkFrame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqCheckDarkFrame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqCheckDarkFrame} ReqCheckDarkFrame
     */
    ReqCheckDarkFrame.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqCheckDarkFrame)
            return object;
        return new $root.ReqCheckDarkFrame();
    };
    /**
     * Creates a plain object from a ReqCheckDarkFrame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqCheckDarkFrame
     * @static
     * @param {ReqCheckDarkFrame} message ReqCheckDarkFrame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqCheckDarkFrame.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqCheckDarkFrame to JSON.
     * @function toJSON
     * @memberof ReqCheckDarkFrame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqCheckDarkFrame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqCheckDarkFrame
     * @function getTypeUrl
     * @memberof ReqCheckDarkFrame
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqCheckDarkFrame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqCheckDarkFrame";
    };
    return ReqCheckDarkFrame;
})();
$root.ResCheckDarkFrame = (function () {
    /**
     * Properties of a ResCheckDarkFrame.
     * @exports IResCheckDarkFrame
     * @interface IResCheckDarkFrame
     * @property {number|null} [progress] ResCheckDarkFrame progress
     * @property {number|null} [code] ResCheckDarkFrame code
     */
    /**
     * Constructs a new ResCheckDarkFrame.
     * @exports ResCheckDarkFrame
     * @classdesc Represents a ResCheckDarkFrame.
     * @implements IResCheckDarkFrame
     * @constructor
     * @param {IResCheckDarkFrame=} [properties] Properties to set
     */
    function ResCheckDarkFrame(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResCheckDarkFrame progress.
     * @member {number} progress
     * @memberof ResCheckDarkFrame
     * @instance
     */
    ResCheckDarkFrame.prototype.progress = 0;
    /**
     * ResCheckDarkFrame code.
     * @member {number} code
     * @memberof ResCheckDarkFrame
     * @instance
     */
    ResCheckDarkFrame.prototype.code = 0;
    /**
     * Creates a new ResCheckDarkFrame instance using the specified properties.
     * @function create
     * @memberof ResCheckDarkFrame
     * @static
     * @param {IResCheckDarkFrame=} [properties] Properties to set
     * @returns {ResCheckDarkFrame} ResCheckDarkFrame instance
     */
    ResCheckDarkFrame.create = function create(properties) {
        return new ResCheckDarkFrame(properties);
    };
    /**
     * Encodes the specified ResCheckDarkFrame message. Does not implicitly {@link ResCheckDarkFrame.verify|verify} messages.
     * @function encode
     * @memberof ResCheckDarkFrame
     * @static
     * @param {IResCheckDarkFrame} message ResCheckDarkFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResCheckDarkFrame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.progress != null &&
            Object.hasOwnProperty.call(message, "progress"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.progress);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.code);
        return writer;
    };
    /**
     * Encodes the specified ResCheckDarkFrame message, length delimited. Does not implicitly {@link ResCheckDarkFrame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResCheckDarkFrame
     * @static
     * @param {IResCheckDarkFrame} message ResCheckDarkFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResCheckDarkFrame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResCheckDarkFrame message from the specified reader or buffer.
     * @function decode
     * @memberof ResCheckDarkFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResCheckDarkFrame} ResCheckDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResCheckDarkFrame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResCheckDarkFrame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.progress = reader.int32();
                    break;
                }
                case 2: {
                    message.code = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResCheckDarkFrame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResCheckDarkFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResCheckDarkFrame} ResCheckDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResCheckDarkFrame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResCheckDarkFrame message.
     * @function verify
     * @memberof ResCheckDarkFrame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResCheckDarkFrame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.progress != null && message.hasOwnProperty("progress"))
            if (!$util.isInteger(message.progress))
                return "progress: integer expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        return null;
    };
    /**
     * Creates a ResCheckDarkFrame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResCheckDarkFrame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResCheckDarkFrame} ResCheckDarkFrame
     */
    ResCheckDarkFrame.fromObject = function fromObject(object) {
        if (object instanceof $root.ResCheckDarkFrame)
            return object;
        var message = new $root.ResCheckDarkFrame();
        if (object.progress != null)
            message.progress = object.progress | 0;
        if (object.code != null)
            message.code = object.code | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResCheckDarkFrame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResCheckDarkFrame
     * @static
     * @param {ResCheckDarkFrame} message ResCheckDarkFrame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResCheckDarkFrame.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.progress = 0;
            object.code = 0;
        }
        if (message.progress != null && message.hasOwnProperty("progress"))
            object.progress = message.progress;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };
    /**
     * Converts this ResCheckDarkFrame to JSON.
     * @function toJSON
     * @memberof ResCheckDarkFrame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResCheckDarkFrame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResCheckDarkFrame
     * @function getTypeUrl
     * @memberof ResCheckDarkFrame
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResCheckDarkFrame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResCheckDarkFrame";
    };
    return ResCheckDarkFrame;
})();
$root.ReqCaptureDarkFrame = (function () {
    /**
     * Properties of a ReqCaptureDarkFrame.
     * @exports IReqCaptureDarkFrame
     * @interface IReqCaptureDarkFrame
     * @property {number|null} [reshoot] ReqCaptureDarkFrame reshoot
     */
    /**
     * Constructs a new ReqCaptureDarkFrame.
     * @exports ReqCaptureDarkFrame
     * @classdesc Represents a ReqCaptureDarkFrame.
     * @implements IReqCaptureDarkFrame
     * @constructor
     * @param {IReqCaptureDarkFrame=} [properties] Properties to set
     */
    function ReqCaptureDarkFrame(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqCaptureDarkFrame reshoot.
     * @member {number} reshoot
     * @memberof ReqCaptureDarkFrame
     * @instance
     */
    ReqCaptureDarkFrame.prototype.reshoot = 0;
    /**
     * Creates a new ReqCaptureDarkFrame instance using the specified properties.
     * @function create
     * @memberof ReqCaptureDarkFrame
     * @static
     * @param {IReqCaptureDarkFrame=} [properties] Properties to set
     * @returns {ReqCaptureDarkFrame} ReqCaptureDarkFrame instance
     */
    ReqCaptureDarkFrame.create = function create(properties) {
        return new ReqCaptureDarkFrame(properties);
    };
    /**
     * Encodes the specified ReqCaptureDarkFrame message. Does not implicitly {@link ReqCaptureDarkFrame.verify|verify} messages.
     * @function encode
     * @memberof ReqCaptureDarkFrame
     * @static
     * @param {IReqCaptureDarkFrame} message ReqCaptureDarkFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqCaptureDarkFrame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.reshoot != null &&
            Object.hasOwnProperty.call(message, "reshoot"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.reshoot);
        return writer;
    };
    /**
     * Encodes the specified ReqCaptureDarkFrame message, length delimited. Does not implicitly {@link ReqCaptureDarkFrame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqCaptureDarkFrame
     * @static
     * @param {IReqCaptureDarkFrame} message ReqCaptureDarkFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqCaptureDarkFrame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqCaptureDarkFrame message from the specified reader or buffer.
     * @function decode
     * @memberof ReqCaptureDarkFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqCaptureDarkFrame} ReqCaptureDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqCaptureDarkFrame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqCaptureDarkFrame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.reshoot = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqCaptureDarkFrame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqCaptureDarkFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqCaptureDarkFrame} ReqCaptureDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqCaptureDarkFrame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqCaptureDarkFrame message.
     * @function verify
     * @memberof ReqCaptureDarkFrame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqCaptureDarkFrame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.reshoot != null && message.hasOwnProperty("reshoot"))
            if (!$util.isInteger(message.reshoot))
                return "reshoot: integer expected";
        return null;
    };
    /**
     * Creates a ReqCaptureDarkFrame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqCaptureDarkFrame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqCaptureDarkFrame} ReqCaptureDarkFrame
     */
    ReqCaptureDarkFrame.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqCaptureDarkFrame)
            return object;
        var message = new $root.ReqCaptureDarkFrame();
        if (object.reshoot != null)
            message.reshoot = object.reshoot | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqCaptureDarkFrame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqCaptureDarkFrame
     * @static
     * @param {ReqCaptureDarkFrame} message ReqCaptureDarkFrame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqCaptureDarkFrame.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.reshoot = 0;
        if (message.reshoot != null && message.hasOwnProperty("reshoot"))
            object.reshoot = message.reshoot;
        return object;
    };
    /**
     * Converts this ReqCaptureDarkFrame to JSON.
     * @function toJSON
     * @memberof ReqCaptureDarkFrame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqCaptureDarkFrame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqCaptureDarkFrame
     * @function getTypeUrl
     * @memberof ReqCaptureDarkFrame
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqCaptureDarkFrame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqCaptureDarkFrame";
    };
    return ReqCaptureDarkFrame;
})();
$root.ReqStopCaptureDarkFrame = (function () {
    /**
     * Properties of a ReqStopCaptureDarkFrame.
     * @exports IReqStopCaptureDarkFrame
     * @interface IReqStopCaptureDarkFrame
     */
    /**
     * Constructs a new ReqStopCaptureDarkFrame.
     * @exports ReqStopCaptureDarkFrame
     * @classdesc Represents a ReqStopCaptureDarkFrame.
     * @implements IReqStopCaptureDarkFrame
     * @constructor
     * @param {IReqStopCaptureDarkFrame=} [properties] Properties to set
     */
    function ReqStopCaptureDarkFrame(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStopCaptureDarkFrame instance using the specified properties.
     * @function create
     * @memberof ReqStopCaptureDarkFrame
     * @static
     * @param {IReqStopCaptureDarkFrame=} [properties] Properties to set
     * @returns {ReqStopCaptureDarkFrame} ReqStopCaptureDarkFrame instance
     */
    ReqStopCaptureDarkFrame.create = function create(properties) {
        return new ReqStopCaptureDarkFrame(properties);
    };
    /**
     * Encodes the specified ReqStopCaptureDarkFrame message. Does not implicitly {@link ReqStopCaptureDarkFrame.verify|verify} messages.
     * @function encode
     * @memberof ReqStopCaptureDarkFrame
     * @static
     * @param {IReqStopCaptureDarkFrame} message ReqStopCaptureDarkFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopCaptureDarkFrame.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStopCaptureDarkFrame message, length delimited. Does not implicitly {@link ReqStopCaptureDarkFrame.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStopCaptureDarkFrame
     * @static
     * @param {IReqStopCaptureDarkFrame} message ReqStopCaptureDarkFrame message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopCaptureDarkFrame.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStopCaptureDarkFrame message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStopCaptureDarkFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStopCaptureDarkFrame} ReqStopCaptureDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopCaptureDarkFrame.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStopCaptureDarkFrame();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStopCaptureDarkFrame message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStopCaptureDarkFrame
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStopCaptureDarkFrame} ReqStopCaptureDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopCaptureDarkFrame.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStopCaptureDarkFrame message.
     * @function verify
     * @memberof ReqStopCaptureDarkFrame
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStopCaptureDarkFrame.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStopCaptureDarkFrame message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStopCaptureDarkFrame
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStopCaptureDarkFrame} ReqStopCaptureDarkFrame
     */
    ReqStopCaptureDarkFrame.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStopCaptureDarkFrame)
            return object;
        return new $root.ReqStopCaptureDarkFrame();
    };
    /**
     * Creates a plain object from a ReqStopCaptureDarkFrame message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStopCaptureDarkFrame
     * @static
     * @param {ReqStopCaptureDarkFrame} message ReqStopCaptureDarkFrame
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStopCaptureDarkFrame.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStopCaptureDarkFrame to JSON.
     * @function toJSON
     * @memberof ReqStopCaptureDarkFrame
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStopCaptureDarkFrame.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStopCaptureDarkFrame
     * @function getTypeUrl
     * @memberof ReqStopCaptureDarkFrame
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStopCaptureDarkFrame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStopCaptureDarkFrame";
    };
    return ReqStopCaptureDarkFrame;
})();
$root.ReqGoLive = (function () {
    /**
     * Properties of a ReqGoLive.
     * @exports IReqGoLive
     * @interface IReqGoLive
     */
    /**
     * Constructs a new ReqGoLive.
     * @exports ReqGoLive
     * @classdesc Represents a ReqGoLive.
     * @implements IReqGoLive
     * @constructor
     * @param {IReqGoLive=} [properties] Properties to set
     */
    function ReqGoLive(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGoLive instance using the specified properties.
     * @function create
     * @memberof ReqGoLive
     * @static
     * @param {IReqGoLive=} [properties] Properties to set
     * @returns {ReqGoLive} ReqGoLive instance
     */
    ReqGoLive.create = function create(properties) {
        return new ReqGoLive(properties);
    };
    /**
     * Encodes the specified ReqGoLive message. Does not implicitly {@link ReqGoLive.verify|verify} messages.
     * @function encode
     * @memberof ReqGoLive
     * @static
     * @param {IReqGoLive} message ReqGoLive message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGoLive.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGoLive message, length delimited. Does not implicitly {@link ReqGoLive.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGoLive
     * @static
     * @param {IReqGoLive} message ReqGoLive message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGoLive.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGoLive message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGoLive
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGoLive} ReqGoLive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGoLive.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGoLive();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGoLive message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGoLive
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGoLive} ReqGoLive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGoLive.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGoLive message.
     * @function verify
     * @memberof ReqGoLive
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGoLive.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGoLive message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGoLive
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGoLive} ReqGoLive
     */
    ReqGoLive.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGoLive)
            return object;
        return new $root.ReqGoLive();
    };
    /**
     * Creates a plain object from a ReqGoLive message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGoLive
     * @static
     * @param {ReqGoLive} message ReqGoLive
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGoLive.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGoLive to JSON.
     * @function toJSON
     * @memberof ReqGoLive
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGoLive.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGoLive
     * @function getTypeUrl
     * @memberof ReqGoLive
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGoLive.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGoLive";
    };
    return ReqGoLive;
})();
$root.ReqTrackSpecialTarget = (function () {
    /**
     * Properties of a ReqTrackSpecialTarget.
     * @exports IReqTrackSpecialTarget
     * @interface IReqTrackSpecialTarget
     * @property {number|null} [index] ReqTrackSpecialTarget index
     * @property {number|null} [lon] ReqTrackSpecialTarget lon
     * @property {number|null} [lat] ReqTrackSpecialTarget lat
     */
    /**
     * Constructs a new ReqTrackSpecialTarget.
     * @exports ReqTrackSpecialTarget
     * @classdesc Represents a ReqTrackSpecialTarget.
     * @implements IReqTrackSpecialTarget
     * @constructor
     * @param {IReqTrackSpecialTarget=} [properties] Properties to set
     */
    function ReqTrackSpecialTarget(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqTrackSpecialTarget index.
     * @member {number} index
     * @memberof ReqTrackSpecialTarget
     * @instance
     */
    ReqTrackSpecialTarget.prototype.index = 0;
    /**
     * ReqTrackSpecialTarget lon.
     * @member {number} lon
     * @memberof ReqTrackSpecialTarget
     * @instance
     */
    ReqTrackSpecialTarget.prototype.lon = 0;
    /**
     * ReqTrackSpecialTarget lat.
     * @member {number} lat
     * @memberof ReqTrackSpecialTarget
     * @instance
     */
    ReqTrackSpecialTarget.prototype.lat = 0;
    /**
     * Creates a new ReqTrackSpecialTarget instance using the specified properties.
     * @function create
     * @memberof ReqTrackSpecialTarget
     * @static
     * @param {IReqTrackSpecialTarget=} [properties] Properties to set
     * @returns {ReqTrackSpecialTarget} ReqTrackSpecialTarget instance
     */
    ReqTrackSpecialTarget.create = function create(properties) {
        return new ReqTrackSpecialTarget(properties);
    };
    /**
     * Encodes the specified ReqTrackSpecialTarget message. Does not implicitly {@link ReqTrackSpecialTarget.verify|verify} messages.
     * @function encode
     * @memberof ReqTrackSpecialTarget
     * @static
     * @param {IReqTrackSpecialTarget} message ReqTrackSpecialTarget message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqTrackSpecialTarget.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.index);
        if (message.lon != null && Object.hasOwnProperty.call(message, "lon"))
            writer.uint32(/* id 2, wireType 1 =*/ 17).double(message.lon);
        if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
            writer.uint32(/* id 3, wireType 1 =*/ 25).double(message.lat);
        return writer;
    };
    /**
     * Encodes the specified ReqTrackSpecialTarget message, length delimited. Does not implicitly {@link ReqTrackSpecialTarget.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqTrackSpecialTarget
     * @static
     * @param {IReqTrackSpecialTarget} message ReqTrackSpecialTarget message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqTrackSpecialTarget.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqTrackSpecialTarget message from the specified reader or buffer.
     * @function decode
     * @memberof ReqTrackSpecialTarget
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqTrackSpecialTarget} ReqTrackSpecialTarget
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqTrackSpecialTarget.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqTrackSpecialTarget();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.index = reader.int32();
                    break;
                }
                case 2: {
                    message.lon = reader.double();
                    break;
                }
                case 3: {
                    message.lat = reader.double();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqTrackSpecialTarget message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqTrackSpecialTarget
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqTrackSpecialTarget} ReqTrackSpecialTarget
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqTrackSpecialTarget.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqTrackSpecialTarget message.
     * @function verify
     * @memberof ReqTrackSpecialTarget
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqTrackSpecialTarget.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.lon != null && message.hasOwnProperty("lon"))
            if (typeof message.lon !== "number")
                return "lon: number expected";
        if (message.lat != null && message.hasOwnProperty("lat"))
            if (typeof message.lat !== "number")
                return "lat: number expected";
        return null;
    };
    /**
     * Creates a ReqTrackSpecialTarget message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqTrackSpecialTarget
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqTrackSpecialTarget} ReqTrackSpecialTarget
     */
    ReqTrackSpecialTarget.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqTrackSpecialTarget)
            return object;
        var message = new $root.ReqTrackSpecialTarget();
        if (object.index != null)
            message.index = object.index | 0;
        if (object.lon != null)
            message.lon = Number(object.lon);
        if (object.lat != null)
            message.lat = Number(object.lat);
        return message;
    };
    /**
     * Creates a plain object from a ReqTrackSpecialTarget message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqTrackSpecialTarget
     * @static
     * @param {ReqTrackSpecialTarget} message ReqTrackSpecialTarget
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqTrackSpecialTarget.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.index = 0;
            object.lon = 0;
            object.lat = 0;
        }
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.lon != null && message.hasOwnProperty("lon"))
            object.lon =
                options.json && !isFinite(message.lon)
                    ? String(message.lon)
                    : message.lon;
        if (message.lat != null && message.hasOwnProperty("lat"))
            object.lat =
                options.json && !isFinite(message.lat)
                    ? String(message.lat)
                    : message.lat;
        return object;
    };
    /**
     * Converts this ReqTrackSpecialTarget to JSON.
     * @function toJSON
     * @memberof ReqTrackSpecialTarget
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqTrackSpecialTarget.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqTrackSpecialTarget
     * @function getTypeUrl
     * @memberof ReqTrackSpecialTarget
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqTrackSpecialTarget.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqTrackSpecialTarget";
    };
    return ReqTrackSpecialTarget;
})();
$root.ReqStopTrackSpecialTarget = (function () {
    /**
     * Properties of a ReqStopTrackSpecialTarget.
     * @exports IReqStopTrackSpecialTarget
     * @interface IReqStopTrackSpecialTarget
     */
    /**
     * Constructs a new ReqStopTrackSpecialTarget.
     * @exports ReqStopTrackSpecialTarget
     * @classdesc Represents a ReqStopTrackSpecialTarget.
     * @implements IReqStopTrackSpecialTarget
     * @constructor
     * @param {IReqStopTrackSpecialTarget=} [properties] Properties to set
     */
    function ReqStopTrackSpecialTarget(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStopTrackSpecialTarget instance using the specified properties.
     * @function create
     * @memberof ReqStopTrackSpecialTarget
     * @static
     * @param {IReqStopTrackSpecialTarget=} [properties] Properties to set
     * @returns {ReqStopTrackSpecialTarget} ReqStopTrackSpecialTarget instance
     */
    ReqStopTrackSpecialTarget.create = function create(properties) {
        return new ReqStopTrackSpecialTarget(properties);
    };
    /**
     * Encodes the specified ReqStopTrackSpecialTarget message. Does not implicitly {@link ReqStopTrackSpecialTarget.verify|verify} messages.
     * @function encode
     * @memberof ReqStopTrackSpecialTarget
     * @static
     * @param {IReqStopTrackSpecialTarget} message ReqStopTrackSpecialTarget message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopTrackSpecialTarget.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStopTrackSpecialTarget message, length delimited. Does not implicitly {@link ReqStopTrackSpecialTarget.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStopTrackSpecialTarget
     * @static
     * @param {IReqStopTrackSpecialTarget} message ReqStopTrackSpecialTarget message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopTrackSpecialTarget.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStopTrackSpecialTarget message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStopTrackSpecialTarget
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStopTrackSpecialTarget} ReqStopTrackSpecialTarget
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopTrackSpecialTarget.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStopTrackSpecialTarget();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStopTrackSpecialTarget message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStopTrackSpecialTarget
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStopTrackSpecialTarget} ReqStopTrackSpecialTarget
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopTrackSpecialTarget.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStopTrackSpecialTarget message.
     * @function verify
     * @memberof ReqStopTrackSpecialTarget
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStopTrackSpecialTarget.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStopTrackSpecialTarget message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStopTrackSpecialTarget
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStopTrackSpecialTarget} ReqStopTrackSpecialTarget
     */
    ReqStopTrackSpecialTarget.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStopTrackSpecialTarget)
            return object;
        return new $root.ReqStopTrackSpecialTarget();
    };
    /**
     * Creates a plain object from a ReqStopTrackSpecialTarget message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStopTrackSpecialTarget
     * @static
     * @param {ReqStopTrackSpecialTarget} message ReqStopTrackSpecialTarget
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStopTrackSpecialTarget.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStopTrackSpecialTarget to JSON.
     * @function toJSON
     * @memberof ReqStopTrackSpecialTarget
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStopTrackSpecialTarget.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStopTrackSpecialTarget
     * @function getTypeUrl
     * @memberof ReqStopTrackSpecialTarget
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStopTrackSpecialTarget.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStopTrackSpecialTarget";
    };
    return ReqStopTrackSpecialTarget;
})();
/**
 * WsMajorVersion enum.
 * @exports WsMajorVersion
 * @enum {number}
 * @property {number} WS_MAJOR_VERSION_UNKNOWN=0 WS_MAJOR_VERSION_UNKNOWN value
 * @property {number} WS_MAJOR_VERSION_NUMBER=1 WS_MAJOR_VERSION_NUMBER value
 */
$root.WsMajorVersion = (function () {
    var valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "WS_MAJOR_VERSION_UNKNOWN")] = 0;
    values[(valuesById[1] = "WS_MAJOR_VERSION_NUMBER")] = 1;
    return values;
})();
/**
 * WsMinorVersion enum.
 * @exports WsMinorVersion
 * @enum {number}
 * @property {number} WS_MINOR_VERSION_UNKNOWN=0 WS_MINOR_VERSION_UNKNOWN value
 * @property {number} WS_MINOR_VERSION_NUMBER=1 WS_MINOR_VERSION_NUMBER value
 */
$root.WsMinorVersion = (function () {
    var valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "WS_MINOR_VERSION_UNKNOWN")] = 0;
    values[(valuesById[1] = "WS_MINOR_VERSION_NUMBER")] = 1;
    return values;
})();
$root.WsPacket = (function () {
    /**
     * Properties of a WsPacket.
     * @exports IWsPacket
     * @interface IWsPacket
     * @property {number|null} [majorVersion] WsPacket majorVersion
     * @property {number|null} [minorVersion] WsPacket minorVersion
     * @property {number|null} [deviceId] WsPacket deviceId
     * @property {number|null} [moduleId] WsPacket moduleId
     * @property {number|null} [cmd] WsPacket cmd
     * @property {number|null} [type] WsPacket type
     * @property {Uint8Array|null} [data] WsPacket data
     * @property {string|null} [clientId] WsPacket clientId
     */
    /**
     * Constructs a new WsPacket.
     * @exports WsPacket
     * @classdesc Represents a WsPacket.
     * @implements IWsPacket
     * @constructor
     * @param {IWsPacket=} [properties] Properties to set
     */
    function WsPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * WsPacket majorVersion.
     * @member {number} majorVersion
     * @memberof WsPacket
     * @instance
     */
    WsPacket.prototype.majorVersion = 0;
    /**
     * WsPacket minorVersion.
     * @member {number} minorVersion
     * @memberof WsPacket
     * @instance
     */
    WsPacket.prototype.minorVersion = 0;
    /**
     * WsPacket deviceId.
     * @member {number} deviceId
     * @memberof WsPacket
     * @instance
     */
    WsPacket.prototype.deviceId = 0;
    /**
     * WsPacket moduleId.
     * @member {number} moduleId
     * @memberof WsPacket
     * @instance
     */
    WsPacket.prototype.moduleId = 0;
    /**
     * WsPacket cmd.
     * @member {number} cmd
     * @memberof WsPacket
     * @instance
     */
    WsPacket.prototype.cmd = 0;
    /**
     * WsPacket type.
     * @member {number} type
     * @memberof WsPacket
     * @instance
     */
    WsPacket.prototype.type = 0;
    /**
     * WsPacket data.
     * @member {Uint8Array} data
     * @memberof WsPacket
     * @instance
     */
    WsPacket.prototype.data = $util.newBuffer([]);
    /**
     * WsPacket clientId.
     * @member {string} clientId
     * @memberof WsPacket
     * @instance
     */
    WsPacket.prototype.clientId = "";
    /**
     * Creates a new WsPacket instance using the specified properties.
     * @function create
     * @memberof WsPacket
     * @static
     * @param {IWsPacket=} [properties] Properties to set
     * @returns {WsPacket} WsPacket instance
     */
    WsPacket.create = function create(properties) {
        return new WsPacket(properties);
    };
    /**
     * Encodes the specified WsPacket message. Does not implicitly {@link WsPacket.verify|verify} messages.
     * @function encode
     * @memberof WsPacket
     * @static
     * @param {IWsPacket} message WsPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WsPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.majorVersion != null &&
            Object.hasOwnProperty.call(message, "majorVersion"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.majorVersion);
        if (message.minorVersion != null &&
            Object.hasOwnProperty.call(message, "minorVersion"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.minorVersion);
        if (message.deviceId != null &&
            Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.deviceId);
        if (message.moduleId != null &&
            Object.hasOwnProperty.call(message, "moduleId"))
            writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.moduleId);
        if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
            writer.uint32(/* id 5, wireType 0 =*/ 40).uint32(message.cmd);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 6, wireType 0 =*/ 48).uint32(message.type);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 7, wireType 2 =*/ 58).bytes(message.data);
        if (message.clientId != null &&
            Object.hasOwnProperty.call(message, "clientId"))
            writer.uint32(/* id 8, wireType 2 =*/ 66).string(message.clientId);
        return writer;
    };
    /**
     * Encodes the specified WsPacket message, length delimited. Does not implicitly {@link WsPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WsPacket
     * @static
     * @param {IWsPacket} message WsPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WsPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a WsPacket message from the specified reader or buffer.
     * @function decode
     * @memberof WsPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WsPacket} WsPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WsPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.WsPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.majorVersion = reader.uint32();
                    break;
                }
                case 2: {
                    message.minorVersion = reader.uint32();
                    break;
                }
                case 3: {
                    message.deviceId = reader.uint32();
                    break;
                }
                case 4: {
                    message.moduleId = reader.uint32();
                    break;
                }
                case 5: {
                    message.cmd = reader.uint32();
                    break;
                }
                case 6: {
                    message.type = reader.uint32();
                    break;
                }
                case 7: {
                    message.data = reader.bytes();
                    break;
                }
                case 8: {
                    message.clientId = reader.string();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a WsPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WsPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WsPacket} WsPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WsPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a WsPacket message.
     * @function verify
     * @memberof WsPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WsPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.majorVersion != null && message.hasOwnProperty("majorVersion"))
            if (!$util.isInteger(message.majorVersion))
                return "majorVersion: integer expected";
        if (message.minorVersion != null && message.hasOwnProperty("minorVersion"))
            if (!$util.isInteger(message.minorVersion))
                return "minorVersion: integer expected";
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            if (!$util.isInteger(message.deviceId))
                return "deviceId: integer expected";
        if (message.moduleId != null && message.hasOwnProperty("moduleId"))
            if (!$util.isInteger(message.moduleId))
                return "moduleId: integer expected";
        if (message.cmd != null && message.hasOwnProperty("cmd"))
            if (!$util.isInteger(message.cmd))
                return "cmd: integer expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!((message.data && typeof message.data.length === "number") ||
                $util.isString(message.data)))
                return "data: buffer expected";
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            if (!$util.isString(message.clientId))
                return "clientId: string expected";
        return null;
    };
    /**
     * Creates a WsPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WsPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WsPacket} WsPacket
     */
    WsPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.WsPacket)
            return object;
        var message = new $root.WsPacket();
        if (object.majorVersion != null)
            message.majorVersion = object.majorVersion >>> 0;
        if (object.minorVersion != null)
            message.minorVersion = object.minorVersion >>> 0;
        if (object.deviceId != null)
            message.deviceId = object.deviceId >>> 0;
        if (object.moduleId != null)
            message.moduleId = object.moduleId >>> 0;
        if (object.cmd != null)
            message.cmd = object.cmd >>> 0;
        if (object.type != null)
            message.type = object.type >>> 0;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, (message.data = $util.newBuffer($util.base64.length(object.data))), 0);
            else if (object.data.length >= 0)
                message.data = object.data;
        if (object.clientId != null)
            message.clientId = String(object.clientId);
        return message;
    };
    /**
     * Creates a plain object from a WsPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WsPacket
     * @static
     * @param {WsPacket} message WsPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WsPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.majorVersion = 0;
            object.minorVersion = 0;
            object.deviceId = 0;
            object.moduleId = 0;
            object.cmd = 0;
            object.type = 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
            object.clientId = "";
        }
        if (message.majorVersion != null && message.hasOwnProperty("majorVersion"))
            object.majorVersion = message.majorVersion;
        if (message.minorVersion != null && message.hasOwnProperty("minorVersion"))
            object.minorVersion = message.minorVersion;
        if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
        if (message.moduleId != null && message.hasOwnProperty("moduleId"))
            object.moduleId = message.moduleId;
        if (message.cmd != null && message.hasOwnProperty("cmd"))
            object.cmd = message.cmd;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data =
                options.bytes === String
                    ? $util.base64.encode(message.data, 0, message.data.length)
                    : options.bytes === Array
                        ? Array.prototype.slice.call(message.data)
                        : message.data;
        if (message.clientId != null && message.hasOwnProperty("clientId"))
            object.clientId = message.clientId;
        return object;
    };
    /**
     * Converts this WsPacket to JSON.
     * @function toJSON
     * @memberof WsPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WsPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for WsPacket
     * @function getTypeUrl
     * @memberof WsPacket
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    WsPacket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/WsPacket";
    };
    return WsPacket;
})();
$root.ComResponse = (function () {
    /**
     * Properties of a ComResponse.
     * @exports IComResponse
     * @interface IComResponse
     * @property {number|null} [code] ComResponse code
     */
    /**
     * Constructs a new ComResponse.
     * @exports ComResponse
     * @classdesc Represents a ComResponse.
     * @implements IComResponse
     * @constructor
     * @param {IComResponse=} [properties] Properties to set
     */
    function ComResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ComResponse code.
     * @member {number} code
     * @memberof ComResponse
     * @instance
     */
    ComResponse.prototype.code = 0;
    /**
     * Creates a new ComResponse instance using the specified properties.
     * @function create
     * @memberof ComResponse
     * @static
     * @param {IComResponse=} [properties] Properties to set
     * @returns {ComResponse} ComResponse instance
     */
    ComResponse.create = function create(properties) {
        return new ComResponse(properties);
    };
    /**
     * Encodes the specified ComResponse message. Does not implicitly {@link ComResponse.verify|verify} messages.
     * @function encode
     * @memberof ComResponse
     * @static
     * @param {IComResponse} message ComResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ComResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.code);
        return writer;
    };
    /**
     * Encodes the specified ComResponse message, length delimited. Does not implicitly {@link ComResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ComResponse
     * @static
     * @param {IComResponse} message ComResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ComResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ComResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ComResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ComResponse} ComResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ComResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ComResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.code = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ComResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ComResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ComResponse} ComResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ComResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ComResponse message.
     * @function verify
     * @memberof ComResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ComResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        return null;
    };
    /**
     * Creates a ComResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ComResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ComResponse} ComResponse
     */
    ComResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ComResponse)
            return object;
        var message = new $root.ComResponse();
        if (object.code != null)
            message.code = object.code | 0;
        return message;
    };
    /**
     * Creates a plain object from a ComResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ComResponse
     * @static
     * @param {ComResponse} message ComResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ComResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.code = 0;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };
    /**
     * Converts this ComResponse to JSON.
     * @function toJSON
     * @memberof ComResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ComResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ComResponse
     * @function getTypeUrl
     * @memberof ComResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ComResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ComResponse";
    };
    return ComResponse;
})();
$root.ComResWithInt = (function () {
    /**
     * Properties of a ComResWithInt.
     * @exports IComResWithInt
     * @interface IComResWithInt
     * @property {number|null} [value] ComResWithInt value
     * @property {number|null} [code] ComResWithInt code
     */
    /**
     * Constructs a new ComResWithInt.
     * @exports ComResWithInt
     * @classdesc Represents a ComResWithInt.
     * @implements IComResWithInt
     * @constructor
     * @param {IComResWithInt=} [properties] Properties to set
     */
    function ComResWithInt(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ComResWithInt value.
     * @member {number} value
     * @memberof ComResWithInt
     * @instance
     */
    ComResWithInt.prototype.value = 0;
    /**
     * ComResWithInt code.
     * @member {number} code
     * @memberof ComResWithInt
     * @instance
     */
    ComResWithInt.prototype.code = 0;
    /**
     * Creates a new ComResWithInt instance using the specified properties.
     * @function create
     * @memberof ComResWithInt
     * @static
     * @param {IComResWithInt=} [properties] Properties to set
     * @returns {ComResWithInt} ComResWithInt instance
     */
    ComResWithInt.create = function create(properties) {
        return new ComResWithInt(properties);
    };
    /**
     * Encodes the specified ComResWithInt message. Does not implicitly {@link ComResWithInt.verify|verify} messages.
     * @function encode
     * @memberof ComResWithInt
     * @static
     * @param {IComResWithInt} message ComResWithInt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ComResWithInt.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.value);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.code);
        return writer;
    };
    /**
     * Encodes the specified ComResWithInt message, length delimited. Does not implicitly {@link ComResWithInt.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ComResWithInt
     * @static
     * @param {IComResWithInt} message ComResWithInt message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ComResWithInt.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ComResWithInt message from the specified reader or buffer.
     * @function decode
     * @memberof ComResWithInt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ComResWithInt} ComResWithInt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ComResWithInt.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ComResWithInt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.value = reader.int32();
                    break;
                }
                case 2: {
                    message.code = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ComResWithInt message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ComResWithInt
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ComResWithInt} ComResWithInt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ComResWithInt.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ComResWithInt message.
     * @function verify
     * @memberof ComResWithInt
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ComResWithInt.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        return null;
    };
    /**
     * Creates a ComResWithInt message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ComResWithInt
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ComResWithInt} ComResWithInt
     */
    ComResWithInt.fromObject = function fromObject(object) {
        if (object instanceof $root.ComResWithInt)
            return object;
        var message = new $root.ComResWithInt();
        if (object.value != null)
            message.value = object.value | 0;
        if (object.code != null)
            message.code = object.code | 0;
        return message;
    };
    /**
     * Creates a plain object from a ComResWithInt message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ComResWithInt
     * @static
     * @param {ComResWithInt} message ComResWithInt
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ComResWithInt.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.value = 0;
            object.code = 0;
        }
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };
    /**
     * Converts this ComResWithInt to JSON.
     * @function toJSON
     * @memberof ComResWithInt
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ComResWithInt.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ComResWithInt
     * @function getTypeUrl
     * @memberof ComResWithInt
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ComResWithInt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ComResWithInt";
    };
    return ComResWithInt;
})();
$root.ComResWithDouble = (function () {
    /**
     * Properties of a ComResWithDouble.
     * @exports IComResWithDouble
     * @interface IComResWithDouble
     * @property {number|null} [value] ComResWithDouble value
     * @property {number|null} [code] ComResWithDouble code
     */
    /**
     * Constructs a new ComResWithDouble.
     * @exports ComResWithDouble
     * @classdesc Represents a ComResWithDouble.
     * @implements IComResWithDouble
     * @constructor
     * @param {IComResWithDouble=} [properties] Properties to set
     */
    function ComResWithDouble(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ComResWithDouble value.
     * @member {number} value
     * @memberof ComResWithDouble
     * @instance
     */
    ComResWithDouble.prototype.value = 0;
    /**
     * ComResWithDouble code.
     * @member {number} code
     * @memberof ComResWithDouble
     * @instance
     */
    ComResWithDouble.prototype.code = 0;
    /**
     * Creates a new ComResWithDouble instance using the specified properties.
     * @function create
     * @memberof ComResWithDouble
     * @static
     * @param {IComResWithDouble=} [properties] Properties to set
     * @returns {ComResWithDouble} ComResWithDouble instance
     */
    ComResWithDouble.create = function create(properties) {
        return new ComResWithDouble(properties);
    };
    /**
     * Encodes the specified ComResWithDouble message. Does not implicitly {@link ComResWithDouble.verify|verify} messages.
     * @function encode
     * @memberof ComResWithDouble
     * @static
     * @param {IComResWithDouble} message ComResWithDouble message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ComResWithDouble.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.value);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.code);
        return writer;
    };
    /**
     * Encodes the specified ComResWithDouble message, length delimited. Does not implicitly {@link ComResWithDouble.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ComResWithDouble
     * @static
     * @param {IComResWithDouble} message ComResWithDouble message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ComResWithDouble.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ComResWithDouble message from the specified reader or buffer.
     * @function decode
     * @memberof ComResWithDouble
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ComResWithDouble} ComResWithDouble
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ComResWithDouble.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ComResWithDouble();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.value = reader.double();
                    break;
                }
                case 2: {
                    message.code = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ComResWithDouble message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ComResWithDouble
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ComResWithDouble} ComResWithDouble
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ComResWithDouble.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ComResWithDouble message.
     * @function verify
     * @memberof ComResWithDouble
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ComResWithDouble.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value !== "number")
                return "value: number expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        return null;
    };
    /**
     * Creates a ComResWithDouble message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ComResWithDouble
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ComResWithDouble} ComResWithDouble
     */
    ComResWithDouble.fromObject = function fromObject(object) {
        if (object instanceof $root.ComResWithDouble)
            return object;
        var message = new $root.ComResWithDouble();
        if (object.value != null)
            message.value = Number(object.value);
        if (object.code != null)
            message.code = object.code | 0;
        return message;
    };
    /**
     * Creates a plain object from a ComResWithDouble message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ComResWithDouble
     * @static
     * @param {ComResWithDouble} message ComResWithDouble
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ComResWithDouble.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.value = 0;
            object.code = 0;
        }
        if (message.value != null && message.hasOwnProperty("value"))
            object.value =
                options.json && !isFinite(message.value)
                    ? String(message.value)
                    : message.value;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };
    /**
     * Converts this ComResWithDouble to JSON.
     * @function toJSON
     * @memberof ComResWithDouble
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ComResWithDouble.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ComResWithDouble
     * @function getTypeUrl
     * @memberof ComResWithDouble
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ComResWithDouble.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ComResWithDouble";
    };
    return ComResWithDouble;
})();
$root.CommonParam = (function () {
    /**
     * Properties of a CommonParam.
     * @exports ICommonParam
     * @interface ICommonParam
     * @property {boolean|null} [hasAuto] CommonParam hasAuto
     * @property {number|null} [autoMode] CommonParam autoMode
     * @property {number|null} [id] CommonParam id
     * @property {number|null} [modeIndex] CommonParam modeIndex
     * @property {number|null} [index] CommonParam index
     * @property {number|null} [continueValue] CommonParam continueValue
     */
    /**
     * Constructs a new CommonParam.
     * @exports CommonParam
     * @classdesc Represents a CommonParam.
     * @implements ICommonParam
     * @constructor
     * @param {ICommonParam=} [properties] Properties to set
     */
    function CommonParam(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * CommonParam hasAuto.
     * @member {boolean} hasAuto
     * @memberof CommonParam
     * @instance
     */
    CommonParam.prototype.hasAuto = false;
    /**
     * CommonParam autoMode.
     * @member {number} autoMode
     * @memberof CommonParam
     * @instance
     */
    CommonParam.prototype.autoMode = 0;
    /**
     * CommonParam id.
     * @member {number} id
     * @memberof CommonParam
     * @instance
     */
    CommonParam.prototype.id = 0;
    /**
     * CommonParam modeIndex.
     * @member {number} modeIndex
     * @memberof CommonParam
     * @instance
     */
    CommonParam.prototype.modeIndex = 0;
    /**
     * CommonParam index.
     * @member {number} index
     * @memberof CommonParam
     * @instance
     */
    CommonParam.prototype.index = 0;
    /**
     * CommonParam continueValue.
     * @member {number} continueValue
     * @memberof CommonParam
     * @instance
     */
    CommonParam.prototype.continueValue = 0;
    /**
     * Creates a new CommonParam instance using the specified properties.
     * @function create
     * @memberof CommonParam
     * @static
     * @param {ICommonParam=} [properties] Properties to set
     * @returns {CommonParam} CommonParam instance
     */
    CommonParam.create = function create(properties) {
        return new CommonParam(properties);
    };
    /**
     * Encodes the specified CommonParam message. Does not implicitly {@link CommonParam.verify|verify} messages.
     * @function encode
     * @memberof CommonParam
     * @static
     * @param {ICommonParam} message CommonParam message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommonParam.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hasAuto != null &&
            Object.hasOwnProperty.call(message, "hasAuto"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.hasAuto);
        if (message.autoMode != null &&
            Object.hasOwnProperty.call(message, "autoMode"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.autoMode);
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.id);
        if (message.modeIndex != null &&
            Object.hasOwnProperty.call(message, "modeIndex"))
            writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.modeIndex);
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.index);
        if (message.continueValue != null &&
            Object.hasOwnProperty.call(message, "continueValue"))
            writer.uint32(/* id 6, wireType 1 =*/ 49).double(message.continueValue);
        return writer;
    };
    /**
     * Encodes the specified CommonParam message, length delimited. Does not implicitly {@link CommonParam.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommonParam
     * @static
     * @param {ICommonParam} message CommonParam message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommonParam.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a CommonParam message from the specified reader or buffer.
     * @function decode
     * @memberof CommonParam
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommonParam} CommonParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommonParam.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonParam();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.hasAuto = reader.bool();
                    break;
                }
                case 2: {
                    message.autoMode = reader.int32();
                    break;
                }
                case 3: {
                    message.id = reader.int32();
                    break;
                }
                case 4: {
                    message.modeIndex = reader.int32();
                    break;
                }
                case 5: {
                    message.index = reader.int32();
                    break;
                }
                case 6: {
                    message.continueValue = reader.double();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a CommonParam message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommonParam
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommonParam} CommonParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommonParam.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a CommonParam message.
     * @function verify
     * @memberof CommonParam
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommonParam.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hasAuto != null && message.hasOwnProperty("hasAuto"))
            if (typeof message.hasAuto !== "boolean")
                return "hasAuto: boolean expected";
        if (message.autoMode != null && message.hasOwnProperty("autoMode"))
            if (!$util.isInteger(message.autoMode))
                return "autoMode: integer expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.modeIndex != null && message.hasOwnProperty("modeIndex"))
            if (!$util.isInteger(message.modeIndex))
                return "modeIndex: integer expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.continueValue != null &&
            message.hasOwnProperty("continueValue"))
            if (typeof message.continueValue !== "number")
                return "continueValue: number expected";
        return null;
    };
    /**
     * Creates a CommonParam message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommonParam
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommonParam} CommonParam
     */
    CommonParam.fromObject = function fromObject(object) {
        if (object instanceof $root.CommonParam)
            return object;
        var message = new $root.CommonParam();
        if (object.hasAuto != null)
            message.hasAuto = Boolean(object.hasAuto);
        if (object.autoMode != null)
            message.autoMode = object.autoMode | 0;
        if (object.id != null)
            message.id = object.id | 0;
        if (object.modeIndex != null)
            message.modeIndex = object.modeIndex | 0;
        if (object.index != null)
            message.index = object.index | 0;
        if (object.continueValue != null)
            message.continueValue = Number(object.continueValue);
        return message;
    };
    /**
     * Creates a plain object from a CommonParam message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommonParam
     * @static
     * @param {CommonParam} message CommonParam
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommonParam.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.hasAuto = false;
            object.autoMode = 0;
            object.id = 0;
            object.modeIndex = 0;
            object.index = 0;
            object.continueValue = 0;
        }
        if (message.hasAuto != null && message.hasOwnProperty("hasAuto"))
            object.hasAuto = message.hasAuto;
        if (message.autoMode != null && message.hasOwnProperty("autoMode"))
            object.autoMode = message.autoMode;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.modeIndex != null && message.hasOwnProperty("modeIndex"))
            object.modeIndex = message.modeIndex;
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.continueValue != null &&
            message.hasOwnProperty("continueValue"))
            object.continueValue =
                options.json && !isFinite(message.continueValue)
                    ? String(message.continueValue)
                    : message.continueValue;
        return object;
    };
    /**
     * Converts this CommonParam to JSON.
     * @function toJSON
     * @memberof CommonParam
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommonParam.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for CommonParam
     * @function getTypeUrl
     * @memberof CommonParam
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CommonParam.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CommonParam";
    };
    return CommonParam;
})();
$root.ReqOpenCamera = (function () {
    /**
     * Properties of a ReqOpenCamera.
     * @exports IReqOpenCamera
     * @interface IReqOpenCamera
     * @property {boolean|null} [binning] ReqOpenCamera binning
     */
    /**
     * Constructs a new ReqOpenCamera.
     * @exports ReqOpenCamera
     * @classdesc Represents a ReqOpenCamera.
     * @implements IReqOpenCamera
     * @constructor
     * @param {IReqOpenCamera=} [properties] Properties to set
     */
    function ReqOpenCamera(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqOpenCamera binning.
     * @member {boolean} binning
     * @memberof ReqOpenCamera
     * @instance
     */
    ReqOpenCamera.prototype.binning = false;
    /**
     * Creates a new ReqOpenCamera instance using the specified properties.
     * @function create
     * @memberof ReqOpenCamera
     * @static
     * @param {IReqOpenCamera=} [properties] Properties to set
     * @returns {ReqOpenCamera} ReqOpenCamera instance
     */
    ReqOpenCamera.create = function create(properties) {
        return new ReqOpenCamera(properties);
    };
    /**
     * Encodes the specified ReqOpenCamera message. Does not implicitly {@link ReqOpenCamera.verify|verify} messages.
     * @function encode
     * @memberof ReqOpenCamera
     * @static
     * @param {IReqOpenCamera} message ReqOpenCamera message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqOpenCamera.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.binning != null &&
            Object.hasOwnProperty.call(message, "binning"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).bool(message.binning);
        return writer;
    };
    /**
     * Encodes the specified ReqOpenCamera message, length delimited. Does not implicitly {@link ReqOpenCamera.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqOpenCamera
     * @static
     * @param {IReqOpenCamera} message ReqOpenCamera message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqOpenCamera.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqOpenCamera message from the specified reader or buffer.
     * @function decode
     * @memberof ReqOpenCamera
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqOpenCamera} ReqOpenCamera
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqOpenCamera.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqOpenCamera();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.binning = reader.bool();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqOpenCamera message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqOpenCamera
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqOpenCamera} ReqOpenCamera
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqOpenCamera.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqOpenCamera message.
     * @function verify
     * @memberof ReqOpenCamera
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqOpenCamera.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.binning != null && message.hasOwnProperty("binning"))
            if (typeof message.binning !== "boolean")
                return "binning: boolean expected";
        return null;
    };
    /**
     * Creates a ReqOpenCamera message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqOpenCamera
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqOpenCamera} ReqOpenCamera
     */
    ReqOpenCamera.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqOpenCamera)
            return object;
        var message = new $root.ReqOpenCamera();
        if (object.binning != null)
            message.binning = Boolean(object.binning);
        return message;
    };
    /**
     * Creates a plain object from a ReqOpenCamera message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqOpenCamera
     * @static
     * @param {ReqOpenCamera} message ReqOpenCamera
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqOpenCamera.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.binning = false;
        if (message.binning != null && message.hasOwnProperty("binning"))
            object.binning = message.binning;
        return object;
    };
    /**
     * Converts this ReqOpenCamera to JSON.
     * @function toJSON
     * @memberof ReqOpenCamera
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqOpenCamera.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqOpenCamera
     * @function getTypeUrl
     * @memberof ReqOpenCamera
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqOpenCamera.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqOpenCamera";
    };
    return ReqOpenCamera;
})();
$root.ReqCloseCamera = (function () {
    /**
     * Properties of a ReqCloseCamera.
     * @exports IReqCloseCamera
     * @interface IReqCloseCamera
     */
    /**
     * Constructs a new ReqCloseCamera.
     * @exports ReqCloseCamera
     * @classdesc Represents a ReqCloseCamera.
     * @implements IReqCloseCamera
     * @constructor
     * @param {IReqCloseCamera=} [properties] Properties to set
     */
    function ReqCloseCamera(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqCloseCamera instance using the specified properties.
     * @function create
     * @memberof ReqCloseCamera
     * @static
     * @param {IReqCloseCamera=} [properties] Properties to set
     * @returns {ReqCloseCamera} ReqCloseCamera instance
     */
    ReqCloseCamera.create = function create(properties) {
        return new ReqCloseCamera(properties);
    };
    /**
     * Encodes the specified ReqCloseCamera message. Does not implicitly {@link ReqCloseCamera.verify|verify} messages.
     * @function encode
     * @memberof ReqCloseCamera
     * @static
     * @param {IReqCloseCamera} message ReqCloseCamera message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqCloseCamera.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqCloseCamera message, length delimited. Does not implicitly {@link ReqCloseCamera.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqCloseCamera
     * @static
     * @param {IReqCloseCamera} message ReqCloseCamera message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqCloseCamera.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqCloseCamera message from the specified reader or buffer.
     * @function decode
     * @memberof ReqCloseCamera
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqCloseCamera} ReqCloseCamera
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqCloseCamera.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqCloseCamera();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqCloseCamera message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqCloseCamera
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqCloseCamera} ReqCloseCamera
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqCloseCamera.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqCloseCamera message.
     * @function verify
     * @memberof ReqCloseCamera
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqCloseCamera.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqCloseCamera message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqCloseCamera
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqCloseCamera} ReqCloseCamera
     */
    ReqCloseCamera.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqCloseCamera)
            return object;
        return new $root.ReqCloseCamera();
    };
    /**
     * Creates a plain object from a ReqCloseCamera message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqCloseCamera
     * @static
     * @param {ReqCloseCamera} message ReqCloseCamera
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqCloseCamera.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqCloseCamera to JSON.
     * @function toJSON
     * @memberof ReqCloseCamera
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqCloseCamera.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqCloseCamera
     * @function getTypeUrl
     * @memberof ReqCloseCamera
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqCloseCamera.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqCloseCamera";
    };
    return ReqCloseCamera;
})();
$root.ReqPhoto = (function () {
    /**
     * Properties of a ReqPhoto.
     * @exports IReqPhoto
     * @interface IReqPhoto
     */
    /**
     * Constructs a new ReqPhoto.
     * @exports ReqPhoto
     * @classdesc Represents a ReqPhoto.
     * @implements IReqPhoto
     * @constructor
     * @param {IReqPhoto=} [properties] Properties to set
     */
    function ReqPhoto(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqPhoto instance using the specified properties.
     * @function create
     * @memberof ReqPhoto
     * @static
     * @param {IReqPhoto=} [properties] Properties to set
     * @returns {ReqPhoto} ReqPhoto instance
     */
    ReqPhoto.create = function create(properties) {
        return new ReqPhoto(properties);
    };
    /**
     * Encodes the specified ReqPhoto message. Does not implicitly {@link ReqPhoto.verify|verify} messages.
     * @function encode
     * @memberof ReqPhoto
     * @static
     * @param {IReqPhoto} message ReqPhoto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPhoto.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqPhoto message, length delimited. Does not implicitly {@link ReqPhoto.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPhoto
     * @static
     * @param {IReqPhoto} message ReqPhoto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPhoto.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqPhoto message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPhoto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPhoto} ReqPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPhoto.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPhoto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqPhoto message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPhoto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPhoto} ReqPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPhoto.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqPhoto message.
     * @function verify
     * @memberof ReqPhoto
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPhoto.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqPhoto message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPhoto
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPhoto} ReqPhoto
     */
    ReqPhoto.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPhoto)
            return object;
        return new $root.ReqPhoto();
    };
    /**
     * Creates a plain object from a ReqPhoto message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPhoto
     * @static
     * @param {ReqPhoto} message ReqPhoto
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPhoto.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqPhoto to JSON.
     * @function toJSON
     * @memberof ReqPhoto
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPhoto.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqPhoto
     * @function getTypeUrl
     * @memberof ReqPhoto
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqPhoto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqPhoto";
    };
    return ReqPhoto;
})();
$root.ReqBurstPhoto = (function () {
    /**
     * Properties of a ReqBurstPhoto.
     * @exports IReqBurstPhoto
     * @interface IReqBurstPhoto
     * @property {number|null} [count] ReqBurstPhoto count
     */
    /**
     * Constructs a new ReqBurstPhoto.
     * @exports ReqBurstPhoto
     * @classdesc Represents a ReqBurstPhoto.
     * @implements IReqBurstPhoto
     * @constructor
     * @param {IReqBurstPhoto=} [properties] Properties to set
     */
    function ReqBurstPhoto(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqBurstPhoto count.
     * @member {number} count
     * @memberof ReqBurstPhoto
     * @instance
     */
    ReqBurstPhoto.prototype.count = 0;
    /**
     * Creates a new ReqBurstPhoto instance using the specified properties.
     * @function create
     * @memberof ReqBurstPhoto
     * @static
     * @param {IReqBurstPhoto=} [properties] Properties to set
     * @returns {ReqBurstPhoto} ReqBurstPhoto instance
     */
    ReqBurstPhoto.create = function create(properties) {
        return new ReqBurstPhoto(properties);
    };
    /**
     * Encodes the specified ReqBurstPhoto message. Does not implicitly {@link ReqBurstPhoto.verify|verify} messages.
     * @function encode
     * @memberof ReqBurstPhoto
     * @static
     * @param {IReqBurstPhoto} message ReqBurstPhoto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqBurstPhoto.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.count);
        return writer;
    };
    /**
     * Encodes the specified ReqBurstPhoto message, length delimited. Does not implicitly {@link ReqBurstPhoto.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqBurstPhoto
     * @static
     * @param {IReqBurstPhoto} message ReqBurstPhoto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqBurstPhoto.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqBurstPhoto message from the specified reader or buffer.
     * @function decode
     * @memberof ReqBurstPhoto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqBurstPhoto} ReqBurstPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqBurstPhoto.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqBurstPhoto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.count = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqBurstPhoto message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqBurstPhoto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqBurstPhoto} ReqBurstPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqBurstPhoto.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqBurstPhoto message.
     * @function verify
     * @memberof ReqBurstPhoto
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqBurstPhoto.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count))
                return "count: integer expected";
        return null;
    };
    /**
     * Creates a ReqBurstPhoto message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqBurstPhoto
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqBurstPhoto} ReqBurstPhoto
     */
    ReqBurstPhoto.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqBurstPhoto)
            return object;
        var message = new $root.ReqBurstPhoto();
        if (object.count != null)
            message.count = object.count | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqBurstPhoto message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqBurstPhoto
     * @static
     * @param {ReqBurstPhoto} message ReqBurstPhoto
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqBurstPhoto.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.count = 0;
        if (message.count != null && message.hasOwnProperty("count"))
            object.count = message.count;
        return object;
    };
    /**
     * Converts this ReqBurstPhoto to JSON.
     * @function toJSON
     * @memberof ReqBurstPhoto
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqBurstPhoto.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqBurstPhoto
     * @function getTypeUrl
     * @memberof ReqBurstPhoto
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqBurstPhoto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqBurstPhoto";
    };
    return ReqBurstPhoto;
})();
$root.ReqStopBurstPhoto = (function () {
    /**
     * Properties of a ReqStopBurstPhoto.
     * @exports IReqStopBurstPhoto
     * @interface IReqStopBurstPhoto
     */
    /**
     * Constructs a new ReqStopBurstPhoto.
     * @exports ReqStopBurstPhoto
     * @classdesc Represents a ReqStopBurstPhoto.
     * @implements IReqStopBurstPhoto
     * @constructor
     * @param {IReqStopBurstPhoto=} [properties] Properties to set
     */
    function ReqStopBurstPhoto(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStopBurstPhoto instance using the specified properties.
     * @function create
     * @memberof ReqStopBurstPhoto
     * @static
     * @param {IReqStopBurstPhoto=} [properties] Properties to set
     * @returns {ReqStopBurstPhoto} ReqStopBurstPhoto instance
     */
    ReqStopBurstPhoto.create = function create(properties) {
        return new ReqStopBurstPhoto(properties);
    };
    /**
     * Encodes the specified ReqStopBurstPhoto message. Does not implicitly {@link ReqStopBurstPhoto.verify|verify} messages.
     * @function encode
     * @memberof ReqStopBurstPhoto
     * @static
     * @param {IReqStopBurstPhoto} message ReqStopBurstPhoto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopBurstPhoto.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStopBurstPhoto message, length delimited. Does not implicitly {@link ReqStopBurstPhoto.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStopBurstPhoto
     * @static
     * @param {IReqStopBurstPhoto} message ReqStopBurstPhoto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopBurstPhoto.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStopBurstPhoto message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStopBurstPhoto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStopBurstPhoto} ReqStopBurstPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopBurstPhoto.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStopBurstPhoto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStopBurstPhoto message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStopBurstPhoto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStopBurstPhoto} ReqStopBurstPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopBurstPhoto.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStopBurstPhoto message.
     * @function verify
     * @memberof ReqStopBurstPhoto
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStopBurstPhoto.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStopBurstPhoto message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStopBurstPhoto
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStopBurstPhoto} ReqStopBurstPhoto
     */
    ReqStopBurstPhoto.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStopBurstPhoto)
            return object;
        return new $root.ReqStopBurstPhoto();
    };
    /**
     * Creates a plain object from a ReqStopBurstPhoto message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStopBurstPhoto
     * @static
     * @param {ReqStopBurstPhoto} message ReqStopBurstPhoto
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStopBurstPhoto.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStopBurstPhoto to JSON.
     * @function toJSON
     * @memberof ReqStopBurstPhoto
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStopBurstPhoto.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStopBurstPhoto
     * @function getTypeUrl
     * @memberof ReqStopBurstPhoto
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStopBurstPhoto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStopBurstPhoto";
    };
    return ReqStopBurstPhoto;
})();
$root.ReqStartRecord = (function () {
    /**
     * Properties of a ReqStartRecord.
     * @exports IReqStartRecord
     * @interface IReqStartRecord
     */
    /**
     * Constructs a new ReqStartRecord.
     * @exports ReqStartRecord
     * @classdesc Represents a ReqStartRecord.
     * @implements IReqStartRecord
     * @constructor
     * @param {IReqStartRecord=} [properties] Properties to set
     */
    function ReqStartRecord(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStartRecord instance using the specified properties.
     * @function create
     * @memberof ReqStartRecord
     * @static
     * @param {IReqStartRecord=} [properties] Properties to set
     * @returns {ReqStartRecord} ReqStartRecord instance
     */
    ReqStartRecord.create = function create(properties) {
        return new ReqStartRecord(properties);
    };
    /**
     * Encodes the specified ReqStartRecord message. Does not implicitly {@link ReqStartRecord.verify|verify} messages.
     * @function encode
     * @memberof ReqStartRecord
     * @static
     * @param {IReqStartRecord} message ReqStartRecord message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStartRecord.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStartRecord message, length delimited. Does not implicitly {@link ReqStartRecord.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStartRecord
     * @static
     * @param {IReqStartRecord} message ReqStartRecord message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStartRecord.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStartRecord message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStartRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStartRecord} ReqStartRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStartRecord.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStartRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStartRecord message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStartRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStartRecord} ReqStartRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStartRecord.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStartRecord message.
     * @function verify
     * @memberof ReqStartRecord
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStartRecord.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStartRecord message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStartRecord
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStartRecord} ReqStartRecord
     */
    ReqStartRecord.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStartRecord)
            return object;
        return new $root.ReqStartRecord();
    };
    /**
     * Creates a plain object from a ReqStartRecord message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStartRecord
     * @static
     * @param {ReqStartRecord} message ReqStartRecord
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStartRecord.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStartRecord to JSON.
     * @function toJSON
     * @memberof ReqStartRecord
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStartRecord.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStartRecord
     * @function getTypeUrl
     * @memberof ReqStartRecord
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStartRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStartRecord";
    };
    return ReqStartRecord;
})();
$root.ReqStopRecord = (function () {
    /**
     * Properties of a ReqStopRecord.
     * @exports IReqStopRecord
     * @interface IReqStopRecord
     */
    /**
     * Constructs a new ReqStopRecord.
     * @exports ReqStopRecord
     * @classdesc Represents a ReqStopRecord.
     * @implements IReqStopRecord
     * @constructor
     * @param {IReqStopRecord=} [properties] Properties to set
     */
    function ReqStopRecord(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStopRecord instance using the specified properties.
     * @function create
     * @memberof ReqStopRecord
     * @static
     * @param {IReqStopRecord=} [properties] Properties to set
     * @returns {ReqStopRecord} ReqStopRecord instance
     */
    ReqStopRecord.create = function create(properties) {
        return new ReqStopRecord(properties);
    };
    /**
     * Encodes the specified ReqStopRecord message. Does not implicitly {@link ReqStopRecord.verify|verify} messages.
     * @function encode
     * @memberof ReqStopRecord
     * @static
     * @param {IReqStopRecord} message ReqStopRecord message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopRecord.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStopRecord message, length delimited. Does not implicitly {@link ReqStopRecord.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStopRecord
     * @static
     * @param {IReqStopRecord} message ReqStopRecord message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopRecord.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStopRecord message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStopRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStopRecord} ReqStopRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopRecord.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStopRecord();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStopRecord message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStopRecord
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStopRecord} ReqStopRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopRecord.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStopRecord message.
     * @function verify
     * @memberof ReqStopRecord
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStopRecord.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStopRecord message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStopRecord
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStopRecord} ReqStopRecord
     */
    ReqStopRecord.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStopRecord)
            return object;
        return new $root.ReqStopRecord();
    };
    /**
     * Creates a plain object from a ReqStopRecord message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStopRecord
     * @static
     * @param {ReqStopRecord} message ReqStopRecord
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStopRecord.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStopRecord to JSON.
     * @function toJSON
     * @memberof ReqStopRecord
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStopRecord.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStopRecord
     * @function getTypeUrl
     * @memberof ReqStopRecord
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStopRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStopRecord";
    };
    return ReqStopRecord;
})();
$root.ReqSetExpMode = (function () {
    /**
     * Properties of a ReqSetExpMode.
     * @exports IReqSetExpMode
     * @interface IReqSetExpMode
     * @property {number|null} [mode] ReqSetExpMode mode
     */
    /**
     * Constructs a new ReqSetExpMode.
     * @exports ReqSetExpMode
     * @classdesc Represents a ReqSetExpMode.
     * @implements IReqSetExpMode
     * @constructor
     * @param {IReqSetExpMode=} [properties] Properties to set
     */
    function ReqSetExpMode(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetExpMode mode.
     * @member {number} mode
     * @memberof ReqSetExpMode
     * @instance
     */
    ReqSetExpMode.prototype.mode = 0;
    /**
     * Creates a new ReqSetExpMode instance using the specified properties.
     * @function create
     * @memberof ReqSetExpMode
     * @static
     * @param {IReqSetExpMode=} [properties] Properties to set
     * @returns {ReqSetExpMode} ReqSetExpMode instance
     */
    ReqSetExpMode.create = function create(properties) {
        return new ReqSetExpMode(properties);
    };
    /**
     * Encodes the specified ReqSetExpMode message. Does not implicitly {@link ReqSetExpMode.verify|verify} messages.
     * @function encode
     * @memberof ReqSetExpMode
     * @static
     * @param {IReqSetExpMode} message ReqSetExpMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetExpMode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.mode);
        return writer;
    };
    /**
     * Encodes the specified ReqSetExpMode message, length delimited. Does not implicitly {@link ReqSetExpMode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetExpMode
     * @static
     * @param {IReqSetExpMode} message ReqSetExpMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetExpMode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetExpMode message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetExpMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetExpMode} ReqSetExpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetExpMode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetExpMode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.mode = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetExpMode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetExpMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetExpMode} ReqSetExpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetExpMode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetExpMode message.
     * @function verify
     * @memberof ReqSetExpMode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetExpMode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            if (!$util.isInteger(message.mode))
                return "mode: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetExpMode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetExpMode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetExpMode} ReqSetExpMode
     */
    ReqSetExpMode.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetExpMode)
            return object;
        var message = new $root.ReqSetExpMode();
        if (object.mode != null)
            message.mode = object.mode | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetExpMode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetExpMode
     * @static
     * @param {ReqSetExpMode} message ReqSetExpMode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetExpMode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mode = 0;
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = message.mode;
        return object;
    };
    /**
     * Converts this ReqSetExpMode to JSON.
     * @function toJSON
     * @memberof ReqSetExpMode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetExpMode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetExpMode
     * @function getTypeUrl
     * @memberof ReqSetExpMode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetExpMode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetExpMode";
    };
    return ReqSetExpMode;
})();
$root.ReqGetExpMode = (function () {
    /**
     * Properties of a ReqGetExpMode.
     * @exports IReqGetExpMode
     * @interface IReqGetExpMode
     */
    /**
     * Constructs a new ReqGetExpMode.
     * @exports ReqGetExpMode
     * @classdesc Represents a ReqGetExpMode.
     * @implements IReqGetExpMode
     * @constructor
     * @param {IReqGetExpMode=} [properties] Properties to set
     */
    function ReqGetExpMode(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetExpMode instance using the specified properties.
     * @function create
     * @memberof ReqGetExpMode
     * @static
     * @param {IReqGetExpMode=} [properties] Properties to set
     * @returns {ReqGetExpMode} ReqGetExpMode instance
     */
    ReqGetExpMode.create = function create(properties) {
        return new ReqGetExpMode(properties);
    };
    /**
     * Encodes the specified ReqGetExpMode message. Does not implicitly {@link ReqGetExpMode.verify|verify} messages.
     * @function encode
     * @memberof ReqGetExpMode
     * @static
     * @param {IReqGetExpMode} message ReqGetExpMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetExpMode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetExpMode message, length delimited. Does not implicitly {@link ReqGetExpMode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetExpMode
     * @static
     * @param {IReqGetExpMode} message ReqGetExpMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetExpMode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetExpMode message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetExpMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetExpMode} ReqGetExpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetExpMode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetExpMode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetExpMode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetExpMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetExpMode} ReqGetExpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetExpMode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetExpMode message.
     * @function verify
     * @memberof ReqGetExpMode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetExpMode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetExpMode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetExpMode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetExpMode} ReqGetExpMode
     */
    ReqGetExpMode.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetExpMode)
            return object;
        return new $root.ReqGetExpMode();
    };
    /**
     * Creates a plain object from a ReqGetExpMode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetExpMode
     * @static
     * @param {ReqGetExpMode} message ReqGetExpMode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetExpMode.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetExpMode to JSON.
     * @function toJSON
     * @memberof ReqGetExpMode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetExpMode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetExpMode
     * @function getTypeUrl
     * @memberof ReqGetExpMode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetExpMode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetExpMode";
    };
    return ReqGetExpMode;
})();
$root.ReqSetExp = (function () {
    /**
     * Properties of a ReqSetExp.
     * @exports IReqSetExp
     * @interface IReqSetExp
     * @property {number|null} [index] ReqSetExp index
     */
    /**
     * Constructs a new ReqSetExp.
     * @exports ReqSetExp
     * @classdesc Represents a ReqSetExp.
     * @implements IReqSetExp
     * @constructor
     * @param {IReqSetExp=} [properties] Properties to set
     */
    function ReqSetExp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetExp index.
     * @member {number} index
     * @memberof ReqSetExp
     * @instance
     */
    ReqSetExp.prototype.index = 0;
    /**
     * Creates a new ReqSetExp instance using the specified properties.
     * @function create
     * @memberof ReqSetExp
     * @static
     * @param {IReqSetExp=} [properties] Properties to set
     * @returns {ReqSetExp} ReqSetExp instance
     */
    ReqSetExp.create = function create(properties) {
        return new ReqSetExp(properties);
    };
    /**
     * Encodes the specified ReqSetExp message. Does not implicitly {@link ReqSetExp.verify|verify} messages.
     * @function encode
     * @memberof ReqSetExp
     * @static
     * @param {IReqSetExp} message ReqSetExp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetExp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.index);
        return writer;
    };
    /**
     * Encodes the specified ReqSetExp message, length delimited. Does not implicitly {@link ReqSetExp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetExp
     * @static
     * @param {IReqSetExp} message ReqSetExp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetExp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetExp message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetExp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetExp} ReqSetExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetExp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetExp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.index = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetExp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetExp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetExp} ReqSetExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetExp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetExp message.
     * @function verify
     * @memberof ReqSetExp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetExp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetExp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetExp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetExp} ReqSetExp
     */
    ReqSetExp.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetExp)
            return object;
        var message = new $root.ReqSetExp();
        if (object.index != null)
            message.index = object.index | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetExp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetExp
     * @static
     * @param {ReqSetExp} message ReqSetExp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetExp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.index = 0;
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        return object;
    };
    /**
     * Converts this ReqSetExp to JSON.
     * @function toJSON
     * @memberof ReqSetExp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetExp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetExp
     * @function getTypeUrl
     * @memberof ReqSetExp
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetExp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetExp";
    };
    return ReqSetExp;
})();
$root.ReqGetExp = (function () {
    /**
     * Properties of a ReqGetExp.
     * @exports IReqGetExp
     * @interface IReqGetExp
     */
    /**
     * Constructs a new ReqGetExp.
     * @exports ReqGetExp
     * @classdesc Represents a ReqGetExp.
     * @implements IReqGetExp
     * @constructor
     * @param {IReqGetExp=} [properties] Properties to set
     */
    function ReqGetExp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetExp instance using the specified properties.
     * @function create
     * @memberof ReqGetExp
     * @static
     * @param {IReqGetExp=} [properties] Properties to set
     * @returns {ReqGetExp} ReqGetExp instance
     */
    ReqGetExp.create = function create(properties) {
        return new ReqGetExp(properties);
    };
    /**
     * Encodes the specified ReqGetExp message. Does not implicitly {@link ReqGetExp.verify|verify} messages.
     * @function encode
     * @memberof ReqGetExp
     * @static
     * @param {IReqGetExp} message ReqGetExp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetExp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetExp message, length delimited. Does not implicitly {@link ReqGetExp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetExp
     * @static
     * @param {IReqGetExp} message ReqGetExp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetExp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetExp message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetExp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetExp} ReqGetExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetExp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetExp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetExp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetExp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetExp} ReqGetExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetExp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetExp message.
     * @function verify
     * @memberof ReqGetExp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetExp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetExp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetExp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetExp} ReqGetExp
     */
    ReqGetExp.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetExp)
            return object;
        return new $root.ReqGetExp();
    };
    /**
     * Creates a plain object from a ReqGetExp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetExp
     * @static
     * @param {ReqGetExp} message ReqGetExp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetExp.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetExp to JSON.
     * @function toJSON
     * @memberof ReqGetExp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetExp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetExp
     * @function getTypeUrl
     * @memberof ReqGetExp
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetExp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetExp";
    };
    return ReqGetExp;
})();
$root.ReqSetGainMode = (function () {
    /**
     * Properties of a ReqSetGainMode.
     * @exports IReqSetGainMode
     * @interface IReqSetGainMode
     * @property {number|null} [mode] ReqSetGainMode mode
     */
    /**
     * Constructs a new ReqSetGainMode.
     * @exports ReqSetGainMode
     * @classdesc Represents a ReqSetGainMode.
     * @implements IReqSetGainMode
     * @constructor
     * @param {IReqSetGainMode=} [properties] Properties to set
     */
    function ReqSetGainMode(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetGainMode mode.
     * @member {number} mode
     * @memberof ReqSetGainMode
     * @instance
     */
    ReqSetGainMode.prototype.mode = 0;
    /**
     * Creates a new ReqSetGainMode instance using the specified properties.
     * @function create
     * @memberof ReqSetGainMode
     * @static
     * @param {IReqSetGainMode=} [properties] Properties to set
     * @returns {ReqSetGainMode} ReqSetGainMode instance
     */
    ReqSetGainMode.create = function create(properties) {
        return new ReqSetGainMode(properties);
    };
    /**
     * Encodes the specified ReqSetGainMode message. Does not implicitly {@link ReqSetGainMode.verify|verify} messages.
     * @function encode
     * @memberof ReqSetGainMode
     * @static
     * @param {IReqSetGainMode} message ReqSetGainMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetGainMode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.mode);
        return writer;
    };
    /**
     * Encodes the specified ReqSetGainMode message, length delimited. Does not implicitly {@link ReqSetGainMode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetGainMode
     * @static
     * @param {IReqSetGainMode} message ReqSetGainMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetGainMode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetGainMode message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetGainMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetGainMode} ReqSetGainMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetGainMode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetGainMode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.mode = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetGainMode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetGainMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetGainMode} ReqSetGainMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetGainMode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetGainMode message.
     * @function verify
     * @memberof ReqSetGainMode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetGainMode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            if (!$util.isInteger(message.mode))
                return "mode: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetGainMode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetGainMode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetGainMode} ReqSetGainMode
     */
    ReqSetGainMode.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetGainMode)
            return object;
        var message = new $root.ReqSetGainMode();
        if (object.mode != null)
            message.mode = object.mode | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetGainMode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetGainMode
     * @static
     * @param {ReqSetGainMode} message ReqSetGainMode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetGainMode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mode = 0;
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = message.mode;
        return object;
    };
    /**
     * Converts this ReqSetGainMode to JSON.
     * @function toJSON
     * @memberof ReqSetGainMode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetGainMode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetGainMode
     * @function getTypeUrl
     * @memberof ReqSetGainMode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetGainMode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetGainMode";
    };
    return ReqSetGainMode;
})();
$root.ReqGetGainMode = (function () {
    /**
     * Properties of a ReqGetGainMode.
     * @exports IReqGetGainMode
     * @interface IReqGetGainMode
     */
    /**
     * Constructs a new ReqGetGainMode.
     * @exports ReqGetGainMode
     * @classdesc Represents a ReqGetGainMode.
     * @implements IReqGetGainMode
     * @constructor
     * @param {IReqGetGainMode=} [properties] Properties to set
     */
    function ReqGetGainMode(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetGainMode instance using the specified properties.
     * @function create
     * @memberof ReqGetGainMode
     * @static
     * @param {IReqGetGainMode=} [properties] Properties to set
     * @returns {ReqGetGainMode} ReqGetGainMode instance
     */
    ReqGetGainMode.create = function create(properties) {
        return new ReqGetGainMode(properties);
    };
    /**
     * Encodes the specified ReqGetGainMode message. Does not implicitly {@link ReqGetGainMode.verify|verify} messages.
     * @function encode
     * @memberof ReqGetGainMode
     * @static
     * @param {IReqGetGainMode} message ReqGetGainMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetGainMode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetGainMode message, length delimited. Does not implicitly {@link ReqGetGainMode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetGainMode
     * @static
     * @param {IReqGetGainMode} message ReqGetGainMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetGainMode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetGainMode message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetGainMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetGainMode} ReqGetGainMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetGainMode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetGainMode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetGainMode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetGainMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetGainMode} ReqGetGainMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetGainMode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetGainMode message.
     * @function verify
     * @memberof ReqGetGainMode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetGainMode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetGainMode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetGainMode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetGainMode} ReqGetGainMode
     */
    ReqGetGainMode.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetGainMode)
            return object;
        return new $root.ReqGetGainMode();
    };
    /**
     * Creates a plain object from a ReqGetGainMode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetGainMode
     * @static
     * @param {ReqGetGainMode} message ReqGetGainMode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetGainMode.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetGainMode to JSON.
     * @function toJSON
     * @memberof ReqGetGainMode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetGainMode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetGainMode
     * @function getTypeUrl
     * @memberof ReqGetGainMode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetGainMode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetGainMode";
    };
    return ReqGetGainMode;
})();
$root.ReqSetGain = (function () {
    /**
     * Properties of a ReqSetGain.
     * @exports IReqSetGain
     * @interface IReqSetGain
     * @property {number|null} [index] ReqSetGain index
     */
    /**
     * Constructs a new ReqSetGain.
     * @exports ReqSetGain
     * @classdesc Represents a ReqSetGain.
     * @implements IReqSetGain
     * @constructor
     * @param {IReqSetGain=} [properties] Properties to set
     */
    function ReqSetGain(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetGain index.
     * @member {number} index
     * @memberof ReqSetGain
     * @instance
     */
    ReqSetGain.prototype.index = 0;
    /**
     * Creates a new ReqSetGain instance using the specified properties.
     * @function create
     * @memberof ReqSetGain
     * @static
     * @param {IReqSetGain=} [properties] Properties to set
     * @returns {ReqSetGain} ReqSetGain instance
     */
    ReqSetGain.create = function create(properties) {
        return new ReqSetGain(properties);
    };
    /**
     * Encodes the specified ReqSetGain message. Does not implicitly {@link ReqSetGain.verify|verify} messages.
     * @function encode
     * @memberof ReqSetGain
     * @static
     * @param {IReqSetGain} message ReqSetGain message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetGain.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.index);
        return writer;
    };
    /**
     * Encodes the specified ReqSetGain message, length delimited. Does not implicitly {@link ReqSetGain.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetGain
     * @static
     * @param {IReqSetGain} message ReqSetGain message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetGain.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetGain message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetGain
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetGain} ReqSetGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetGain.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetGain();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.index = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetGain message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetGain
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetGain} ReqSetGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetGain.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetGain message.
     * @function verify
     * @memberof ReqSetGain
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetGain.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetGain message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetGain
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetGain} ReqSetGain
     */
    ReqSetGain.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetGain)
            return object;
        var message = new $root.ReqSetGain();
        if (object.index != null)
            message.index = object.index | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetGain message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetGain
     * @static
     * @param {ReqSetGain} message ReqSetGain
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetGain.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.index = 0;
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        return object;
    };
    /**
     * Converts this ReqSetGain to JSON.
     * @function toJSON
     * @memberof ReqSetGain
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetGain.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetGain
     * @function getTypeUrl
     * @memberof ReqSetGain
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetGain.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetGain";
    };
    return ReqSetGain;
})();
$root.ReqGetGain = (function () {
    /**
     * Properties of a ReqGetGain.
     * @exports IReqGetGain
     * @interface IReqGetGain
     */
    /**
     * Constructs a new ReqGetGain.
     * @exports ReqGetGain
     * @classdesc Represents a ReqGetGain.
     * @implements IReqGetGain
     * @constructor
     * @param {IReqGetGain=} [properties] Properties to set
     */
    function ReqGetGain(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetGain instance using the specified properties.
     * @function create
     * @memberof ReqGetGain
     * @static
     * @param {IReqGetGain=} [properties] Properties to set
     * @returns {ReqGetGain} ReqGetGain instance
     */
    ReqGetGain.create = function create(properties) {
        return new ReqGetGain(properties);
    };
    /**
     * Encodes the specified ReqGetGain message. Does not implicitly {@link ReqGetGain.verify|verify} messages.
     * @function encode
     * @memberof ReqGetGain
     * @static
     * @param {IReqGetGain} message ReqGetGain message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetGain.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetGain message, length delimited. Does not implicitly {@link ReqGetGain.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetGain
     * @static
     * @param {IReqGetGain} message ReqGetGain message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetGain.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetGain message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetGain
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetGain} ReqGetGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetGain.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetGain();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetGain message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetGain
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetGain} ReqGetGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetGain.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetGain message.
     * @function verify
     * @memberof ReqGetGain
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetGain.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetGain message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetGain
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetGain} ReqGetGain
     */
    ReqGetGain.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetGain)
            return object;
        return new $root.ReqGetGain();
    };
    /**
     * Creates a plain object from a ReqGetGain message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetGain
     * @static
     * @param {ReqGetGain} message ReqGetGain
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetGain.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetGain to JSON.
     * @function toJSON
     * @memberof ReqGetGain
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetGain.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetGain
     * @function getTypeUrl
     * @memberof ReqGetGain
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetGain.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetGain";
    };
    return ReqGetGain;
})();
$root.ReqSetBrightness = (function () {
    /**
     * Properties of a ReqSetBrightness.
     * @exports IReqSetBrightness
     * @interface IReqSetBrightness
     * @property {number|null} [value] ReqSetBrightness value
     */
    /**
     * Constructs a new ReqSetBrightness.
     * @exports ReqSetBrightness
     * @classdesc Represents a ReqSetBrightness.
     * @implements IReqSetBrightness
     * @constructor
     * @param {IReqSetBrightness=} [properties] Properties to set
     */
    function ReqSetBrightness(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetBrightness value.
     * @member {number} value
     * @memberof ReqSetBrightness
     * @instance
     */
    ReqSetBrightness.prototype.value = 0;
    /**
     * Creates a new ReqSetBrightness instance using the specified properties.
     * @function create
     * @memberof ReqSetBrightness
     * @static
     * @param {IReqSetBrightness=} [properties] Properties to set
     * @returns {ReqSetBrightness} ReqSetBrightness instance
     */
    ReqSetBrightness.create = function create(properties) {
        return new ReqSetBrightness(properties);
    };
    /**
     * Encodes the specified ReqSetBrightness message. Does not implicitly {@link ReqSetBrightness.verify|verify} messages.
     * @function encode
     * @memberof ReqSetBrightness
     * @static
     * @param {IReqSetBrightness} message ReqSetBrightness message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetBrightness.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.value);
        return writer;
    };
    /**
     * Encodes the specified ReqSetBrightness message, length delimited. Does not implicitly {@link ReqSetBrightness.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetBrightness
     * @static
     * @param {IReqSetBrightness} message ReqSetBrightness message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetBrightness.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetBrightness message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetBrightness
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetBrightness} ReqSetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetBrightness.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetBrightness();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.value = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetBrightness message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetBrightness
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetBrightness} ReqSetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetBrightness.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetBrightness message.
     * @function verify
     * @memberof ReqSetBrightness
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetBrightness.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetBrightness message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetBrightness
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetBrightness} ReqSetBrightness
     */
    ReqSetBrightness.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetBrightness)
            return object;
        var message = new $root.ReqSetBrightness();
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetBrightness message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetBrightness
     * @static
     * @param {ReqSetBrightness} message ReqSetBrightness
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetBrightness.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };
    /**
     * Converts this ReqSetBrightness to JSON.
     * @function toJSON
     * @memberof ReqSetBrightness
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetBrightness.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetBrightness
     * @function getTypeUrl
     * @memberof ReqSetBrightness
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetBrightness.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetBrightness";
    };
    return ReqSetBrightness;
})();
$root.ReqGetBrightness = (function () {
    /**
     * Properties of a ReqGetBrightness.
     * @exports IReqGetBrightness
     * @interface IReqGetBrightness
     */
    /**
     * Constructs a new ReqGetBrightness.
     * @exports ReqGetBrightness
     * @classdesc Represents a ReqGetBrightness.
     * @implements IReqGetBrightness
     * @constructor
     * @param {IReqGetBrightness=} [properties] Properties to set
     */
    function ReqGetBrightness(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetBrightness instance using the specified properties.
     * @function create
     * @memberof ReqGetBrightness
     * @static
     * @param {IReqGetBrightness=} [properties] Properties to set
     * @returns {ReqGetBrightness} ReqGetBrightness instance
     */
    ReqGetBrightness.create = function create(properties) {
        return new ReqGetBrightness(properties);
    };
    /**
     * Encodes the specified ReqGetBrightness message. Does not implicitly {@link ReqGetBrightness.verify|verify} messages.
     * @function encode
     * @memberof ReqGetBrightness
     * @static
     * @param {IReqGetBrightness} message ReqGetBrightness message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetBrightness.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetBrightness message, length delimited. Does not implicitly {@link ReqGetBrightness.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetBrightness
     * @static
     * @param {IReqGetBrightness} message ReqGetBrightness message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetBrightness.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetBrightness message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetBrightness
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetBrightness} ReqGetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetBrightness.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetBrightness();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetBrightness message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetBrightness
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetBrightness} ReqGetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetBrightness.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetBrightness message.
     * @function verify
     * @memberof ReqGetBrightness
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetBrightness.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetBrightness message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetBrightness
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetBrightness} ReqGetBrightness
     */
    ReqGetBrightness.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetBrightness)
            return object;
        return new $root.ReqGetBrightness();
    };
    /**
     * Creates a plain object from a ReqGetBrightness message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetBrightness
     * @static
     * @param {ReqGetBrightness} message ReqGetBrightness
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetBrightness.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetBrightness to JSON.
     * @function toJSON
     * @memberof ReqGetBrightness
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetBrightness.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetBrightness
     * @function getTypeUrl
     * @memberof ReqGetBrightness
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetBrightness.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetBrightness";
    };
    return ReqGetBrightness;
})();
$root.ReqSetContrast = (function () {
    /**
     * Properties of a ReqSetContrast.
     * @exports IReqSetContrast
     * @interface IReqSetContrast
     * @property {number|null} [value] ReqSetContrast value
     */
    /**
     * Constructs a new ReqSetContrast.
     * @exports ReqSetContrast
     * @classdesc Represents a ReqSetContrast.
     * @implements IReqSetContrast
     * @constructor
     * @param {IReqSetContrast=} [properties] Properties to set
     */
    function ReqSetContrast(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetContrast value.
     * @member {number} value
     * @memberof ReqSetContrast
     * @instance
     */
    ReqSetContrast.prototype.value = 0;
    /**
     * Creates a new ReqSetContrast instance using the specified properties.
     * @function create
     * @memberof ReqSetContrast
     * @static
     * @param {IReqSetContrast=} [properties] Properties to set
     * @returns {ReqSetContrast} ReqSetContrast instance
     */
    ReqSetContrast.create = function create(properties) {
        return new ReqSetContrast(properties);
    };
    /**
     * Encodes the specified ReqSetContrast message. Does not implicitly {@link ReqSetContrast.verify|verify} messages.
     * @function encode
     * @memberof ReqSetContrast
     * @static
     * @param {IReqSetContrast} message ReqSetContrast message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetContrast.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.value);
        return writer;
    };
    /**
     * Encodes the specified ReqSetContrast message, length delimited. Does not implicitly {@link ReqSetContrast.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetContrast
     * @static
     * @param {IReqSetContrast} message ReqSetContrast message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetContrast.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetContrast message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetContrast
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetContrast} ReqSetContrast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetContrast.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetContrast();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.value = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetContrast message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetContrast
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetContrast} ReqSetContrast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetContrast.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetContrast message.
     * @function verify
     * @memberof ReqSetContrast
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetContrast.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetContrast message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetContrast
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetContrast} ReqSetContrast
     */
    ReqSetContrast.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetContrast)
            return object;
        var message = new $root.ReqSetContrast();
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetContrast message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetContrast
     * @static
     * @param {ReqSetContrast} message ReqSetContrast
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetContrast.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };
    /**
     * Converts this ReqSetContrast to JSON.
     * @function toJSON
     * @memberof ReqSetContrast
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetContrast.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetContrast
     * @function getTypeUrl
     * @memberof ReqSetContrast
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetContrast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetContrast";
    };
    return ReqSetContrast;
})();
$root.ReqGetContrast = (function () {
    /**
     * Properties of a ReqGetContrast.
     * @exports IReqGetContrast
     * @interface IReqGetContrast
     */
    /**
     * Constructs a new ReqGetContrast.
     * @exports ReqGetContrast
     * @classdesc Represents a ReqGetContrast.
     * @implements IReqGetContrast
     * @constructor
     * @param {IReqGetContrast=} [properties] Properties to set
     */
    function ReqGetContrast(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetContrast instance using the specified properties.
     * @function create
     * @memberof ReqGetContrast
     * @static
     * @param {IReqGetContrast=} [properties] Properties to set
     * @returns {ReqGetContrast} ReqGetContrast instance
     */
    ReqGetContrast.create = function create(properties) {
        return new ReqGetContrast(properties);
    };
    /**
     * Encodes the specified ReqGetContrast message. Does not implicitly {@link ReqGetContrast.verify|verify} messages.
     * @function encode
     * @memberof ReqGetContrast
     * @static
     * @param {IReqGetContrast} message ReqGetContrast message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetContrast.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetContrast message, length delimited. Does not implicitly {@link ReqGetContrast.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetContrast
     * @static
     * @param {IReqGetContrast} message ReqGetContrast message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetContrast.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetContrast message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetContrast
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetContrast} ReqGetContrast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetContrast.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetContrast();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetContrast message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetContrast
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetContrast} ReqGetContrast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetContrast.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetContrast message.
     * @function verify
     * @memberof ReqGetContrast
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetContrast.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetContrast message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetContrast
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetContrast} ReqGetContrast
     */
    ReqGetContrast.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetContrast)
            return object;
        return new $root.ReqGetContrast();
    };
    /**
     * Creates a plain object from a ReqGetContrast message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetContrast
     * @static
     * @param {ReqGetContrast} message ReqGetContrast
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetContrast.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetContrast to JSON.
     * @function toJSON
     * @memberof ReqGetContrast
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetContrast.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetContrast
     * @function getTypeUrl
     * @memberof ReqGetContrast
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetContrast.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetContrast";
    };
    return ReqGetContrast;
})();
$root.ReqSetHue = (function () {
    /**
     * Properties of a ReqSetHue.
     * @exports IReqSetHue
     * @interface IReqSetHue
     * @property {number|null} [value] ReqSetHue value
     */
    /**
     * Constructs a new ReqSetHue.
     * @exports ReqSetHue
     * @classdesc Represents a ReqSetHue.
     * @implements IReqSetHue
     * @constructor
     * @param {IReqSetHue=} [properties] Properties to set
     */
    function ReqSetHue(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetHue value.
     * @member {number} value
     * @memberof ReqSetHue
     * @instance
     */
    ReqSetHue.prototype.value = 0;
    /**
     * Creates a new ReqSetHue instance using the specified properties.
     * @function create
     * @memberof ReqSetHue
     * @static
     * @param {IReqSetHue=} [properties] Properties to set
     * @returns {ReqSetHue} ReqSetHue instance
     */
    ReqSetHue.create = function create(properties) {
        return new ReqSetHue(properties);
    };
    /**
     * Encodes the specified ReqSetHue message. Does not implicitly {@link ReqSetHue.verify|verify} messages.
     * @function encode
     * @memberof ReqSetHue
     * @static
     * @param {IReqSetHue} message ReqSetHue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetHue.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.value);
        return writer;
    };
    /**
     * Encodes the specified ReqSetHue message, length delimited. Does not implicitly {@link ReqSetHue.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetHue
     * @static
     * @param {IReqSetHue} message ReqSetHue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetHue.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetHue message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetHue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetHue} ReqSetHue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetHue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetHue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.value = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetHue message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetHue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetHue} ReqSetHue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetHue.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetHue message.
     * @function verify
     * @memberof ReqSetHue
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetHue.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetHue message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetHue
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetHue} ReqSetHue
     */
    ReqSetHue.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetHue)
            return object;
        var message = new $root.ReqSetHue();
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetHue message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetHue
     * @static
     * @param {ReqSetHue} message ReqSetHue
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetHue.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };
    /**
     * Converts this ReqSetHue to JSON.
     * @function toJSON
     * @memberof ReqSetHue
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetHue.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetHue
     * @function getTypeUrl
     * @memberof ReqSetHue
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetHue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetHue";
    };
    return ReqSetHue;
})();
$root.ReqGetHue = (function () {
    /**
     * Properties of a ReqGetHue.
     * @exports IReqGetHue
     * @interface IReqGetHue
     */
    /**
     * Constructs a new ReqGetHue.
     * @exports ReqGetHue
     * @classdesc Represents a ReqGetHue.
     * @implements IReqGetHue
     * @constructor
     * @param {IReqGetHue=} [properties] Properties to set
     */
    function ReqGetHue(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetHue instance using the specified properties.
     * @function create
     * @memberof ReqGetHue
     * @static
     * @param {IReqGetHue=} [properties] Properties to set
     * @returns {ReqGetHue} ReqGetHue instance
     */
    ReqGetHue.create = function create(properties) {
        return new ReqGetHue(properties);
    };
    /**
     * Encodes the specified ReqGetHue message. Does not implicitly {@link ReqGetHue.verify|verify} messages.
     * @function encode
     * @memberof ReqGetHue
     * @static
     * @param {IReqGetHue} message ReqGetHue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetHue.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetHue message, length delimited. Does not implicitly {@link ReqGetHue.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetHue
     * @static
     * @param {IReqGetHue} message ReqGetHue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetHue.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetHue message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetHue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetHue} ReqGetHue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetHue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetHue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetHue message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetHue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetHue} ReqGetHue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetHue.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetHue message.
     * @function verify
     * @memberof ReqGetHue
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetHue.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetHue message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetHue
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetHue} ReqGetHue
     */
    ReqGetHue.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetHue)
            return object;
        return new $root.ReqGetHue();
    };
    /**
     * Creates a plain object from a ReqGetHue message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetHue
     * @static
     * @param {ReqGetHue} message ReqGetHue
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetHue.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetHue to JSON.
     * @function toJSON
     * @memberof ReqGetHue
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetHue.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetHue
     * @function getTypeUrl
     * @memberof ReqGetHue
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetHue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetHue";
    };
    return ReqGetHue;
})();
$root.ReqSetSaturation = (function () {
    /**
     * Properties of a ReqSetSaturation.
     * @exports IReqSetSaturation
     * @interface IReqSetSaturation
     * @property {number|null} [value] ReqSetSaturation value
     */
    /**
     * Constructs a new ReqSetSaturation.
     * @exports ReqSetSaturation
     * @classdesc Represents a ReqSetSaturation.
     * @implements IReqSetSaturation
     * @constructor
     * @param {IReqSetSaturation=} [properties] Properties to set
     */
    function ReqSetSaturation(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetSaturation value.
     * @member {number} value
     * @memberof ReqSetSaturation
     * @instance
     */
    ReqSetSaturation.prototype.value = 0;
    /**
     * Creates a new ReqSetSaturation instance using the specified properties.
     * @function create
     * @memberof ReqSetSaturation
     * @static
     * @param {IReqSetSaturation=} [properties] Properties to set
     * @returns {ReqSetSaturation} ReqSetSaturation instance
     */
    ReqSetSaturation.create = function create(properties) {
        return new ReqSetSaturation(properties);
    };
    /**
     * Encodes the specified ReqSetSaturation message. Does not implicitly {@link ReqSetSaturation.verify|verify} messages.
     * @function encode
     * @memberof ReqSetSaturation
     * @static
     * @param {IReqSetSaturation} message ReqSetSaturation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetSaturation.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.value);
        return writer;
    };
    /**
     * Encodes the specified ReqSetSaturation message, length delimited. Does not implicitly {@link ReqSetSaturation.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetSaturation
     * @static
     * @param {IReqSetSaturation} message ReqSetSaturation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetSaturation.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetSaturation message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetSaturation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetSaturation} ReqSetSaturation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetSaturation.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetSaturation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.value = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetSaturation message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetSaturation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetSaturation} ReqSetSaturation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetSaturation.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetSaturation message.
     * @function verify
     * @memberof ReqSetSaturation
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetSaturation.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetSaturation message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetSaturation
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetSaturation} ReqSetSaturation
     */
    ReqSetSaturation.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetSaturation)
            return object;
        var message = new $root.ReqSetSaturation();
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetSaturation message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetSaturation
     * @static
     * @param {ReqSetSaturation} message ReqSetSaturation
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetSaturation.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };
    /**
     * Converts this ReqSetSaturation to JSON.
     * @function toJSON
     * @memberof ReqSetSaturation
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetSaturation.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetSaturation
     * @function getTypeUrl
     * @memberof ReqSetSaturation
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetSaturation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetSaturation";
    };
    return ReqSetSaturation;
})();
$root.ReqGetSaturation = (function () {
    /**
     * Properties of a ReqGetSaturation.
     * @exports IReqGetSaturation
     * @interface IReqGetSaturation
     */
    /**
     * Constructs a new ReqGetSaturation.
     * @exports ReqGetSaturation
     * @classdesc Represents a ReqGetSaturation.
     * @implements IReqGetSaturation
     * @constructor
     * @param {IReqGetSaturation=} [properties] Properties to set
     */
    function ReqGetSaturation(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetSaturation instance using the specified properties.
     * @function create
     * @memberof ReqGetSaturation
     * @static
     * @param {IReqGetSaturation=} [properties] Properties to set
     * @returns {ReqGetSaturation} ReqGetSaturation instance
     */
    ReqGetSaturation.create = function create(properties) {
        return new ReqGetSaturation(properties);
    };
    /**
     * Encodes the specified ReqGetSaturation message. Does not implicitly {@link ReqGetSaturation.verify|verify} messages.
     * @function encode
     * @memberof ReqGetSaturation
     * @static
     * @param {IReqGetSaturation} message ReqGetSaturation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetSaturation.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetSaturation message, length delimited. Does not implicitly {@link ReqGetSaturation.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetSaturation
     * @static
     * @param {IReqGetSaturation} message ReqGetSaturation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetSaturation.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetSaturation message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetSaturation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetSaturation} ReqGetSaturation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetSaturation.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetSaturation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetSaturation message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetSaturation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetSaturation} ReqGetSaturation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetSaturation.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetSaturation message.
     * @function verify
     * @memberof ReqGetSaturation
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetSaturation.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetSaturation message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetSaturation
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetSaturation} ReqGetSaturation
     */
    ReqGetSaturation.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetSaturation)
            return object;
        return new $root.ReqGetSaturation();
    };
    /**
     * Creates a plain object from a ReqGetSaturation message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetSaturation
     * @static
     * @param {ReqGetSaturation} message ReqGetSaturation
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetSaturation.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetSaturation to JSON.
     * @function toJSON
     * @memberof ReqGetSaturation
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetSaturation.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetSaturation
     * @function getTypeUrl
     * @memberof ReqGetSaturation
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetSaturation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetSaturation";
    };
    return ReqGetSaturation;
})();
$root.ReqSetSharpness = (function () {
    /**
     * Properties of a ReqSetSharpness.
     * @exports IReqSetSharpness
     * @interface IReqSetSharpness
     * @property {number|null} [value] ReqSetSharpness value
     */
    /**
     * Constructs a new ReqSetSharpness.
     * @exports ReqSetSharpness
     * @classdesc Represents a ReqSetSharpness.
     * @implements IReqSetSharpness
     * @constructor
     * @param {IReqSetSharpness=} [properties] Properties to set
     */
    function ReqSetSharpness(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetSharpness value.
     * @member {number} value
     * @memberof ReqSetSharpness
     * @instance
     */
    ReqSetSharpness.prototype.value = 0;
    /**
     * Creates a new ReqSetSharpness instance using the specified properties.
     * @function create
     * @memberof ReqSetSharpness
     * @static
     * @param {IReqSetSharpness=} [properties] Properties to set
     * @returns {ReqSetSharpness} ReqSetSharpness instance
     */
    ReqSetSharpness.create = function create(properties) {
        return new ReqSetSharpness(properties);
    };
    /**
     * Encodes the specified ReqSetSharpness message. Does not implicitly {@link ReqSetSharpness.verify|verify} messages.
     * @function encode
     * @memberof ReqSetSharpness
     * @static
     * @param {IReqSetSharpness} message ReqSetSharpness message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetSharpness.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.value);
        return writer;
    };
    /**
     * Encodes the specified ReqSetSharpness message, length delimited. Does not implicitly {@link ReqSetSharpness.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetSharpness
     * @static
     * @param {IReqSetSharpness} message ReqSetSharpness message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetSharpness.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetSharpness message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetSharpness
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetSharpness} ReqSetSharpness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetSharpness.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetSharpness();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.value = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetSharpness message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetSharpness
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetSharpness} ReqSetSharpness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetSharpness.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetSharpness message.
     * @function verify
     * @memberof ReqSetSharpness
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetSharpness.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetSharpness message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetSharpness
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetSharpness} ReqSetSharpness
     */
    ReqSetSharpness.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetSharpness)
            return object;
        var message = new $root.ReqSetSharpness();
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetSharpness message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetSharpness
     * @static
     * @param {ReqSetSharpness} message ReqSetSharpness
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetSharpness.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };
    /**
     * Converts this ReqSetSharpness to JSON.
     * @function toJSON
     * @memberof ReqSetSharpness
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetSharpness.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetSharpness
     * @function getTypeUrl
     * @memberof ReqSetSharpness
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetSharpness.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetSharpness";
    };
    return ReqSetSharpness;
})();
$root.ReqGetSharpness = (function () {
    /**
     * Properties of a ReqGetSharpness.
     * @exports IReqGetSharpness
     * @interface IReqGetSharpness
     */
    /**
     * Constructs a new ReqGetSharpness.
     * @exports ReqGetSharpness
     * @classdesc Represents a ReqGetSharpness.
     * @implements IReqGetSharpness
     * @constructor
     * @param {IReqGetSharpness=} [properties] Properties to set
     */
    function ReqGetSharpness(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetSharpness instance using the specified properties.
     * @function create
     * @memberof ReqGetSharpness
     * @static
     * @param {IReqGetSharpness=} [properties] Properties to set
     * @returns {ReqGetSharpness} ReqGetSharpness instance
     */
    ReqGetSharpness.create = function create(properties) {
        return new ReqGetSharpness(properties);
    };
    /**
     * Encodes the specified ReqGetSharpness message. Does not implicitly {@link ReqGetSharpness.verify|verify} messages.
     * @function encode
     * @memberof ReqGetSharpness
     * @static
     * @param {IReqGetSharpness} message ReqGetSharpness message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetSharpness.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetSharpness message, length delimited. Does not implicitly {@link ReqGetSharpness.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetSharpness
     * @static
     * @param {IReqGetSharpness} message ReqGetSharpness message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetSharpness.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetSharpness message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetSharpness
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetSharpness} ReqGetSharpness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetSharpness.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetSharpness();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetSharpness message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetSharpness
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetSharpness} ReqGetSharpness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetSharpness.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetSharpness message.
     * @function verify
     * @memberof ReqGetSharpness
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetSharpness.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetSharpness message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetSharpness
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetSharpness} ReqGetSharpness
     */
    ReqGetSharpness.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetSharpness)
            return object;
        return new $root.ReqGetSharpness();
    };
    /**
     * Creates a plain object from a ReqGetSharpness message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetSharpness
     * @static
     * @param {ReqGetSharpness} message ReqGetSharpness
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetSharpness.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetSharpness to JSON.
     * @function toJSON
     * @memberof ReqGetSharpness
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetSharpness.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetSharpness
     * @function getTypeUrl
     * @memberof ReqGetSharpness
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetSharpness.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetSharpness";
    };
    return ReqGetSharpness;
})();
$root.ReqSetWBMode = (function () {
    /**
     * Properties of a ReqSetWBMode.
     * @exports IReqSetWBMode
     * @interface IReqSetWBMode
     * @property {number|null} [mode] ReqSetWBMode mode
     */
    /**
     * Constructs a new ReqSetWBMode.
     * @exports ReqSetWBMode
     * @classdesc Represents a ReqSetWBMode.
     * @implements IReqSetWBMode
     * @constructor
     * @param {IReqSetWBMode=} [properties] Properties to set
     */
    function ReqSetWBMode(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetWBMode mode.
     * @member {number} mode
     * @memberof ReqSetWBMode
     * @instance
     */
    ReqSetWBMode.prototype.mode = 0;
    /**
     * Creates a new ReqSetWBMode instance using the specified properties.
     * @function create
     * @memberof ReqSetWBMode
     * @static
     * @param {IReqSetWBMode=} [properties] Properties to set
     * @returns {ReqSetWBMode} ReqSetWBMode instance
     */
    ReqSetWBMode.create = function create(properties) {
        return new ReqSetWBMode(properties);
    };
    /**
     * Encodes the specified ReqSetWBMode message. Does not implicitly {@link ReqSetWBMode.verify|verify} messages.
     * @function encode
     * @memberof ReqSetWBMode
     * @static
     * @param {IReqSetWBMode} message ReqSetWBMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetWBMode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.mode);
        return writer;
    };
    /**
     * Encodes the specified ReqSetWBMode message, length delimited. Does not implicitly {@link ReqSetWBMode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetWBMode
     * @static
     * @param {IReqSetWBMode} message ReqSetWBMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetWBMode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetWBMode message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetWBMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetWBMode} ReqSetWBMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetWBMode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetWBMode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.mode = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetWBMode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetWBMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetWBMode} ReqSetWBMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetWBMode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetWBMode message.
     * @function verify
     * @memberof ReqSetWBMode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetWBMode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            if (!$util.isInteger(message.mode))
                return "mode: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetWBMode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetWBMode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetWBMode} ReqSetWBMode
     */
    ReqSetWBMode.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetWBMode)
            return object;
        var message = new $root.ReqSetWBMode();
        if (object.mode != null)
            message.mode = object.mode | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetWBMode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetWBMode
     * @static
     * @param {ReqSetWBMode} message ReqSetWBMode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetWBMode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mode = 0;
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = message.mode;
        return object;
    };
    /**
     * Converts this ReqSetWBMode to JSON.
     * @function toJSON
     * @memberof ReqSetWBMode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetWBMode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetWBMode
     * @function getTypeUrl
     * @memberof ReqSetWBMode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetWBMode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetWBMode";
    };
    return ReqSetWBMode;
})();
$root.ReqGetWBMode = (function () {
    /**
     * Properties of a ReqGetWBMode.
     * @exports IReqGetWBMode
     * @interface IReqGetWBMode
     */
    /**
     * Constructs a new ReqGetWBMode.
     * @exports ReqGetWBMode
     * @classdesc Represents a ReqGetWBMode.
     * @implements IReqGetWBMode
     * @constructor
     * @param {IReqGetWBMode=} [properties] Properties to set
     */
    function ReqGetWBMode(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetWBMode instance using the specified properties.
     * @function create
     * @memberof ReqGetWBMode
     * @static
     * @param {IReqGetWBMode=} [properties] Properties to set
     * @returns {ReqGetWBMode} ReqGetWBMode instance
     */
    ReqGetWBMode.create = function create(properties) {
        return new ReqGetWBMode(properties);
    };
    /**
     * Encodes the specified ReqGetWBMode message. Does not implicitly {@link ReqGetWBMode.verify|verify} messages.
     * @function encode
     * @memberof ReqGetWBMode
     * @static
     * @param {IReqGetWBMode} message ReqGetWBMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetWBMode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetWBMode message, length delimited. Does not implicitly {@link ReqGetWBMode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetWBMode
     * @static
     * @param {IReqGetWBMode} message ReqGetWBMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetWBMode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetWBMode message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetWBMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetWBMode} ReqGetWBMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetWBMode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetWBMode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetWBMode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetWBMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetWBMode} ReqGetWBMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetWBMode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetWBMode message.
     * @function verify
     * @memberof ReqGetWBMode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetWBMode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetWBMode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetWBMode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetWBMode} ReqGetWBMode
     */
    ReqGetWBMode.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetWBMode)
            return object;
        return new $root.ReqGetWBMode();
    };
    /**
     * Creates a plain object from a ReqGetWBMode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetWBMode
     * @static
     * @param {ReqGetWBMode} message ReqGetWBMode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetWBMode.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetWBMode to JSON.
     * @function toJSON
     * @memberof ReqGetWBMode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetWBMode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetWBMode
     * @function getTypeUrl
     * @memberof ReqGetWBMode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetWBMode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetWBMode";
    };
    return ReqGetWBMode;
})();
$root.ReqSetWBSence = (function () {
    /**
     * Properties of a ReqSetWBSence.
     * @exports IReqSetWBSence
     * @interface IReqSetWBSence
     * @property {number|null} [value] ReqSetWBSence value
     */
    /**
     * Constructs a new ReqSetWBSence.
     * @exports ReqSetWBSence
     * @classdesc Represents a ReqSetWBSence.
     * @implements IReqSetWBSence
     * @constructor
     * @param {IReqSetWBSence=} [properties] Properties to set
     */
    function ReqSetWBSence(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetWBSence value.
     * @member {number} value
     * @memberof ReqSetWBSence
     * @instance
     */
    ReqSetWBSence.prototype.value = 0;
    /**
     * Creates a new ReqSetWBSence instance using the specified properties.
     * @function create
     * @memberof ReqSetWBSence
     * @static
     * @param {IReqSetWBSence=} [properties] Properties to set
     * @returns {ReqSetWBSence} ReqSetWBSence instance
     */
    ReqSetWBSence.create = function create(properties) {
        return new ReqSetWBSence(properties);
    };
    /**
     * Encodes the specified ReqSetWBSence message. Does not implicitly {@link ReqSetWBSence.verify|verify} messages.
     * @function encode
     * @memberof ReqSetWBSence
     * @static
     * @param {IReqSetWBSence} message ReqSetWBSence message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetWBSence.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.value);
        return writer;
    };
    /**
     * Encodes the specified ReqSetWBSence message, length delimited. Does not implicitly {@link ReqSetWBSence.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetWBSence
     * @static
     * @param {IReqSetWBSence} message ReqSetWBSence message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetWBSence.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetWBSence message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetWBSence
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetWBSence} ReqSetWBSence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetWBSence.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetWBSence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.value = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetWBSence message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetWBSence
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetWBSence} ReqSetWBSence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetWBSence.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetWBSence message.
     * @function verify
     * @memberof ReqSetWBSence
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetWBSence.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetWBSence message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetWBSence
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetWBSence} ReqSetWBSence
     */
    ReqSetWBSence.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetWBSence)
            return object;
        var message = new $root.ReqSetWBSence();
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetWBSence message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetWBSence
     * @static
     * @param {ReqSetWBSence} message ReqSetWBSence
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetWBSence.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };
    /**
     * Converts this ReqSetWBSence to JSON.
     * @function toJSON
     * @memberof ReqSetWBSence
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetWBSence.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetWBSence
     * @function getTypeUrl
     * @memberof ReqSetWBSence
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetWBSence.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetWBSence";
    };
    return ReqSetWBSence;
})();
$root.ReqGetWBSence = (function () {
    /**
     * Properties of a ReqGetWBSence.
     * @exports IReqGetWBSence
     * @interface IReqGetWBSence
     */
    /**
     * Constructs a new ReqGetWBSence.
     * @exports ReqGetWBSence
     * @classdesc Represents a ReqGetWBSence.
     * @implements IReqGetWBSence
     * @constructor
     * @param {IReqGetWBSence=} [properties] Properties to set
     */
    function ReqGetWBSence(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetWBSence instance using the specified properties.
     * @function create
     * @memberof ReqGetWBSence
     * @static
     * @param {IReqGetWBSence=} [properties] Properties to set
     * @returns {ReqGetWBSence} ReqGetWBSence instance
     */
    ReqGetWBSence.create = function create(properties) {
        return new ReqGetWBSence(properties);
    };
    /**
     * Encodes the specified ReqGetWBSence message. Does not implicitly {@link ReqGetWBSence.verify|verify} messages.
     * @function encode
     * @memberof ReqGetWBSence
     * @static
     * @param {IReqGetWBSence} message ReqGetWBSence message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetWBSence.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetWBSence message, length delimited. Does not implicitly {@link ReqGetWBSence.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetWBSence
     * @static
     * @param {IReqGetWBSence} message ReqGetWBSence message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetWBSence.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetWBSence message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetWBSence
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetWBSence} ReqGetWBSence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetWBSence.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetWBSence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetWBSence message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetWBSence
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetWBSence} ReqGetWBSence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetWBSence.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetWBSence message.
     * @function verify
     * @memberof ReqGetWBSence
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetWBSence.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetWBSence message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetWBSence
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetWBSence} ReqGetWBSence
     */
    ReqGetWBSence.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetWBSence)
            return object;
        return new $root.ReqGetWBSence();
    };
    /**
     * Creates a plain object from a ReqGetWBSence message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetWBSence
     * @static
     * @param {ReqGetWBSence} message ReqGetWBSence
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetWBSence.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetWBSence to JSON.
     * @function toJSON
     * @memberof ReqGetWBSence
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetWBSence.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetWBSence
     * @function getTypeUrl
     * @memberof ReqGetWBSence
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetWBSence.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetWBSence";
    };
    return ReqGetWBSence;
})();
$root.ReqSetWBCT = (function () {
    /**
     * Properties of a ReqSetWBCT.
     * @exports IReqSetWBCT
     * @interface IReqSetWBCT
     * @property {number|null} [index] ReqSetWBCT index
     */
    /**
     * Constructs a new ReqSetWBCT.
     * @exports ReqSetWBCT
     * @classdesc Represents a ReqSetWBCT.
     * @implements IReqSetWBCT
     * @constructor
     * @param {IReqSetWBCT=} [properties] Properties to set
     */
    function ReqSetWBCT(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetWBCT index.
     * @member {number} index
     * @memberof ReqSetWBCT
     * @instance
     */
    ReqSetWBCT.prototype.index = 0;
    /**
     * Creates a new ReqSetWBCT instance using the specified properties.
     * @function create
     * @memberof ReqSetWBCT
     * @static
     * @param {IReqSetWBCT=} [properties] Properties to set
     * @returns {ReqSetWBCT} ReqSetWBCT instance
     */
    ReqSetWBCT.create = function create(properties) {
        return new ReqSetWBCT(properties);
    };
    /**
     * Encodes the specified ReqSetWBCT message. Does not implicitly {@link ReqSetWBCT.verify|verify} messages.
     * @function encode
     * @memberof ReqSetWBCT
     * @static
     * @param {IReqSetWBCT} message ReqSetWBCT message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetWBCT.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.index);
        return writer;
    };
    /**
     * Encodes the specified ReqSetWBCT message, length delimited. Does not implicitly {@link ReqSetWBCT.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetWBCT
     * @static
     * @param {IReqSetWBCT} message ReqSetWBCT message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetWBCT.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetWBCT message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetWBCT
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetWBCT} ReqSetWBCT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetWBCT.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetWBCT();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.index = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetWBCT message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetWBCT
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetWBCT} ReqSetWBCT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetWBCT.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetWBCT message.
     * @function verify
     * @memberof ReqSetWBCT
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetWBCT.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetWBCT message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetWBCT
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetWBCT} ReqSetWBCT
     */
    ReqSetWBCT.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetWBCT)
            return object;
        var message = new $root.ReqSetWBCT();
        if (object.index != null)
            message.index = object.index | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetWBCT message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetWBCT
     * @static
     * @param {ReqSetWBCT} message ReqSetWBCT
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetWBCT.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.index = 0;
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        return object;
    };
    /**
     * Converts this ReqSetWBCT to JSON.
     * @function toJSON
     * @memberof ReqSetWBCT
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetWBCT.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetWBCT
     * @function getTypeUrl
     * @memberof ReqSetWBCT
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetWBCT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetWBCT";
    };
    return ReqSetWBCT;
})();
$root.ReqGetWBCT = (function () {
    /**
     * Properties of a ReqGetWBCT.
     * @exports IReqGetWBCT
     * @interface IReqGetWBCT
     */
    /**
     * Constructs a new ReqGetWBCT.
     * @exports ReqGetWBCT
     * @classdesc Represents a ReqGetWBCT.
     * @implements IReqGetWBCT
     * @constructor
     * @param {IReqGetWBCT=} [properties] Properties to set
     */
    function ReqGetWBCT(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetWBCT instance using the specified properties.
     * @function create
     * @memberof ReqGetWBCT
     * @static
     * @param {IReqGetWBCT=} [properties] Properties to set
     * @returns {ReqGetWBCT} ReqGetWBCT instance
     */
    ReqGetWBCT.create = function create(properties) {
        return new ReqGetWBCT(properties);
    };
    /**
     * Encodes the specified ReqGetWBCT message. Does not implicitly {@link ReqGetWBCT.verify|verify} messages.
     * @function encode
     * @memberof ReqGetWBCT
     * @static
     * @param {IReqGetWBCT} message ReqGetWBCT message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetWBCT.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetWBCT message, length delimited. Does not implicitly {@link ReqGetWBCT.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetWBCT
     * @static
     * @param {IReqGetWBCT} message ReqGetWBCT message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetWBCT.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetWBCT message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetWBCT
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetWBCT} ReqGetWBCT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetWBCT.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetWBCT();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetWBCT message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetWBCT
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetWBCT} ReqGetWBCT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetWBCT.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetWBCT message.
     * @function verify
     * @memberof ReqGetWBCT
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetWBCT.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetWBCT message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetWBCT
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetWBCT} ReqGetWBCT
     */
    ReqGetWBCT.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetWBCT)
            return object;
        return new $root.ReqGetWBCT();
    };
    /**
     * Creates a plain object from a ReqGetWBCT message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetWBCT
     * @static
     * @param {ReqGetWBCT} message ReqGetWBCT
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetWBCT.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetWBCT to JSON.
     * @function toJSON
     * @memberof ReqGetWBCT
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetWBCT.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetWBCT
     * @function getTypeUrl
     * @memberof ReqGetWBCT
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetWBCT.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetWBCT";
    };
    return ReqGetWBCT;
})();
$root.ReqSetIrCut = (function () {
    /**
     * Properties of a ReqSetIrCut.
     * @exports IReqSetIrCut
     * @interface IReqSetIrCut
     * @property {number|null} [value] ReqSetIrCut value
     */
    /**
     * Constructs a new ReqSetIrCut.
     * @exports ReqSetIrCut
     * @classdesc Represents a ReqSetIrCut.
     * @implements IReqSetIrCut
     * @constructor
     * @param {IReqSetIrCut=} [properties] Properties to set
     */
    function ReqSetIrCut(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetIrCut value.
     * @member {number} value
     * @memberof ReqSetIrCut
     * @instance
     */
    ReqSetIrCut.prototype.value = 0;
    /**
     * Creates a new ReqSetIrCut instance using the specified properties.
     * @function create
     * @memberof ReqSetIrCut
     * @static
     * @param {IReqSetIrCut=} [properties] Properties to set
     * @returns {ReqSetIrCut} ReqSetIrCut instance
     */
    ReqSetIrCut.create = function create(properties) {
        return new ReqSetIrCut(properties);
    };
    /**
     * Encodes the specified ReqSetIrCut message. Does not implicitly {@link ReqSetIrCut.verify|verify} messages.
     * @function encode
     * @memberof ReqSetIrCut
     * @static
     * @param {IReqSetIrCut} message ReqSetIrCut message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetIrCut.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.value);
        return writer;
    };
    /**
     * Encodes the specified ReqSetIrCut message, length delimited. Does not implicitly {@link ReqSetIrCut.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetIrCut
     * @static
     * @param {IReqSetIrCut} message ReqSetIrCut message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetIrCut.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetIrCut message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetIrCut
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetIrCut} ReqSetIrCut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetIrCut.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetIrCut();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.value = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetIrCut message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetIrCut
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetIrCut} ReqSetIrCut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetIrCut.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetIrCut message.
     * @function verify
     * @memberof ReqSetIrCut
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetIrCut.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetIrCut message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetIrCut
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetIrCut} ReqSetIrCut
     */
    ReqSetIrCut.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetIrCut)
            return object;
        var message = new $root.ReqSetIrCut();
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetIrCut message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetIrCut
     * @static
     * @param {ReqSetIrCut} message ReqSetIrCut
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetIrCut.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };
    /**
     * Converts this ReqSetIrCut to JSON.
     * @function toJSON
     * @memberof ReqSetIrCut
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetIrCut.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetIrCut
     * @function getTypeUrl
     * @memberof ReqSetIrCut
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetIrCut.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetIrCut";
    };
    return ReqSetIrCut;
})();
$root.ReqGetIrcut = (function () {
    /**
     * Properties of a ReqGetIrcut.
     * @exports IReqGetIrcut
     * @interface IReqGetIrcut
     */
    /**
     * Constructs a new ReqGetIrcut.
     * @exports ReqGetIrcut
     * @classdesc Represents a ReqGetIrcut.
     * @implements IReqGetIrcut
     * @constructor
     * @param {IReqGetIrcut=} [properties] Properties to set
     */
    function ReqGetIrcut(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetIrcut instance using the specified properties.
     * @function create
     * @memberof ReqGetIrcut
     * @static
     * @param {IReqGetIrcut=} [properties] Properties to set
     * @returns {ReqGetIrcut} ReqGetIrcut instance
     */
    ReqGetIrcut.create = function create(properties) {
        return new ReqGetIrcut(properties);
    };
    /**
     * Encodes the specified ReqGetIrcut message. Does not implicitly {@link ReqGetIrcut.verify|verify} messages.
     * @function encode
     * @memberof ReqGetIrcut
     * @static
     * @param {IReqGetIrcut} message ReqGetIrcut message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetIrcut.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetIrcut message, length delimited. Does not implicitly {@link ReqGetIrcut.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetIrcut
     * @static
     * @param {IReqGetIrcut} message ReqGetIrcut message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetIrcut.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetIrcut message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetIrcut
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetIrcut} ReqGetIrcut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetIrcut.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetIrcut();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetIrcut message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetIrcut
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetIrcut} ReqGetIrcut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetIrcut.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetIrcut message.
     * @function verify
     * @memberof ReqGetIrcut
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetIrcut.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetIrcut message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetIrcut
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetIrcut} ReqGetIrcut
     */
    ReqGetIrcut.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetIrcut)
            return object;
        return new $root.ReqGetIrcut();
    };
    /**
     * Creates a plain object from a ReqGetIrcut message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetIrcut
     * @static
     * @param {ReqGetIrcut} message ReqGetIrcut
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetIrcut.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetIrcut to JSON.
     * @function toJSON
     * @memberof ReqGetIrcut
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetIrcut.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetIrcut
     * @function getTypeUrl
     * @memberof ReqGetIrcut
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetIrcut.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetIrcut";
    };
    return ReqGetIrcut;
})();
$root.ReqStartTimeLapse = (function () {
    /**
     * Properties of a ReqStartTimeLapse.
     * @exports IReqStartTimeLapse
     * @interface IReqStartTimeLapse
     */
    /**
     * Constructs a new ReqStartTimeLapse.
     * @exports ReqStartTimeLapse
     * @classdesc Represents a ReqStartTimeLapse.
     * @implements IReqStartTimeLapse
     * @constructor
     * @param {IReqStartTimeLapse=} [properties] Properties to set
     */
    function ReqStartTimeLapse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStartTimeLapse instance using the specified properties.
     * @function create
     * @memberof ReqStartTimeLapse
     * @static
     * @param {IReqStartTimeLapse=} [properties] Properties to set
     * @returns {ReqStartTimeLapse} ReqStartTimeLapse instance
     */
    ReqStartTimeLapse.create = function create(properties) {
        return new ReqStartTimeLapse(properties);
    };
    /**
     * Encodes the specified ReqStartTimeLapse message. Does not implicitly {@link ReqStartTimeLapse.verify|verify} messages.
     * @function encode
     * @memberof ReqStartTimeLapse
     * @static
     * @param {IReqStartTimeLapse} message ReqStartTimeLapse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStartTimeLapse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStartTimeLapse message, length delimited. Does not implicitly {@link ReqStartTimeLapse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStartTimeLapse
     * @static
     * @param {IReqStartTimeLapse} message ReqStartTimeLapse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStartTimeLapse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStartTimeLapse message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStartTimeLapse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStartTimeLapse} ReqStartTimeLapse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStartTimeLapse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStartTimeLapse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStartTimeLapse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStartTimeLapse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStartTimeLapse} ReqStartTimeLapse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStartTimeLapse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStartTimeLapse message.
     * @function verify
     * @memberof ReqStartTimeLapse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStartTimeLapse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStartTimeLapse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStartTimeLapse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStartTimeLapse} ReqStartTimeLapse
     */
    ReqStartTimeLapse.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStartTimeLapse)
            return object;
        return new $root.ReqStartTimeLapse();
    };
    /**
     * Creates a plain object from a ReqStartTimeLapse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStartTimeLapse
     * @static
     * @param {ReqStartTimeLapse} message ReqStartTimeLapse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStartTimeLapse.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStartTimeLapse to JSON.
     * @function toJSON
     * @memberof ReqStartTimeLapse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStartTimeLapse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStartTimeLapse
     * @function getTypeUrl
     * @memberof ReqStartTimeLapse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStartTimeLapse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStartTimeLapse";
    };
    return ReqStartTimeLapse;
})();
$root.ReqStopTimeLapse = (function () {
    /**
     * Properties of a ReqStopTimeLapse.
     * @exports IReqStopTimeLapse
     * @interface IReqStopTimeLapse
     */
    /**
     * Constructs a new ReqStopTimeLapse.
     * @exports ReqStopTimeLapse
     * @classdesc Represents a ReqStopTimeLapse.
     * @implements IReqStopTimeLapse
     * @constructor
     * @param {IReqStopTimeLapse=} [properties] Properties to set
     */
    function ReqStopTimeLapse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStopTimeLapse instance using the specified properties.
     * @function create
     * @memberof ReqStopTimeLapse
     * @static
     * @param {IReqStopTimeLapse=} [properties] Properties to set
     * @returns {ReqStopTimeLapse} ReqStopTimeLapse instance
     */
    ReqStopTimeLapse.create = function create(properties) {
        return new ReqStopTimeLapse(properties);
    };
    /**
     * Encodes the specified ReqStopTimeLapse message. Does not implicitly {@link ReqStopTimeLapse.verify|verify} messages.
     * @function encode
     * @memberof ReqStopTimeLapse
     * @static
     * @param {IReqStopTimeLapse} message ReqStopTimeLapse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopTimeLapse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStopTimeLapse message, length delimited. Does not implicitly {@link ReqStopTimeLapse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStopTimeLapse
     * @static
     * @param {IReqStopTimeLapse} message ReqStopTimeLapse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopTimeLapse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStopTimeLapse message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStopTimeLapse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStopTimeLapse} ReqStopTimeLapse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopTimeLapse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStopTimeLapse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStopTimeLapse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStopTimeLapse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStopTimeLapse} ReqStopTimeLapse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopTimeLapse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStopTimeLapse message.
     * @function verify
     * @memberof ReqStopTimeLapse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStopTimeLapse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStopTimeLapse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStopTimeLapse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStopTimeLapse} ReqStopTimeLapse
     */
    ReqStopTimeLapse.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStopTimeLapse)
            return object;
        return new $root.ReqStopTimeLapse();
    };
    /**
     * Creates a plain object from a ReqStopTimeLapse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStopTimeLapse
     * @static
     * @param {ReqStopTimeLapse} message ReqStopTimeLapse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStopTimeLapse.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStopTimeLapse to JSON.
     * @function toJSON
     * @memberof ReqStopTimeLapse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStopTimeLapse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStopTimeLapse
     * @function getTypeUrl
     * @memberof ReqStopTimeLapse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStopTimeLapse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStopTimeLapse";
    };
    return ReqStopTimeLapse;
})();
$root.ReqSetAllParams = (function () {
    /**
     * Properties of a ReqSetAllParams.
     * @exports IReqSetAllParams
     * @interface IReqSetAllParams
     * @property {number|null} [expMode] ReqSetAllParams expMode
     * @property {number|null} [expIndex] ReqSetAllParams expIndex
     * @property {number|null} [gainMode] ReqSetAllParams gainMode
     * @property {number|null} [gainIndex] ReqSetAllParams gainIndex
     * @property {number|null} [ircutValue] ReqSetAllParams ircutValue
     * @property {number|null} [wbMode] ReqSetAllParams wbMode
     * @property {number|null} [wbIndexType] ReqSetAllParams wbIndexType
     * @property {number|null} [wbIndex] ReqSetAllParams wbIndex
     * @property {number|null} [brightness] ReqSetAllParams brightness
     * @property {number|null} [contrast] ReqSetAllParams contrast
     * @property {number|null} [hue] ReqSetAllParams hue
     * @property {number|null} [saturation] ReqSetAllParams saturation
     * @property {number|null} [sharpness] ReqSetAllParams sharpness
     * @property {number|null} [jpgQuality] ReqSetAllParams jpgQuality
     */
    /**
     * Constructs a new ReqSetAllParams.
     * @exports ReqSetAllParams
     * @classdesc Represents a ReqSetAllParams.
     * @implements IReqSetAllParams
     * @constructor
     * @param {IReqSetAllParams=} [properties] Properties to set
     */
    function ReqSetAllParams(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetAllParams expMode.
     * @member {number} expMode
     * @memberof ReqSetAllParams
     * @instance
     */
    ReqSetAllParams.prototype.expMode = 0;
    /**
     * ReqSetAllParams expIndex.
     * @member {number} expIndex
     * @memberof ReqSetAllParams
     * @instance
     */
    ReqSetAllParams.prototype.expIndex = 0;
    /**
     * ReqSetAllParams gainMode.
     * @member {number} gainMode
     * @memberof ReqSetAllParams
     * @instance
     */
    ReqSetAllParams.prototype.gainMode = 0;
    /**
     * ReqSetAllParams gainIndex.
     * @member {number} gainIndex
     * @memberof ReqSetAllParams
     * @instance
     */
    ReqSetAllParams.prototype.gainIndex = 0;
    /**
     * ReqSetAllParams ircutValue.
     * @member {number} ircutValue
     * @memberof ReqSetAllParams
     * @instance
     */
    ReqSetAllParams.prototype.ircutValue = 0;
    /**
     * ReqSetAllParams wbMode.
     * @member {number} wbMode
     * @memberof ReqSetAllParams
     * @instance
     */
    ReqSetAllParams.prototype.wbMode = 0;
    /**
     * ReqSetAllParams wbIndexType.
     * @member {number} wbIndexType
     * @memberof ReqSetAllParams
     * @instance
     */
    ReqSetAllParams.prototype.wbIndexType = 0;
    /**
     * ReqSetAllParams wbIndex.
     * @member {number} wbIndex
     * @memberof ReqSetAllParams
     * @instance
     */
    ReqSetAllParams.prototype.wbIndex = 0;
    /**
     * ReqSetAllParams brightness.
     * @member {number} brightness
     * @memberof ReqSetAllParams
     * @instance
     */
    ReqSetAllParams.prototype.brightness = 0;
    /**
     * ReqSetAllParams contrast.
     * @member {number} contrast
     * @memberof ReqSetAllParams
     * @instance
     */
    ReqSetAllParams.prototype.contrast = 0;
    /**
     * ReqSetAllParams hue.
     * @member {number} hue
     * @memberof ReqSetAllParams
     * @instance
     */
    ReqSetAllParams.prototype.hue = 0;
    /**
     * ReqSetAllParams saturation.
     * @member {number} saturation
     * @memberof ReqSetAllParams
     * @instance
     */
    ReqSetAllParams.prototype.saturation = 0;
    /**
     * ReqSetAllParams sharpness.
     * @member {number} sharpness
     * @memberof ReqSetAllParams
     * @instance
     */
    ReqSetAllParams.prototype.sharpness = 0;
    /**
     * ReqSetAllParams jpgQuality.
     * @member {number} jpgQuality
     * @memberof ReqSetAllParams
     * @instance
     */
    ReqSetAllParams.prototype.jpgQuality = 0;
    /**
     * Creates a new ReqSetAllParams instance using the specified properties.
     * @function create
     * @memberof ReqSetAllParams
     * @static
     * @param {IReqSetAllParams=} [properties] Properties to set
     * @returns {ReqSetAllParams} ReqSetAllParams instance
     */
    ReqSetAllParams.create = function create(properties) {
        return new ReqSetAllParams(properties);
    };
    /**
     * Encodes the specified ReqSetAllParams message. Does not implicitly {@link ReqSetAllParams.verify|verify} messages.
     * @function encode
     * @memberof ReqSetAllParams
     * @static
     * @param {IReqSetAllParams} message ReqSetAllParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetAllParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.expMode != null &&
            Object.hasOwnProperty.call(message, "expMode"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.expMode);
        if (message.expIndex != null &&
            Object.hasOwnProperty.call(message, "expIndex"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.expIndex);
        if (message.gainMode != null &&
            Object.hasOwnProperty.call(message, "gainMode"))
            writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.gainMode);
        if (message.gainIndex != null &&
            Object.hasOwnProperty.call(message, "gainIndex"))
            writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.gainIndex);
        if (message.ircutValue != null &&
            Object.hasOwnProperty.call(message, "ircutValue"))
            writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.ircutValue);
        if (message.wbMode != null && Object.hasOwnProperty.call(message, "wbMode"))
            writer.uint32(/* id 6, wireType 0 =*/ 48).int32(message.wbMode);
        if (message.wbIndexType != null &&
            Object.hasOwnProperty.call(message, "wbIndexType"))
            writer.uint32(/* id 7, wireType 0 =*/ 56).int32(message.wbIndexType);
        if (message.wbIndex != null &&
            Object.hasOwnProperty.call(message, "wbIndex"))
            writer.uint32(/* id 8, wireType 0 =*/ 64).int32(message.wbIndex);
        if (message.brightness != null &&
            Object.hasOwnProperty.call(message, "brightness"))
            writer.uint32(/* id 9, wireType 0 =*/ 72).int32(message.brightness);
        if (message.contrast != null &&
            Object.hasOwnProperty.call(message, "contrast"))
            writer.uint32(/* id 10, wireType 0 =*/ 80).int32(message.contrast);
        if (message.hue != null && Object.hasOwnProperty.call(message, "hue"))
            writer.uint32(/* id 11, wireType 0 =*/ 88).int32(message.hue);
        if (message.saturation != null &&
            Object.hasOwnProperty.call(message, "saturation"))
            writer.uint32(/* id 12, wireType 0 =*/ 96).int32(message.saturation);
        if (message.sharpness != null &&
            Object.hasOwnProperty.call(message, "sharpness"))
            writer.uint32(/* id 13, wireType 0 =*/ 104).int32(message.sharpness);
        if (message.jpgQuality != null &&
            Object.hasOwnProperty.call(message, "jpgQuality"))
            writer.uint32(/* id 14, wireType 0 =*/ 112).int32(message.jpgQuality);
        return writer;
    };
    /**
     * Encodes the specified ReqSetAllParams message, length delimited. Does not implicitly {@link ReqSetAllParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetAllParams
     * @static
     * @param {IReqSetAllParams} message ReqSetAllParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetAllParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetAllParams message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetAllParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetAllParams} ReqSetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetAllParams.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetAllParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.expMode = reader.int32();
                    break;
                }
                case 2: {
                    message.expIndex = reader.int32();
                    break;
                }
                case 3: {
                    message.gainMode = reader.int32();
                    break;
                }
                case 4: {
                    message.gainIndex = reader.int32();
                    break;
                }
                case 5: {
                    message.ircutValue = reader.int32();
                    break;
                }
                case 6: {
                    message.wbMode = reader.int32();
                    break;
                }
                case 7: {
                    message.wbIndexType = reader.int32();
                    break;
                }
                case 8: {
                    message.wbIndex = reader.int32();
                    break;
                }
                case 9: {
                    message.brightness = reader.int32();
                    break;
                }
                case 10: {
                    message.contrast = reader.int32();
                    break;
                }
                case 11: {
                    message.hue = reader.int32();
                    break;
                }
                case 12: {
                    message.saturation = reader.int32();
                    break;
                }
                case 13: {
                    message.sharpness = reader.int32();
                    break;
                }
                case 14: {
                    message.jpgQuality = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetAllParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetAllParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetAllParams} ReqSetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetAllParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetAllParams message.
     * @function verify
     * @memberof ReqSetAllParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetAllParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.expMode != null && message.hasOwnProperty("expMode"))
            if (!$util.isInteger(message.expMode))
                return "expMode: integer expected";
        if (message.expIndex != null && message.hasOwnProperty("expIndex"))
            if (!$util.isInteger(message.expIndex))
                return "expIndex: integer expected";
        if (message.gainMode != null && message.hasOwnProperty("gainMode"))
            if (!$util.isInteger(message.gainMode))
                return "gainMode: integer expected";
        if (message.gainIndex != null && message.hasOwnProperty("gainIndex"))
            if (!$util.isInteger(message.gainIndex))
                return "gainIndex: integer expected";
        if (message.ircutValue != null && message.hasOwnProperty("ircutValue"))
            if (!$util.isInteger(message.ircutValue))
                return "ircutValue: integer expected";
        if (message.wbMode != null && message.hasOwnProperty("wbMode"))
            if (!$util.isInteger(message.wbMode))
                return "wbMode: integer expected";
        if (message.wbIndexType != null && message.hasOwnProperty("wbIndexType"))
            if (!$util.isInteger(message.wbIndexType))
                return "wbIndexType: integer expected";
        if (message.wbIndex != null && message.hasOwnProperty("wbIndex"))
            if (!$util.isInteger(message.wbIndex))
                return "wbIndex: integer expected";
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            if (!$util.isInteger(message.brightness))
                return "brightness: integer expected";
        if (message.contrast != null && message.hasOwnProperty("contrast"))
            if (!$util.isInteger(message.contrast))
                return "contrast: integer expected";
        if (message.hue != null && message.hasOwnProperty("hue"))
            if (!$util.isInteger(message.hue))
                return "hue: integer expected";
        if (message.saturation != null && message.hasOwnProperty("saturation"))
            if (!$util.isInteger(message.saturation))
                return "saturation: integer expected";
        if (message.sharpness != null && message.hasOwnProperty("sharpness"))
            if (!$util.isInteger(message.sharpness))
                return "sharpness: integer expected";
        if (message.jpgQuality != null && message.hasOwnProperty("jpgQuality"))
            if (!$util.isInteger(message.jpgQuality))
                return "jpgQuality: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetAllParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetAllParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetAllParams} ReqSetAllParams
     */
    ReqSetAllParams.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetAllParams)
            return object;
        var message = new $root.ReqSetAllParams();
        if (object.expMode != null)
            message.expMode = object.expMode | 0;
        if (object.expIndex != null)
            message.expIndex = object.expIndex | 0;
        if (object.gainMode != null)
            message.gainMode = object.gainMode | 0;
        if (object.gainIndex != null)
            message.gainIndex = object.gainIndex | 0;
        if (object.ircutValue != null)
            message.ircutValue = object.ircutValue | 0;
        if (object.wbMode != null)
            message.wbMode = object.wbMode | 0;
        if (object.wbIndexType != null)
            message.wbIndexType = object.wbIndexType | 0;
        if (object.wbIndex != null)
            message.wbIndex = object.wbIndex | 0;
        if (object.brightness != null)
            message.brightness = object.brightness | 0;
        if (object.contrast != null)
            message.contrast = object.contrast | 0;
        if (object.hue != null)
            message.hue = object.hue | 0;
        if (object.saturation != null)
            message.saturation = object.saturation | 0;
        if (object.sharpness != null)
            message.sharpness = object.sharpness | 0;
        if (object.jpgQuality != null)
            message.jpgQuality = object.jpgQuality | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetAllParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetAllParams
     * @static
     * @param {ReqSetAllParams} message ReqSetAllParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetAllParams.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.expMode = 0;
            object.expIndex = 0;
            object.gainMode = 0;
            object.gainIndex = 0;
            object.ircutValue = 0;
            object.wbMode = 0;
            object.wbIndexType = 0;
            object.wbIndex = 0;
            object.brightness = 0;
            object.contrast = 0;
            object.hue = 0;
            object.saturation = 0;
            object.sharpness = 0;
            object.jpgQuality = 0;
        }
        if (message.expMode != null && message.hasOwnProperty("expMode"))
            object.expMode = message.expMode;
        if (message.expIndex != null && message.hasOwnProperty("expIndex"))
            object.expIndex = message.expIndex;
        if (message.gainMode != null && message.hasOwnProperty("gainMode"))
            object.gainMode = message.gainMode;
        if (message.gainIndex != null && message.hasOwnProperty("gainIndex"))
            object.gainIndex = message.gainIndex;
        if (message.ircutValue != null && message.hasOwnProperty("ircutValue"))
            object.ircutValue = message.ircutValue;
        if (message.wbMode != null && message.hasOwnProperty("wbMode"))
            object.wbMode = message.wbMode;
        if (message.wbIndexType != null && message.hasOwnProperty("wbIndexType"))
            object.wbIndexType = message.wbIndexType;
        if (message.wbIndex != null && message.hasOwnProperty("wbIndex"))
            object.wbIndex = message.wbIndex;
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            object.brightness = message.brightness;
        if (message.contrast != null && message.hasOwnProperty("contrast"))
            object.contrast = message.contrast;
        if (message.hue != null && message.hasOwnProperty("hue"))
            object.hue = message.hue;
        if (message.saturation != null && message.hasOwnProperty("saturation"))
            object.saturation = message.saturation;
        if (message.sharpness != null && message.hasOwnProperty("sharpness"))
            object.sharpness = message.sharpness;
        if (message.jpgQuality != null && message.hasOwnProperty("jpgQuality"))
            object.jpgQuality = message.jpgQuality;
        return object;
    };
    /**
     * Converts this ReqSetAllParams to JSON.
     * @function toJSON
     * @memberof ReqSetAllParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetAllParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetAllParams
     * @function getTypeUrl
     * @memberof ReqSetAllParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetAllParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetAllParams";
    };
    return ReqSetAllParams;
})();
$root.ReqGetAllParams = (function () {
    /**
     * Properties of a ReqGetAllParams.
     * @exports IReqGetAllParams
     * @interface IReqGetAllParams
     */
    /**
     * Constructs a new ReqGetAllParams.
     * @exports ReqGetAllParams
     * @classdesc Represents a ReqGetAllParams.
     * @implements IReqGetAllParams
     * @constructor
     * @param {IReqGetAllParams=} [properties] Properties to set
     */
    function ReqGetAllParams(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetAllParams instance using the specified properties.
     * @function create
     * @memberof ReqGetAllParams
     * @static
     * @param {IReqGetAllParams=} [properties] Properties to set
     * @returns {ReqGetAllParams} ReqGetAllParams instance
     */
    ReqGetAllParams.create = function create(properties) {
        return new ReqGetAllParams(properties);
    };
    /**
     * Encodes the specified ReqGetAllParams message. Does not implicitly {@link ReqGetAllParams.verify|verify} messages.
     * @function encode
     * @memberof ReqGetAllParams
     * @static
     * @param {IReqGetAllParams} message ReqGetAllParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetAllParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetAllParams message, length delimited. Does not implicitly {@link ReqGetAllParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetAllParams
     * @static
     * @param {IReqGetAllParams} message ReqGetAllParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetAllParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetAllParams message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetAllParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetAllParams} ReqGetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetAllParams.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetAllParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetAllParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetAllParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetAllParams} ReqGetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetAllParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetAllParams message.
     * @function verify
     * @memberof ReqGetAllParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetAllParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetAllParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetAllParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetAllParams} ReqGetAllParams
     */
    ReqGetAllParams.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetAllParams)
            return object;
        return new $root.ReqGetAllParams();
    };
    /**
     * Creates a plain object from a ReqGetAllParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetAllParams
     * @static
     * @param {ReqGetAllParams} message ReqGetAllParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetAllParams.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetAllParams to JSON.
     * @function toJSON
     * @memberof ReqGetAllParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetAllParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetAllParams
     * @function getTypeUrl
     * @memberof ReqGetAllParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetAllParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetAllParams";
    };
    return ReqGetAllParams;
})();
$root.ResGetAllParams = (function () {
    /**
     * Properties of a ResGetAllParams.
     * @exports IResGetAllParams
     * @interface IResGetAllParams
     * @property {Array.<ICommonParam>|null} [allParams] ResGetAllParams allParams
     * @property {number|null} [code] ResGetAllParams code
     */
    /**
     * Constructs a new ResGetAllParams.
     * @exports ResGetAllParams
     * @classdesc Represents a ResGetAllParams.
     * @implements IResGetAllParams
     * @constructor
     * @param {IResGetAllParams=} [properties] Properties to set
     */
    function ResGetAllParams(properties) {
        this.allParams = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResGetAllParams allParams.
     * @member {Array.<ICommonParam>} allParams
     * @memberof ResGetAllParams
     * @instance
     */
    ResGetAllParams.prototype.allParams = $util.emptyArray;
    /**
     * ResGetAllParams code.
     * @member {number} code
     * @memberof ResGetAllParams
     * @instance
     */
    ResGetAllParams.prototype.code = 0;
    /**
     * Creates a new ResGetAllParams instance using the specified properties.
     * @function create
     * @memberof ResGetAllParams
     * @static
     * @param {IResGetAllParams=} [properties] Properties to set
     * @returns {ResGetAllParams} ResGetAllParams instance
     */
    ResGetAllParams.create = function create(properties) {
        return new ResGetAllParams(properties);
    };
    /**
     * Encodes the specified ResGetAllParams message. Does not implicitly {@link ResGetAllParams.verify|verify} messages.
     * @function encode
     * @memberof ResGetAllParams
     * @static
     * @param {IResGetAllParams} message ResGetAllParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResGetAllParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.allParams != null && message.allParams.length)
            for (var i = 0; i < message.allParams.length; ++i)
                $root.CommonParam.encode(message.allParams[i], writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.code);
        return writer;
    };
    /**
     * Encodes the specified ResGetAllParams message, length delimited. Does not implicitly {@link ResGetAllParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResGetAllParams
     * @static
     * @param {IResGetAllParams} message ResGetAllParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResGetAllParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResGetAllParams message from the specified reader or buffer.
     * @function decode
     * @memberof ResGetAllParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResGetAllParams} ResGetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResGetAllParams.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResGetAllParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (!(message.allParams && message.allParams.length))
                        message.allParams = [];
                    message.allParams.push($root.CommonParam.decode(reader, reader.uint32()));
                    break;
                }
                case 2: {
                    message.code = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResGetAllParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResGetAllParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResGetAllParams} ResGetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResGetAllParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResGetAllParams message.
     * @function verify
     * @memberof ResGetAllParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResGetAllParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.allParams != null && message.hasOwnProperty("allParams")) {
            if (!Array.isArray(message.allParams))
                return "allParams: array expected";
            for (var i = 0; i < message.allParams.length; ++i) {
                var error = $root.CommonParam.verify(message.allParams[i]);
                if (error)
                    return "allParams." + error;
            }
        }
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        return null;
    };
    /**
     * Creates a ResGetAllParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResGetAllParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResGetAllParams} ResGetAllParams
     */
    ResGetAllParams.fromObject = function fromObject(object) {
        if (object instanceof $root.ResGetAllParams)
            return object;
        var message = new $root.ResGetAllParams();
        if (object.allParams) {
            if (!Array.isArray(object.allParams))
                throw TypeError(".ResGetAllParams.allParams: array expected");
            message.allParams = [];
            for (var i = 0; i < object.allParams.length; ++i) {
                if (typeof object.allParams[i] !== "object")
                    throw TypeError(".ResGetAllParams.allParams: object expected");
                message.allParams[i] = $root.CommonParam.fromObject(object.allParams[i]);
            }
        }
        if (object.code != null)
            message.code = object.code | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResGetAllParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResGetAllParams
     * @static
     * @param {ResGetAllParams} message ResGetAllParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResGetAllParams.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.allParams = [];
        if (options.defaults)
            object.code = 0;
        if (message.allParams && message.allParams.length) {
            object.allParams = [];
            for (var j = 0; j < message.allParams.length; ++j)
                object.allParams[j] = $root.CommonParam.toObject(message.allParams[j], options);
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };
    /**
     * Converts this ResGetAllParams to JSON.
     * @function toJSON
     * @memberof ResGetAllParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResGetAllParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResGetAllParams
     * @function getTypeUrl
     * @memberof ResGetAllParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResGetAllParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResGetAllParams";
    };
    return ResGetAllParams;
})();
$root.ReqSetFeatureParams = (function () {
    /**
     * Properties of a ReqSetFeatureParams.
     * @exports IReqSetFeatureParams
     * @interface IReqSetFeatureParams
     * @property {ICommonParam|null} [param] ReqSetFeatureParams param
     */
    /**
     * Constructs a new ReqSetFeatureParams.
     * @exports ReqSetFeatureParams
     * @classdesc Represents a ReqSetFeatureParams.
     * @implements IReqSetFeatureParams
     * @constructor
     * @param {IReqSetFeatureParams=} [properties] Properties to set
     */
    function ReqSetFeatureParams(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetFeatureParams param.
     * @member {ICommonParam|null|undefined} param
     * @memberof ReqSetFeatureParams
     * @instance
     */
    ReqSetFeatureParams.prototype.param = null;
    /**
     * Creates a new ReqSetFeatureParams instance using the specified properties.
     * @function create
     * @memberof ReqSetFeatureParams
     * @static
     * @param {IReqSetFeatureParams=} [properties] Properties to set
     * @returns {ReqSetFeatureParams} ReqSetFeatureParams instance
     */
    ReqSetFeatureParams.create = function create(properties) {
        return new ReqSetFeatureParams(properties);
    };
    /**
     * Encodes the specified ReqSetFeatureParams message. Does not implicitly {@link ReqSetFeatureParams.verify|verify} messages.
     * @function encode
     * @memberof ReqSetFeatureParams
     * @static
     * @param {IReqSetFeatureParams} message ReqSetFeatureParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetFeatureParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.param != null && Object.hasOwnProperty.call(message, "param"))
            $root.CommonParam.encode(message.param, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
        return writer;
    };
    /**
     * Encodes the specified ReqSetFeatureParams message, length delimited. Does not implicitly {@link ReqSetFeatureParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetFeatureParams
     * @static
     * @param {IReqSetFeatureParams} message ReqSetFeatureParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetFeatureParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetFeatureParams message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetFeatureParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetFeatureParams} ReqSetFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetFeatureParams.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetFeatureParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.param = $root.CommonParam.decode(reader, reader.uint32());
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetFeatureParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetFeatureParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetFeatureParams} ReqSetFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetFeatureParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetFeatureParams message.
     * @function verify
     * @memberof ReqSetFeatureParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetFeatureParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.param != null && message.hasOwnProperty("param")) {
            var error = $root.CommonParam.verify(message.param);
            if (error)
                return "param." + error;
        }
        return null;
    };
    /**
     * Creates a ReqSetFeatureParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetFeatureParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetFeatureParams} ReqSetFeatureParams
     */
    ReqSetFeatureParams.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetFeatureParams)
            return object;
        var message = new $root.ReqSetFeatureParams();
        if (object.param != null) {
            if (typeof object.param !== "object")
                throw TypeError(".ReqSetFeatureParams.param: object expected");
            message.param = $root.CommonParam.fromObject(object.param);
        }
        return message;
    };
    /**
     * Creates a plain object from a ReqSetFeatureParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetFeatureParams
     * @static
     * @param {ReqSetFeatureParams} message ReqSetFeatureParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetFeatureParams.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.param = null;
        if (message.param != null && message.hasOwnProperty("param"))
            object.param = $root.CommonParam.toObject(message.param, options);
        return object;
    };
    /**
     * Converts this ReqSetFeatureParams to JSON.
     * @function toJSON
     * @memberof ReqSetFeatureParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetFeatureParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetFeatureParams
     * @function getTypeUrl
     * @memberof ReqSetFeatureParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetFeatureParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetFeatureParams";
    };
    return ReqSetFeatureParams;
})();
$root.ReqGetAllFeatureParams = (function () {
    /**
     * Properties of a ReqGetAllFeatureParams.
     * @exports IReqGetAllFeatureParams
     * @interface IReqGetAllFeatureParams
     */
    /**
     * Constructs a new ReqGetAllFeatureParams.
     * @exports ReqGetAllFeatureParams
     * @classdesc Represents a ReqGetAllFeatureParams.
     * @implements IReqGetAllFeatureParams
     * @constructor
     * @param {IReqGetAllFeatureParams=} [properties] Properties to set
     */
    function ReqGetAllFeatureParams(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetAllFeatureParams instance using the specified properties.
     * @function create
     * @memberof ReqGetAllFeatureParams
     * @static
     * @param {IReqGetAllFeatureParams=} [properties] Properties to set
     * @returns {ReqGetAllFeatureParams} ReqGetAllFeatureParams instance
     */
    ReqGetAllFeatureParams.create = function create(properties) {
        return new ReqGetAllFeatureParams(properties);
    };
    /**
     * Encodes the specified ReqGetAllFeatureParams message. Does not implicitly {@link ReqGetAllFeatureParams.verify|verify} messages.
     * @function encode
     * @memberof ReqGetAllFeatureParams
     * @static
     * @param {IReqGetAllFeatureParams} message ReqGetAllFeatureParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetAllFeatureParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetAllFeatureParams message, length delimited. Does not implicitly {@link ReqGetAllFeatureParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetAllFeatureParams
     * @static
     * @param {IReqGetAllFeatureParams} message ReqGetAllFeatureParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetAllFeatureParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetAllFeatureParams message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetAllFeatureParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetAllFeatureParams} ReqGetAllFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetAllFeatureParams.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetAllFeatureParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetAllFeatureParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetAllFeatureParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetAllFeatureParams} ReqGetAllFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetAllFeatureParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetAllFeatureParams message.
     * @function verify
     * @memberof ReqGetAllFeatureParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetAllFeatureParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetAllFeatureParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetAllFeatureParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetAllFeatureParams} ReqGetAllFeatureParams
     */
    ReqGetAllFeatureParams.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetAllFeatureParams)
            return object;
        return new $root.ReqGetAllFeatureParams();
    };
    /**
     * Creates a plain object from a ReqGetAllFeatureParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetAllFeatureParams
     * @static
     * @param {ReqGetAllFeatureParams} message ReqGetAllFeatureParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetAllFeatureParams.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetAllFeatureParams to JSON.
     * @function toJSON
     * @memberof ReqGetAllFeatureParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetAllFeatureParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetAllFeatureParams
     * @function getTypeUrl
     * @memberof ReqGetAllFeatureParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetAllFeatureParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetAllFeatureParams";
    };
    return ReqGetAllFeatureParams;
})();
$root.ResGetAllFeatureParams = (function () {
    /**
     * Properties of a ResGetAllFeatureParams.
     * @exports IResGetAllFeatureParams
     * @interface IResGetAllFeatureParams
     * @property {Array.<ICommonParam>|null} [allFeatureParams] ResGetAllFeatureParams allFeatureParams
     * @property {number|null} [code] ResGetAllFeatureParams code
     */
    /**
     * Constructs a new ResGetAllFeatureParams.
     * @exports ResGetAllFeatureParams
     * @classdesc Represents a ResGetAllFeatureParams.
     * @implements IResGetAllFeatureParams
     * @constructor
     * @param {IResGetAllFeatureParams=} [properties] Properties to set
     */
    function ResGetAllFeatureParams(properties) {
        this.allFeatureParams = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResGetAllFeatureParams allFeatureParams.
     * @member {Array.<ICommonParam>} allFeatureParams
     * @memberof ResGetAllFeatureParams
     * @instance
     */
    ResGetAllFeatureParams.prototype.allFeatureParams = $util.emptyArray;
    /**
     * ResGetAllFeatureParams code.
     * @member {number} code
     * @memberof ResGetAllFeatureParams
     * @instance
     */
    ResGetAllFeatureParams.prototype.code = 0;
    /**
     * Creates a new ResGetAllFeatureParams instance using the specified properties.
     * @function create
     * @memberof ResGetAllFeatureParams
     * @static
     * @param {IResGetAllFeatureParams=} [properties] Properties to set
     * @returns {ResGetAllFeatureParams} ResGetAllFeatureParams instance
     */
    ResGetAllFeatureParams.create = function create(properties) {
        return new ResGetAllFeatureParams(properties);
    };
    /**
     * Encodes the specified ResGetAllFeatureParams message. Does not implicitly {@link ResGetAllFeatureParams.verify|verify} messages.
     * @function encode
     * @memberof ResGetAllFeatureParams
     * @static
     * @param {IResGetAllFeatureParams} message ResGetAllFeatureParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResGetAllFeatureParams.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.allFeatureParams != null && message.allFeatureParams.length)
            for (var i = 0; i < message.allFeatureParams.length; ++i)
                $root.CommonParam.encode(message.allFeatureParams[i], writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.code);
        return writer;
    };
    /**
     * Encodes the specified ResGetAllFeatureParams message, length delimited. Does not implicitly {@link ResGetAllFeatureParams.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResGetAllFeatureParams
     * @static
     * @param {IResGetAllFeatureParams} message ResGetAllFeatureParams message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResGetAllFeatureParams.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResGetAllFeatureParams message from the specified reader or buffer.
     * @function decode
     * @memberof ResGetAllFeatureParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResGetAllFeatureParams} ResGetAllFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResGetAllFeatureParams.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResGetAllFeatureParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (!(message.allFeatureParams && message.allFeatureParams.length))
                        message.allFeatureParams = [];
                    message.allFeatureParams.push($root.CommonParam.decode(reader, reader.uint32()));
                    break;
                }
                case 2: {
                    message.code = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResGetAllFeatureParams message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResGetAllFeatureParams
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResGetAllFeatureParams} ResGetAllFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResGetAllFeatureParams.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResGetAllFeatureParams message.
     * @function verify
     * @memberof ResGetAllFeatureParams
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResGetAllFeatureParams.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.allFeatureParams != null &&
            message.hasOwnProperty("allFeatureParams")) {
            if (!Array.isArray(message.allFeatureParams))
                return "allFeatureParams: array expected";
            for (var i = 0; i < message.allFeatureParams.length; ++i) {
                var error = $root.CommonParam.verify(message.allFeatureParams[i]);
                if (error)
                    return "allFeatureParams." + error;
            }
        }
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        return null;
    };
    /**
     * Creates a ResGetAllFeatureParams message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResGetAllFeatureParams
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResGetAllFeatureParams} ResGetAllFeatureParams
     */
    ResGetAllFeatureParams.fromObject = function fromObject(object) {
        if (object instanceof $root.ResGetAllFeatureParams)
            return object;
        var message = new $root.ResGetAllFeatureParams();
        if (object.allFeatureParams) {
            if (!Array.isArray(object.allFeatureParams))
                throw TypeError(".ResGetAllFeatureParams.allFeatureParams: array expected");
            message.allFeatureParams = [];
            for (var i = 0; i < object.allFeatureParams.length; ++i) {
                if (typeof object.allFeatureParams[i] !== "object")
                    throw TypeError(".ResGetAllFeatureParams.allFeatureParams: object expected");
                message.allFeatureParams[i] = $root.CommonParam.fromObject(object.allFeatureParams[i]);
            }
        }
        if (object.code != null)
            message.code = object.code | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResGetAllFeatureParams message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResGetAllFeatureParams
     * @static
     * @param {ResGetAllFeatureParams} message ResGetAllFeatureParams
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResGetAllFeatureParams.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.allFeatureParams = [];
        if (options.defaults)
            object.code = 0;
        if (message.allFeatureParams && message.allFeatureParams.length) {
            object.allFeatureParams = [];
            for (var j = 0; j < message.allFeatureParams.length; ++j)
                object.allFeatureParams[j] = $root.CommonParam.toObject(message.allFeatureParams[j], options);
        }
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };
    /**
     * Converts this ResGetAllFeatureParams to JSON.
     * @function toJSON
     * @memberof ResGetAllFeatureParams
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResGetAllFeatureParams.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResGetAllFeatureParams
     * @function getTypeUrl
     * @memberof ResGetAllFeatureParams
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResGetAllFeatureParams.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResGetAllFeatureParams";
    };
    return ResGetAllFeatureParams;
})();
$root.ReqGetSystemWorkingState = (function () {
    /**
     * Properties of a ReqGetSystemWorkingState.
     * @exports IReqGetSystemWorkingState
     * @interface IReqGetSystemWorkingState
     */
    /**
     * Constructs a new ReqGetSystemWorkingState.
     * @exports ReqGetSystemWorkingState
     * @classdesc Represents a ReqGetSystemWorkingState.
     * @implements IReqGetSystemWorkingState
     * @constructor
     * @param {IReqGetSystemWorkingState=} [properties] Properties to set
     */
    function ReqGetSystemWorkingState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetSystemWorkingState instance using the specified properties.
     * @function create
     * @memberof ReqGetSystemWorkingState
     * @static
     * @param {IReqGetSystemWorkingState=} [properties] Properties to set
     * @returns {ReqGetSystemWorkingState} ReqGetSystemWorkingState instance
     */
    ReqGetSystemWorkingState.create = function create(properties) {
        return new ReqGetSystemWorkingState(properties);
    };
    /**
     * Encodes the specified ReqGetSystemWorkingState message. Does not implicitly {@link ReqGetSystemWorkingState.verify|verify} messages.
     * @function encode
     * @memberof ReqGetSystemWorkingState
     * @static
     * @param {IReqGetSystemWorkingState} message ReqGetSystemWorkingState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetSystemWorkingState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetSystemWorkingState message, length delimited. Does not implicitly {@link ReqGetSystemWorkingState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetSystemWorkingState
     * @static
     * @param {IReqGetSystemWorkingState} message ReqGetSystemWorkingState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetSystemWorkingState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetSystemWorkingState message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetSystemWorkingState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetSystemWorkingState} ReqGetSystemWorkingState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetSystemWorkingState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetSystemWorkingState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetSystemWorkingState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetSystemWorkingState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetSystemWorkingState} ReqGetSystemWorkingState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetSystemWorkingState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetSystemWorkingState message.
     * @function verify
     * @memberof ReqGetSystemWorkingState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetSystemWorkingState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetSystemWorkingState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetSystemWorkingState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetSystemWorkingState} ReqGetSystemWorkingState
     */
    ReqGetSystemWorkingState.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetSystemWorkingState)
            return object;
        return new $root.ReqGetSystemWorkingState();
    };
    /**
     * Creates a plain object from a ReqGetSystemWorkingState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetSystemWorkingState
     * @static
     * @param {ReqGetSystemWorkingState} message ReqGetSystemWorkingState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetSystemWorkingState.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetSystemWorkingState to JSON.
     * @function toJSON
     * @memberof ReqGetSystemWorkingState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetSystemWorkingState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetSystemWorkingState
     * @function getTypeUrl
     * @memberof ReqGetSystemWorkingState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetSystemWorkingState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetSystemWorkingState";
    };
    return ReqGetSystemWorkingState;
})();
$root.ReqSetJpgQuality = (function () {
    /**
     * Properties of a ReqSetJpgQuality.
     * @exports IReqSetJpgQuality
     * @interface IReqSetJpgQuality
     * @property {number|null} [quality] ReqSetJpgQuality quality
     */
    /**
     * Constructs a new ReqSetJpgQuality.
     * @exports ReqSetJpgQuality
     * @classdesc Represents a ReqSetJpgQuality.
     * @implements IReqSetJpgQuality
     * @constructor
     * @param {IReqSetJpgQuality=} [properties] Properties to set
     */
    function ReqSetJpgQuality(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetJpgQuality quality.
     * @member {number} quality
     * @memberof ReqSetJpgQuality
     * @instance
     */
    ReqSetJpgQuality.prototype.quality = 0;
    /**
     * Creates a new ReqSetJpgQuality instance using the specified properties.
     * @function create
     * @memberof ReqSetJpgQuality
     * @static
     * @param {IReqSetJpgQuality=} [properties] Properties to set
     * @returns {ReqSetJpgQuality} ReqSetJpgQuality instance
     */
    ReqSetJpgQuality.create = function create(properties) {
        return new ReqSetJpgQuality(properties);
    };
    /**
     * Encodes the specified ReqSetJpgQuality message. Does not implicitly {@link ReqSetJpgQuality.verify|verify} messages.
     * @function encode
     * @memberof ReqSetJpgQuality
     * @static
     * @param {IReqSetJpgQuality} message ReqSetJpgQuality message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetJpgQuality.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.quality != null &&
            Object.hasOwnProperty.call(message, "quality"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.quality);
        return writer;
    };
    /**
     * Encodes the specified ReqSetJpgQuality message, length delimited. Does not implicitly {@link ReqSetJpgQuality.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetJpgQuality
     * @static
     * @param {IReqSetJpgQuality} message ReqSetJpgQuality message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetJpgQuality.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetJpgQuality message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetJpgQuality
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetJpgQuality} ReqSetJpgQuality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetJpgQuality.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetJpgQuality();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.quality = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetJpgQuality message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetJpgQuality
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetJpgQuality} ReqSetJpgQuality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetJpgQuality.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetJpgQuality message.
     * @function verify
     * @memberof ReqSetJpgQuality
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetJpgQuality.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.quality != null && message.hasOwnProperty("quality"))
            if (!$util.isInteger(message.quality))
                return "quality: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetJpgQuality message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetJpgQuality
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetJpgQuality} ReqSetJpgQuality
     */
    ReqSetJpgQuality.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetJpgQuality)
            return object;
        var message = new $root.ReqSetJpgQuality();
        if (object.quality != null)
            message.quality = object.quality | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetJpgQuality message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetJpgQuality
     * @static
     * @param {ReqSetJpgQuality} message ReqSetJpgQuality
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetJpgQuality.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.quality = 0;
        if (message.quality != null && message.hasOwnProperty("quality"))
            object.quality = message.quality;
        return object;
    };
    /**
     * Converts this ReqSetJpgQuality to JSON.
     * @function toJSON
     * @memberof ReqSetJpgQuality
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetJpgQuality.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetJpgQuality
     * @function getTypeUrl
     * @memberof ReqSetJpgQuality
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetJpgQuality.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetJpgQuality";
    };
    return ReqSetJpgQuality;
})();
$root.ReqGetJpgQuality = (function () {
    /**
     * Properties of a ReqGetJpgQuality.
     * @exports IReqGetJpgQuality
     * @interface IReqGetJpgQuality
     */
    /**
     * Constructs a new ReqGetJpgQuality.
     * @exports ReqGetJpgQuality
     * @classdesc Represents a ReqGetJpgQuality.
     * @implements IReqGetJpgQuality
     * @constructor
     * @param {IReqGetJpgQuality=} [properties] Properties to set
     */
    function ReqGetJpgQuality(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqGetJpgQuality instance using the specified properties.
     * @function create
     * @memberof ReqGetJpgQuality
     * @static
     * @param {IReqGetJpgQuality=} [properties] Properties to set
     * @returns {ReqGetJpgQuality} ReqGetJpgQuality instance
     */
    ReqGetJpgQuality.create = function create(properties) {
        return new ReqGetJpgQuality(properties);
    };
    /**
     * Encodes the specified ReqGetJpgQuality message. Does not implicitly {@link ReqGetJpgQuality.verify|verify} messages.
     * @function encode
     * @memberof ReqGetJpgQuality
     * @static
     * @param {IReqGetJpgQuality} message ReqGetJpgQuality message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetJpgQuality.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqGetJpgQuality message, length delimited. Does not implicitly {@link ReqGetJpgQuality.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqGetJpgQuality
     * @static
     * @param {IReqGetJpgQuality} message ReqGetJpgQuality message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqGetJpgQuality.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqGetJpgQuality message from the specified reader or buffer.
     * @function decode
     * @memberof ReqGetJpgQuality
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqGetJpgQuality} ReqGetJpgQuality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetJpgQuality.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqGetJpgQuality();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqGetJpgQuality message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqGetJpgQuality
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqGetJpgQuality} ReqGetJpgQuality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqGetJpgQuality.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqGetJpgQuality message.
     * @function verify
     * @memberof ReqGetJpgQuality
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqGetJpgQuality.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqGetJpgQuality message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqGetJpgQuality
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqGetJpgQuality} ReqGetJpgQuality
     */
    ReqGetJpgQuality.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqGetJpgQuality)
            return object;
        return new $root.ReqGetJpgQuality();
    };
    /**
     * Creates a plain object from a ReqGetJpgQuality message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqGetJpgQuality
     * @static
     * @param {ReqGetJpgQuality} message ReqGetJpgQuality
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqGetJpgQuality.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqGetJpgQuality to JSON.
     * @function toJSON
     * @memberof ReqGetJpgQuality
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqGetJpgQuality.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqGetJpgQuality
     * @function getTypeUrl
     * @memberof ReqGetJpgQuality
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqGetJpgQuality.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqGetJpgQuality";
    };
    return ReqGetJpgQuality;
})();
$root.ReqManualSingleStepFocus = (function () {
    /**
     * Properties of a ReqManualSingleStepFocus.
     * @exports IReqManualSingleStepFocus
     * @interface IReqManualSingleStepFocus
     * @property {number|null} [direction] ReqManualSingleStepFocus direction
     */
    /**
     * Constructs a new ReqManualSingleStepFocus.
     * @exports ReqManualSingleStepFocus
     * @classdesc Represents a ReqManualSingleStepFocus.
     * @implements IReqManualSingleStepFocus
     * @constructor
     * @param {IReqManualSingleStepFocus=} [properties] Properties to set
     */
    function ReqManualSingleStepFocus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqManualSingleStepFocus direction.
     * @member {number} direction
     * @memberof ReqManualSingleStepFocus
     * @instance
     */
    ReqManualSingleStepFocus.prototype.direction = 0;
    /**
     * Creates a new ReqManualSingleStepFocus instance using the specified properties.
     * @function create
     * @memberof ReqManualSingleStepFocus
     * @static
     * @param {IReqManualSingleStepFocus=} [properties] Properties to set
     * @returns {ReqManualSingleStepFocus} ReqManualSingleStepFocus instance
     */
    ReqManualSingleStepFocus.create = function create(properties) {
        return new ReqManualSingleStepFocus(properties);
    };
    /**
     * Encodes the specified ReqManualSingleStepFocus message. Does not implicitly {@link ReqManualSingleStepFocus.verify|verify} messages.
     * @function encode
     * @memberof ReqManualSingleStepFocus
     * @static
     * @param {IReqManualSingleStepFocus} message ReqManualSingleStepFocus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqManualSingleStepFocus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.direction != null &&
            Object.hasOwnProperty.call(message, "direction"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.direction);
        return writer;
    };
    /**
     * Encodes the specified ReqManualSingleStepFocus message, length delimited. Does not implicitly {@link ReqManualSingleStepFocus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqManualSingleStepFocus
     * @static
     * @param {IReqManualSingleStepFocus} message ReqManualSingleStepFocus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqManualSingleStepFocus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqManualSingleStepFocus message from the specified reader or buffer.
     * @function decode
     * @memberof ReqManualSingleStepFocus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqManualSingleStepFocus} ReqManualSingleStepFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqManualSingleStepFocus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqManualSingleStepFocus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.direction = reader.uint32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqManualSingleStepFocus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqManualSingleStepFocus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqManualSingleStepFocus} ReqManualSingleStepFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqManualSingleStepFocus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqManualSingleStepFocus message.
     * @function verify
     * @memberof ReqManualSingleStepFocus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqManualSingleStepFocus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.direction != null && message.hasOwnProperty("direction"))
            if (!$util.isInteger(message.direction))
                return "direction: integer expected";
        return null;
    };
    /**
     * Creates a ReqManualSingleStepFocus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqManualSingleStepFocus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqManualSingleStepFocus} ReqManualSingleStepFocus
     */
    ReqManualSingleStepFocus.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqManualSingleStepFocus)
            return object;
        var message = new $root.ReqManualSingleStepFocus();
        if (object.direction != null)
            message.direction = object.direction >>> 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqManualSingleStepFocus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqManualSingleStepFocus
     * @static
     * @param {ReqManualSingleStepFocus} message ReqManualSingleStepFocus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqManualSingleStepFocus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.direction = 0;
        if (message.direction != null && message.hasOwnProperty("direction"))
            object.direction = message.direction;
        return object;
    };
    /**
     * Converts this ReqManualSingleStepFocus to JSON.
     * @function toJSON
     * @memberof ReqManualSingleStepFocus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqManualSingleStepFocus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqManualSingleStepFocus
     * @function getTypeUrl
     * @memberof ReqManualSingleStepFocus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqManualSingleStepFocus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqManualSingleStepFocus";
    };
    return ReqManualSingleStepFocus;
})();
$root.ReqManualContinuFocus = (function () {
    /**
     * Properties of a ReqManualContinuFocus.
     * @exports IReqManualContinuFocus
     * @interface IReqManualContinuFocus
     * @property {number|null} [direction] ReqManualContinuFocus direction
     */
    /**
     * Constructs a new ReqManualContinuFocus.
     * @exports ReqManualContinuFocus
     * @classdesc Represents a ReqManualContinuFocus.
     * @implements IReqManualContinuFocus
     * @constructor
     * @param {IReqManualContinuFocus=} [properties] Properties to set
     */
    function ReqManualContinuFocus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqManualContinuFocus direction.
     * @member {number} direction
     * @memberof ReqManualContinuFocus
     * @instance
     */
    ReqManualContinuFocus.prototype.direction = 0;
    /**
     * Creates a new ReqManualContinuFocus instance using the specified properties.
     * @function create
     * @memberof ReqManualContinuFocus
     * @static
     * @param {IReqManualContinuFocus=} [properties] Properties to set
     * @returns {ReqManualContinuFocus} ReqManualContinuFocus instance
     */
    ReqManualContinuFocus.create = function create(properties) {
        return new ReqManualContinuFocus(properties);
    };
    /**
     * Encodes the specified ReqManualContinuFocus message. Does not implicitly {@link ReqManualContinuFocus.verify|verify} messages.
     * @function encode
     * @memberof ReqManualContinuFocus
     * @static
     * @param {IReqManualContinuFocus} message ReqManualContinuFocus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqManualContinuFocus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.direction != null &&
            Object.hasOwnProperty.call(message, "direction"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.direction);
        return writer;
    };
    /**
     * Encodes the specified ReqManualContinuFocus message, length delimited. Does not implicitly {@link ReqManualContinuFocus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqManualContinuFocus
     * @static
     * @param {IReqManualContinuFocus} message ReqManualContinuFocus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqManualContinuFocus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqManualContinuFocus message from the specified reader or buffer.
     * @function decode
     * @memberof ReqManualContinuFocus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqManualContinuFocus} ReqManualContinuFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqManualContinuFocus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqManualContinuFocus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.direction = reader.uint32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqManualContinuFocus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqManualContinuFocus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqManualContinuFocus} ReqManualContinuFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqManualContinuFocus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqManualContinuFocus message.
     * @function verify
     * @memberof ReqManualContinuFocus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqManualContinuFocus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.direction != null && message.hasOwnProperty("direction"))
            if (!$util.isInteger(message.direction))
                return "direction: integer expected";
        return null;
    };
    /**
     * Creates a ReqManualContinuFocus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqManualContinuFocus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqManualContinuFocus} ReqManualContinuFocus
     */
    ReqManualContinuFocus.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqManualContinuFocus)
            return object;
        var message = new $root.ReqManualContinuFocus();
        if (object.direction != null)
            message.direction = object.direction >>> 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqManualContinuFocus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqManualContinuFocus
     * @static
     * @param {ReqManualContinuFocus} message ReqManualContinuFocus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqManualContinuFocus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.direction = 0;
        if (message.direction != null && message.hasOwnProperty("direction"))
            object.direction = message.direction;
        return object;
    };
    /**
     * Converts this ReqManualContinuFocus to JSON.
     * @function toJSON
     * @memberof ReqManualContinuFocus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqManualContinuFocus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqManualContinuFocus
     * @function getTypeUrl
     * @memberof ReqManualContinuFocus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqManualContinuFocus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqManualContinuFocus";
    };
    return ReqManualContinuFocus;
})();
$root.ReqStopManualContinuFocus = (function () {
    /**
     * Properties of a ReqStopManualContinuFocus.
     * @exports IReqStopManualContinuFocus
     * @interface IReqStopManualContinuFocus
     */
    /**
     * Constructs a new ReqStopManualContinuFocus.
     * @exports ReqStopManualContinuFocus
     * @classdesc Represents a ReqStopManualContinuFocus.
     * @implements IReqStopManualContinuFocus
     * @constructor
     * @param {IReqStopManualContinuFocus=} [properties] Properties to set
     */
    function ReqStopManualContinuFocus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStopManualContinuFocus instance using the specified properties.
     * @function create
     * @memberof ReqStopManualContinuFocus
     * @static
     * @param {IReqStopManualContinuFocus=} [properties] Properties to set
     * @returns {ReqStopManualContinuFocus} ReqStopManualContinuFocus instance
     */
    ReqStopManualContinuFocus.create = function create(properties) {
        return new ReqStopManualContinuFocus(properties);
    };
    /**
     * Encodes the specified ReqStopManualContinuFocus message. Does not implicitly {@link ReqStopManualContinuFocus.verify|verify} messages.
     * @function encode
     * @memberof ReqStopManualContinuFocus
     * @static
     * @param {IReqStopManualContinuFocus} message ReqStopManualContinuFocus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopManualContinuFocus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStopManualContinuFocus message, length delimited. Does not implicitly {@link ReqStopManualContinuFocus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStopManualContinuFocus
     * @static
     * @param {IReqStopManualContinuFocus} message ReqStopManualContinuFocus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopManualContinuFocus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStopManualContinuFocus message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStopManualContinuFocus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStopManualContinuFocus} ReqStopManualContinuFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopManualContinuFocus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStopManualContinuFocus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStopManualContinuFocus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStopManualContinuFocus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStopManualContinuFocus} ReqStopManualContinuFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopManualContinuFocus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStopManualContinuFocus message.
     * @function verify
     * @memberof ReqStopManualContinuFocus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStopManualContinuFocus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStopManualContinuFocus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStopManualContinuFocus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStopManualContinuFocus} ReqStopManualContinuFocus
     */
    ReqStopManualContinuFocus.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStopManualContinuFocus)
            return object;
        return new $root.ReqStopManualContinuFocus();
    };
    /**
     * Creates a plain object from a ReqStopManualContinuFocus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStopManualContinuFocus
     * @static
     * @param {ReqStopManualContinuFocus} message ReqStopManualContinuFocus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStopManualContinuFocus.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStopManualContinuFocus to JSON.
     * @function toJSON
     * @memberof ReqStopManualContinuFocus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStopManualContinuFocus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStopManualContinuFocus
     * @function getTypeUrl
     * @memberof ReqStopManualContinuFocus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStopManualContinuFocus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStopManualContinuFocus";
    };
    return ReqStopManualContinuFocus;
})();
$root.ReqNormalAutoFocus = (function () {
    /**
     * Properties of a ReqNormalAutoFocus.
     * @exports IReqNormalAutoFocus
     * @interface IReqNormalAutoFocus
     * @property {number|null} [mode] ReqNormalAutoFocus mode
     * @property {number|null} [centerX] ReqNormalAutoFocus centerX
     * @property {number|null} [centerY] ReqNormalAutoFocus centerY
     */
    /**
     * Constructs a new ReqNormalAutoFocus.
     * @exports ReqNormalAutoFocus
     * @classdesc Represents a ReqNormalAutoFocus.
     * @implements IReqNormalAutoFocus
     * @constructor
     * @param {IReqNormalAutoFocus=} [properties] Properties to set
     */
    function ReqNormalAutoFocus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqNormalAutoFocus mode.
     * @member {number} mode
     * @memberof ReqNormalAutoFocus
     * @instance
     */
    ReqNormalAutoFocus.prototype.mode = 0;
    /**
     * ReqNormalAutoFocus centerX.
     * @member {number} centerX
     * @memberof ReqNormalAutoFocus
     * @instance
     */
    ReqNormalAutoFocus.prototype.centerX = 0;
    /**
     * ReqNormalAutoFocus centerY.
     * @member {number} centerY
     * @memberof ReqNormalAutoFocus
     * @instance
     */
    ReqNormalAutoFocus.prototype.centerY = 0;
    /**
     * Creates a new ReqNormalAutoFocus instance using the specified properties.
     * @function create
     * @memberof ReqNormalAutoFocus
     * @static
     * @param {IReqNormalAutoFocus=} [properties] Properties to set
     * @returns {ReqNormalAutoFocus} ReqNormalAutoFocus instance
     */
    ReqNormalAutoFocus.create = function create(properties) {
        return new ReqNormalAutoFocus(properties);
    };
    /**
     * Encodes the specified ReqNormalAutoFocus message. Does not implicitly {@link ReqNormalAutoFocus.verify|verify} messages.
     * @function encode
     * @memberof ReqNormalAutoFocus
     * @static
     * @param {IReqNormalAutoFocus} message ReqNormalAutoFocus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqNormalAutoFocus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.mode);
        if (message.centerX != null &&
            Object.hasOwnProperty.call(message, "centerX"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.centerX);
        if (message.centerY != null &&
            Object.hasOwnProperty.call(message, "centerY"))
            writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.centerY);
        return writer;
    };
    /**
     * Encodes the specified ReqNormalAutoFocus message, length delimited. Does not implicitly {@link ReqNormalAutoFocus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqNormalAutoFocus
     * @static
     * @param {IReqNormalAutoFocus} message ReqNormalAutoFocus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqNormalAutoFocus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqNormalAutoFocus message from the specified reader or buffer.
     * @function decode
     * @memberof ReqNormalAutoFocus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqNormalAutoFocus} ReqNormalAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqNormalAutoFocus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqNormalAutoFocus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.mode = reader.uint32();
                    break;
                }
                case 2: {
                    message.centerX = reader.uint32();
                    break;
                }
                case 3: {
                    message.centerY = reader.uint32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqNormalAutoFocus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqNormalAutoFocus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqNormalAutoFocus} ReqNormalAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqNormalAutoFocus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqNormalAutoFocus message.
     * @function verify
     * @memberof ReqNormalAutoFocus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqNormalAutoFocus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            if (!$util.isInteger(message.mode))
                return "mode: integer expected";
        if (message.centerX != null && message.hasOwnProperty("centerX"))
            if (!$util.isInteger(message.centerX))
                return "centerX: integer expected";
        if (message.centerY != null && message.hasOwnProperty("centerY"))
            if (!$util.isInteger(message.centerY))
                return "centerY: integer expected";
        return null;
    };
    /**
     * Creates a ReqNormalAutoFocus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqNormalAutoFocus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqNormalAutoFocus} ReqNormalAutoFocus
     */
    ReqNormalAutoFocus.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqNormalAutoFocus)
            return object;
        var message = new $root.ReqNormalAutoFocus();
        if (object.mode != null)
            message.mode = object.mode >>> 0;
        if (object.centerX != null)
            message.centerX = object.centerX >>> 0;
        if (object.centerY != null)
            message.centerY = object.centerY >>> 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqNormalAutoFocus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqNormalAutoFocus
     * @static
     * @param {ReqNormalAutoFocus} message ReqNormalAutoFocus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqNormalAutoFocus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.mode = 0;
            object.centerX = 0;
            object.centerY = 0;
        }
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = message.mode;
        if (message.centerX != null && message.hasOwnProperty("centerX"))
            object.centerX = message.centerX;
        if (message.centerY != null && message.hasOwnProperty("centerY"))
            object.centerY = message.centerY;
        return object;
    };
    /**
     * Converts this ReqNormalAutoFocus to JSON.
     * @function toJSON
     * @memberof ReqNormalAutoFocus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqNormalAutoFocus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqNormalAutoFocus
     * @function getTypeUrl
     * @memberof ReqNormalAutoFocus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqNormalAutoFocus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqNormalAutoFocus";
    };
    return ReqNormalAutoFocus;
})();
$root.ReqAstroAutoFocus = (function () {
    /**
     * Properties of a ReqAstroAutoFocus.
     * @exports IReqAstroAutoFocus
     * @interface IReqAstroAutoFocus
     * @property {number|null} [mode] ReqAstroAutoFocus mode
     */
    /**
     * Constructs a new ReqAstroAutoFocus.
     * @exports ReqAstroAutoFocus
     * @classdesc Represents a ReqAstroAutoFocus.
     * @implements IReqAstroAutoFocus
     * @constructor
     * @param {IReqAstroAutoFocus=} [properties] Properties to set
     */
    function ReqAstroAutoFocus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqAstroAutoFocus mode.
     * @member {number} mode
     * @memberof ReqAstroAutoFocus
     * @instance
     */
    ReqAstroAutoFocus.prototype.mode = 0;
    /**
     * Creates a new ReqAstroAutoFocus instance using the specified properties.
     * @function create
     * @memberof ReqAstroAutoFocus
     * @static
     * @param {IReqAstroAutoFocus=} [properties] Properties to set
     * @returns {ReqAstroAutoFocus} ReqAstroAutoFocus instance
     */
    ReqAstroAutoFocus.create = function create(properties) {
        return new ReqAstroAutoFocus(properties);
    };
    /**
     * Encodes the specified ReqAstroAutoFocus message. Does not implicitly {@link ReqAstroAutoFocus.verify|verify} messages.
     * @function encode
     * @memberof ReqAstroAutoFocus
     * @static
     * @param {IReqAstroAutoFocus} message ReqAstroAutoFocus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqAstroAutoFocus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.mode);
        return writer;
    };
    /**
     * Encodes the specified ReqAstroAutoFocus message, length delimited. Does not implicitly {@link ReqAstroAutoFocus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqAstroAutoFocus
     * @static
     * @param {IReqAstroAutoFocus} message ReqAstroAutoFocus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqAstroAutoFocus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqAstroAutoFocus message from the specified reader or buffer.
     * @function decode
     * @memberof ReqAstroAutoFocus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqAstroAutoFocus} ReqAstroAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqAstroAutoFocus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqAstroAutoFocus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.mode = reader.uint32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqAstroAutoFocus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqAstroAutoFocus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqAstroAutoFocus} ReqAstroAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqAstroAutoFocus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqAstroAutoFocus message.
     * @function verify
     * @memberof ReqAstroAutoFocus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqAstroAutoFocus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            if (!$util.isInteger(message.mode))
                return "mode: integer expected";
        return null;
    };
    /**
     * Creates a ReqAstroAutoFocus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqAstroAutoFocus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqAstroAutoFocus} ReqAstroAutoFocus
     */
    ReqAstroAutoFocus.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqAstroAutoFocus)
            return object;
        var message = new $root.ReqAstroAutoFocus();
        if (object.mode != null)
            message.mode = object.mode >>> 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqAstroAutoFocus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqAstroAutoFocus
     * @static
     * @param {ReqAstroAutoFocus} message ReqAstroAutoFocus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqAstroAutoFocus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mode = 0;
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = message.mode;
        return object;
    };
    /**
     * Converts this ReqAstroAutoFocus to JSON.
     * @function toJSON
     * @memberof ReqAstroAutoFocus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqAstroAutoFocus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqAstroAutoFocus
     * @function getTypeUrl
     * @memberof ReqAstroAutoFocus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqAstroAutoFocus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqAstroAutoFocus";
    };
    return ReqAstroAutoFocus;
})();
$root.ReqStopAstroAutoFocus = (function () {
    /**
     * Properties of a ReqStopAstroAutoFocus.
     * @exports IReqStopAstroAutoFocus
     * @interface IReqStopAstroAutoFocus
     */
    /**
     * Constructs a new ReqStopAstroAutoFocus.
     * @exports ReqStopAstroAutoFocus
     * @classdesc Represents a ReqStopAstroAutoFocus.
     * @implements IReqStopAstroAutoFocus
     * @constructor
     * @param {IReqStopAstroAutoFocus=} [properties] Properties to set
     */
    function ReqStopAstroAutoFocus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStopAstroAutoFocus instance using the specified properties.
     * @function create
     * @memberof ReqStopAstroAutoFocus
     * @static
     * @param {IReqStopAstroAutoFocus=} [properties] Properties to set
     * @returns {ReqStopAstroAutoFocus} ReqStopAstroAutoFocus instance
     */
    ReqStopAstroAutoFocus.create = function create(properties) {
        return new ReqStopAstroAutoFocus(properties);
    };
    /**
     * Encodes the specified ReqStopAstroAutoFocus message. Does not implicitly {@link ReqStopAstroAutoFocus.verify|verify} messages.
     * @function encode
     * @memberof ReqStopAstroAutoFocus
     * @static
     * @param {IReqStopAstroAutoFocus} message ReqStopAstroAutoFocus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopAstroAutoFocus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStopAstroAutoFocus message, length delimited. Does not implicitly {@link ReqStopAstroAutoFocus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStopAstroAutoFocus
     * @static
     * @param {IReqStopAstroAutoFocus} message ReqStopAstroAutoFocus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopAstroAutoFocus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStopAstroAutoFocus message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStopAstroAutoFocus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStopAstroAutoFocus} ReqStopAstroAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopAstroAutoFocus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStopAstroAutoFocus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStopAstroAutoFocus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStopAstroAutoFocus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStopAstroAutoFocus} ReqStopAstroAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopAstroAutoFocus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStopAstroAutoFocus message.
     * @function verify
     * @memberof ReqStopAstroAutoFocus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStopAstroAutoFocus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStopAstroAutoFocus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStopAstroAutoFocus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStopAstroAutoFocus} ReqStopAstroAutoFocus
     */
    ReqStopAstroAutoFocus.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStopAstroAutoFocus)
            return object;
        return new $root.ReqStopAstroAutoFocus();
    };
    /**
     * Creates a plain object from a ReqStopAstroAutoFocus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStopAstroAutoFocus
     * @static
     * @param {ReqStopAstroAutoFocus} message ReqStopAstroAutoFocus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStopAstroAutoFocus.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStopAstroAutoFocus to JSON.
     * @function toJSON
     * @memberof ReqStopAstroAutoFocus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStopAstroAutoFocus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStopAstroAutoFocus
     * @function getTypeUrl
     * @memberof ReqStopAstroAutoFocus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStopAstroAutoFocus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStopAstroAutoFocus";
    };
    return ReqStopAstroAutoFocus;
})();
$root.ReqMotorServiceJoystick = (function () {
    /**
     * Properties of a ReqMotorServiceJoystick.
     * @exports IReqMotorServiceJoystick
     * @interface IReqMotorServiceJoystick
     * @property {number|null} [vectorAngle] ReqMotorServiceJoystick vectorAngle
     * @property {number|null} [vectorLength] ReqMotorServiceJoystick vectorLength
     * @property {number|null} [speed] ReqMotorServiceJoystick speed
     */
    /**
     * Constructs a new ReqMotorServiceJoystick.
     * @exports ReqMotorServiceJoystick
     * @classdesc Represents a ReqMotorServiceJoystick.
     * @implements IReqMotorServiceJoystick
     * @constructor
     * @param {IReqMotorServiceJoystick=} [properties] Properties to set
     */
    function ReqMotorServiceJoystick(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqMotorServiceJoystick vectorAngle.
     * @member {number} vectorAngle
     * @memberof ReqMotorServiceJoystick
     * @instance
     */
    ReqMotorServiceJoystick.prototype.vectorAngle = 0;
    /**
     * ReqMotorServiceJoystick vectorLength.
     * @member {number} vectorLength
     * @memberof ReqMotorServiceJoystick
     * @instance
     */
    ReqMotorServiceJoystick.prototype.vectorLength = 0;
    /**
     * ReqMotorServiceJoystick speed.
     * @member {number} speed
     * @memberof ReqMotorServiceJoystick
     * @instance
     */
    ReqMotorServiceJoystick.prototype.speed = 0;
    /**
     * Creates a new ReqMotorServiceJoystick instance using the specified properties.
     * @function create
     * @memberof ReqMotorServiceJoystick
     * @static
     * @param {IReqMotorServiceJoystick=} [properties] Properties to set
     * @returns {ReqMotorServiceJoystick} ReqMotorServiceJoystick instance
     */
    ReqMotorServiceJoystick.create = function create(properties) {
        return new ReqMotorServiceJoystick(properties);
    };
    /**
     * Encodes the specified ReqMotorServiceJoystick message. Does not implicitly {@link ReqMotorServiceJoystick.verify|verify} messages.
     * @function encode
     * @memberof ReqMotorServiceJoystick
     * @static
     * @param {IReqMotorServiceJoystick} message ReqMotorServiceJoystick message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorServiceJoystick.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vectorAngle != null &&
            Object.hasOwnProperty.call(message, "vectorAngle"))
            writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.vectorAngle);
        if (message.vectorLength != null &&
            Object.hasOwnProperty.call(message, "vectorLength"))
            writer.uint32(/* id 2, wireType 1 =*/ 17).double(message.vectorLength);
        if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
            writer.uint32(/* id 3, wireType 1 =*/ 25).double(message.speed);
        return writer;
    };
    /**
     * Encodes the specified ReqMotorServiceJoystick message, length delimited. Does not implicitly {@link ReqMotorServiceJoystick.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqMotorServiceJoystick
     * @static
     * @param {IReqMotorServiceJoystick} message ReqMotorServiceJoystick message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorServiceJoystick.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqMotorServiceJoystick message from the specified reader or buffer.
     * @function decode
     * @memberof ReqMotorServiceJoystick
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqMotorServiceJoystick} ReqMotorServiceJoystick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorServiceJoystick.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqMotorServiceJoystick();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.vectorAngle = reader.double();
                    break;
                }
                case 2: {
                    message.vectorLength = reader.double();
                    break;
                }
                case 3: {
                    message.speed = reader.double();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqMotorServiceJoystick message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqMotorServiceJoystick
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqMotorServiceJoystick} ReqMotorServiceJoystick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorServiceJoystick.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqMotorServiceJoystick message.
     * @function verify
     * @memberof ReqMotorServiceJoystick
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqMotorServiceJoystick.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vectorAngle != null && message.hasOwnProperty("vectorAngle"))
            if (typeof message.vectorAngle !== "number")
                return "vectorAngle: number expected";
        if (message.vectorLength != null && message.hasOwnProperty("vectorLength"))
            if (typeof message.vectorLength !== "number")
                return "vectorLength: number expected";
        if (message.speed != null && message.hasOwnProperty("speed"))
            if (typeof message.speed !== "number")
                return "speed: number expected";
        return null;
    };
    /**
     * Creates a ReqMotorServiceJoystick message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqMotorServiceJoystick
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqMotorServiceJoystick} ReqMotorServiceJoystick
     */
    ReqMotorServiceJoystick.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqMotorServiceJoystick)
            return object;
        var message = new $root.ReqMotorServiceJoystick();
        if (object.vectorAngle != null)
            message.vectorAngle = Number(object.vectorAngle);
        if (object.vectorLength != null)
            message.vectorLength = Number(object.vectorLength);
        if (object.speed != null)
            message.speed = Number(object.speed);
        return message;
    };
    /**
     * Creates a plain object from a ReqMotorServiceJoystick message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqMotorServiceJoystick
     * @static
     * @param {ReqMotorServiceJoystick} message ReqMotorServiceJoystick
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqMotorServiceJoystick.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.vectorAngle = 0;
            object.vectorLength = 0;
            object.speed = 0;
        }
        if (message.vectorAngle != null && message.hasOwnProperty("vectorAngle"))
            object.vectorAngle =
                options.json && !isFinite(message.vectorAngle)
                    ? String(message.vectorAngle)
                    : message.vectorAngle;
        if (message.vectorLength != null && message.hasOwnProperty("vectorLength"))
            object.vectorLength =
                options.json && !isFinite(message.vectorLength)
                    ? String(message.vectorLength)
                    : message.vectorLength;
        if (message.speed != null && message.hasOwnProperty("speed"))
            object.speed =
                options.json && !isFinite(message.speed)
                    ? String(message.speed)
                    : message.speed;
        return object;
    };
    /**
     * Converts this ReqMotorServiceJoystick to JSON.
     * @function toJSON
     * @memberof ReqMotorServiceJoystick
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqMotorServiceJoystick.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqMotorServiceJoystick
     * @function getTypeUrl
     * @memberof ReqMotorServiceJoystick
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqMotorServiceJoystick.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqMotorServiceJoystick";
    };
    return ReqMotorServiceJoystick;
})();
$root.ReqMotorServiceJoystickFixedAngle = (function () {
    /**
     * Properties of a ReqMotorServiceJoystickFixedAngle.
     * @exports IReqMotorServiceJoystickFixedAngle
     * @interface IReqMotorServiceJoystickFixedAngle
     * @property {number|null} [vectorAngle] ReqMotorServiceJoystickFixedAngle vectorAngle
     * @property {number|null} [vectorLength] ReqMotorServiceJoystickFixedAngle vectorLength
     * @property {number|null} [speed] ReqMotorServiceJoystickFixedAngle speed
     */
    /**
     * Constructs a new ReqMotorServiceJoystickFixedAngle.
     * @exports ReqMotorServiceJoystickFixedAngle
     * @classdesc Represents a ReqMotorServiceJoystickFixedAngle.
     * @implements IReqMotorServiceJoystickFixedAngle
     * @constructor
     * @param {IReqMotorServiceJoystickFixedAngle=} [properties] Properties to set
     */
    function ReqMotorServiceJoystickFixedAngle(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqMotorServiceJoystickFixedAngle vectorAngle.
     * @member {number} vectorAngle
     * @memberof ReqMotorServiceJoystickFixedAngle
     * @instance
     */
    ReqMotorServiceJoystickFixedAngle.prototype.vectorAngle = 0;
    /**
     * ReqMotorServiceJoystickFixedAngle vectorLength.
     * @member {number} vectorLength
     * @memberof ReqMotorServiceJoystickFixedAngle
     * @instance
     */
    ReqMotorServiceJoystickFixedAngle.prototype.vectorLength = 0;
    /**
     * ReqMotorServiceJoystickFixedAngle speed.
     * @member {number} speed
     * @memberof ReqMotorServiceJoystickFixedAngle
     * @instance
     */
    ReqMotorServiceJoystickFixedAngle.prototype.speed = 0;
    /**
     * Creates a new ReqMotorServiceJoystickFixedAngle instance using the specified properties.
     * @function create
     * @memberof ReqMotorServiceJoystickFixedAngle
     * @static
     * @param {IReqMotorServiceJoystickFixedAngle=} [properties] Properties to set
     * @returns {ReqMotorServiceJoystickFixedAngle} ReqMotorServiceJoystickFixedAngle instance
     */
    ReqMotorServiceJoystickFixedAngle.create = function create(properties) {
        return new ReqMotorServiceJoystickFixedAngle(properties);
    };
    /**
     * Encodes the specified ReqMotorServiceJoystickFixedAngle message. Does not implicitly {@link ReqMotorServiceJoystickFixedAngle.verify|verify} messages.
     * @function encode
     * @memberof ReqMotorServiceJoystickFixedAngle
     * @static
     * @param {IReqMotorServiceJoystickFixedAngle} message ReqMotorServiceJoystickFixedAngle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorServiceJoystickFixedAngle.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vectorAngle != null &&
            Object.hasOwnProperty.call(message, "vectorAngle"))
            writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.vectorAngle);
        if (message.vectorLength != null &&
            Object.hasOwnProperty.call(message, "vectorLength"))
            writer.uint32(/* id 2, wireType 1 =*/ 17).double(message.vectorLength);
        if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
            writer.uint32(/* id 3, wireType 1 =*/ 25).double(message.speed);
        return writer;
    };
    /**
     * Encodes the specified ReqMotorServiceJoystickFixedAngle message, length delimited. Does not implicitly {@link ReqMotorServiceJoystickFixedAngle.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqMotorServiceJoystickFixedAngle
     * @static
     * @param {IReqMotorServiceJoystickFixedAngle} message ReqMotorServiceJoystickFixedAngle message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorServiceJoystickFixedAngle.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqMotorServiceJoystickFixedAngle message from the specified reader or buffer.
     * @function decode
     * @memberof ReqMotorServiceJoystickFixedAngle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqMotorServiceJoystickFixedAngle} ReqMotorServiceJoystickFixedAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorServiceJoystickFixedAngle.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqMotorServiceJoystickFixedAngle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.vectorAngle = reader.double();
                    break;
                }
                case 2: {
                    message.vectorLength = reader.double();
                    break;
                }
                case 3: {
                    message.speed = reader.double();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqMotorServiceJoystickFixedAngle message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqMotorServiceJoystickFixedAngle
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqMotorServiceJoystickFixedAngle} ReqMotorServiceJoystickFixedAngle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorServiceJoystickFixedAngle.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqMotorServiceJoystickFixedAngle message.
     * @function verify
     * @memberof ReqMotorServiceJoystickFixedAngle
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqMotorServiceJoystickFixedAngle.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.vectorAngle != null && message.hasOwnProperty("vectorAngle"))
            if (typeof message.vectorAngle !== "number")
                return "vectorAngle: number expected";
        if (message.vectorLength != null && message.hasOwnProperty("vectorLength"))
            if (typeof message.vectorLength !== "number")
                return "vectorLength: number expected";
        if (message.speed != null && message.hasOwnProperty("speed"))
            if (typeof message.speed !== "number")
                return "speed: number expected";
        return null;
    };
    /**
     * Creates a ReqMotorServiceJoystickFixedAngle message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqMotorServiceJoystickFixedAngle
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqMotorServiceJoystickFixedAngle} ReqMotorServiceJoystickFixedAngle
     */
    ReqMotorServiceJoystickFixedAngle.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqMotorServiceJoystickFixedAngle)
            return object;
        var message = new $root.ReqMotorServiceJoystickFixedAngle();
        if (object.vectorAngle != null)
            message.vectorAngle = Number(object.vectorAngle);
        if (object.vectorLength != null)
            message.vectorLength = Number(object.vectorLength);
        if (object.speed != null)
            message.speed = Number(object.speed);
        return message;
    };
    /**
     * Creates a plain object from a ReqMotorServiceJoystickFixedAngle message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqMotorServiceJoystickFixedAngle
     * @static
     * @param {ReqMotorServiceJoystickFixedAngle} message ReqMotorServiceJoystickFixedAngle
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqMotorServiceJoystickFixedAngle.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.vectorAngle = 0;
            object.vectorLength = 0;
            object.speed = 0;
        }
        if (message.vectorAngle != null && message.hasOwnProperty("vectorAngle"))
            object.vectorAngle =
                options.json && !isFinite(message.vectorAngle)
                    ? String(message.vectorAngle)
                    : message.vectorAngle;
        if (message.vectorLength != null && message.hasOwnProperty("vectorLength"))
            object.vectorLength =
                options.json && !isFinite(message.vectorLength)
                    ? String(message.vectorLength)
                    : message.vectorLength;
        if (message.speed != null && message.hasOwnProperty("speed"))
            object.speed =
                options.json && !isFinite(message.speed)
                    ? String(message.speed)
                    : message.speed;
        return object;
    };
    /**
     * Converts this ReqMotorServiceJoystickFixedAngle to JSON.
     * @function toJSON
     * @memberof ReqMotorServiceJoystickFixedAngle
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqMotorServiceJoystickFixedAngle.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqMotorServiceJoystickFixedAngle
     * @function getTypeUrl
     * @memberof ReqMotorServiceJoystickFixedAngle
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqMotorServiceJoystickFixedAngle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqMotorServiceJoystickFixedAngle";
    };
    return ReqMotorServiceJoystickFixedAngle;
})();
$root.ReqMotorServiceJoystickStop = (function () {
    /**
     * Properties of a ReqMotorServiceJoystickStop.
     * @exports IReqMotorServiceJoystickStop
     * @interface IReqMotorServiceJoystickStop
     */
    /**
     * Constructs a new ReqMotorServiceJoystickStop.
     * @exports ReqMotorServiceJoystickStop
     * @classdesc Represents a ReqMotorServiceJoystickStop.
     * @implements IReqMotorServiceJoystickStop
     * @constructor
     * @param {IReqMotorServiceJoystickStop=} [properties] Properties to set
     */
    function ReqMotorServiceJoystickStop(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqMotorServiceJoystickStop instance using the specified properties.
     * @function create
     * @memberof ReqMotorServiceJoystickStop
     * @static
     * @param {IReqMotorServiceJoystickStop=} [properties] Properties to set
     * @returns {ReqMotorServiceJoystickStop} ReqMotorServiceJoystickStop instance
     */
    ReqMotorServiceJoystickStop.create = function create(properties) {
        return new ReqMotorServiceJoystickStop(properties);
    };
    /**
     * Encodes the specified ReqMotorServiceJoystickStop message. Does not implicitly {@link ReqMotorServiceJoystickStop.verify|verify} messages.
     * @function encode
     * @memberof ReqMotorServiceJoystickStop
     * @static
     * @param {IReqMotorServiceJoystickStop} message ReqMotorServiceJoystickStop message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorServiceJoystickStop.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqMotorServiceJoystickStop message, length delimited. Does not implicitly {@link ReqMotorServiceJoystickStop.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqMotorServiceJoystickStop
     * @static
     * @param {IReqMotorServiceJoystickStop} message ReqMotorServiceJoystickStop message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorServiceJoystickStop.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqMotorServiceJoystickStop message from the specified reader or buffer.
     * @function decode
     * @memberof ReqMotorServiceJoystickStop
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqMotorServiceJoystickStop} ReqMotorServiceJoystickStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorServiceJoystickStop.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqMotorServiceJoystickStop();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqMotorServiceJoystickStop message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqMotorServiceJoystickStop
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqMotorServiceJoystickStop} ReqMotorServiceJoystickStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorServiceJoystickStop.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqMotorServiceJoystickStop message.
     * @function verify
     * @memberof ReqMotorServiceJoystickStop
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqMotorServiceJoystickStop.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqMotorServiceJoystickStop message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqMotorServiceJoystickStop
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqMotorServiceJoystickStop} ReqMotorServiceJoystickStop
     */
    ReqMotorServiceJoystickStop.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqMotorServiceJoystickStop)
            return object;
        return new $root.ReqMotorServiceJoystickStop();
    };
    /**
     * Creates a plain object from a ReqMotorServiceJoystickStop message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqMotorServiceJoystickStop
     * @static
     * @param {ReqMotorServiceJoystickStop} message ReqMotorServiceJoystickStop
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqMotorServiceJoystickStop.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqMotorServiceJoystickStop to JSON.
     * @function toJSON
     * @memberof ReqMotorServiceJoystickStop
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqMotorServiceJoystickStop.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqMotorServiceJoystickStop
     * @function getTypeUrl
     * @memberof ReqMotorServiceJoystickStop
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqMotorServiceJoystickStop.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqMotorServiceJoystickStop";
    };
    return ReqMotorServiceJoystickStop;
})();
$root.ReqMotorRun = (function () {
    /**
     * Properties of a ReqMotorRun.
     * @exports IReqMotorRun
     * @interface IReqMotorRun
     * @property {number|null} [id] ReqMotorRun id
     * @property {number|null} [speed] ReqMotorRun speed
     * @property {boolean|null} [direction] ReqMotorRun direction
     * @property {number|null} [speedRamping] ReqMotorRun speedRamping
     * @property {number|null} [resolutionLevel] ReqMotorRun resolutionLevel
     */
    /**
     * Constructs a new ReqMotorRun.
     * @exports ReqMotorRun
     * @classdesc Represents a ReqMotorRun.
     * @implements IReqMotorRun
     * @constructor
     * @param {IReqMotorRun=} [properties] Properties to set
     */
    function ReqMotorRun(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqMotorRun id.
     * @member {number} id
     * @memberof ReqMotorRun
     * @instance
     */
    ReqMotorRun.prototype.id = 0;
    /**
     * ReqMotorRun speed.
     * @member {number} speed
     * @memberof ReqMotorRun
     * @instance
     */
    ReqMotorRun.prototype.speed = 0;
    /**
     * ReqMotorRun direction.
     * @member {boolean} direction
     * @memberof ReqMotorRun
     * @instance
     */
    ReqMotorRun.prototype.direction = false;
    /**
     * ReqMotorRun speedRamping.
     * @member {number} speedRamping
     * @memberof ReqMotorRun
     * @instance
     */
    ReqMotorRun.prototype.speedRamping = 0;
    /**
     * ReqMotorRun resolutionLevel.
     * @member {number} resolutionLevel
     * @memberof ReqMotorRun
     * @instance
     */
    ReqMotorRun.prototype.resolutionLevel = 0;
    /**
     * Creates a new ReqMotorRun instance using the specified properties.
     * @function create
     * @memberof ReqMotorRun
     * @static
     * @param {IReqMotorRun=} [properties] Properties to set
     * @returns {ReqMotorRun} ReqMotorRun instance
     */
    ReqMotorRun.create = function create(properties) {
        return new ReqMotorRun(properties);
    };
    /**
     * Encodes the specified ReqMotorRun message. Does not implicitly {@link ReqMotorRun.verify|verify} messages.
     * @function encode
     * @memberof ReqMotorRun
     * @static
     * @param {IReqMotorRun} message ReqMotorRun message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorRun.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
        if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
            writer.uint32(/* id 2, wireType 1 =*/ 17).double(message.speed);
        if (message.direction != null &&
            Object.hasOwnProperty.call(message, "direction"))
            writer.uint32(/* id 3, wireType 0 =*/ 24).bool(message.direction);
        if (message.speedRamping != null &&
            Object.hasOwnProperty.call(message, "speedRamping"))
            writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.speedRamping);
        if (message.resolutionLevel != null &&
            Object.hasOwnProperty.call(message, "resolutionLevel"))
            writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.resolutionLevel);
        return writer;
    };
    /**
     * Encodes the specified ReqMotorRun message, length delimited. Does not implicitly {@link ReqMotorRun.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqMotorRun
     * @static
     * @param {IReqMotorRun} message ReqMotorRun message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorRun.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqMotorRun message from the specified reader or buffer.
     * @function decode
     * @memberof ReqMotorRun
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqMotorRun} ReqMotorRun
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorRun.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqMotorRun();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.id = reader.int32();
                    break;
                }
                case 2: {
                    message.speed = reader.double();
                    break;
                }
                case 3: {
                    message.direction = reader.bool();
                    break;
                }
                case 4: {
                    message.speedRamping = reader.int32();
                    break;
                }
                case 5: {
                    message.resolutionLevel = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqMotorRun message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqMotorRun
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqMotorRun} ReqMotorRun
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorRun.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqMotorRun message.
     * @function verify
     * @memberof ReqMotorRun
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqMotorRun.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.speed != null && message.hasOwnProperty("speed"))
            if (typeof message.speed !== "number")
                return "speed: number expected";
        if (message.direction != null && message.hasOwnProperty("direction"))
            if (typeof message.direction !== "boolean")
                return "direction: boolean expected";
        if (message.speedRamping != null && message.hasOwnProperty("speedRamping"))
            if (!$util.isInteger(message.speedRamping))
                return "speedRamping: integer expected";
        if (message.resolutionLevel != null &&
            message.hasOwnProperty("resolutionLevel"))
            if (!$util.isInteger(message.resolutionLevel))
                return "resolutionLevel: integer expected";
        return null;
    };
    /**
     * Creates a ReqMotorRun message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqMotorRun
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqMotorRun} ReqMotorRun
     */
    ReqMotorRun.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqMotorRun)
            return object;
        var message = new $root.ReqMotorRun();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.speed != null)
            message.speed = Number(object.speed);
        if (object.direction != null)
            message.direction = Boolean(object.direction);
        if (object.speedRamping != null)
            message.speedRamping = object.speedRamping | 0;
        if (object.resolutionLevel != null)
            message.resolutionLevel = object.resolutionLevel | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqMotorRun message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqMotorRun
     * @static
     * @param {ReqMotorRun} message ReqMotorRun
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqMotorRun.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.speed = 0;
            object.direction = false;
            object.speedRamping = 0;
            object.resolutionLevel = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.speed != null && message.hasOwnProperty("speed"))
            object.speed =
                options.json && !isFinite(message.speed)
                    ? String(message.speed)
                    : message.speed;
        if (message.direction != null && message.hasOwnProperty("direction"))
            object.direction = message.direction;
        if (message.speedRamping != null && message.hasOwnProperty("speedRamping"))
            object.speedRamping = message.speedRamping;
        if (message.resolutionLevel != null &&
            message.hasOwnProperty("resolutionLevel"))
            object.resolutionLevel = message.resolutionLevel;
        return object;
    };
    /**
     * Converts this ReqMotorRun to JSON.
     * @function toJSON
     * @memberof ReqMotorRun
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqMotorRun.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqMotorRun
     * @function getTypeUrl
     * @memberof ReqMotorRun
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqMotorRun.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqMotorRun";
    };
    return ReqMotorRun;
})();
$root.ReqMotorRunTo = (function () {
    /**
     * Properties of a ReqMotorRunTo.
     * @exports IReqMotorRunTo
     * @interface IReqMotorRunTo
     * @property {number|null} [id] ReqMotorRunTo id
     * @property {number|null} [endPosition] ReqMotorRunTo endPosition
     * @property {number|null} [speed] ReqMotorRunTo speed
     * @property {number|null} [speedRamping] ReqMotorRunTo speedRamping
     * @property {number|null} [resolutionLevel] ReqMotorRunTo resolutionLevel
     */
    /**
     * Constructs a new ReqMotorRunTo.
     * @exports ReqMotorRunTo
     * @classdesc Represents a ReqMotorRunTo.
     * @implements IReqMotorRunTo
     * @constructor
     * @param {IReqMotorRunTo=} [properties] Properties to set
     */
    function ReqMotorRunTo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqMotorRunTo id.
     * @member {number} id
     * @memberof ReqMotorRunTo
     * @instance
     */
    ReqMotorRunTo.prototype.id = 0;
    /**
     * ReqMotorRunTo endPosition.
     * @member {number} endPosition
     * @memberof ReqMotorRunTo
     * @instance
     */
    ReqMotorRunTo.prototype.endPosition = 0;
    /**
     * ReqMotorRunTo speed.
     * @member {number} speed
     * @memberof ReqMotorRunTo
     * @instance
     */
    ReqMotorRunTo.prototype.speed = 0;
    /**
     * ReqMotorRunTo speedRamping.
     * @member {number} speedRamping
     * @memberof ReqMotorRunTo
     * @instance
     */
    ReqMotorRunTo.prototype.speedRamping = 0;
    /**
     * ReqMotorRunTo resolutionLevel.
     * @member {number} resolutionLevel
     * @memberof ReqMotorRunTo
     * @instance
     */
    ReqMotorRunTo.prototype.resolutionLevel = 0;
    /**
     * Creates a new ReqMotorRunTo instance using the specified properties.
     * @function create
     * @memberof ReqMotorRunTo
     * @static
     * @param {IReqMotorRunTo=} [properties] Properties to set
     * @returns {ReqMotorRunTo} ReqMotorRunTo instance
     */
    ReqMotorRunTo.create = function create(properties) {
        return new ReqMotorRunTo(properties);
    };
    /**
     * Encodes the specified ReqMotorRunTo message. Does not implicitly {@link ReqMotorRunTo.verify|verify} messages.
     * @function encode
     * @memberof ReqMotorRunTo
     * @static
     * @param {IReqMotorRunTo} message ReqMotorRunTo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorRunTo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
        if (message.endPosition != null &&
            Object.hasOwnProperty.call(message, "endPosition"))
            writer.uint32(/* id 2, wireType 1 =*/ 17).double(message.endPosition);
        if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
            writer.uint32(/* id 3, wireType 1 =*/ 25).double(message.speed);
        if (message.speedRamping != null &&
            Object.hasOwnProperty.call(message, "speedRamping"))
            writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.speedRamping);
        if (message.resolutionLevel != null &&
            Object.hasOwnProperty.call(message, "resolutionLevel"))
            writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.resolutionLevel);
        return writer;
    };
    /**
     * Encodes the specified ReqMotorRunTo message, length delimited. Does not implicitly {@link ReqMotorRunTo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqMotorRunTo
     * @static
     * @param {IReqMotorRunTo} message ReqMotorRunTo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorRunTo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqMotorRunTo message from the specified reader or buffer.
     * @function decode
     * @memberof ReqMotorRunTo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqMotorRunTo} ReqMotorRunTo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorRunTo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqMotorRunTo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.id = reader.int32();
                    break;
                }
                case 2: {
                    message.endPosition = reader.double();
                    break;
                }
                case 3: {
                    message.speed = reader.double();
                    break;
                }
                case 4: {
                    message.speedRamping = reader.int32();
                    break;
                }
                case 5: {
                    message.resolutionLevel = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqMotorRunTo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqMotorRunTo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqMotorRunTo} ReqMotorRunTo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorRunTo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqMotorRunTo message.
     * @function verify
     * @memberof ReqMotorRunTo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqMotorRunTo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.endPosition != null && message.hasOwnProperty("endPosition"))
            if (typeof message.endPosition !== "number")
                return "endPosition: number expected";
        if (message.speed != null && message.hasOwnProperty("speed"))
            if (typeof message.speed !== "number")
                return "speed: number expected";
        if (message.speedRamping != null && message.hasOwnProperty("speedRamping"))
            if (!$util.isInteger(message.speedRamping))
                return "speedRamping: integer expected";
        if (message.resolutionLevel != null &&
            message.hasOwnProperty("resolutionLevel"))
            if (!$util.isInteger(message.resolutionLevel))
                return "resolutionLevel: integer expected";
        return null;
    };
    /**
     * Creates a ReqMotorRunTo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqMotorRunTo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqMotorRunTo} ReqMotorRunTo
     */
    ReqMotorRunTo.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqMotorRunTo)
            return object;
        var message = new $root.ReqMotorRunTo();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.endPosition != null)
            message.endPosition = Number(object.endPosition);
        if (object.speed != null)
            message.speed = Number(object.speed);
        if (object.speedRamping != null)
            message.speedRamping = object.speedRamping | 0;
        if (object.resolutionLevel != null)
            message.resolutionLevel = object.resolutionLevel | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqMotorRunTo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqMotorRunTo
     * @static
     * @param {ReqMotorRunTo} message ReqMotorRunTo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqMotorRunTo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.endPosition = 0;
            object.speed = 0;
            object.speedRamping = 0;
            object.resolutionLevel = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.endPosition != null && message.hasOwnProperty("endPosition"))
            object.endPosition =
                options.json && !isFinite(message.endPosition)
                    ? String(message.endPosition)
                    : message.endPosition;
        if (message.speed != null && message.hasOwnProperty("speed"))
            object.speed =
                options.json && !isFinite(message.speed)
                    ? String(message.speed)
                    : message.speed;
        if (message.speedRamping != null && message.hasOwnProperty("speedRamping"))
            object.speedRamping = message.speedRamping;
        if (message.resolutionLevel != null &&
            message.hasOwnProperty("resolutionLevel"))
            object.resolutionLevel = message.resolutionLevel;
        return object;
    };
    /**
     * Converts this ReqMotorRunTo to JSON.
     * @function toJSON
     * @memberof ReqMotorRunTo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqMotorRunTo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqMotorRunTo
     * @function getTypeUrl
     * @memberof ReqMotorRunTo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqMotorRunTo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqMotorRunTo";
    };
    return ReqMotorRunTo;
})();
$root.ReqMotorStop = (function () {
    /**
     * Properties of a ReqMotorStop.
     * @exports IReqMotorStop
     * @interface IReqMotorStop
     * @property {number|null} [id] ReqMotorStop id
     */
    /**
     * Constructs a new ReqMotorStop.
     * @exports ReqMotorStop
     * @classdesc Represents a ReqMotorStop.
     * @implements IReqMotorStop
     * @constructor
     * @param {IReqMotorStop=} [properties] Properties to set
     */
    function ReqMotorStop(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqMotorStop id.
     * @member {number} id
     * @memberof ReqMotorStop
     * @instance
     */
    ReqMotorStop.prototype.id = 0;
    /**
     * Creates a new ReqMotorStop instance using the specified properties.
     * @function create
     * @memberof ReqMotorStop
     * @static
     * @param {IReqMotorStop=} [properties] Properties to set
     * @returns {ReqMotorStop} ReqMotorStop instance
     */
    ReqMotorStop.create = function create(properties) {
        return new ReqMotorStop(properties);
    };
    /**
     * Encodes the specified ReqMotorStop message. Does not implicitly {@link ReqMotorStop.verify|verify} messages.
     * @function encode
     * @memberof ReqMotorStop
     * @static
     * @param {IReqMotorStop} message ReqMotorStop message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorStop.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
        return writer;
    };
    /**
     * Encodes the specified ReqMotorStop message, length delimited. Does not implicitly {@link ReqMotorStop.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqMotorStop
     * @static
     * @param {IReqMotorStop} message ReqMotorStop message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorStop.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqMotorStop message from the specified reader or buffer.
     * @function decode
     * @memberof ReqMotorStop
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqMotorStop} ReqMotorStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorStop.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqMotorStop();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.id = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqMotorStop message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqMotorStop
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqMotorStop} ReqMotorStop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorStop.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqMotorStop message.
     * @function verify
     * @memberof ReqMotorStop
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqMotorStop.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        return null;
    };
    /**
     * Creates a ReqMotorStop message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqMotorStop
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqMotorStop} ReqMotorStop
     */
    ReqMotorStop.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqMotorStop)
            return object;
        var message = new $root.ReqMotorStop();
        if (object.id != null)
            message.id = object.id | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqMotorStop message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqMotorStop
     * @static
     * @param {ReqMotorStop} message ReqMotorStop
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqMotorStop.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };
    /**
     * Converts this ReqMotorStop to JSON.
     * @function toJSON
     * @memberof ReqMotorStop
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqMotorStop.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqMotorStop
     * @function getTypeUrl
     * @memberof ReqMotorStop
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqMotorStop.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqMotorStop";
    };
    return ReqMotorStop;
})();
$root.ReqMotorReset = (function () {
    /**
     * Properties of a ReqMotorReset.
     * @exports IReqMotorReset
     * @interface IReqMotorReset
     * @property {number|null} [id] ReqMotorReset id
     * @property {boolean|null} [direction] ReqMotorReset direction
     */
    /**
     * Constructs a new ReqMotorReset.
     * @exports ReqMotorReset
     * @classdesc Represents a ReqMotorReset.
     * @implements IReqMotorReset
     * @constructor
     * @param {IReqMotorReset=} [properties] Properties to set
     */
    function ReqMotorReset(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqMotorReset id.
     * @member {number} id
     * @memberof ReqMotorReset
     * @instance
     */
    ReqMotorReset.prototype.id = 0;
    /**
     * ReqMotorReset direction.
     * @member {boolean} direction
     * @memberof ReqMotorReset
     * @instance
     */
    ReqMotorReset.prototype.direction = false;
    /**
     * Creates a new ReqMotorReset instance using the specified properties.
     * @function create
     * @memberof ReqMotorReset
     * @static
     * @param {IReqMotorReset=} [properties] Properties to set
     * @returns {ReqMotorReset} ReqMotorReset instance
     */
    ReqMotorReset.create = function create(properties) {
        return new ReqMotorReset(properties);
    };
    /**
     * Encodes the specified ReqMotorReset message. Does not implicitly {@link ReqMotorReset.verify|verify} messages.
     * @function encode
     * @memberof ReqMotorReset
     * @static
     * @param {IReqMotorReset} message ReqMotorReset message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorReset.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
        if (message.direction != null &&
            Object.hasOwnProperty.call(message, "direction"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).bool(message.direction);
        return writer;
    };
    /**
     * Encodes the specified ReqMotorReset message, length delimited. Does not implicitly {@link ReqMotorReset.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqMotorReset
     * @static
     * @param {IReqMotorReset} message ReqMotorReset message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorReset.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqMotorReset message from the specified reader or buffer.
     * @function decode
     * @memberof ReqMotorReset
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqMotorReset} ReqMotorReset
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorReset.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqMotorReset();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.id = reader.int32();
                    break;
                }
                case 2: {
                    message.direction = reader.bool();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqMotorReset message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqMotorReset
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqMotorReset} ReqMotorReset
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorReset.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqMotorReset message.
     * @function verify
     * @memberof ReqMotorReset
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqMotorReset.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.direction != null && message.hasOwnProperty("direction"))
            if (typeof message.direction !== "boolean")
                return "direction: boolean expected";
        return null;
    };
    /**
     * Creates a ReqMotorReset message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqMotorReset
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqMotorReset} ReqMotorReset
     */
    ReqMotorReset.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqMotorReset)
            return object;
        var message = new $root.ReqMotorReset();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.direction != null)
            message.direction = Boolean(object.direction);
        return message;
    };
    /**
     * Creates a plain object from a ReqMotorReset message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqMotorReset
     * @static
     * @param {ReqMotorReset} message ReqMotorReset
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqMotorReset.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.direction = false;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.direction != null && message.hasOwnProperty("direction"))
            object.direction = message.direction;
        return object;
    };
    /**
     * Converts this ReqMotorReset to JSON.
     * @function toJSON
     * @memberof ReqMotorReset
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqMotorReset.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqMotorReset
     * @function getTypeUrl
     * @memberof ReqMotorReset
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqMotorReset.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqMotorReset";
    };
    return ReqMotorReset;
})();
$root.ReqMotorChangeSpeed = (function () {
    /**
     * Properties of a ReqMotorChangeSpeed.
     * @exports IReqMotorChangeSpeed
     * @interface IReqMotorChangeSpeed
     * @property {number|null} [id] ReqMotorChangeSpeed id
     * @property {number|null} [speed] ReqMotorChangeSpeed speed
     */
    /**
     * Constructs a new ReqMotorChangeSpeed.
     * @exports ReqMotorChangeSpeed
     * @classdesc Represents a ReqMotorChangeSpeed.
     * @implements IReqMotorChangeSpeed
     * @constructor
     * @param {IReqMotorChangeSpeed=} [properties] Properties to set
     */
    function ReqMotorChangeSpeed(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqMotorChangeSpeed id.
     * @member {number} id
     * @memberof ReqMotorChangeSpeed
     * @instance
     */
    ReqMotorChangeSpeed.prototype.id = 0;
    /**
     * ReqMotorChangeSpeed speed.
     * @member {number} speed
     * @memberof ReqMotorChangeSpeed
     * @instance
     */
    ReqMotorChangeSpeed.prototype.speed = 0;
    /**
     * Creates a new ReqMotorChangeSpeed instance using the specified properties.
     * @function create
     * @memberof ReqMotorChangeSpeed
     * @static
     * @param {IReqMotorChangeSpeed=} [properties] Properties to set
     * @returns {ReqMotorChangeSpeed} ReqMotorChangeSpeed instance
     */
    ReqMotorChangeSpeed.create = function create(properties) {
        return new ReqMotorChangeSpeed(properties);
    };
    /**
     * Encodes the specified ReqMotorChangeSpeed message. Does not implicitly {@link ReqMotorChangeSpeed.verify|verify} messages.
     * @function encode
     * @memberof ReqMotorChangeSpeed
     * @static
     * @param {IReqMotorChangeSpeed} message ReqMotorChangeSpeed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorChangeSpeed.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
        if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
            writer.uint32(/* id 2, wireType 1 =*/ 17).double(message.speed);
        return writer;
    };
    /**
     * Encodes the specified ReqMotorChangeSpeed message, length delimited. Does not implicitly {@link ReqMotorChangeSpeed.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqMotorChangeSpeed
     * @static
     * @param {IReqMotorChangeSpeed} message ReqMotorChangeSpeed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorChangeSpeed.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqMotorChangeSpeed message from the specified reader or buffer.
     * @function decode
     * @memberof ReqMotorChangeSpeed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqMotorChangeSpeed} ReqMotorChangeSpeed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorChangeSpeed.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqMotorChangeSpeed();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.id = reader.int32();
                    break;
                }
                case 2: {
                    message.speed = reader.double();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqMotorChangeSpeed message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqMotorChangeSpeed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqMotorChangeSpeed} ReqMotorChangeSpeed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorChangeSpeed.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqMotorChangeSpeed message.
     * @function verify
     * @memberof ReqMotorChangeSpeed
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqMotorChangeSpeed.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.speed != null && message.hasOwnProperty("speed"))
            if (typeof message.speed !== "number")
                return "speed: number expected";
        return null;
    };
    /**
     * Creates a ReqMotorChangeSpeed message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqMotorChangeSpeed
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqMotorChangeSpeed} ReqMotorChangeSpeed
     */
    ReqMotorChangeSpeed.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqMotorChangeSpeed)
            return object;
        var message = new $root.ReqMotorChangeSpeed();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.speed != null)
            message.speed = Number(object.speed);
        return message;
    };
    /**
     * Creates a plain object from a ReqMotorChangeSpeed message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqMotorChangeSpeed
     * @static
     * @param {ReqMotorChangeSpeed} message ReqMotorChangeSpeed
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqMotorChangeSpeed.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.speed = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.speed != null && message.hasOwnProperty("speed"))
            object.speed =
                options.json && !isFinite(message.speed)
                    ? String(message.speed)
                    : message.speed;
        return object;
    };
    /**
     * Converts this ReqMotorChangeSpeed to JSON.
     * @function toJSON
     * @memberof ReqMotorChangeSpeed
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqMotorChangeSpeed.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqMotorChangeSpeed
     * @function getTypeUrl
     * @memberof ReqMotorChangeSpeed
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqMotorChangeSpeed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqMotorChangeSpeed";
    };
    return ReqMotorChangeSpeed;
})();
$root.ReqMotorChangeDirection = (function () {
    /**
     * Properties of a ReqMotorChangeDirection.
     * @exports IReqMotorChangeDirection
     * @interface IReqMotorChangeDirection
     * @property {number|null} [id] ReqMotorChangeDirection id
     * @property {boolean|null} [direction] ReqMotorChangeDirection direction
     */
    /**
     * Constructs a new ReqMotorChangeDirection.
     * @exports ReqMotorChangeDirection
     * @classdesc Represents a ReqMotorChangeDirection.
     * @implements IReqMotorChangeDirection
     * @constructor
     * @param {IReqMotorChangeDirection=} [properties] Properties to set
     */
    function ReqMotorChangeDirection(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqMotorChangeDirection id.
     * @member {number} id
     * @memberof ReqMotorChangeDirection
     * @instance
     */
    ReqMotorChangeDirection.prototype.id = 0;
    /**
     * ReqMotorChangeDirection direction.
     * @member {boolean} direction
     * @memberof ReqMotorChangeDirection
     * @instance
     */
    ReqMotorChangeDirection.prototype.direction = false;
    /**
     * Creates a new ReqMotorChangeDirection instance using the specified properties.
     * @function create
     * @memberof ReqMotorChangeDirection
     * @static
     * @param {IReqMotorChangeDirection=} [properties] Properties to set
     * @returns {ReqMotorChangeDirection} ReqMotorChangeDirection instance
     */
    ReqMotorChangeDirection.create = function create(properties) {
        return new ReqMotorChangeDirection(properties);
    };
    /**
     * Encodes the specified ReqMotorChangeDirection message. Does not implicitly {@link ReqMotorChangeDirection.verify|verify} messages.
     * @function encode
     * @memberof ReqMotorChangeDirection
     * @static
     * @param {IReqMotorChangeDirection} message ReqMotorChangeDirection message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorChangeDirection.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
        if (message.direction != null &&
            Object.hasOwnProperty.call(message, "direction"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).bool(message.direction);
        return writer;
    };
    /**
     * Encodes the specified ReqMotorChangeDirection message, length delimited. Does not implicitly {@link ReqMotorChangeDirection.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqMotorChangeDirection
     * @static
     * @param {IReqMotorChangeDirection} message ReqMotorChangeDirection message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqMotorChangeDirection.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqMotorChangeDirection message from the specified reader or buffer.
     * @function decode
     * @memberof ReqMotorChangeDirection
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqMotorChangeDirection} ReqMotorChangeDirection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorChangeDirection.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqMotorChangeDirection();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.id = reader.int32();
                    break;
                }
                case 2: {
                    message.direction = reader.bool();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqMotorChangeDirection message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqMotorChangeDirection
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqMotorChangeDirection} ReqMotorChangeDirection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqMotorChangeDirection.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqMotorChangeDirection message.
     * @function verify
     * @memberof ReqMotorChangeDirection
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqMotorChangeDirection.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.direction != null && message.hasOwnProperty("direction"))
            if (typeof message.direction !== "boolean")
                return "direction: boolean expected";
        return null;
    };
    /**
     * Creates a ReqMotorChangeDirection message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqMotorChangeDirection
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqMotorChangeDirection} ReqMotorChangeDirection
     */
    ReqMotorChangeDirection.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqMotorChangeDirection)
            return object;
        var message = new $root.ReqMotorChangeDirection();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.direction != null)
            message.direction = Boolean(object.direction);
        return message;
    };
    /**
     * Creates a plain object from a ReqMotorChangeDirection message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqMotorChangeDirection
     * @static
     * @param {ReqMotorChangeDirection} message ReqMotorChangeDirection
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqMotorChangeDirection.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.direction = false;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.direction != null && message.hasOwnProperty("direction"))
            object.direction = message.direction;
        return object;
    };
    /**
     * Converts this ReqMotorChangeDirection to JSON.
     * @function toJSON
     * @memberof ReqMotorChangeDirection
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqMotorChangeDirection.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqMotorChangeDirection
     * @function getTypeUrl
     * @memberof ReqMotorChangeDirection
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqMotorChangeDirection.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqMotorChangeDirection";
    };
    return ReqMotorChangeDirection;
})();
$root.ResMotor = (function () {
    /**
     * Properties of a ResMotor.
     * @exports IResMotor
     * @interface IResMotor
     * @property {number|null} [id] ResMotor id
     * @property {number|null} [code] ResMotor code
     */
    /**
     * Constructs a new ResMotor.
     * @exports ResMotor
     * @classdesc Represents a ResMotor.
     * @implements IResMotor
     * @constructor
     * @param {IResMotor=} [properties] Properties to set
     */
    function ResMotor(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResMotor id.
     * @member {number} id
     * @memberof ResMotor
     * @instance
     */
    ResMotor.prototype.id = 0;
    /**
     * ResMotor code.
     * @member {number} code
     * @memberof ResMotor
     * @instance
     */
    ResMotor.prototype.code = 0;
    /**
     * Creates a new ResMotor instance using the specified properties.
     * @function create
     * @memberof ResMotor
     * @static
     * @param {IResMotor=} [properties] Properties to set
     * @returns {ResMotor} ResMotor instance
     */
    ResMotor.create = function create(properties) {
        return new ResMotor(properties);
    };
    /**
     * Encodes the specified ResMotor message. Does not implicitly {@link ResMotor.verify|verify} messages.
     * @function encode
     * @memberof ResMotor
     * @static
     * @param {IResMotor} message ResMotor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResMotor.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.code);
        return writer;
    };
    /**
     * Encodes the specified ResMotor message, length delimited. Does not implicitly {@link ResMotor.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResMotor
     * @static
     * @param {IResMotor} message ResMotor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResMotor.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResMotor message from the specified reader or buffer.
     * @function decode
     * @memberof ResMotor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResMotor} ResMotor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResMotor.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResMotor();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.id = reader.int32();
                    break;
                }
                case 2: {
                    message.code = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResMotor message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResMotor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResMotor} ResMotor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResMotor.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResMotor message.
     * @function verify
     * @memberof ResMotor
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResMotor.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        return null;
    };
    /**
     * Creates a ResMotor message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResMotor
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResMotor} ResMotor
     */
    ResMotor.fromObject = function fromObject(object) {
        if (object instanceof $root.ResMotor)
            return object;
        var message = new $root.ResMotor();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.code != null)
            message.code = object.code | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResMotor message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResMotor
     * @static
     * @param {ResMotor} message ResMotor
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResMotor.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.code = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };
    /**
     * Converts this ResMotor to JSON.
     * @function toJSON
     * @memberof ResMotor
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResMotor.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResMotor
     * @function getTypeUrl
     * @memberof ResMotor
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResMotor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResMotor";
    };
    return ResMotor;
})();
$root.ResMotorPosition = (function () {
    /**
     * Properties of a ResMotorPosition.
     * @exports IResMotorPosition
     * @interface IResMotorPosition
     * @property {number|null} [id] ResMotorPosition id
     * @property {number|null} [code] ResMotorPosition code
     * @property {number|null} [position] ResMotorPosition position
     */
    /**
     * Constructs a new ResMotorPosition.
     * @exports ResMotorPosition
     * @classdesc Represents a ResMotorPosition.
     * @implements IResMotorPosition
     * @constructor
     * @param {IResMotorPosition=} [properties] Properties to set
     */
    function ResMotorPosition(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResMotorPosition id.
     * @member {number} id
     * @memberof ResMotorPosition
     * @instance
     */
    ResMotorPosition.prototype.id = 0;
    /**
     * ResMotorPosition code.
     * @member {number} code
     * @memberof ResMotorPosition
     * @instance
     */
    ResMotorPosition.prototype.code = 0;
    /**
     * ResMotorPosition position.
     * @member {number} position
     * @memberof ResMotorPosition
     * @instance
     */
    ResMotorPosition.prototype.position = 0;
    /**
     * Creates a new ResMotorPosition instance using the specified properties.
     * @function create
     * @memberof ResMotorPosition
     * @static
     * @param {IResMotorPosition=} [properties] Properties to set
     * @returns {ResMotorPosition} ResMotorPosition instance
     */
    ResMotorPosition.create = function create(properties) {
        return new ResMotorPosition(properties);
    };
    /**
     * Encodes the specified ResMotorPosition message. Does not implicitly {@link ResMotorPosition.verify|verify} messages.
     * @function encode
     * @memberof ResMotorPosition
     * @static
     * @param {IResMotorPosition} message ResMotorPosition message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResMotorPosition.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.code);
        if (message.position != null &&
            Object.hasOwnProperty.call(message, "position"))
            writer.uint32(/* id 3, wireType 1 =*/ 25).double(message.position);
        return writer;
    };
    /**
     * Encodes the specified ResMotorPosition message, length delimited. Does not implicitly {@link ResMotorPosition.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResMotorPosition
     * @static
     * @param {IResMotorPosition} message ResMotorPosition message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResMotorPosition.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResMotorPosition message from the specified reader or buffer.
     * @function decode
     * @memberof ResMotorPosition
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResMotorPosition} ResMotorPosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResMotorPosition.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResMotorPosition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.id = reader.int32();
                    break;
                }
                case 2: {
                    message.code = reader.int32();
                    break;
                }
                case 3: {
                    message.position = reader.double();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResMotorPosition message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResMotorPosition
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResMotorPosition} ResMotorPosition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResMotorPosition.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResMotorPosition message.
     * @function verify
     * @memberof ResMotorPosition
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResMotorPosition.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        if (message.position != null && message.hasOwnProperty("position"))
            if (typeof message.position !== "number")
                return "position: number expected";
        return null;
    };
    /**
     * Creates a ResMotorPosition message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResMotorPosition
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResMotorPosition} ResMotorPosition
     */
    ResMotorPosition.fromObject = function fromObject(object) {
        if (object instanceof $root.ResMotorPosition)
            return object;
        var message = new $root.ResMotorPosition();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.code != null)
            message.code = object.code | 0;
        if (object.position != null)
            message.position = Number(object.position);
        return message;
    };
    /**
     * Creates a plain object from a ResMotorPosition message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResMotorPosition
     * @static
     * @param {ResMotorPosition} message ResMotorPosition
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResMotorPosition.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.code = 0;
            object.position = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        if (message.position != null && message.hasOwnProperty("position"))
            object.position =
                options.json && !isFinite(message.position)
                    ? String(message.position)
                    : message.position;
        return object;
    };
    /**
     * Converts this ResMotorPosition to JSON.
     * @function toJSON
     * @memberof ResMotorPosition
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResMotorPosition.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResMotorPosition
     * @function getTypeUrl
     * @memberof ResMotorPosition
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResMotorPosition.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResMotorPosition";
    };
    return ResMotorPosition;
})();
$root.ReqDualCameraLinkage = (function () {
    /**
     * Properties of a ReqDualCameraLinkage.
     * @exports IReqDualCameraLinkage
     * @interface IReqDualCameraLinkage
     * @property {number|null} [x] ReqDualCameraLinkage x
     * @property {number|null} [y] ReqDualCameraLinkage y
     */
    /**
     * Constructs a new ReqDualCameraLinkage.
     * @exports ReqDualCameraLinkage
     * @classdesc Represents a ReqDualCameraLinkage.
     * @implements IReqDualCameraLinkage
     * @constructor
     * @param {IReqDualCameraLinkage=} [properties] Properties to set
     */
    function ReqDualCameraLinkage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqDualCameraLinkage x.
     * @member {number} x
     * @memberof ReqDualCameraLinkage
     * @instance
     */
    ReqDualCameraLinkage.prototype.x = 0;
    /**
     * ReqDualCameraLinkage y.
     * @member {number} y
     * @memberof ReqDualCameraLinkage
     * @instance
     */
    ReqDualCameraLinkage.prototype.y = 0;
    /**
     * Creates a new ReqDualCameraLinkage instance using the specified properties.
     * @function create
     * @memberof ReqDualCameraLinkage
     * @static
     * @param {IReqDualCameraLinkage=} [properties] Properties to set
     * @returns {ReqDualCameraLinkage} ReqDualCameraLinkage instance
     */
    ReqDualCameraLinkage.create = function create(properties) {
        return new ReqDualCameraLinkage(properties);
    };
    /**
     * Encodes the specified ReqDualCameraLinkage message. Does not implicitly {@link ReqDualCameraLinkage.verify|verify} messages.
     * @function encode
     * @memberof ReqDualCameraLinkage
     * @static
     * @param {IReqDualCameraLinkage} message ReqDualCameraLinkage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqDualCameraLinkage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.y);
        return writer;
    };
    /**
     * Encodes the specified ReqDualCameraLinkage message, length delimited. Does not implicitly {@link ReqDualCameraLinkage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqDualCameraLinkage
     * @static
     * @param {IReqDualCameraLinkage} message ReqDualCameraLinkage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqDualCameraLinkage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqDualCameraLinkage message from the specified reader or buffer.
     * @function decode
     * @memberof ReqDualCameraLinkage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqDualCameraLinkage} ReqDualCameraLinkage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqDualCameraLinkage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqDualCameraLinkage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.x = reader.int32();
                    break;
                }
                case 2: {
                    message.y = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqDualCameraLinkage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqDualCameraLinkage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqDualCameraLinkage} ReqDualCameraLinkage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqDualCameraLinkage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqDualCameraLinkage message.
     * @function verify
     * @memberof ReqDualCameraLinkage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqDualCameraLinkage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (!$util.isInteger(message.x))
                return "x: integer expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (!$util.isInteger(message.y))
                return "y: integer expected";
        return null;
    };
    /**
     * Creates a ReqDualCameraLinkage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqDualCameraLinkage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqDualCameraLinkage} ReqDualCameraLinkage
     */
    ReqDualCameraLinkage.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqDualCameraLinkage)
            return object;
        var message = new $root.ReqDualCameraLinkage();
        if (object.x != null)
            message.x = object.x | 0;
        if (object.y != null)
            message.y = object.y | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqDualCameraLinkage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqDualCameraLinkage
     * @static
     * @param {ReqDualCameraLinkage} message ReqDualCameraLinkage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqDualCameraLinkage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = message.y;
        return object;
    };
    /**
     * Converts this ReqDualCameraLinkage to JSON.
     * @function toJSON
     * @memberof ReqDualCameraLinkage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqDualCameraLinkage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqDualCameraLinkage
     * @function getTypeUrl
     * @memberof ReqDualCameraLinkage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqDualCameraLinkage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqDualCameraLinkage";
    };
    return ReqDualCameraLinkage;
})();
/**
 * State enum.
 * @exports State
 * @enum {number}
 * @property {number} STATE_IDLE=0 STATE_IDLE value
 * @property {number} STATE_RUNNING=1 STATE_RUNNING value
 * @property {number} STATE_STOPPING=2 STATE_STOPPING value
 * @property {number} STATE_STOPPED=3 STATE_STOPPED value
 * @property {number} STATE_SUCCESS=4 STATE_SUCCESS value
 * @property {number} STATE_FAILED=5 STATE_FAILED value
 * @property {number} STATE_ASTRO_PLATE_SOLVING=6 STATE_ASTRO_PLATE_SOLVING value
 */
$root.State = (function () {
    var valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "STATE_IDLE")] = 0;
    values[(valuesById[1] = "STATE_RUNNING")] = 1;
    values[(valuesById[2] = "STATE_STOPPING")] = 2;
    values[(valuesById[3] = "STATE_STOPPED")] = 3;
    values[(valuesById[4] = "STATE_SUCCESS")] = 4;
    values[(valuesById[5] = "STATE_FAILED")] = 5;
    values[(valuesById[6] = "STATE_ASTRO_PLATE_SOLVING")] = 6;
    return values;
})();
/**
 * OperationState enum.
 * @exports OperationState
 * @enum {number}
 * @property {number} OPERATION_STATE_IDLE=0 OPERATION_STATE_IDLE value
 * @property {number} OPERATION_STATE_RUNNING=1 OPERATION_STATE_RUNNING value
 * @property {number} OPERATION_STATE_STOPPING=2 OPERATION_STATE_STOPPING value
 * @property {number} OPERATION_STATE_STOPPED=3 OPERATION_STATE_STOPPED value
 */
$root.OperationState = (function () {
    var valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "OPERATION_STATE_IDLE")] = 0;
    values[(valuesById[1] = "OPERATION_STATE_RUNNING")] = 1;
    values[(valuesById[2] = "OPERATION_STATE_STOPPING")] = 2;
    values[(valuesById[3] = "OPERATION_STATE_STOPPED")] = 3;
    return values;
})();
/**
 * AstroState enum.
 * @exports AstroState
 * @enum {number}
 * @property {number} ASTRO_STATE_IDLE=0 ASTRO_STATE_IDLE value
 * @property {number} ASTRO_STATE_RUNNING=1 ASTRO_STATE_RUNNING value
 * @property {number} ASTRO_STATE_STOPPING=2 ASTRO_STATE_STOPPING value
 * @property {number} ASTRO_STATE_STOPPED=3 ASTRO_STATE_STOPPED value
 * @property {number} ASTRO_STATE_PLATE_SOLVING=4 ASTRO_STATE_PLATE_SOLVING value
 */
$root.AstroState = (function () {
    var valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "ASTRO_STATE_IDLE")] = 0;
    values[(valuesById[1] = "ASTRO_STATE_RUNNING")] = 1;
    values[(valuesById[2] = "ASTRO_STATE_STOPPING")] = 2;
    values[(valuesById[3] = "ASTRO_STATE_STOPPED")] = 3;
    values[(valuesById[4] = "ASTRO_STATE_PLATE_SOLVING")] = 4;
    return values;
})();
$root.ResNotifyPictureMatching = (function () {
    /**
     * Properties of a ResNotifyPictureMatching.
     * @exports IResNotifyPictureMatching
     * @interface IResNotifyPictureMatching
     * @property {number|null} [x] ResNotifyPictureMatching x
     * @property {number|null} [y] ResNotifyPictureMatching y
     * @property {number|null} [width] ResNotifyPictureMatching width
     * @property {number|null} [height] ResNotifyPictureMatching height
     * @property {number|null} [value] ResNotifyPictureMatching value
     * @property {number|null} [code] ResNotifyPictureMatching code
     */
    /**
     * Constructs a new ResNotifyPictureMatching.
     * @exports ResNotifyPictureMatching
     * @classdesc Represents a ResNotifyPictureMatching.
     * @implements IResNotifyPictureMatching
     * @constructor
     * @param {IResNotifyPictureMatching=} [properties] Properties to set
     */
    function ResNotifyPictureMatching(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyPictureMatching x.
     * @member {number} x
     * @memberof ResNotifyPictureMatching
     * @instance
     */
    ResNotifyPictureMatching.prototype.x = 0;
    /**
     * ResNotifyPictureMatching y.
     * @member {number} y
     * @memberof ResNotifyPictureMatching
     * @instance
     */
    ResNotifyPictureMatching.prototype.y = 0;
    /**
     * ResNotifyPictureMatching width.
     * @member {number} width
     * @memberof ResNotifyPictureMatching
     * @instance
     */
    ResNotifyPictureMatching.prototype.width = 0;
    /**
     * ResNotifyPictureMatching height.
     * @member {number} height
     * @memberof ResNotifyPictureMatching
     * @instance
     */
    ResNotifyPictureMatching.prototype.height = 0;
    /**
     * ResNotifyPictureMatching value.
     * @member {number} value
     * @memberof ResNotifyPictureMatching
     * @instance
     */
    ResNotifyPictureMatching.prototype.value = 0;
    /**
     * ResNotifyPictureMatching code.
     * @member {number} code
     * @memberof ResNotifyPictureMatching
     * @instance
     */
    ResNotifyPictureMatching.prototype.code = 0;
    /**
     * Creates a new ResNotifyPictureMatching instance using the specified properties.
     * @function create
     * @memberof ResNotifyPictureMatching
     * @static
     * @param {IResNotifyPictureMatching=} [properties] Properties to set
     * @returns {ResNotifyPictureMatching} ResNotifyPictureMatching instance
     */
    ResNotifyPictureMatching.create = function create(properties) {
        return new ResNotifyPictureMatching(properties);
    };
    /**
     * Encodes the specified ResNotifyPictureMatching message. Does not implicitly {@link ResNotifyPictureMatching.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyPictureMatching
     * @static
     * @param {IResNotifyPictureMatching} message ResNotifyPictureMatching message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyPictureMatching.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.y);
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.width);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.height);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 5, wireType 1 =*/ 41).double(message.value);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 6, wireType 0 =*/ 48).int32(message.code);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyPictureMatching message, length delimited. Does not implicitly {@link ResNotifyPictureMatching.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyPictureMatching
     * @static
     * @param {IResNotifyPictureMatching} message ResNotifyPictureMatching message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyPictureMatching.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyPictureMatching message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyPictureMatching
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyPictureMatching} ResNotifyPictureMatching
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyPictureMatching.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyPictureMatching();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.x = reader.uint32();
                    break;
                }
                case 2: {
                    message.y = reader.uint32();
                    break;
                }
                case 3: {
                    message.width = reader.uint32();
                    break;
                }
                case 4: {
                    message.height = reader.uint32();
                    break;
                }
                case 5: {
                    message.value = reader.double();
                    break;
                }
                case 6: {
                    message.code = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyPictureMatching message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyPictureMatching
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyPictureMatching} ResNotifyPictureMatching
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyPictureMatching.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyPictureMatching message.
     * @function verify
     * @memberof ResNotifyPictureMatching
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyPictureMatching.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (!$util.isInteger(message.x))
                return "x: integer expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (!$util.isInteger(message.y))
                return "y: integer expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (!$util.isInteger(message.width))
                return "width: integer expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (!$util.isInteger(message.height))
                return "height: integer expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value !== "number")
                return "value: number expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyPictureMatching message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyPictureMatching
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyPictureMatching} ResNotifyPictureMatching
     */
    ResNotifyPictureMatching.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyPictureMatching)
            return object;
        var message = new $root.ResNotifyPictureMatching();
        if (object.x != null)
            message.x = object.x >>> 0;
        if (object.y != null)
            message.y = object.y >>> 0;
        if (object.width != null)
            message.width = object.width >>> 0;
        if (object.height != null)
            message.height = object.height >>> 0;
        if (object.value != null)
            message.value = Number(object.value);
        if (object.code != null)
            message.code = object.code | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyPictureMatching message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyPictureMatching
     * @static
     * @param {ResNotifyPictureMatching} message ResNotifyPictureMatching
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyPictureMatching.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
            object.width = 0;
            object.height = 0;
            object.value = 0;
            object.code = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = message.y;
        if (message.width != null && message.hasOwnProperty("width"))
            object.width = message.width;
        if (message.height != null && message.hasOwnProperty("height"))
            object.height = message.height;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value =
                options.json && !isFinite(message.value)
                    ? String(message.value)
                    : message.value;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };
    /**
     * Converts this ResNotifyPictureMatching to JSON.
     * @function toJSON
     * @memberof ResNotifyPictureMatching
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyPictureMatching.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyPictureMatching
     * @function getTypeUrl
     * @memberof ResNotifyPictureMatching
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyPictureMatching.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyPictureMatching";
    };
    return ResNotifyPictureMatching;
})();
$root.ResNotifySDcardInfo = (function () {
    /**
     * Properties of a ResNotifySDcardInfo.
     * @exports IResNotifySDcardInfo
     * @interface IResNotifySDcardInfo
     * @property {number|null} [availableSize] ResNotifySDcardInfo availableSize
     * @property {number|null} [totalSize] ResNotifySDcardInfo totalSize
     * @property {number|null} [code] ResNotifySDcardInfo code
     */
    /**
     * Constructs a new ResNotifySDcardInfo.
     * @exports ResNotifySDcardInfo
     * @classdesc Represents a ResNotifySDcardInfo.
     * @implements IResNotifySDcardInfo
     * @constructor
     * @param {IResNotifySDcardInfo=} [properties] Properties to set
     */
    function ResNotifySDcardInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifySDcardInfo availableSize.
     * @member {number} availableSize
     * @memberof ResNotifySDcardInfo
     * @instance
     */
    ResNotifySDcardInfo.prototype.availableSize = 0;
    /**
     * ResNotifySDcardInfo totalSize.
     * @member {number} totalSize
     * @memberof ResNotifySDcardInfo
     * @instance
     */
    ResNotifySDcardInfo.prototype.totalSize = 0;
    /**
     * ResNotifySDcardInfo code.
     * @member {number} code
     * @memberof ResNotifySDcardInfo
     * @instance
     */
    ResNotifySDcardInfo.prototype.code = 0;
    /**
     * Creates a new ResNotifySDcardInfo instance using the specified properties.
     * @function create
     * @memberof ResNotifySDcardInfo
     * @static
     * @param {IResNotifySDcardInfo=} [properties] Properties to set
     * @returns {ResNotifySDcardInfo} ResNotifySDcardInfo instance
     */
    ResNotifySDcardInfo.create = function create(properties) {
        return new ResNotifySDcardInfo(properties);
    };
    /**
     * Encodes the specified ResNotifySDcardInfo message. Does not implicitly {@link ResNotifySDcardInfo.verify|verify} messages.
     * @function encode
     * @memberof ResNotifySDcardInfo
     * @static
     * @param {IResNotifySDcardInfo} message ResNotifySDcardInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifySDcardInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.availableSize != null &&
            Object.hasOwnProperty.call(message, "availableSize"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.availableSize);
        if (message.totalSize != null &&
            Object.hasOwnProperty.call(message, "totalSize"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.totalSize);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.code);
        return writer;
    };
    /**
     * Encodes the specified ResNotifySDcardInfo message, length delimited. Does not implicitly {@link ResNotifySDcardInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifySDcardInfo
     * @static
     * @param {IResNotifySDcardInfo} message ResNotifySDcardInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifySDcardInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifySDcardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifySDcardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifySDcardInfo} ResNotifySDcardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifySDcardInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifySDcardInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.availableSize = reader.uint32();
                    break;
                }
                case 2: {
                    message.totalSize = reader.uint32();
                    break;
                }
                case 3: {
                    message.code = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifySDcardInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifySDcardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifySDcardInfo} ResNotifySDcardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifySDcardInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifySDcardInfo message.
     * @function verify
     * @memberof ResNotifySDcardInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifySDcardInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.availableSize != null &&
            message.hasOwnProperty("availableSize"))
            if (!$util.isInteger(message.availableSize))
                return "availableSize: integer expected";
        if (message.totalSize != null && message.hasOwnProperty("totalSize"))
            if (!$util.isInteger(message.totalSize))
                return "totalSize: integer expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifySDcardInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifySDcardInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifySDcardInfo} ResNotifySDcardInfo
     */
    ResNotifySDcardInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifySDcardInfo)
            return object;
        var message = new $root.ResNotifySDcardInfo();
        if (object.availableSize != null)
            message.availableSize = object.availableSize >>> 0;
        if (object.totalSize != null)
            message.totalSize = object.totalSize >>> 0;
        if (object.code != null)
            message.code = object.code | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifySDcardInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifySDcardInfo
     * @static
     * @param {ResNotifySDcardInfo} message ResNotifySDcardInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifySDcardInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.availableSize = 0;
            object.totalSize = 0;
            object.code = 0;
        }
        if (message.availableSize != null &&
            message.hasOwnProperty("availableSize"))
            object.availableSize = message.availableSize;
        if (message.totalSize != null && message.hasOwnProperty("totalSize"))
            object.totalSize = message.totalSize;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };
    /**
     * Converts this ResNotifySDcardInfo to JSON.
     * @function toJSON
     * @memberof ResNotifySDcardInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifySDcardInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifySDcardInfo
     * @function getTypeUrl
     * @memberof ResNotifySDcardInfo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifySDcardInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifySDcardInfo";
    };
    return ResNotifySDcardInfo;
})();
$root.ResNotifyRecordTime = (function () {
    /**
     * Properties of a ResNotifyRecordTime.
     * @exports IResNotifyRecordTime
     * @interface IResNotifyRecordTime
     * @property {number|null} [recordTime] ResNotifyRecordTime recordTime
     */
    /**
     * Constructs a new ResNotifyRecordTime.
     * @exports ResNotifyRecordTime
     * @classdesc Represents a ResNotifyRecordTime.
     * @implements IResNotifyRecordTime
     * @constructor
     * @param {IResNotifyRecordTime=} [properties] Properties to set
     */
    function ResNotifyRecordTime(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyRecordTime recordTime.
     * @member {number} recordTime
     * @memberof ResNotifyRecordTime
     * @instance
     */
    ResNotifyRecordTime.prototype.recordTime = 0;
    /**
     * Creates a new ResNotifyRecordTime instance using the specified properties.
     * @function create
     * @memberof ResNotifyRecordTime
     * @static
     * @param {IResNotifyRecordTime=} [properties] Properties to set
     * @returns {ResNotifyRecordTime} ResNotifyRecordTime instance
     */
    ResNotifyRecordTime.create = function create(properties) {
        return new ResNotifyRecordTime(properties);
    };
    /**
     * Encodes the specified ResNotifyRecordTime message. Does not implicitly {@link ResNotifyRecordTime.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyRecordTime
     * @static
     * @param {IResNotifyRecordTime} message ResNotifyRecordTime message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyRecordTime.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.recordTime != null &&
            Object.hasOwnProperty.call(message, "recordTime"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.recordTime);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyRecordTime message, length delimited. Does not implicitly {@link ResNotifyRecordTime.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyRecordTime
     * @static
     * @param {IResNotifyRecordTime} message ResNotifyRecordTime message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyRecordTime.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyRecordTime message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyRecordTime
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyRecordTime} ResNotifyRecordTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyRecordTime.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyRecordTime();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.recordTime = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyRecordTime message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyRecordTime
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyRecordTime} ResNotifyRecordTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyRecordTime.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyRecordTime message.
     * @function verify
     * @memberof ResNotifyRecordTime
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyRecordTime.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.recordTime != null && message.hasOwnProperty("recordTime"))
            if (!$util.isInteger(message.recordTime))
                return "recordTime: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyRecordTime message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyRecordTime
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyRecordTime} ResNotifyRecordTime
     */
    ResNotifyRecordTime.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyRecordTime)
            return object;
        var message = new $root.ResNotifyRecordTime();
        if (object.recordTime != null)
            message.recordTime = object.recordTime | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyRecordTime message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyRecordTime
     * @static
     * @param {ResNotifyRecordTime} message ResNotifyRecordTime
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyRecordTime.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.recordTime = 0;
        if (message.recordTime != null && message.hasOwnProperty("recordTime"))
            object.recordTime = message.recordTime;
        return object;
    };
    /**
     * Converts this ResNotifyRecordTime to JSON.
     * @function toJSON
     * @memberof ResNotifyRecordTime
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyRecordTime.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyRecordTime
     * @function getTypeUrl
     * @memberof ResNotifyRecordTime
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyRecordTime.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyRecordTime";
    };
    return ResNotifyRecordTime;
})();
$root.ResNotifyTimeLapseOutTime = (function () {
    /**
     * Properties of a ResNotifyTimeLapseOutTime.
     * @exports IResNotifyTimeLapseOutTime
     * @interface IResNotifyTimeLapseOutTime
     * @property {number|null} [interval] ResNotifyTimeLapseOutTime interval
     * @property {number|null} [outTime] ResNotifyTimeLapseOutTime outTime
     * @property {number|null} [totalTime] ResNotifyTimeLapseOutTime totalTime
     */
    /**
     * Constructs a new ResNotifyTimeLapseOutTime.
     * @exports ResNotifyTimeLapseOutTime
     * @classdesc Represents a ResNotifyTimeLapseOutTime.
     * @implements IResNotifyTimeLapseOutTime
     * @constructor
     * @param {IResNotifyTimeLapseOutTime=} [properties] Properties to set
     */
    function ResNotifyTimeLapseOutTime(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyTimeLapseOutTime interval.
     * @member {number} interval
     * @memberof ResNotifyTimeLapseOutTime
     * @instance
     */
    ResNotifyTimeLapseOutTime.prototype.interval = 0;
    /**
     * ResNotifyTimeLapseOutTime outTime.
     * @member {number} outTime
     * @memberof ResNotifyTimeLapseOutTime
     * @instance
     */
    ResNotifyTimeLapseOutTime.prototype.outTime = 0;
    /**
     * ResNotifyTimeLapseOutTime totalTime.
     * @member {number} totalTime
     * @memberof ResNotifyTimeLapseOutTime
     * @instance
     */
    ResNotifyTimeLapseOutTime.prototype.totalTime = 0;
    /**
     * Creates a new ResNotifyTimeLapseOutTime instance using the specified properties.
     * @function create
     * @memberof ResNotifyTimeLapseOutTime
     * @static
     * @param {IResNotifyTimeLapseOutTime=} [properties] Properties to set
     * @returns {ResNotifyTimeLapseOutTime} ResNotifyTimeLapseOutTime instance
     */
    ResNotifyTimeLapseOutTime.create = function create(properties) {
        return new ResNotifyTimeLapseOutTime(properties);
    };
    /**
     * Encodes the specified ResNotifyTimeLapseOutTime message. Does not implicitly {@link ResNotifyTimeLapseOutTime.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyTimeLapseOutTime
     * @static
     * @param {IResNotifyTimeLapseOutTime} message ResNotifyTimeLapseOutTime message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyTimeLapseOutTime.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.interval != null &&
            Object.hasOwnProperty.call(message, "interval"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.interval);
        if (message.outTime != null &&
            Object.hasOwnProperty.call(message, "outTime"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.outTime);
        if (message.totalTime != null &&
            Object.hasOwnProperty.call(message, "totalTime"))
            writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.totalTime);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyTimeLapseOutTime message, length delimited. Does not implicitly {@link ResNotifyTimeLapseOutTime.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyTimeLapseOutTime
     * @static
     * @param {IResNotifyTimeLapseOutTime} message ResNotifyTimeLapseOutTime message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyTimeLapseOutTime.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyTimeLapseOutTime message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyTimeLapseOutTime
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyTimeLapseOutTime} ResNotifyTimeLapseOutTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyTimeLapseOutTime.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyTimeLapseOutTime();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.interval = reader.int32();
                    break;
                }
                case 2: {
                    message.outTime = reader.int32();
                    break;
                }
                case 3: {
                    message.totalTime = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyTimeLapseOutTime message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyTimeLapseOutTime
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyTimeLapseOutTime} ResNotifyTimeLapseOutTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyTimeLapseOutTime.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyTimeLapseOutTime message.
     * @function verify
     * @memberof ResNotifyTimeLapseOutTime
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyTimeLapseOutTime.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.interval != null && message.hasOwnProperty("interval"))
            if (!$util.isInteger(message.interval))
                return "interval: integer expected";
        if (message.outTime != null && message.hasOwnProperty("outTime"))
            if (!$util.isInteger(message.outTime))
                return "outTime: integer expected";
        if (message.totalTime != null && message.hasOwnProperty("totalTime"))
            if (!$util.isInteger(message.totalTime))
                return "totalTime: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyTimeLapseOutTime message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyTimeLapseOutTime
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyTimeLapseOutTime} ResNotifyTimeLapseOutTime
     */
    ResNotifyTimeLapseOutTime.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyTimeLapseOutTime)
            return object;
        var message = new $root.ResNotifyTimeLapseOutTime();
        if (object.interval != null)
            message.interval = object.interval | 0;
        if (object.outTime != null)
            message.outTime = object.outTime | 0;
        if (object.totalTime != null)
            message.totalTime = object.totalTime | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyTimeLapseOutTime message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyTimeLapseOutTime
     * @static
     * @param {ResNotifyTimeLapseOutTime} message ResNotifyTimeLapseOutTime
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyTimeLapseOutTime.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.interval = 0;
            object.outTime = 0;
            object.totalTime = 0;
        }
        if (message.interval != null && message.hasOwnProperty("interval"))
            object.interval = message.interval;
        if (message.outTime != null && message.hasOwnProperty("outTime"))
            object.outTime = message.outTime;
        if (message.totalTime != null && message.hasOwnProperty("totalTime"))
            object.totalTime = message.totalTime;
        return object;
    };
    /**
     * Converts this ResNotifyTimeLapseOutTime to JSON.
     * @function toJSON
     * @memberof ResNotifyTimeLapseOutTime
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyTimeLapseOutTime.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyTimeLapseOutTime
     * @function getTypeUrl
     * @memberof ResNotifyTimeLapseOutTime
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyTimeLapseOutTime.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyTimeLapseOutTime";
    };
    return ResNotifyTimeLapseOutTime;
})();
$root.ResNotifyOperationState = (function () {
    /**
     * Properties of a ResNotifyOperationState.
     * @exports IResNotifyOperationState
     * @interface IResNotifyOperationState
     * @property {OperationState|null} [state] ResNotifyOperationState state
     */
    /**
     * Constructs a new ResNotifyOperationState.
     * @exports ResNotifyOperationState
     * @classdesc Represents a ResNotifyOperationState.
     * @implements IResNotifyOperationState
     * @constructor
     * @param {IResNotifyOperationState=} [properties] Properties to set
     */
    function ResNotifyOperationState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyOperationState state.
     * @member {OperationState} state
     * @memberof ResNotifyOperationState
     * @instance
     */
    ResNotifyOperationState.prototype.state = 0;
    /**
     * Creates a new ResNotifyOperationState instance using the specified properties.
     * @function create
     * @memberof ResNotifyOperationState
     * @static
     * @param {IResNotifyOperationState=} [properties] Properties to set
     * @returns {ResNotifyOperationState} ResNotifyOperationState instance
     */
    ResNotifyOperationState.create = function create(properties) {
        return new ResNotifyOperationState(properties);
    };
    /**
     * Encodes the specified ResNotifyOperationState message. Does not implicitly {@link ResNotifyOperationState.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyOperationState
     * @static
     * @param {IResNotifyOperationState} message ResNotifyOperationState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyOperationState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.state);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyOperationState message, length delimited. Does not implicitly {@link ResNotifyOperationState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyOperationState
     * @static
     * @param {IResNotifyOperationState} message ResNotifyOperationState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyOperationState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyOperationState message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyOperationState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyOperationState} ResNotifyOperationState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyOperationState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyOperationState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.state = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyOperationState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyOperationState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyOperationState} ResNotifyOperationState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyOperationState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyOperationState message.
     * @function verify
     * @memberof ResNotifyOperationState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyOperationState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state"))
            switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
            }
        return null;
    };
    /**
     * Creates a ResNotifyOperationState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyOperationState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyOperationState} ResNotifyOperationState
     */
    ResNotifyOperationState.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyOperationState)
            return object;
        var message = new $root.ResNotifyOperationState();
        switch (object.state) {
            default:
                if (typeof object.state === "number") {
                    message.state = object.state;
                    break;
                }
                break;
            case "OPERATION_STATE_IDLE":
            case 0:
                message.state = 0;
                break;
            case "OPERATION_STATE_RUNNING":
            case 1:
                message.state = 1;
                break;
            case "OPERATION_STATE_STOPPING":
            case 2:
                message.state = 2;
                break;
            case "OPERATION_STATE_STOPPED":
            case 3:
                message.state = 3;
                break;
        }
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyOperationState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyOperationState
     * @static
     * @param {ResNotifyOperationState} message ResNotifyOperationState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyOperationState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.state = options.enums === String ? "OPERATION_STATE_IDLE" : 0;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state =
                options.enums === String
                    ? $root.OperationState[message.state] === undefined
                        ? message.state
                        : $root.OperationState[message.state]
                    : message.state;
        return object;
    };
    /**
     * Converts this ResNotifyOperationState to JSON.
     * @function toJSON
     * @memberof ResNotifyOperationState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyOperationState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyOperationState
     * @function getTypeUrl
     * @memberof ResNotifyOperationState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyOperationState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyOperationState";
    };
    return ResNotifyOperationState;
})();
$root.ResNotifyStateAstroCalibration = (function () {
    /**
     * Properties of a ResNotifyStateAstroCalibration.
     * @exports IResNotifyStateAstroCalibration
     * @interface IResNotifyStateAstroCalibration
     * @property {AstroState|null} [state] ResNotifyStateAstroCalibration state
     * @property {number|null} [plateSolvingTimes] ResNotifyStateAstroCalibration plateSolvingTimes
     */
    /**
     * Constructs a new ResNotifyStateAstroCalibration.
     * @exports ResNotifyStateAstroCalibration
     * @classdesc Represents a ResNotifyStateAstroCalibration.
     * @implements IResNotifyStateAstroCalibration
     * @constructor
     * @param {IResNotifyStateAstroCalibration=} [properties] Properties to set
     */
    function ResNotifyStateAstroCalibration(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyStateAstroCalibration state.
     * @member {AstroState} state
     * @memberof ResNotifyStateAstroCalibration
     * @instance
     */
    ResNotifyStateAstroCalibration.prototype.state = 0;
    /**
     * ResNotifyStateAstroCalibration plateSolvingTimes.
     * @member {number} plateSolvingTimes
     * @memberof ResNotifyStateAstroCalibration
     * @instance
     */
    ResNotifyStateAstroCalibration.prototype.plateSolvingTimes = 0;
    /**
     * Creates a new ResNotifyStateAstroCalibration instance using the specified properties.
     * @function create
     * @memberof ResNotifyStateAstroCalibration
     * @static
     * @param {IResNotifyStateAstroCalibration=} [properties] Properties to set
     * @returns {ResNotifyStateAstroCalibration} ResNotifyStateAstroCalibration instance
     */
    ResNotifyStateAstroCalibration.create = function create(properties) {
        return new ResNotifyStateAstroCalibration(properties);
    };
    /**
     * Encodes the specified ResNotifyStateAstroCalibration message. Does not implicitly {@link ResNotifyStateAstroCalibration.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyStateAstroCalibration
     * @static
     * @param {IResNotifyStateAstroCalibration} message ResNotifyStateAstroCalibration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyStateAstroCalibration.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.state);
        if (message.plateSolvingTimes != null &&
            Object.hasOwnProperty.call(message, "plateSolvingTimes"))
            writer
                .uint32(/* id 2, wireType 0 =*/ 16)
                .int32(message.plateSolvingTimes);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyStateAstroCalibration message, length delimited. Does not implicitly {@link ResNotifyStateAstroCalibration.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyStateAstroCalibration
     * @static
     * @param {IResNotifyStateAstroCalibration} message ResNotifyStateAstroCalibration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyStateAstroCalibration.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyStateAstroCalibration message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyStateAstroCalibration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyStateAstroCalibration} ResNotifyStateAstroCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyStateAstroCalibration.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyStateAstroCalibration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.state = reader.int32();
                    break;
                }
                case 2: {
                    message.plateSolvingTimes = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyStateAstroCalibration message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyStateAstroCalibration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyStateAstroCalibration} ResNotifyStateAstroCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyStateAstroCalibration.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyStateAstroCalibration message.
     * @function verify
     * @memberof ResNotifyStateAstroCalibration
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyStateAstroCalibration.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state"))
            switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
            }
        if (message.plateSolvingTimes != null &&
            message.hasOwnProperty("plateSolvingTimes"))
            if (!$util.isInteger(message.plateSolvingTimes))
                return "plateSolvingTimes: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyStateAstroCalibration message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyStateAstroCalibration
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyStateAstroCalibration} ResNotifyStateAstroCalibration
     */
    ResNotifyStateAstroCalibration.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyStateAstroCalibration)
            return object;
        var message = new $root.ResNotifyStateAstroCalibration();
        switch (object.state) {
            default:
                if (typeof object.state === "number") {
                    message.state = object.state;
                    break;
                }
                break;
            case "ASTRO_STATE_IDLE":
            case 0:
                message.state = 0;
                break;
            case "ASTRO_STATE_RUNNING":
            case 1:
                message.state = 1;
                break;
            case "ASTRO_STATE_STOPPING":
            case 2:
                message.state = 2;
                break;
            case "ASTRO_STATE_STOPPED":
            case 3:
                message.state = 3;
                break;
            case "ASTRO_STATE_PLATE_SOLVING":
            case 4:
                message.state = 4;
                break;
        }
        if (object.plateSolvingTimes != null)
            message.plateSolvingTimes = object.plateSolvingTimes | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyStateAstroCalibration message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyStateAstroCalibration
     * @static
     * @param {ResNotifyStateAstroCalibration} message ResNotifyStateAstroCalibration
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyStateAstroCalibration.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.state = options.enums === String ? "ASTRO_STATE_IDLE" : 0;
            object.plateSolvingTimes = 0;
        }
        if (message.state != null && message.hasOwnProperty("state"))
            object.state =
                options.enums === String
                    ? $root.AstroState[message.state] === undefined
                        ? message.state
                        : $root.AstroState[message.state]
                    : message.state;
        if (message.plateSolvingTimes != null &&
            message.hasOwnProperty("plateSolvingTimes"))
            object.plateSolvingTimes = message.plateSolvingTimes;
        return object;
    };
    /**
     * Converts this ResNotifyStateAstroCalibration to JSON.
     * @function toJSON
     * @memberof ResNotifyStateAstroCalibration
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyStateAstroCalibration.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyStateAstroCalibration
     * @function getTypeUrl
     * @memberof ResNotifyStateAstroCalibration
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyStateAstroCalibration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyStateAstroCalibration";
    };
    return ResNotifyStateAstroCalibration;
})();
$root.ResNotifyStateAstroGoto = (function () {
    /**
     * Properties of a ResNotifyStateAstroGoto.
     * @exports IResNotifyStateAstroGoto
     * @interface IResNotifyStateAstroGoto
     * @property {AstroState|null} [state] ResNotifyStateAstroGoto state
     */
    /**
     * Constructs a new ResNotifyStateAstroGoto.
     * @exports ResNotifyStateAstroGoto
     * @classdesc Represents a ResNotifyStateAstroGoto.
     * @implements IResNotifyStateAstroGoto
     * @constructor
     * @param {IResNotifyStateAstroGoto=} [properties] Properties to set
     */
    function ResNotifyStateAstroGoto(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyStateAstroGoto state.
     * @member {AstroState} state
     * @memberof ResNotifyStateAstroGoto
     * @instance
     */
    ResNotifyStateAstroGoto.prototype.state = 0;
    /**
     * Creates a new ResNotifyStateAstroGoto instance using the specified properties.
     * @function create
     * @memberof ResNotifyStateAstroGoto
     * @static
     * @param {IResNotifyStateAstroGoto=} [properties] Properties to set
     * @returns {ResNotifyStateAstroGoto} ResNotifyStateAstroGoto instance
     */
    ResNotifyStateAstroGoto.create = function create(properties) {
        return new ResNotifyStateAstroGoto(properties);
    };
    /**
     * Encodes the specified ResNotifyStateAstroGoto message. Does not implicitly {@link ResNotifyStateAstroGoto.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyStateAstroGoto
     * @static
     * @param {IResNotifyStateAstroGoto} message ResNotifyStateAstroGoto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyStateAstroGoto.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.state);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyStateAstroGoto message, length delimited. Does not implicitly {@link ResNotifyStateAstroGoto.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyStateAstroGoto
     * @static
     * @param {IResNotifyStateAstroGoto} message ResNotifyStateAstroGoto message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyStateAstroGoto.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyStateAstroGoto message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyStateAstroGoto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyStateAstroGoto} ResNotifyStateAstroGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyStateAstroGoto.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyStateAstroGoto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.state = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyStateAstroGoto message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyStateAstroGoto
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyStateAstroGoto} ResNotifyStateAstroGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyStateAstroGoto.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyStateAstroGoto message.
     * @function verify
     * @memberof ResNotifyStateAstroGoto
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyStateAstroGoto.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state"))
            switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
            }
        return null;
    };
    /**
     * Creates a ResNotifyStateAstroGoto message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyStateAstroGoto
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyStateAstroGoto} ResNotifyStateAstroGoto
     */
    ResNotifyStateAstroGoto.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyStateAstroGoto)
            return object;
        var message = new $root.ResNotifyStateAstroGoto();
        switch (object.state) {
            default:
                if (typeof object.state === "number") {
                    message.state = object.state;
                    break;
                }
                break;
            case "ASTRO_STATE_IDLE":
            case 0:
                message.state = 0;
                break;
            case "ASTRO_STATE_RUNNING":
            case 1:
                message.state = 1;
                break;
            case "ASTRO_STATE_STOPPING":
            case 2:
                message.state = 2;
                break;
            case "ASTRO_STATE_STOPPED":
            case 3:
                message.state = 3;
                break;
            case "ASTRO_STATE_PLATE_SOLVING":
            case 4:
                message.state = 4;
                break;
        }
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyStateAstroGoto message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyStateAstroGoto
     * @static
     * @param {ResNotifyStateAstroGoto} message ResNotifyStateAstroGoto
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyStateAstroGoto.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.state = options.enums === String ? "ASTRO_STATE_IDLE" : 0;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state =
                options.enums === String
                    ? $root.AstroState[message.state] === undefined
                        ? message.state
                        : $root.AstroState[message.state]
                    : message.state;
        return object;
    };
    /**
     * Converts this ResNotifyStateAstroGoto to JSON.
     * @function toJSON
     * @memberof ResNotifyStateAstroGoto
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyStateAstroGoto.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyStateAstroGoto
     * @function getTypeUrl
     * @memberof ResNotifyStateAstroGoto
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyStateAstroGoto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyStateAstroGoto";
    };
    return ResNotifyStateAstroGoto;
})();
$root.ResNotifyStateAstroTracking = (function () {
    /**
     * Properties of a ResNotifyStateAstroTracking.
     * @exports IResNotifyStateAstroTracking
     * @interface IResNotifyStateAstroTracking
     * @property {OperationState|null} [state] ResNotifyStateAstroTracking state
     * @property {string|null} [targetName] ResNotifyStateAstroTracking targetName
     */
    /**
     * Constructs a new ResNotifyStateAstroTracking.
     * @exports ResNotifyStateAstroTracking
     * @classdesc Represents a ResNotifyStateAstroTracking.
     * @implements IResNotifyStateAstroTracking
     * @constructor
     * @param {IResNotifyStateAstroTracking=} [properties] Properties to set
     */
    function ResNotifyStateAstroTracking(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyStateAstroTracking state.
     * @member {OperationState} state
     * @memberof ResNotifyStateAstroTracking
     * @instance
     */
    ResNotifyStateAstroTracking.prototype.state = 0;
    /**
     * ResNotifyStateAstroTracking targetName.
     * @member {string} targetName
     * @memberof ResNotifyStateAstroTracking
     * @instance
     */
    ResNotifyStateAstroTracking.prototype.targetName = "";
    /**
     * Creates a new ResNotifyStateAstroTracking instance using the specified properties.
     * @function create
     * @memberof ResNotifyStateAstroTracking
     * @static
     * @param {IResNotifyStateAstroTracking=} [properties] Properties to set
     * @returns {ResNotifyStateAstroTracking} ResNotifyStateAstroTracking instance
     */
    ResNotifyStateAstroTracking.create = function create(properties) {
        return new ResNotifyStateAstroTracking(properties);
    };
    /**
     * Encodes the specified ResNotifyStateAstroTracking message. Does not implicitly {@link ResNotifyStateAstroTracking.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyStateAstroTracking
     * @static
     * @param {IResNotifyStateAstroTracking} message ResNotifyStateAstroTracking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyStateAstroTracking.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.state);
        if (message.targetName != null &&
            Object.hasOwnProperty.call(message, "targetName"))
            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.targetName);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyStateAstroTracking message, length delimited. Does not implicitly {@link ResNotifyStateAstroTracking.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyStateAstroTracking
     * @static
     * @param {IResNotifyStateAstroTracking} message ResNotifyStateAstroTracking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyStateAstroTracking.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyStateAstroTracking message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyStateAstroTracking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyStateAstroTracking} ResNotifyStateAstroTracking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyStateAstroTracking.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyStateAstroTracking();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.state = reader.int32();
                    break;
                }
                case 2: {
                    message.targetName = reader.string();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyStateAstroTracking message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyStateAstroTracking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyStateAstroTracking} ResNotifyStateAstroTracking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyStateAstroTracking.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyStateAstroTracking message.
     * @function verify
     * @memberof ResNotifyStateAstroTracking
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyStateAstroTracking.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state"))
            switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
            }
        if (message.targetName != null && message.hasOwnProperty("targetName"))
            if (!$util.isString(message.targetName))
                return "targetName: string expected";
        return null;
    };
    /**
     * Creates a ResNotifyStateAstroTracking message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyStateAstroTracking
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyStateAstroTracking} ResNotifyStateAstroTracking
     */
    ResNotifyStateAstroTracking.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyStateAstroTracking)
            return object;
        var message = new $root.ResNotifyStateAstroTracking();
        switch (object.state) {
            default:
                if (typeof object.state === "number") {
                    message.state = object.state;
                    break;
                }
                break;
            case "OPERATION_STATE_IDLE":
            case 0:
                message.state = 0;
                break;
            case "OPERATION_STATE_RUNNING":
            case 1:
                message.state = 1;
                break;
            case "OPERATION_STATE_STOPPING":
            case 2:
                message.state = 2;
                break;
            case "OPERATION_STATE_STOPPED":
            case 3:
                message.state = 3;
                break;
        }
        if (object.targetName != null)
            message.targetName = String(object.targetName);
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyStateAstroTracking message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyStateAstroTracking
     * @static
     * @param {ResNotifyStateAstroTracking} message ResNotifyStateAstroTracking
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyStateAstroTracking.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.state = options.enums === String ? "OPERATION_STATE_IDLE" : 0;
            object.targetName = "";
        }
        if (message.state != null && message.hasOwnProperty("state"))
            object.state =
                options.enums === String
                    ? $root.OperationState[message.state] === undefined
                        ? message.state
                        : $root.OperationState[message.state]
                    : message.state;
        if (message.targetName != null && message.hasOwnProperty("targetName"))
            object.targetName = message.targetName;
        return object;
    };
    /**
     * Converts this ResNotifyStateAstroTracking to JSON.
     * @function toJSON
     * @memberof ResNotifyStateAstroTracking
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyStateAstroTracking.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyStateAstroTracking
     * @function getTypeUrl
     * @memberof ResNotifyStateAstroTracking
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyStateAstroTracking.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyStateAstroTracking";
    };
    return ResNotifyStateAstroTracking;
})();
$root.ResNotifyProgressCaptureRawDark = (function () {
    /**
     * Properties of a ResNotifyProgressCaptureRawDark.
     * @exports IResNotifyProgressCaptureRawDark
     * @interface IResNotifyProgressCaptureRawDark
     * @property {number|null} [progress] ResNotifyProgressCaptureRawDark progress
     * @property {number|null} [remainingTime] ResNotifyProgressCaptureRawDark remainingTime
     */
    /**
     * Constructs a new ResNotifyProgressCaptureRawDark.
     * @exports ResNotifyProgressCaptureRawDark
     * @classdesc Represents a ResNotifyProgressCaptureRawDark.
     * @implements IResNotifyProgressCaptureRawDark
     * @constructor
     * @param {IResNotifyProgressCaptureRawDark=} [properties] Properties to set
     */
    function ResNotifyProgressCaptureRawDark(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyProgressCaptureRawDark progress.
     * @member {number} progress
     * @memberof ResNotifyProgressCaptureRawDark
     * @instance
     */
    ResNotifyProgressCaptureRawDark.prototype.progress = 0;
    /**
     * ResNotifyProgressCaptureRawDark remainingTime.
     * @member {number} remainingTime
     * @memberof ResNotifyProgressCaptureRawDark
     * @instance
     */
    ResNotifyProgressCaptureRawDark.prototype.remainingTime = 0;
    /**
     * Creates a new ResNotifyProgressCaptureRawDark instance using the specified properties.
     * @function create
     * @memberof ResNotifyProgressCaptureRawDark
     * @static
     * @param {IResNotifyProgressCaptureRawDark=} [properties] Properties to set
     * @returns {ResNotifyProgressCaptureRawDark} ResNotifyProgressCaptureRawDark instance
     */
    ResNotifyProgressCaptureRawDark.create = function create(properties) {
        return new ResNotifyProgressCaptureRawDark(properties);
    };
    /**
     * Encodes the specified ResNotifyProgressCaptureRawDark message. Does not implicitly {@link ResNotifyProgressCaptureRawDark.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyProgressCaptureRawDark
     * @static
     * @param {IResNotifyProgressCaptureRawDark} message ResNotifyProgressCaptureRawDark message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyProgressCaptureRawDark.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.progress != null &&
            Object.hasOwnProperty.call(message, "progress"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.progress);
        if (message.remainingTime != null &&
            Object.hasOwnProperty.call(message, "remainingTime"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.remainingTime);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyProgressCaptureRawDark message, length delimited. Does not implicitly {@link ResNotifyProgressCaptureRawDark.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyProgressCaptureRawDark
     * @static
     * @param {IResNotifyProgressCaptureRawDark} message ResNotifyProgressCaptureRawDark message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyProgressCaptureRawDark.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyProgressCaptureRawDark message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyProgressCaptureRawDark
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyProgressCaptureRawDark} ResNotifyProgressCaptureRawDark
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyProgressCaptureRawDark.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyProgressCaptureRawDark();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.progress = reader.int32();
                    break;
                }
                case 2: {
                    message.remainingTime = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyProgressCaptureRawDark message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyProgressCaptureRawDark
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyProgressCaptureRawDark} ResNotifyProgressCaptureRawDark
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyProgressCaptureRawDark.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyProgressCaptureRawDark message.
     * @function verify
     * @memberof ResNotifyProgressCaptureRawDark
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyProgressCaptureRawDark.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.progress != null && message.hasOwnProperty("progress"))
            if (!$util.isInteger(message.progress))
                return "progress: integer expected";
        if (message.remainingTime != null &&
            message.hasOwnProperty("remainingTime"))
            if (!$util.isInteger(message.remainingTime))
                return "remainingTime: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyProgressCaptureRawDark message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyProgressCaptureRawDark
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyProgressCaptureRawDark} ResNotifyProgressCaptureRawDark
     */
    ResNotifyProgressCaptureRawDark.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyProgressCaptureRawDark)
            return object;
        var message = new $root.ResNotifyProgressCaptureRawDark();
        if (object.progress != null)
            message.progress = object.progress | 0;
        if (object.remainingTime != null)
            message.remainingTime = object.remainingTime | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyProgressCaptureRawDark message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyProgressCaptureRawDark
     * @static
     * @param {ResNotifyProgressCaptureRawDark} message ResNotifyProgressCaptureRawDark
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyProgressCaptureRawDark.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.progress = 0;
            object.remainingTime = 0;
        }
        if (message.progress != null && message.hasOwnProperty("progress"))
            object.progress = message.progress;
        if (message.remainingTime != null &&
            message.hasOwnProperty("remainingTime"))
            object.remainingTime = message.remainingTime;
        return object;
    };
    /**
     * Converts this ResNotifyProgressCaptureRawDark to JSON.
     * @function toJSON
     * @memberof ResNotifyProgressCaptureRawDark
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyProgressCaptureRawDark.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyProgressCaptureRawDark
     * @function getTypeUrl
     * @memberof ResNotifyProgressCaptureRawDark
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyProgressCaptureRawDark.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyProgressCaptureRawDark";
    };
    return ResNotifyProgressCaptureRawDark;
})();
$root.ResNotifyProgressCaptureRawLiveStacking = (function () {
    /**
     * Properties of a ResNotifyProgressCaptureRawLiveStacking.
     * @exports IResNotifyProgressCaptureRawLiveStacking
     * @interface IResNotifyProgressCaptureRawLiveStacking
     * @property {number|null} [totalCount] ResNotifyProgressCaptureRawLiveStacking totalCount
     * @property {number|null} [updateCountType] ResNotifyProgressCaptureRawLiveStacking updateCountType
     * @property {number|null} [currentCount] ResNotifyProgressCaptureRawLiveStacking currentCount
     * @property {number|null} [stackedCount] ResNotifyProgressCaptureRawLiveStacking stackedCount
     * @property {number|null} [expIndex] ResNotifyProgressCaptureRawLiveStacking expIndex
     * @property {number|null} [gainIndex] ResNotifyProgressCaptureRawLiveStacking gainIndex
     * @property {string|null} [targetName] ResNotifyProgressCaptureRawLiveStacking targetName
     */
    /**
     * Constructs a new ResNotifyProgressCaptureRawLiveStacking.
     * @exports ResNotifyProgressCaptureRawLiveStacking
     * @classdesc Represents a ResNotifyProgressCaptureRawLiveStacking.
     * @implements IResNotifyProgressCaptureRawLiveStacking
     * @constructor
     * @param {IResNotifyProgressCaptureRawLiveStacking=} [properties] Properties to set
     */
    function ResNotifyProgressCaptureRawLiveStacking(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyProgressCaptureRawLiveStacking totalCount.
     * @member {number} totalCount
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @instance
     */
    ResNotifyProgressCaptureRawLiveStacking.prototype.totalCount = 0;
    /**
     * ResNotifyProgressCaptureRawLiveStacking updateCountType.
     * @member {number} updateCountType
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @instance
     */
    ResNotifyProgressCaptureRawLiveStacking.prototype.updateCountType = 0;
    /**
     * ResNotifyProgressCaptureRawLiveStacking currentCount.
     * @member {number} currentCount
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @instance
     */
    ResNotifyProgressCaptureRawLiveStacking.prototype.currentCount = 0;
    /**
     * ResNotifyProgressCaptureRawLiveStacking stackedCount.
     * @member {number} stackedCount
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @instance
     */
    ResNotifyProgressCaptureRawLiveStacking.prototype.stackedCount = 0;
    /**
     * ResNotifyProgressCaptureRawLiveStacking expIndex.
     * @member {number} expIndex
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @instance
     */
    ResNotifyProgressCaptureRawLiveStacking.prototype.expIndex = 0;
    /**
     * ResNotifyProgressCaptureRawLiveStacking gainIndex.
     * @member {number} gainIndex
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @instance
     */
    ResNotifyProgressCaptureRawLiveStacking.prototype.gainIndex = 0;
    /**
     * ResNotifyProgressCaptureRawLiveStacking targetName.
     * @member {string} targetName
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @instance
     */
    ResNotifyProgressCaptureRawLiveStacking.prototype.targetName = "";
    /**
     * Creates a new ResNotifyProgressCaptureRawLiveStacking instance using the specified properties.
     * @function create
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @static
     * @param {IResNotifyProgressCaptureRawLiveStacking=} [properties] Properties to set
     * @returns {ResNotifyProgressCaptureRawLiveStacking} ResNotifyProgressCaptureRawLiveStacking instance
     */
    ResNotifyProgressCaptureRawLiveStacking.create = function create(properties) {
        return new ResNotifyProgressCaptureRawLiveStacking(properties);
    };
    /**
     * Encodes the specified ResNotifyProgressCaptureRawLiveStacking message. Does not implicitly {@link ResNotifyProgressCaptureRawLiveStacking.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @static
     * @param {IResNotifyProgressCaptureRawLiveStacking} message ResNotifyProgressCaptureRawLiveStacking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyProgressCaptureRawLiveStacking.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.totalCount != null &&
            Object.hasOwnProperty.call(message, "totalCount"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.totalCount);
        if (message.updateCountType != null &&
            Object.hasOwnProperty.call(message, "updateCountType"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.updateCountType);
        if (message.currentCount != null &&
            Object.hasOwnProperty.call(message, "currentCount"))
            writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.currentCount);
        if (message.stackedCount != null &&
            Object.hasOwnProperty.call(message, "stackedCount"))
            writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.stackedCount);
        if (message.expIndex != null &&
            Object.hasOwnProperty.call(message, "expIndex"))
            writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.expIndex);
        if (message.gainIndex != null &&
            Object.hasOwnProperty.call(message, "gainIndex"))
            writer.uint32(/* id 6, wireType 0 =*/ 48).int32(message.gainIndex);
        if (message.targetName != null &&
            Object.hasOwnProperty.call(message, "targetName"))
            writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.targetName);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyProgressCaptureRawLiveStacking message, length delimited. Does not implicitly {@link ResNotifyProgressCaptureRawLiveStacking.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @static
     * @param {IResNotifyProgressCaptureRawLiveStacking} message ResNotifyProgressCaptureRawLiveStacking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyProgressCaptureRawLiveStacking.encodeDelimited =
        function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    /**
     * Decodes a ResNotifyProgressCaptureRawLiveStacking message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyProgressCaptureRawLiveStacking} ResNotifyProgressCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyProgressCaptureRawLiveStacking.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyProgressCaptureRawLiveStacking();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.totalCount = reader.int32();
                    break;
                }
                case 2: {
                    message.updateCountType = reader.int32();
                    break;
                }
                case 3: {
                    message.currentCount = reader.int32();
                    break;
                }
                case 4: {
                    message.stackedCount = reader.int32();
                    break;
                }
                case 5: {
                    message.expIndex = reader.int32();
                    break;
                }
                case 6: {
                    message.gainIndex = reader.int32();
                    break;
                }
                case 7: {
                    message.targetName = reader.string();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyProgressCaptureRawLiveStacking message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyProgressCaptureRawLiveStacking} ResNotifyProgressCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyProgressCaptureRawLiveStacking.decodeDelimited =
        function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    /**
     * Verifies a ResNotifyProgressCaptureRawLiveStacking message.
     * @function verify
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyProgressCaptureRawLiveStacking.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.totalCount != null && message.hasOwnProperty("totalCount"))
            if (!$util.isInteger(message.totalCount))
                return "totalCount: integer expected";
        if (message.updateCountType != null &&
            message.hasOwnProperty("updateCountType"))
            if (!$util.isInteger(message.updateCountType))
                return "updateCountType: integer expected";
        if (message.currentCount != null && message.hasOwnProperty("currentCount"))
            if (!$util.isInteger(message.currentCount))
                return "currentCount: integer expected";
        if (message.stackedCount != null && message.hasOwnProperty("stackedCount"))
            if (!$util.isInteger(message.stackedCount))
                return "stackedCount: integer expected";
        if (message.expIndex != null && message.hasOwnProperty("expIndex"))
            if (!$util.isInteger(message.expIndex))
                return "expIndex: integer expected";
        if (message.gainIndex != null && message.hasOwnProperty("gainIndex"))
            if (!$util.isInteger(message.gainIndex))
                return "gainIndex: integer expected";
        if (message.targetName != null && message.hasOwnProperty("targetName"))
            if (!$util.isString(message.targetName))
                return "targetName: string expected";
        return null;
    };
    /**
     * Creates a ResNotifyProgressCaptureRawLiveStacking message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyProgressCaptureRawLiveStacking} ResNotifyProgressCaptureRawLiveStacking
     */
    ResNotifyProgressCaptureRawLiveStacking.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyProgressCaptureRawLiveStacking)
            return object;
        var message = new $root.ResNotifyProgressCaptureRawLiveStacking();
        if (object.totalCount != null)
            message.totalCount = object.totalCount | 0;
        if (object.updateCountType != null)
            message.updateCountType = object.updateCountType | 0;
        if (object.currentCount != null)
            message.currentCount = object.currentCount | 0;
        if (object.stackedCount != null)
            message.stackedCount = object.stackedCount | 0;
        if (object.expIndex != null)
            message.expIndex = object.expIndex | 0;
        if (object.gainIndex != null)
            message.gainIndex = object.gainIndex | 0;
        if (object.targetName != null)
            message.targetName = String(object.targetName);
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyProgressCaptureRawLiveStacking message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @static
     * @param {ResNotifyProgressCaptureRawLiveStacking} message ResNotifyProgressCaptureRawLiveStacking
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyProgressCaptureRawLiveStacking.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.totalCount = 0;
            object.updateCountType = 0;
            object.currentCount = 0;
            object.stackedCount = 0;
            object.expIndex = 0;
            object.gainIndex = 0;
            object.targetName = "";
        }
        if (message.totalCount != null && message.hasOwnProperty("totalCount"))
            object.totalCount = message.totalCount;
        if (message.updateCountType != null &&
            message.hasOwnProperty("updateCountType"))
            object.updateCountType = message.updateCountType;
        if (message.currentCount != null && message.hasOwnProperty("currentCount"))
            object.currentCount = message.currentCount;
        if (message.stackedCount != null && message.hasOwnProperty("stackedCount"))
            object.stackedCount = message.stackedCount;
        if (message.expIndex != null && message.hasOwnProperty("expIndex"))
            object.expIndex = message.expIndex;
        if (message.gainIndex != null && message.hasOwnProperty("gainIndex"))
            object.gainIndex = message.gainIndex;
        if (message.targetName != null && message.hasOwnProperty("targetName"))
            object.targetName = message.targetName;
        return object;
    };
    /**
     * Converts this ResNotifyProgressCaptureRawLiveStacking to JSON.
     * @function toJSON
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyProgressCaptureRawLiveStacking.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyProgressCaptureRawLiveStacking
     * @function getTypeUrl
     * @memberof ResNotifyProgressCaptureRawLiveStacking
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyProgressCaptureRawLiveStacking.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyProgressCaptureRawLiveStacking";
    };
    return ResNotifyProgressCaptureRawLiveStacking;
})();
$root.ResNotifyParam = (function () {
    /**
     * Properties of a ResNotifyParam.
     * @exports IResNotifyParam
     * @interface IResNotifyParam
     * @property {Array.<ICommonParam>|null} [param] ResNotifyParam param
     */
    /**
     * Constructs a new ResNotifyParam.
     * @exports ResNotifyParam
     * @classdesc Represents a ResNotifyParam.
     * @implements IResNotifyParam
     * @constructor
     * @param {IResNotifyParam=} [properties] Properties to set
     */
    function ResNotifyParam(properties) {
        this.param = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyParam param.
     * @member {Array.<ICommonParam>} param
     * @memberof ResNotifyParam
     * @instance
     */
    ResNotifyParam.prototype.param = $util.emptyArray;
    /**
     * Creates a new ResNotifyParam instance using the specified properties.
     * @function create
     * @memberof ResNotifyParam
     * @static
     * @param {IResNotifyParam=} [properties] Properties to set
     * @returns {ResNotifyParam} ResNotifyParam instance
     */
    ResNotifyParam.create = function create(properties) {
        return new ResNotifyParam(properties);
    };
    /**
     * Encodes the specified ResNotifyParam message. Does not implicitly {@link ResNotifyParam.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyParam
     * @static
     * @param {IResNotifyParam} message ResNotifyParam message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyParam.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.param != null && message.param.length)
            for (var i = 0; i < message.param.length; ++i)
                $root.CommonParam.encode(message.param[i], writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
        return writer;
    };
    /**
     * Encodes the specified ResNotifyParam message, length delimited. Does not implicitly {@link ResNotifyParam.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyParam
     * @static
     * @param {IResNotifyParam} message ResNotifyParam message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyParam.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyParam message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyParam
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyParam} ResNotifyParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyParam.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyParam();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (!(message.param && message.param.length))
                        message.param = [];
                    message.param.push($root.CommonParam.decode(reader, reader.uint32()));
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyParam message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyParam
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyParam} ResNotifyParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyParam.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyParam message.
     * @function verify
     * @memberof ResNotifyParam
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyParam.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.param != null && message.hasOwnProperty("param")) {
            if (!Array.isArray(message.param))
                return "param: array expected";
            for (var i = 0; i < message.param.length; ++i) {
                var error = $root.CommonParam.verify(message.param[i]);
                if (error)
                    return "param." + error;
            }
        }
        return null;
    };
    /**
     * Creates a ResNotifyParam message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyParam
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyParam} ResNotifyParam
     */
    ResNotifyParam.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyParam)
            return object;
        var message = new $root.ResNotifyParam();
        if (object.param) {
            if (!Array.isArray(object.param))
                throw TypeError(".ResNotifyParam.param: array expected");
            message.param = [];
            for (var i = 0; i < object.param.length; ++i) {
                if (typeof object.param[i] !== "object")
                    throw TypeError(".ResNotifyParam.param: object expected");
                message.param[i] = $root.CommonParam.fromObject(object.param[i]);
            }
        }
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyParam message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyParam
     * @static
     * @param {ResNotifyParam} message ResNotifyParam
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyParam.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.param = [];
        if (message.param && message.param.length) {
            object.param = [];
            for (var j = 0; j < message.param.length; ++j)
                object.param[j] = $root.CommonParam.toObject(message.param[j], options);
        }
        return object;
    };
    /**
     * Converts this ResNotifyParam to JSON.
     * @function toJSON
     * @memberof ResNotifyParam
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyParam.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyParam
     * @function getTypeUrl
     * @memberof ResNotifyParam
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyParam.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyParam";
    };
    return ResNotifyParam;
})();
$root.ResNotifyCamFunctionState = (function () {
    /**
     * Properties of a ResNotifyCamFunctionState.
     * @exports IResNotifyCamFunctionState
     * @interface IResNotifyCamFunctionState
     * @property {OperationState|null} [state] ResNotifyCamFunctionState state
     * @property {number|null} [functionId] ResNotifyCamFunctionState functionId
     */
    /**
     * Constructs a new ResNotifyCamFunctionState.
     * @exports ResNotifyCamFunctionState
     * @classdesc Represents a ResNotifyCamFunctionState.
     * @implements IResNotifyCamFunctionState
     * @constructor
     * @param {IResNotifyCamFunctionState=} [properties] Properties to set
     */
    function ResNotifyCamFunctionState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyCamFunctionState state.
     * @member {OperationState} state
     * @memberof ResNotifyCamFunctionState
     * @instance
     */
    ResNotifyCamFunctionState.prototype.state = 0;
    /**
     * ResNotifyCamFunctionState functionId.
     * @member {number} functionId
     * @memberof ResNotifyCamFunctionState
     * @instance
     */
    ResNotifyCamFunctionState.prototype.functionId = 0;
    /**
     * Creates a new ResNotifyCamFunctionState instance using the specified properties.
     * @function create
     * @memberof ResNotifyCamFunctionState
     * @static
     * @param {IResNotifyCamFunctionState=} [properties] Properties to set
     * @returns {ResNotifyCamFunctionState} ResNotifyCamFunctionState instance
     */
    ResNotifyCamFunctionState.create = function create(properties) {
        return new ResNotifyCamFunctionState(properties);
    };
    /**
     * Encodes the specified ResNotifyCamFunctionState message. Does not implicitly {@link ResNotifyCamFunctionState.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyCamFunctionState
     * @static
     * @param {IResNotifyCamFunctionState} message ResNotifyCamFunctionState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyCamFunctionState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.state);
        if (message.functionId != null &&
            Object.hasOwnProperty.call(message, "functionId"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.functionId);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyCamFunctionState message, length delimited. Does not implicitly {@link ResNotifyCamFunctionState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyCamFunctionState
     * @static
     * @param {IResNotifyCamFunctionState} message ResNotifyCamFunctionState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyCamFunctionState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyCamFunctionState message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyCamFunctionState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyCamFunctionState} ResNotifyCamFunctionState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyCamFunctionState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyCamFunctionState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.state = reader.int32();
                    break;
                }
                case 2: {
                    message.functionId = reader.uint32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyCamFunctionState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyCamFunctionState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyCamFunctionState} ResNotifyCamFunctionState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyCamFunctionState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyCamFunctionState message.
     * @function verify
     * @memberof ResNotifyCamFunctionState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyCamFunctionState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state"))
            switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
            }
        if (message.functionId != null && message.hasOwnProperty("functionId"))
            if (!$util.isInteger(message.functionId))
                return "functionId: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyCamFunctionState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyCamFunctionState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyCamFunctionState} ResNotifyCamFunctionState
     */
    ResNotifyCamFunctionState.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyCamFunctionState)
            return object;
        var message = new $root.ResNotifyCamFunctionState();
        switch (object.state) {
            default:
                if (typeof object.state === "number") {
                    message.state = object.state;
                    break;
                }
                break;
            case "OPERATION_STATE_IDLE":
            case 0:
                message.state = 0;
                break;
            case "OPERATION_STATE_RUNNING":
            case 1:
                message.state = 1;
                break;
            case "OPERATION_STATE_STOPPING":
            case 2:
                message.state = 2;
                break;
            case "OPERATION_STATE_STOPPED":
            case 3:
                message.state = 3;
                break;
        }
        if (object.functionId != null)
            message.functionId = object.functionId >>> 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyCamFunctionState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyCamFunctionState
     * @static
     * @param {ResNotifyCamFunctionState} message ResNotifyCamFunctionState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyCamFunctionState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.state = options.enums === String ? "OPERATION_STATE_IDLE" : 0;
            object.functionId = 0;
        }
        if (message.state != null && message.hasOwnProperty("state"))
            object.state =
                options.enums === String
                    ? $root.OperationState[message.state] === undefined
                        ? message.state
                        : $root.OperationState[message.state]
                    : message.state;
        if (message.functionId != null && message.hasOwnProperty("functionId"))
            object.functionId = message.functionId;
        return object;
    };
    /**
     * Converts this ResNotifyCamFunctionState to JSON.
     * @function toJSON
     * @memberof ResNotifyCamFunctionState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyCamFunctionState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyCamFunctionState
     * @function getTypeUrl
     * @memberof ResNotifyCamFunctionState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyCamFunctionState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyCamFunctionState";
    };
    return ResNotifyCamFunctionState;
})();
$root.ResNotifyBurstProgress = (function () {
    /**
     * Properties of a ResNotifyBurstProgress.
     * @exports IResNotifyBurstProgress
     * @interface IResNotifyBurstProgress
     * @property {number|null} [totalCount] ResNotifyBurstProgress totalCount
     * @property {number|null} [completedCount] ResNotifyBurstProgress completedCount
     */
    /**
     * Constructs a new ResNotifyBurstProgress.
     * @exports ResNotifyBurstProgress
     * @classdesc Represents a ResNotifyBurstProgress.
     * @implements IResNotifyBurstProgress
     * @constructor
     * @param {IResNotifyBurstProgress=} [properties] Properties to set
     */
    function ResNotifyBurstProgress(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyBurstProgress totalCount.
     * @member {number} totalCount
     * @memberof ResNotifyBurstProgress
     * @instance
     */
    ResNotifyBurstProgress.prototype.totalCount = 0;
    /**
     * ResNotifyBurstProgress completedCount.
     * @member {number} completedCount
     * @memberof ResNotifyBurstProgress
     * @instance
     */
    ResNotifyBurstProgress.prototype.completedCount = 0;
    /**
     * Creates a new ResNotifyBurstProgress instance using the specified properties.
     * @function create
     * @memberof ResNotifyBurstProgress
     * @static
     * @param {IResNotifyBurstProgress=} [properties] Properties to set
     * @returns {ResNotifyBurstProgress} ResNotifyBurstProgress instance
     */
    ResNotifyBurstProgress.create = function create(properties) {
        return new ResNotifyBurstProgress(properties);
    };
    /**
     * Encodes the specified ResNotifyBurstProgress message. Does not implicitly {@link ResNotifyBurstProgress.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyBurstProgress
     * @static
     * @param {IResNotifyBurstProgress} message ResNotifyBurstProgress message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyBurstProgress.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.totalCount != null &&
            Object.hasOwnProperty.call(message, "totalCount"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.totalCount);
        if (message.completedCount != null &&
            Object.hasOwnProperty.call(message, "completedCount"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.completedCount);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyBurstProgress message, length delimited. Does not implicitly {@link ResNotifyBurstProgress.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyBurstProgress
     * @static
     * @param {IResNotifyBurstProgress} message ResNotifyBurstProgress message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyBurstProgress.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyBurstProgress message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyBurstProgress
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyBurstProgress} ResNotifyBurstProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyBurstProgress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyBurstProgress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.totalCount = reader.uint32();
                    break;
                }
                case 2: {
                    message.completedCount = reader.uint32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyBurstProgress message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyBurstProgress
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyBurstProgress} ResNotifyBurstProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyBurstProgress.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyBurstProgress message.
     * @function verify
     * @memberof ResNotifyBurstProgress
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyBurstProgress.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.totalCount != null && message.hasOwnProperty("totalCount"))
            if (!$util.isInteger(message.totalCount))
                return "totalCount: integer expected";
        if (message.completedCount != null &&
            message.hasOwnProperty("completedCount"))
            if (!$util.isInteger(message.completedCount))
                return "completedCount: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyBurstProgress message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyBurstProgress
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyBurstProgress} ResNotifyBurstProgress
     */
    ResNotifyBurstProgress.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyBurstProgress)
            return object;
        var message = new $root.ResNotifyBurstProgress();
        if (object.totalCount != null)
            message.totalCount = object.totalCount >>> 0;
        if (object.completedCount != null)
            message.completedCount = object.completedCount >>> 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyBurstProgress message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyBurstProgress
     * @static
     * @param {ResNotifyBurstProgress} message ResNotifyBurstProgress
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyBurstProgress.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.totalCount = 0;
            object.completedCount = 0;
        }
        if (message.totalCount != null && message.hasOwnProperty("totalCount"))
            object.totalCount = message.totalCount;
        if (message.completedCount != null &&
            message.hasOwnProperty("completedCount"))
            object.completedCount = message.completedCount;
        return object;
    };
    /**
     * Converts this ResNotifyBurstProgress to JSON.
     * @function toJSON
     * @memberof ResNotifyBurstProgress
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyBurstProgress.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyBurstProgress
     * @function getTypeUrl
     * @memberof ResNotifyBurstProgress
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyBurstProgress.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyBurstProgress";
    };
    return ResNotifyBurstProgress;
})();
$root.ResNotifyPanoramaProgress = (function () {
    /**
     * Properties of a ResNotifyPanoramaProgress.
     * @exports IResNotifyPanoramaProgress
     * @interface IResNotifyPanoramaProgress
     * @property {number|null} [totalCount] ResNotifyPanoramaProgress totalCount
     * @property {number|null} [completedCount] ResNotifyPanoramaProgress completedCount
     */
    /**
     * Constructs a new ResNotifyPanoramaProgress.
     * @exports ResNotifyPanoramaProgress
     * @classdesc Represents a ResNotifyPanoramaProgress.
     * @implements IResNotifyPanoramaProgress
     * @constructor
     * @param {IResNotifyPanoramaProgress=} [properties] Properties to set
     */
    function ResNotifyPanoramaProgress(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyPanoramaProgress totalCount.
     * @member {number} totalCount
     * @memberof ResNotifyPanoramaProgress
     * @instance
     */
    ResNotifyPanoramaProgress.prototype.totalCount = 0;
    /**
     * ResNotifyPanoramaProgress completedCount.
     * @member {number} completedCount
     * @memberof ResNotifyPanoramaProgress
     * @instance
     */
    ResNotifyPanoramaProgress.prototype.completedCount = 0;
    /**
     * Creates a new ResNotifyPanoramaProgress instance using the specified properties.
     * @function create
     * @memberof ResNotifyPanoramaProgress
     * @static
     * @param {IResNotifyPanoramaProgress=} [properties] Properties to set
     * @returns {ResNotifyPanoramaProgress} ResNotifyPanoramaProgress instance
     */
    ResNotifyPanoramaProgress.create = function create(properties) {
        return new ResNotifyPanoramaProgress(properties);
    };
    /**
     * Encodes the specified ResNotifyPanoramaProgress message. Does not implicitly {@link ResNotifyPanoramaProgress.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyPanoramaProgress
     * @static
     * @param {IResNotifyPanoramaProgress} message ResNotifyPanoramaProgress message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyPanoramaProgress.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.totalCount != null &&
            Object.hasOwnProperty.call(message, "totalCount"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.totalCount);
        if (message.completedCount != null &&
            Object.hasOwnProperty.call(message, "completedCount"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.completedCount);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyPanoramaProgress message, length delimited. Does not implicitly {@link ResNotifyPanoramaProgress.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyPanoramaProgress
     * @static
     * @param {IResNotifyPanoramaProgress} message ResNotifyPanoramaProgress message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyPanoramaProgress.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyPanoramaProgress message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyPanoramaProgress
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyPanoramaProgress} ResNotifyPanoramaProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyPanoramaProgress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyPanoramaProgress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.totalCount = reader.int32();
                    break;
                }
                case 2: {
                    message.completedCount = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyPanoramaProgress message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyPanoramaProgress
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyPanoramaProgress} ResNotifyPanoramaProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyPanoramaProgress.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyPanoramaProgress message.
     * @function verify
     * @memberof ResNotifyPanoramaProgress
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyPanoramaProgress.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.totalCount != null && message.hasOwnProperty("totalCount"))
            if (!$util.isInteger(message.totalCount))
                return "totalCount: integer expected";
        if (message.completedCount != null &&
            message.hasOwnProperty("completedCount"))
            if (!$util.isInteger(message.completedCount))
                return "completedCount: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyPanoramaProgress message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyPanoramaProgress
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyPanoramaProgress} ResNotifyPanoramaProgress
     */
    ResNotifyPanoramaProgress.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyPanoramaProgress)
            return object;
        var message = new $root.ResNotifyPanoramaProgress();
        if (object.totalCount != null)
            message.totalCount = object.totalCount | 0;
        if (object.completedCount != null)
            message.completedCount = object.completedCount | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyPanoramaProgress message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyPanoramaProgress
     * @static
     * @param {ResNotifyPanoramaProgress} message ResNotifyPanoramaProgress
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyPanoramaProgress.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.totalCount = 0;
            object.completedCount = 0;
        }
        if (message.totalCount != null && message.hasOwnProperty("totalCount"))
            object.totalCount = message.totalCount;
        if (message.completedCount != null &&
            message.hasOwnProperty("completedCount"))
            object.completedCount = message.completedCount;
        return object;
    };
    /**
     * Converts this ResNotifyPanoramaProgress to JSON.
     * @function toJSON
     * @memberof ResNotifyPanoramaProgress
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyPanoramaProgress.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyPanoramaProgress
     * @function getTypeUrl
     * @memberof ResNotifyPanoramaProgress
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyPanoramaProgress.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyPanoramaProgress";
    };
    return ResNotifyPanoramaProgress;
})();
$root.ResNotifyRgbState = (function () {
    /**
     * Properties of a ResNotifyRgbState.
     * @exports IResNotifyRgbState
     * @interface IResNotifyRgbState
     * @property {number|null} [state] ResNotifyRgbState state
     */
    /**
     * Constructs a new ResNotifyRgbState.
     * @exports ResNotifyRgbState
     * @classdesc Represents a ResNotifyRgbState.
     * @implements IResNotifyRgbState
     * @constructor
     * @param {IResNotifyRgbState=} [properties] Properties to set
     */
    function ResNotifyRgbState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyRgbState state.
     * @member {number} state
     * @memberof ResNotifyRgbState
     * @instance
     */
    ResNotifyRgbState.prototype.state = 0;
    /**
     * Creates a new ResNotifyRgbState instance using the specified properties.
     * @function create
     * @memberof ResNotifyRgbState
     * @static
     * @param {IResNotifyRgbState=} [properties] Properties to set
     * @returns {ResNotifyRgbState} ResNotifyRgbState instance
     */
    ResNotifyRgbState.create = function create(properties) {
        return new ResNotifyRgbState(properties);
    };
    /**
     * Encodes the specified ResNotifyRgbState message. Does not implicitly {@link ResNotifyRgbState.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyRgbState
     * @static
     * @param {IResNotifyRgbState} message ResNotifyRgbState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyRgbState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.state);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyRgbState message, length delimited. Does not implicitly {@link ResNotifyRgbState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyRgbState
     * @static
     * @param {IResNotifyRgbState} message ResNotifyRgbState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyRgbState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyRgbState message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyRgbState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyRgbState} ResNotifyRgbState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyRgbState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyRgbState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.state = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyRgbState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyRgbState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyRgbState} ResNotifyRgbState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyRgbState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyRgbState message.
     * @function verify
     * @memberof ResNotifyRgbState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyRgbState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state))
                return "state: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyRgbState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyRgbState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyRgbState} ResNotifyRgbState
     */
    ResNotifyRgbState.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyRgbState)
            return object;
        var message = new $root.ResNotifyRgbState();
        if (object.state != null)
            message.state = object.state | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyRgbState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyRgbState
     * @static
     * @param {ResNotifyRgbState} message ResNotifyRgbState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyRgbState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.state = 0;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        return object;
    };
    /**
     * Converts this ResNotifyRgbState to JSON.
     * @function toJSON
     * @memberof ResNotifyRgbState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyRgbState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyRgbState
     * @function getTypeUrl
     * @memberof ResNotifyRgbState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyRgbState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyRgbState";
    };
    return ResNotifyRgbState;
})();
$root.ResNotifyPowerIndState = (function () {
    /**
     * Properties of a ResNotifyPowerIndState.
     * @exports IResNotifyPowerIndState
     * @interface IResNotifyPowerIndState
     * @property {number|null} [state] ResNotifyPowerIndState state
     */
    /**
     * Constructs a new ResNotifyPowerIndState.
     * @exports ResNotifyPowerIndState
     * @classdesc Represents a ResNotifyPowerIndState.
     * @implements IResNotifyPowerIndState
     * @constructor
     * @param {IResNotifyPowerIndState=} [properties] Properties to set
     */
    function ResNotifyPowerIndState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyPowerIndState state.
     * @member {number} state
     * @memberof ResNotifyPowerIndState
     * @instance
     */
    ResNotifyPowerIndState.prototype.state = 0;
    /**
     * Creates a new ResNotifyPowerIndState instance using the specified properties.
     * @function create
     * @memberof ResNotifyPowerIndState
     * @static
     * @param {IResNotifyPowerIndState=} [properties] Properties to set
     * @returns {ResNotifyPowerIndState} ResNotifyPowerIndState instance
     */
    ResNotifyPowerIndState.create = function create(properties) {
        return new ResNotifyPowerIndState(properties);
    };
    /**
     * Encodes the specified ResNotifyPowerIndState message. Does not implicitly {@link ResNotifyPowerIndState.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyPowerIndState
     * @static
     * @param {IResNotifyPowerIndState} message ResNotifyPowerIndState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyPowerIndState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.state);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyPowerIndState message, length delimited. Does not implicitly {@link ResNotifyPowerIndState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyPowerIndState
     * @static
     * @param {IResNotifyPowerIndState} message ResNotifyPowerIndState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyPowerIndState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyPowerIndState message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyPowerIndState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyPowerIndState} ResNotifyPowerIndState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyPowerIndState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyPowerIndState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.state = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyPowerIndState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyPowerIndState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyPowerIndState} ResNotifyPowerIndState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyPowerIndState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyPowerIndState message.
     * @function verify
     * @memberof ResNotifyPowerIndState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyPowerIndState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state))
                return "state: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyPowerIndState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyPowerIndState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyPowerIndState} ResNotifyPowerIndState
     */
    ResNotifyPowerIndState.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyPowerIndState)
            return object;
        var message = new $root.ResNotifyPowerIndState();
        if (object.state != null)
            message.state = object.state | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyPowerIndState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyPowerIndState
     * @static
     * @param {ResNotifyPowerIndState} message ResNotifyPowerIndState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyPowerIndState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.state = 0;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        return object;
    };
    /**
     * Converts this ResNotifyPowerIndState to JSON.
     * @function toJSON
     * @memberof ResNotifyPowerIndState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyPowerIndState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyPowerIndState
     * @function getTypeUrl
     * @memberof ResNotifyPowerIndState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyPowerIndState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyPowerIndState";
    };
    return ResNotifyPowerIndState;
})();
$root.ResNotifyHostSlaveMode = (function () {
    /**
     * Properties of a ResNotifyHostSlaveMode.
     * @exports IResNotifyHostSlaveMode
     * @interface IResNotifyHostSlaveMode
     * @property {number|null} [mode] ResNotifyHostSlaveMode mode
     */
    /**
     * Constructs a new ResNotifyHostSlaveMode.
     * @exports ResNotifyHostSlaveMode
     * @classdesc Represents a ResNotifyHostSlaveMode.
     * @implements IResNotifyHostSlaveMode
     * @constructor
     * @param {IResNotifyHostSlaveMode=} [properties] Properties to set
     */
    function ResNotifyHostSlaveMode(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyHostSlaveMode mode.
     * @member {number} mode
     * @memberof ResNotifyHostSlaveMode
     * @instance
     */
    ResNotifyHostSlaveMode.prototype.mode = 0;
    /**
     * Creates a new ResNotifyHostSlaveMode instance using the specified properties.
     * @function create
     * @memberof ResNotifyHostSlaveMode
     * @static
     * @param {IResNotifyHostSlaveMode=} [properties] Properties to set
     * @returns {ResNotifyHostSlaveMode} ResNotifyHostSlaveMode instance
     */
    ResNotifyHostSlaveMode.create = function create(properties) {
        return new ResNotifyHostSlaveMode(properties);
    };
    /**
     * Encodes the specified ResNotifyHostSlaveMode message. Does not implicitly {@link ResNotifyHostSlaveMode.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyHostSlaveMode
     * @static
     * @param {IResNotifyHostSlaveMode} message ResNotifyHostSlaveMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyHostSlaveMode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.mode);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyHostSlaveMode message, length delimited. Does not implicitly {@link ResNotifyHostSlaveMode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyHostSlaveMode
     * @static
     * @param {IResNotifyHostSlaveMode} message ResNotifyHostSlaveMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyHostSlaveMode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyHostSlaveMode message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyHostSlaveMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyHostSlaveMode} ResNotifyHostSlaveMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyHostSlaveMode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyHostSlaveMode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.mode = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyHostSlaveMode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyHostSlaveMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyHostSlaveMode} ResNotifyHostSlaveMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyHostSlaveMode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyHostSlaveMode message.
     * @function verify
     * @memberof ResNotifyHostSlaveMode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyHostSlaveMode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            if (!$util.isInteger(message.mode))
                return "mode: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyHostSlaveMode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyHostSlaveMode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyHostSlaveMode} ResNotifyHostSlaveMode
     */
    ResNotifyHostSlaveMode.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyHostSlaveMode)
            return object;
        var message = new $root.ResNotifyHostSlaveMode();
        if (object.mode != null)
            message.mode = object.mode | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyHostSlaveMode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyHostSlaveMode
     * @static
     * @param {ResNotifyHostSlaveMode} message ResNotifyHostSlaveMode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyHostSlaveMode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mode = 0;
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = message.mode;
        return object;
    };
    /**
     * Converts this ResNotifyHostSlaveMode to JSON.
     * @function toJSON
     * @memberof ResNotifyHostSlaveMode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyHostSlaveMode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyHostSlaveMode
     * @function getTypeUrl
     * @memberof ResNotifyHostSlaveMode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyHostSlaveMode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyHostSlaveMode";
    };
    return ResNotifyHostSlaveMode;
})();
$root.ResNotifyMTPState = (function () {
    /**
     * Properties of a ResNotifyMTPState.
     * @exports IResNotifyMTPState
     * @interface IResNotifyMTPState
     * @property {number|null} [mode] ResNotifyMTPState mode
     */
    /**
     * Constructs a new ResNotifyMTPState.
     * @exports ResNotifyMTPState
     * @classdesc Represents a ResNotifyMTPState.
     * @implements IResNotifyMTPState
     * @constructor
     * @param {IResNotifyMTPState=} [properties] Properties to set
     */
    function ResNotifyMTPState(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyMTPState mode.
     * @member {number} mode
     * @memberof ResNotifyMTPState
     * @instance
     */
    ResNotifyMTPState.prototype.mode = 0;
    /**
     * Creates a new ResNotifyMTPState instance using the specified properties.
     * @function create
     * @memberof ResNotifyMTPState
     * @static
     * @param {IResNotifyMTPState=} [properties] Properties to set
     * @returns {ResNotifyMTPState} ResNotifyMTPState instance
     */
    ResNotifyMTPState.create = function create(properties) {
        return new ResNotifyMTPState(properties);
    };
    /**
     * Encodes the specified ResNotifyMTPState message. Does not implicitly {@link ResNotifyMTPState.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyMTPState
     * @static
     * @param {IResNotifyMTPState} message ResNotifyMTPState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyMTPState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.mode);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyMTPState message, length delimited. Does not implicitly {@link ResNotifyMTPState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyMTPState
     * @static
     * @param {IResNotifyMTPState} message ResNotifyMTPState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyMTPState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyMTPState message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyMTPState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyMTPState} ResNotifyMTPState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyMTPState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyMTPState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.mode = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyMTPState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyMTPState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyMTPState} ResNotifyMTPState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyMTPState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyMTPState message.
     * @function verify
     * @memberof ResNotifyMTPState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyMTPState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            if (!$util.isInteger(message.mode))
                return "mode: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyMTPState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyMTPState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyMTPState} ResNotifyMTPState
     */
    ResNotifyMTPState.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyMTPState)
            return object;
        var message = new $root.ResNotifyMTPState();
        if (object.mode != null)
            message.mode = object.mode | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyMTPState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyMTPState
     * @static
     * @param {ResNotifyMTPState} message ResNotifyMTPState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyMTPState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mode = 0;
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = message.mode;
        return object;
    };
    /**
     * Converts this ResNotifyMTPState to JSON.
     * @function toJSON
     * @memberof ResNotifyMTPState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyMTPState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyMTPState
     * @function getTypeUrl
     * @memberof ResNotifyMTPState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyMTPState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyMTPState";
    };
    return ResNotifyMTPState;
})();
$root.ResNotifyTrackResult = (function () {
    /**
     * Properties of a ResNotifyTrackResult.
     * @exports IResNotifyTrackResult
     * @interface IResNotifyTrackResult
     * @property {number|null} [x] ResNotifyTrackResult x
     * @property {number|null} [y] ResNotifyTrackResult y
     * @property {number|null} [w] ResNotifyTrackResult w
     * @property {number|null} [h] ResNotifyTrackResult h
     */
    /**
     * Constructs a new ResNotifyTrackResult.
     * @exports ResNotifyTrackResult
     * @classdesc Represents a ResNotifyTrackResult.
     * @implements IResNotifyTrackResult
     * @constructor
     * @param {IResNotifyTrackResult=} [properties] Properties to set
     */
    function ResNotifyTrackResult(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyTrackResult x.
     * @member {number} x
     * @memberof ResNotifyTrackResult
     * @instance
     */
    ResNotifyTrackResult.prototype.x = 0;
    /**
     * ResNotifyTrackResult y.
     * @member {number} y
     * @memberof ResNotifyTrackResult
     * @instance
     */
    ResNotifyTrackResult.prototype.y = 0;
    /**
     * ResNotifyTrackResult w.
     * @member {number} w
     * @memberof ResNotifyTrackResult
     * @instance
     */
    ResNotifyTrackResult.prototype.w = 0;
    /**
     * ResNotifyTrackResult h.
     * @member {number} h
     * @memberof ResNotifyTrackResult
     * @instance
     */
    ResNotifyTrackResult.prototype.h = 0;
    /**
     * Creates a new ResNotifyTrackResult instance using the specified properties.
     * @function create
     * @memberof ResNotifyTrackResult
     * @static
     * @param {IResNotifyTrackResult=} [properties] Properties to set
     * @returns {ResNotifyTrackResult} ResNotifyTrackResult instance
     */
    ResNotifyTrackResult.create = function create(properties) {
        return new ResNotifyTrackResult(properties);
    };
    /**
     * Encodes the specified ResNotifyTrackResult message. Does not implicitly {@link ResNotifyTrackResult.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyTrackResult
     * @static
     * @param {IResNotifyTrackResult} message ResNotifyTrackResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyTrackResult.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.y);
        if (message.w != null && Object.hasOwnProperty.call(message, "w"))
            writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.w);
        if (message.h != null && Object.hasOwnProperty.call(message, "h"))
            writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.h);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyTrackResult message, length delimited. Does not implicitly {@link ResNotifyTrackResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyTrackResult
     * @static
     * @param {IResNotifyTrackResult} message ResNotifyTrackResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyTrackResult.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyTrackResult message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyTrackResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyTrackResult} ResNotifyTrackResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyTrackResult.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyTrackResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.x = reader.int32();
                    break;
                }
                case 2: {
                    message.y = reader.int32();
                    break;
                }
                case 3: {
                    message.w = reader.int32();
                    break;
                }
                case 4: {
                    message.h = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyTrackResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyTrackResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyTrackResult} ResNotifyTrackResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyTrackResult.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyTrackResult message.
     * @function verify
     * @memberof ResNotifyTrackResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyTrackResult.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (!$util.isInteger(message.x))
                return "x: integer expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (!$util.isInteger(message.y))
                return "y: integer expected";
        if (message.w != null && message.hasOwnProperty("w"))
            if (!$util.isInteger(message.w))
                return "w: integer expected";
        if (message.h != null && message.hasOwnProperty("h"))
            if (!$util.isInteger(message.h))
                return "h: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyTrackResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyTrackResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyTrackResult} ResNotifyTrackResult
     */
    ResNotifyTrackResult.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyTrackResult)
            return object;
        var message = new $root.ResNotifyTrackResult();
        if (object.x != null)
            message.x = object.x | 0;
        if (object.y != null)
            message.y = object.y | 0;
        if (object.w != null)
            message.w = object.w | 0;
        if (object.h != null)
            message.h = object.h | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyTrackResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyTrackResult
     * @static
     * @param {ResNotifyTrackResult} message ResNotifyTrackResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyTrackResult.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
            object.w = 0;
            object.h = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = message.y;
        if (message.w != null && message.hasOwnProperty("w"))
            object.w = message.w;
        if (message.h != null && message.hasOwnProperty("h"))
            object.h = message.h;
        return object;
    };
    /**
     * Converts this ResNotifyTrackResult to JSON.
     * @function toJSON
     * @memberof ResNotifyTrackResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyTrackResult.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyTrackResult
     * @function getTypeUrl
     * @memberof ResNotifyTrackResult
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyTrackResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyTrackResult";
    };
    return ResNotifyTrackResult;
})();
$root.ResNotifyCPUMode = (function () {
    /**
     * Properties of a ResNotifyCPUMode.
     * @exports IResNotifyCPUMode
     * @interface IResNotifyCPUMode
     * @property {number|null} [mode] ResNotifyCPUMode mode
     */
    /**
     * Constructs a new ResNotifyCPUMode.
     * @exports ResNotifyCPUMode
     * @classdesc Represents a ResNotifyCPUMode.
     * @implements IResNotifyCPUMode
     * @constructor
     * @param {IResNotifyCPUMode=} [properties] Properties to set
     */
    function ResNotifyCPUMode(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyCPUMode mode.
     * @member {number} mode
     * @memberof ResNotifyCPUMode
     * @instance
     */
    ResNotifyCPUMode.prototype.mode = 0;
    /**
     * Creates a new ResNotifyCPUMode instance using the specified properties.
     * @function create
     * @memberof ResNotifyCPUMode
     * @static
     * @param {IResNotifyCPUMode=} [properties] Properties to set
     * @returns {ResNotifyCPUMode} ResNotifyCPUMode instance
     */
    ResNotifyCPUMode.create = function create(properties) {
        return new ResNotifyCPUMode(properties);
    };
    /**
     * Encodes the specified ResNotifyCPUMode message. Does not implicitly {@link ResNotifyCPUMode.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyCPUMode
     * @static
     * @param {IResNotifyCPUMode} message ResNotifyCPUMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyCPUMode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.mode);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyCPUMode message, length delimited. Does not implicitly {@link ResNotifyCPUMode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyCPUMode
     * @static
     * @param {IResNotifyCPUMode} message ResNotifyCPUMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyCPUMode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyCPUMode message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyCPUMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyCPUMode} ResNotifyCPUMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyCPUMode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyCPUMode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.mode = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyCPUMode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyCPUMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyCPUMode} ResNotifyCPUMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyCPUMode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyCPUMode message.
     * @function verify
     * @memberof ResNotifyCPUMode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyCPUMode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            if (!$util.isInteger(message.mode))
                return "mode: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyCPUMode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyCPUMode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyCPUMode} ResNotifyCPUMode
     */
    ResNotifyCPUMode.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyCPUMode)
            return object;
        var message = new $root.ResNotifyCPUMode();
        if (object.mode != null)
            message.mode = object.mode | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyCPUMode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyCPUMode
     * @static
     * @param {ResNotifyCPUMode} message ResNotifyCPUMode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyCPUMode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mode = 0;
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = message.mode;
        return object;
    };
    /**
     * Converts this ResNotifyCPUMode to JSON.
     * @function toJSON
     * @memberof ResNotifyCPUMode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyCPUMode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyCPUMode
     * @function getTypeUrl
     * @memberof ResNotifyCPUMode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyCPUMode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyCPUMode";
    };
    return ResNotifyCPUMode;
})();
$root.ResNotifyStateAstroTrackingSpecial = (function () {
    /**
     * Properties of a ResNotifyStateAstroTrackingSpecial.
     * @exports IResNotifyStateAstroTrackingSpecial
     * @interface IResNotifyStateAstroTrackingSpecial
     * @property {OperationState|null} [state] ResNotifyStateAstroTrackingSpecial state
     * @property {string|null} [targetName] ResNotifyStateAstroTrackingSpecial targetName
     * @property {number|null} [index] ResNotifyStateAstroTrackingSpecial index
     */
    /**
     * Constructs a new ResNotifyStateAstroTrackingSpecial.
     * @exports ResNotifyStateAstroTrackingSpecial
     * @classdesc Represents a ResNotifyStateAstroTrackingSpecial.
     * @implements IResNotifyStateAstroTrackingSpecial
     * @constructor
     * @param {IResNotifyStateAstroTrackingSpecial=} [properties] Properties to set
     */
    function ResNotifyStateAstroTrackingSpecial(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ResNotifyStateAstroTrackingSpecial state.
     * @member {OperationState} state
     * @memberof ResNotifyStateAstroTrackingSpecial
     * @instance
     */
    ResNotifyStateAstroTrackingSpecial.prototype.state = 0;
    /**
     * ResNotifyStateAstroTrackingSpecial targetName.
     * @member {string} targetName
     * @memberof ResNotifyStateAstroTrackingSpecial
     * @instance
     */
    ResNotifyStateAstroTrackingSpecial.prototype.targetName = "";
    /**
     * ResNotifyStateAstroTrackingSpecial index.
     * @member {number} index
     * @memberof ResNotifyStateAstroTrackingSpecial
     * @instance
     */
    ResNotifyStateAstroTrackingSpecial.prototype.index = 0;
    /**
     * Creates a new ResNotifyStateAstroTrackingSpecial instance using the specified properties.
     * @function create
     * @memberof ResNotifyStateAstroTrackingSpecial
     * @static
     * @param {IResNotifyStateAstroTrackingSpecial=} [properties] Properties to set
     * @returns {ResNotifyStateAstroTrackingSpecial} ResNotifyStateAstroTrackingSpecial instance
     */
    ResNotifyStateAstroTrackingSpecial.create = function create(properties) {
        return new ResNotifyStateAstroTrackingSpecial(properties);
    };
    /**
     * Encodes the specified ResNotifyStateAstroTrackingSpecial message. Does not implicitly {@link ResNotifyStateAstroTrackingSpecial.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyStateAstroTrackingSpecial
     * @static
     * @param {IResNotifyStateAstroTrackingSpecial} message ResNotifyStateAstroTrackingSpecial message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyStateAstroTrackingSpecial.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.state);
        if (message.targetName != null &&
            Object.hasOwnProperty.call(message, "targetName"))
            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.targetName);
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.index);
        return writer;
    };
    /**
     * Encodes the specified ResNotifyStateAstroTrackingSpecial message, length delimited. Does not implicitly {@link ResNotifyStateAstroTrackingSpecial.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyStateAstroTrackingSpecial
     * @static
     * @param {IResNotifyStateAstroTrackingSpecial} message ResNotifyStateAstroTrackingSpecial message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyStateAstroTrackingSpecial.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyStateAstroTrackingSpecial message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyStateAstroTrackingSpecial
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyStateAstroTrackingSpecial} ResNotifyStateAstroTrackingSpecial
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyStateAstroTrackingSpecial.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyStateAstroTrackingSpecial();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.state = reader.int32();
                    break;
                }
                case 2: {
                    message.targetName = reader.string();
                    break;
                }
                case 3: {
                    message.index = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyStateAstroTrackingSpecial message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyStateAstroTrackingSpecial
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyStateAstroTrackingSpecial} ResNotifyStateAstroTrackingSpecial
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyStateAstroTrackingSpecial.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyStateAstroTrackingSpecial message.
     * @function verify
     * @memberof ResNotifyStateAstroTrackingSpecial
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyStateAstroTrackingSpecial.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state"))
            switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
            }
        if (message.targetName != null && message.hasOwnProperty("targetName"))
            if (!$util.isString(message.targetName))
                return "targetName: string expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        return null;
    };
    /**
     * Creates a ResNotifyStateAstroTrackingSpecial message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyStateAstroTrackingSpecial
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyStateAstroTrackingSpecial} ResNotifyStateAstroTrackingSpecial
     */
    ResNotifyStateAstroTrackingSpecial.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyStateAstroTrackingSpecial)
            return object;
        var message = new $root.ResNotifyStateAstroTrackingSpecial();
        switch (object.state) {
            default:
                if (typeof object.state === "number") {
                    message.state = object.state;
                    break;
                }
                break;
            case "OPERATION_STATE_IDLE":
            case 0:
                message.state = 0;
                break;
            case "OPERATION_STATE_RUNNING":
            case 1:
                message.state = 1;
                break;
            case "OPERATION_STATE_STOPPING":
            case 2:
                message.state = 2;
                break;
            case "OPERATION_STATE_STOPPED":
            case 3:
                message.state = 3;
                break;
        }
        if (object.targetName != null)
            message.targetName = String(object.targetName);
        if (object.index != null)
            message.index = object.index | 0;
        return message;
    };
    /**
     * Creates a plain object from a ResNotifyStateAstroTrackingSpecial message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyStateAstroTrackingSpecial
     * @static
     * @param {ResNotifyStateAstroTrackingSpecial} message ResNotifyStateAstroTrackingSpecial
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyStateAstroTrackingSpecial.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.state = options.enums === String ? "OPERATION_STATE_IDLE" : 0;
            object.targetName = "";
            object.index = 0;
        }
        if (message.state != null && message.hasOwnProperty("state"))
            object.state =
                options.enums === String
                    ? $root.OperationState[message.state] === undefined
                        ? message.state
                        : $root.OperationState[message.state]
                    : message.state;
        if (message.targetName != null && message.hasOwnProperty("targetName"))
            object.targetName = message.targetName;
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        return object;
    };
    /**
     * Converts this ResNotifyStateAstroTrackingSpecial to JSON.
     * @function toJSON
     * @memberof ResNotifyStateAstroTrackingSpecial
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyStateAstroTrackingSpecial.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyStateAstroTrackingSpecial
     * @function getTypeUrl
     * @memberof ResNotifyStateAstroTrackingSpecial
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyStateAstroTrackingSpecial.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyStateAstroTrackingSpecial";
    };
    return ResNotifyStateAstroTrackingSpecial;
})();
$root.ResNotifyPowerOff = (function () {
    /**
     * Properties of a ResNotifyPowerOff.
     * @exports IResNotifyPowerOff
     * @interface IResNotifyPowerOff
     */
    /**
     * Constructs a new ResNotifyPowerOff.
     * @exports ResNotifyPowerOff
     * @classdesc Represents a ResNotifyPowerOff.
     * @implements IResNotifyPowerOff
     * @constructor
     * @param {IResNotifyPowerOff=} [properties] Properties to set
     */
    function ResNotifyPowerOff(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ResNotifyPowerOff instance using the specified properties.
     * @function create
     * @memberof ResNotifyPowerOff
     * @static
     * @param {IResNotifyPowerOff=} [properties] Properties to set
     * @returns {ResNotifyPowerOff} ResNotifyPowerOff instance
     */
    ResNotifyPowerOff.create = function create(properties) {
        return new ResNotifyPowerOff(properties);
    };
    /**
     * Encodes the specified ResNotifyPowerOff message. Does not implicitly {@link ResNotifyPowerOff.verify|verify} messages.
     * @function encode
     * @memberof ResNotifyPowerOff
     * @static
     * @param {IResNotifyPowerOff} message ResNotifyPowerOff message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyPowerOff.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ResNotifyPowerOff message, length delimited. Does not implicitly {@link ResNotifyPowerOff.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResNotifyPowerOff
     * @static
     * @param {IResNotifyPowerOff} message ResNotifyPowerOff message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResNotifyPowerOff.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ResNotifyPowerOff message from the specified reader or buffer.
     * @function decode
     * @memberof ResNotifyPowerOff
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResNotifyPowerOff} ResNotifyPowerOff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyPowerOff.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResNotifyPowerOff();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ResNotifyPowerOff message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResNotifyPowerOff
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResNotifyPowerOff} ResNotifyPowerOff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResNotifyPowerOff.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ResNotifyPowerOff message.
     * @function verify
     * @memberof ResNotifyPowerOff
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResNotifyPowerOff.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ResNotifyPowerOff message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResNotifyPowerOff
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResNotifyPowerOff} ResNotifyPowerOff
     */
    ResNotifyPowerOff.fromObject = function fromObject(object) {
        if (object instanceof $root.ResNotifyPowerOff)
            return object;
        return new $root.ResNotifyPowerOff();
    };
    /**
     * Creates a plain object from a ResNotifyPowerOff message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResNotifyPowerOff
     * @static
     * @param {ResNotifyPowerOff} message ResNotifyPowerOff
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResNotifyPowerOff.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ResNotifyPowerOff to JSON.
     * @function toJSON
     * @memberof ResNotifyPowerOff
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResNotifyPowerOff.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ResNotifyPowerOff
     * @function getTypeUrl
     * @memberof ResNotifyPowerOff
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResNotifyPowerOff.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResNotifyPowerOff";
    };
    return ResNotifyPowerOff;
})();
$root.ReqStartPanoramaByGrid = (function () {
    /**
     * Properties of a ReqStartPanoramaByGrid.
     * @exports IReqStartPanoramaByGrid
     * @interface IReqStartPanoramaByGrid
     */
    /**
     * Constructs a new ReqStartPanoramaByGrid.
     * @exports ReqStartPanoramaByGrid
     * @classdesc Represents a ReqStartPanoramaByGrid.
     * @implements IReqStartPanoramaByGrid
     * @constructor
     * @param {IReqStartPanoramaByGrid=} [properties] Properties to set
     */
    function ReqStartPanoramaByGrid(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStartPanoramaByGrid instance using the specified properties.
     * @function create
     * @memberof ReqStartPanoramaByGrid
     * @static
     * @param {IReqStartPanoramaByGrid=} [properties] Properties to set
     * @returns {ReqStartPanoramaByGrid} ReqStartPanoramaByGrid instance
     */
    ReqStartPanoramaByGrid.create = function create(properties) {
        return new ReqStartPanoramaByGrid(properties);
    };
    /**
     * Encodes the specified ReqStartPanoramaByGrid message. Does not implicitly {@link ReqStartPanoramaByGrid.verify|verify} messages.
     * @function encode
     * @memberof ReqStartPanoramaByGrid
     * @static
     * @param {IReqStartPanoramaByGrid} message ReqStartPanoramaByGrid message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStartPanoramaByGrid.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStartPanoramaByGrid message, length delimited. Does not implicitly {@link ReqStartPanoramaByGrid.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStartPanoramaByGrid
     * @static
     * @param {IReqStartPanoramaByGrid} message ReqStartPanoramaByGrid message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStartPanoramaByGrid.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStartPanoramaByGrid message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStartPanoramaByGrid
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStartPanoramaByGrid} ReqStartPanoramaByGrid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStartPanoramaByGrid.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStartPanoramaByGrid();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStartPanoramaByGrid message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStartPanoramaByGrid
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStartPanoramaByGrid} ReqStartPanoramaByGrid
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStartPanoramaByGrid.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStartPanoramaByGrid message.
     * @function verify
     * @memberof ReqStartPanoramaByGrid
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStartPanoramaByGrid.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStartPanoramaByGrid message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStartPanoramaByGrid
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStartPanoramaByGrid} ReqStartPanoramaByGrid
     */
    ReqStartPanoramaByGrid.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStartPanoramaByGrid)
            return object;
        return new $root.ReqStartPanoramaByGrid();
    };
    /**
     * Creates a plain object from a ReqStartPanoramaByGrid message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStartPanoramaByGrid
     * @static
     * @param {ReqStartPanoramaByGrid} message ReqStartPanoramaByGrid
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStartPanoramaByGrid.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStartPanoramaByGrid to JSON.
     * @function toJSON
     * @memberof ReqStartPanoramaByGrid
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStartPanoramaByGrid.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStartPanoramaByGrid
     * @function getTypeUrl
     * @memberof ReqStartPanoramaByGrid
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStartPanoramaByGrid.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStartPanoramaByGrid";
    };
    return ReqStartPanoramaByGrid;
})();
$root.ReqStartPanoramaByEulerRange = (function () {
    /**
     * Properties of a ReqStartPanoramaByEulerRange.
     * @exports IReqStartPanoramaByEulerRange
     * @interface IReqStartPanoramaByEulerRange
     * @property {number|null} [yawRange] ReqStartPanoramaByEulerRange yawRange
     * @property {number|null} [pitchRange] ReqStartPanoramaByEulerRange pitchRange
     */
    /**
     * Constructs a new ReqStartPanoramaByEulerRange.
     * @exports ReqStartPanoramaByEulerRange
     * @classdesc Represents a ReqStartPanoramaByEulerRange.
     * @implements IReqStartPanoramaByEulerRange
     * @constructor
     * @param {IReqStartPanoramaByEulerRange=} [properties] Properties to set
     */
    function ReqStartPanoramaByEulerRange(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqStartPanoramaByEulerRange yawRange.
     * @member {number} yawRange
     * @memberof ReqStartPanoramaByEulerRange
     * @instance
     */
    ReqStartPanoramaByEulerRange.prototype.yawRange = 0;
    /**
     * ReqStartPanoramaByEulerRange pitchRange.
     * @member {number} pitchRange
     * @memberof ReqStartPanoramaByEulerRange
     * @instance
     */
    ReqStartPanoramaByEulerRange.prototype.pitchRange = 0;
    /**
     * Creates a new ReqStartPanoramaByEulerRange instance using the specified properties.
     * @function create
     * @memberof ReqStartPanoramaByEulerRange
     * @static
     * @param {IReqStartPanoramaByEulerRange=} [properties] Properties to set
     * @returns {ReqStartPanoramaByEulerRange} ReqStartPanoramaByEulerRange instance
     */
    ReqStartPanoramaByEulerRange.create = function create(properties) {
        return new ReqStartPanoramaByEulerRange(properties);
    };
    /**
     * Encodes the specified ReqStartPanoramaByEulerRange message. Does not implicitly {@link ReqStartPanoramaByEulerRange.verify|verify} messages.
     * @function encode
     * @memberof ReqStartPanoramaByEulerRange
     * @static
     * @param {IReqStartPanoramaByEulerRange} message ReqStartPanoramaByEulerRange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStartPanoramaByEulerRange.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.yawRange != null &&
            Object.hasOwnProperty.call(message, "yawRange"))
            writer.uint32(/* id 1, wireType 5 =*/ 13).float(message.yawRange);
        if (message.pitchRange != null &&
            Object.hasOwnProperty.call(message, "pitchRange"))
            writer.uint32(/* id 2, wireType 5 =*/ 21).float(message.pitchRange);
        return writer;
    };
    /**
     * Encodes the specified ReqStartPanoramaByEulerRange message, length delimited. Does not implicitly {@link ReqStartPanoramaByEulerRange.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStartPanoramaByEulerRange
     * @static
     * @param {IReqStartPanoramaByEulerRange} message ReqStartPanoramaByEulerRange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStartPanoramaByEulerRange.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStartPanoramaByEulerRange message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStartPanoramaByEulerRange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStartPanoramaByEulerRange} ReqStartPanoramaByEulerRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStartPanoramaByEulerRange.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStartPanoramaByEulerRange();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.yawRange = reader.float();
                    break;
                }
                case 2: {
                    message.pitchRange = reader.float();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStartPanoramaByEulerRange message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStartPanoramaByEulerRange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStartPanoramaByEulerRange} ReqStartPanoramaByEulerRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStartPanoramaByEulerRange.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStartPanoramaByEulerRange message.
     * @function verify
     * @memberof ReqStartPanoramaByEulerRange
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStartPanoramaByEulerRange.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.yawRange != null && message.hasOwnProperty("yawRange"))
            if (typeof message.yawRange !== "number")
                return "yawRange: number expected";
        if (message.pitchRange != null && message.hasOwnProperty("pitchRange"))
            if (typeof message.pitchRange !== "number")
                return "pitchRange: number expected";
        return null;
    };
    /**
     * Creates a ReqStartPanoramaByEulerRange message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStartPanoramaByEulerRange
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStartPanoramaByEulerRange} ReqStartPanoramaByEulerRange
     */
    ReqStartPanoramaByEulerRange.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStartPanoramaByEulerRange)
            return object;
        var message = new $root.ReqStartPanoramaByEulerRange();
        if (object.yawRange != null)
            message.yawRange = Number(object.yawRange);
        if (object.pitchRange != null)
            message.pitchRange = Number(object.pitchRange);
        return message;
    };
    /**
     * Creates a plain object from a ReqStartPanoramaByEulerRange message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStartPanoramaByEulerRange
     * @static
     * @param {ReqStartPanoramaByEulerRange} message ReqStartPanoramaByEulerRange
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStartPanoramaByEulerRange.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.yawRange = 0;
            object.pitchRange = 0;
        }
        if (message.yawRange != null && message.hasOwnProperty("yawRange"))
            object.yawRange =
                options.json && !isFinite(message.yawRange)
                    ? String(message.yawRange)
                    : message.yawRange;
        if (message.pitchRange != null && message.hasOwnProperty("pitchRange"))
            object.pitchRange =
                options.json && !isFinite(message.pitchRange)
                    ? String(message.pitchRange)
                    : message.pitchRange;
        return object;
    };
    /**
     * Converts this ReqStartPanoramaByEulerRange to JSON.
     * @function toJSON
     * @memberof ReqStartPanoramaByEulerRange
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStartPanoramaByEulerRange.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStartPanoramaByEulerRange
     * @function getTypeUrl
     * @memberof ReqStartPanoramaByEulerRange
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStartPanoramaByEulerRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStartPanoramaByEulerRange";
    };
    return ReqStartPanoramaByEulerRange;
})();
$root.ReqStopPanorama = (function () {
    /**
     * Properties of a ReqStopPanorama.
     * @exports IReqStopPanorama
     * @interface IReqStopPanorama
     */
    /**
     * Constructs a new ReqStopPanorama.
     * @exports ReqStopPanorama
     * @classdesc Represents a ReqStopPanorama.
     * @implements IReqStopPanorama
     * @constructor
     * @param {IReqStopPanorama=} [properties] Properties to set
     */
    function ReqStopPanorama(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStopPanorama instance using the specified properties.
     * @function create
     * @memberof ReqStopPanorama
     * @static
     * @param {IReqStopPanorama=} [properties] Properties to set
     * @returns {ReqStopPanorama} ReqStopPanorama instance
     */
    ReqStopPanorama.create = function create(properties) {
        return new ReqStopPanorama(properties);
    };
    /**
     * Encodes the specified ReqStopPanorama message. Does not implicitly {@link ReqStopPanorama.verify|verify} messages.
     * @function encode
     * @memberof ReqStopPanorama
     * @static
     * @param {IReqStopPanorama} message ReqStopPanorama message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopPanorama.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStopPanorama message, length delimited. Does not implicitly {@link ReqStopPanorama.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStopPanorama
     * @static
     * @param {IReqStopPanorama} message ReqStopPanorama message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopPanorama.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStopPanorama message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStopPanorama
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStopPanorama} ReqStopPanorama
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopPanorama.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStopPanorama();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStopPanorama message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStopPanorama
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStopPanorama} ReqStopPanorama
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopPanorama.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStopPanorama message.
     * @function verify
     * @memberof ReqStopPanorama
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStopPanorama.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStopPanorama message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStopPanorama
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStopPanorama} ReqStopPanorama
     */
    ReqStopPanorama.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStopPanorama)
            return object;
        return new $root.ReqStopPanorama();
    };
    /**
     * Creates a plain object from a ReqStopPanorama message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStopPanorama
     * @static
     * @param {ReqStopPanorama} message ReqStopPanorama
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStopPanorama.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStopPanorama to JSON.
     * @function toJSON
     * @memberof ReqStopPanorama
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStopPanorama.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStopPanorama
     * @function getTypeUrl
     * @memberof ReqStopPanorama
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStopPanorama.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStopPanorama";
    };
    return ReqStopPanorama;
})();
/**
 * ModuleId enum.
 * @exports ModuleId
 * @enum {number}
 * @property {number} MODULE_NONE=0 MODULE_NONE value
 * @property {number} MODULE_CAMERA_TELE=1 MODULE_CAMERA_TELE value
 * @property {number} MODULE_CAMERA_WIDE=2 MODULE_CAMERA_WIDE value
 * @property {number} MODULE_ASTRO=3 MODULE_ASTRO value
 * @property {number} MODULE_SYSTEM=4 MODULE_SYSTEM value
 * @property {number} MODULE_RGB_POWER=5 MODULE_RGB_POWER value
 * @property {number} MODULE_MOTOR=6 MODULE_MOTOR value
 * @property {number} MODULE_TRACK=7 MODULE_TRACK value
 * @property {number} MODULE_FOCUS=8 MODULE_FOCUS value
 * @property {number} MODULE_NOTIFY=9 MODULE_NOTIFY value
 * @property {number} MODULE_PANORAMA=10 MODULE_PANORAMA value
 */
$root.ModuleId = (function () {
    var valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "MODULE_NONE")] = 0;
    values[(valuesById[1] = "MODULE_CAMERA_TELE")] = 1;
    values[(valuesById[2] = "MODULE_CAMERA_WIDE")] = 2;
    values[(valuesById[3] = "MODULE_ASTRO")] = 3;
    values[(valuesById[4] = "MODULE_SYSTEM")] = 4;
    values[(valuesById[5] = "MODULE_RGB_POWER")] = 5;
    values[(valuesById[6] = "MODULE_MOTOR")] = 6;
    values[(valuesById[7] = "MODULE_TRACK")] = 7;
    values[(valuesById[8] = "MODULE_FOCUS")] = 8;
    values[(valuesById[9] = "MODULE_NOTIFY")] = 9;
    values[(valuesById[10] = "MODULE_PANORAMA")] = 10;
    return values;
})();
/**
 * MessageTypeId enum.
 * @exports MessageTypeId
 * @enum {number}
 * @property {number} TYPE_REQUEST=0 TYPE_REQUEST value
 * @property {number} TYPE_REQUEST_RESPONSE=1 TYPE_REQUEST_RESPONSE value
 * @property {number} TYPE_NOTIFICATION=2 TYPE_NOTIFICATION value
 * @property {number} TYPE_NOTIFICATION_RESPONSE=3 TYPE_NOTIFICATION_RESPONSE value
 */
$root.MessageTypeId = (function () {
    var valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "TYPE_REQUEST")] = 0;
    values[(valuesById[1] = "TYPE_REQUEST_RESPONSE")] = 1;
    values[(valuesById[2] = "TYPE_NOTIFICATION")] = 2;
    values[(valuesById[3] = "TYPE_NOTIFICATION_RESPONSE")] = 3;
    return values;
})();
/**
 * DwarfCMD enum.
 * @exports DwarfCMD
 * @enum {number}
 * @property {number} NO_CMD=0 NO_CMD value
 * @property {number} CMD_CAMERA_TELE_OPEN_CAMERA=10000 CMD_CAMERA_TELE_OPEN_CAMERA value
 * @property {number} CMD_CAMERA_TELE_CLOSE_CAMERA=10001 CMD_CAMERA_TELE_CLOSE_CAMERA value
 * @property {number} CMD_CAMERA_TELE_PHOTOGRAPH=10002 CMD_CAMERA_TELE_PHOTOGRAPH value
 * @property {number} CMD_CAMERA_TELE_BURST=10003 CMD_CAMERA_TELE_BURST value
 * @property {number} CMD_CAMERA_TELE_STOP_BURST=10004 CMD_CAMERA_TELE_STOP_BURST value
 * @property {number} CMD_CAMERA_TELE_START_RECORD=10005 CMD_CAMERA_TELE_START_RECORD value
 * @property {number} CMD_CAMERA_TELE_STOP_RECORD=10006 CMD_CAMERA_TELE_STOP_RECORD value
 * @property {number} CMD_CAMERA_TELE_SET_EXP_MODE=10007 CMD_CAMERA_TELE_SET_EXP_MODE value
 * @property {number} CMD_CAMERA_TELE_GET_EXP_MODE=10008 CMD_CAMERA_TELE_GET_EXP_MODE value
 * @property {number} CMD_CAMERA_TELE_SET_EXP=10009 CMD_CAMERA_TELE_SET_EXP value
 * @property {number} CMD_CAMERA_TELE_GET_EXP=10010 CMD_CAMERA_TELE_GET_EXP value
 * @property {number} CMD_CAMERA_TELE_SET_GAIN_MODE=10011 CMD_CAMERA_TELE_SET_GAIN_MODE value
 * @property {number} CMD_CAMERA_TELE_GET_GAIN_MODE=10012 CMD_CAMERA_TELE_GET_GAIN_MODE value
 * @property {number} CMD_CAMERA_TELE_SET_GAIN=10013 CMD_CAMERA_TELE_SET_GAIN value
 * @property {number} CMD_CAMERA_TELE_GET_GAIN=10014 CMD_CAMERA_TELE_GET_GAIN value
 * @property {number} CMD_CAMERA_TELE_SET_BRIGHTNESS=10015 CMD_CAMERA_TELE_SET_BRIGHTNESS value
 * @property {number} CMD_CAMERA_TELE_GET_BRIGHTNESS=10016 CMD_CAMERA_TELE_GET_BRIGHTNESS value
 * @property {number} CMD_CAMERA_TELE_SET_CONTRAST=10017 CMD_CAMERA_TELE_SET_CONTRAST value
 * @property {number} CMD_CAMERA_TELE_GET_CONTRAST=10018 CMD_CAMERA_TELE_GET_CONTRAST value
 * @property {number} CMD_CAMERA_TELE_SET_SATURATION=10019 CMD_CAMERA_TELE_SET_SATURATION value
 * @property {number} CMD_CAMERA_TELE_GET_SATURATION=10020 CMD_CAMERA_TELE_GET_SATURATION value
 * @property {number} CMD_CAMERA_TELE_SET_HUE=10021 CMD_CAMERA_TELE_SET_HUE value
 * @property {number} CMD_CAMERA_TELE_GET_HUE=10022 CMD_CAMERA_TELE_GET_HUE value
 * @property {number} CMD_CAMERA_TELE_SET_SHARPNESS=10023 CMD_CAMERA_TELE_SET_SHARPNESS value
 * @property {number} CMD_CAMERA_TELE_GET_SHARPNESS=10024 CMD_CAMERA_TELE_GET_SHARPNESS value
 * @property {number} CMD_CAMERA_TELE_SET_WB_MODE=10025 CMD_CAMERA_TELE_SET_WB_MODE value
 * @property {number} CMD_CAMERA_TELE_GET_WB_MODE=10026 CMD_CAMERA_TELE_GET_WB_MODE value
 * @property {number} CMD_CAMERA_TELE_SET_WB_SCENE=10027 CMD_CAMERA_TELE_SET_WB_SCENE value
 * @property {number} CMD_CAMERA_TELE_GET_WB_SCENE=10028 CMD_CAMERA_TELE_GET_WB_SCENE value
 * @property {number} CMD_CAMERA_TELE_SET_WB_CT=10029 CMD_CAMERA_TELE_SET_WB_CT value
 * @property {number} CMD_CAMERA_TELE_GET_WB_CT=10030 CMD_CAMERA_TELE_GET_WB_CT value
 * @property {number} CMD_CAMERA_TELE_SET_IRCUT=10031 CMD_CAMERA_TELE_SET_IRCUT value
 * @property {number} CMD_CAMERA_TELE_GET_IRCUT=10032 CMD_CAMERA_TELE_GET_IRCUT value
 * @property {number} CMD_CAMERA_TELE_START_TIMELAPSE_PHOTO=10033 CMD_CAMERA_TELE_START_TIMELAPSE_PHOTO value
 * @property {number} CMD_CAMERA_TELE_STOP_TIMELAPSE_PHOTO=10034 CMD_CAMERA_TELE_STOP_TIMELAPSE_PHOTO value
 * @property {number} CMD_CAMERA_TELE_SET_ALL_PARAMS=10035 CMD_CAMERA_TELE_SET_ALL_PARAMS value
 * @property {number} CMD_CAMERA_TELE_GET_ALL_PARAMS=10036 CMD_CAMERA_TELE_GET_ALL_PARAMS value
 * @property {number} CMD_CAMERA_TELE_SET_FEATURE_PARAM=10037 CMD_CAMERA_TELE_SET_FEATURE_PARAM value
 * @property {number} CMD_CAMERA_TELE_GET_ALL_FEATURE_PARAMS=10038 CMD_CAMERA_TELE_GET_ALL_FEATURE_PARAMS value
 * @property {number} CMD_CAMERA_TELE_GET_SYSTEM_WORKING_STATE=10039 CMD_CAMERA_TELE_GET_SYSTEM_WORKING_STATE value
 * @property {number} CMD_CAMERA_TELE_SET_JPG_QUALITY=10040 CMD_CAMERA_TELE_SET_JPG_QUALITY value
 * @property {number} CMD_ASTRO_START_CALIBRATION=11000 CMD_ASTRO_START_CALIBRATION value
 * @property {number} CMD_ASTRO_STOP_CALIBRATION=11001 CMD_ASTRO_STOP_CALIBRATION value
 * @property {number} CMD_ASTRO_START_GOTO_DSO=11002 CMD_ASTRO_START_GOTO_DSO value
 * @property {number} CMD_ASTRO_START_GOTO_SOLAR_SYSTEM=11003 CMD_ASTRO_START_GOTO_SOLAR_SYSTEM value
 * @property {number} CMD_ASTRO_STOP_GOTO=11004 CMD_ASTRO_STOP_GOTO value
 * @property {number} CMD_ASTRO_START_CAPTURE_RAW_LIVE_STACKING=11005 CMD_ASTRO_START_CAPTURE_RAW_LIVE_STACKING value
 * @property {number} CMD_ASTRO_STOP_CAPTURE_RAW_LIVE_STACKING=11006 CMD_ASTRO_STOP_CAPTURE_RAW_LIVE_STACKING value
 * @property {number} CMD_ASTRO_START_CAPTURE_RAW_DARK=11007 CMD_ASTRO_START_CAPTURE_RAW_DARK value
 * @property {number} CMD_ASTRO_STOP_CAPTURE_RAW_DARK=11008 CMD_ASTRO_STOP_CAPTURE_RAW_DARK value
 * @property {number} CMD_ASTRO_CHECK_GOT_DARK=11009 CMD_ASTRO_CHECK_GOT_DARK value
 * @property {number} CMD_ASTRO_GO_LIVE=11010 CMD_ASTRO_GO_LIVE value
 * @property {number} CMD_ASTRO_START_TRACK_SPECIAL_TARGET=11011 CMD_ASTRO_START_TRACK_SPECIAL_TARGET value
 * @property {number} CMD_ASTRO_STOP_TRACK_SPECIAL_TARGET=11012 CMD_ASTRO_STOP_TRACK_SPECIAL_TARGET value
 * @property {number} CMD_CAMERA_WIDE_OPEN_CAMERA=12000 CMD_CAMERA_WIDE_OPEN_CAMERA value
 * @property {number} CMD_CAMERA_WIDE_CLOSE_CAMERA=12001 CMD_CAMERA_WIDE_CLOSE_CAMERA value
 * @property {number} CMD_CAMERA_WIDE_SET_EXP_MODE=12002 CMD_CAMERA_WIDE_SET_EXP_MODE value
 * @property {number} CMD_CAMERA_WIDE_GET_EXP_MODE=12003 CMD_CAMERA_WIDE_GET_EXP_MODE value
 * @property {number} CMD_CAMERA_WIDE_SET_EXP=12004 CMD_CAMERA_WIDE_SET_EXP value
 * @property {number} CMD_CAMERA_WIDE_GET_EXP=12005 CMD_CAMERA_WIDE_GET_EXP value
 * @property {number} CMD_CAMERA_WIDE_SET_GAIN=12006 CMD_CAMERA_WIDE_SET_GAIN value
 * @property {number} CMD_CAMERA_WIDE_GET_GAIN=12007 CMD_CAMERA_WIDE_GET_GAIN value
 * @property {number} CMD_CAMERA_WIDE_SET_BRIGHTNESS=12008 CMD_CAMERA_WIDE_SET_BRIGHTNESS value
 * @property {number} CMD_CAMERA_WIDE_GET_BRIGHTNESS=12009 CMD_CAMERA_WIDE_GET_BRIGHTNESS value
 * @property {number} CMD_CAMERA_WIDE_SET_CONTRAST=12010 CMD_CAMERA_WIDE_SET_CONTRAST value
 * @property {number} CMD_CAMERA_WIDE_GET_CONTRAST=12011 CMD_CAMERA_WIDE_GET_CONTRAST value
 * @property {number} CMD_CAMERA_WIDE_SET_SATURATION=12012 CMD_CAMERA_WIDE_SET_SATURATION value
 * @property {number} CMD_CAMERA_WIDE_GET_SATURATION=12013 CMD_CAMERA_WIDE_GET_SATURATION value
 * @property {number} CMD_CAMERA_WIDE_SET_HUE=12014 CMD_CAMERA_WIDE_SET_HUE value
 * @property {number} CMD_CAMERA_WIDE_GET_HUE=12015 CMD_CAMERA_WIDE_GET_HUE value
 * @property {number} CMD_CAMERA_WIDE_SET_SHARPNESS=12016 CMD_CAMERA_WIDE_SET_SHARPNESS value
 * @property {number} CMD_CAMERA_WIDE_GET_SHARPNESS=12017 CMD_CAMERA_WIDE_GET_SHARPNESS value
 * @property {number} CMD_CAMERA_WIDE_SET_WB_MODE=12018 CMD_CAMERA_WIDE_SET_WB_MODE value
 * @property {number} CMD_CAMERA_WIDE_GET_WB_MODE=12019 CMD_CAMERA_WIDE_GET_WB_MODE value
 * @property {number} CMD_CAMERA_WIDE_SET_WB_CT=12020 CMD_CAMERA_WIDE_SET_WB_CT value
 * @property {number} CMD_CAMERA_WIDE_GET_WB_CT=12021 CMD_CAMERA_WIDE_GET_WB_CT value
 * @property {number} CMD_CAMERA_WIDE_PHOTOGRAPH=12022 CMD_CAMERA_WIDE_PHOTOGRAPH value
 * @property {number} CMD_CAMERA_WIDE_BURST=12023 CMD_CAMERA_WIDE_BURST value
 * @property {number} CMD_CAMERA_WIDE_STOP_BURST=12024 CMD_CAMERA_WIDE_STOP_BURST value
 * @property {number} CMD_CAMERA_WIDE_START_TIMELAPSE_PHOTO=12025 CMD_CAMERA_WIDE_START_TIMELAPSE_PHOTO value
 * @property {number} CMD_CAMERA_WIDE_STOP_TIMELAPSE_PHOTO=12026 CMD_CAMERA_WIDE_STOP_TIMELAPSE_PHOTO value
 * @property {number} CMD_CAMERA_WIDE_GET_ALL_PARAMS=12027 CMD_CAMERA_WIDE_GET_ALL_PARAMS value
 * @property {number} CMD_CAMERA_WIDE_SET_ALL_PARAMS=12028 CMD_CAMERA_WIDE_SET_ALL_PARAMS value
 * @property {number} CMD_SYSTEM_SET_TIME=13000 CMD_SYSTEM_SET_TIME value
 * @property {number} CMD_SYSTEM_SET_TIME_ZONE=13001 CMD_SYSTEM_SET_TIME_ZONE value
 * @property {number} CMD_SYSTEM_SET_MTP_MODE=13002 CMD_SYSTEM_SET_MTP_MODE value
 * @property {number} CMD_SYSTEM_SET_CPU_MODE=13003 CMD_SYSTEM_SET_CPU_MODE value
 * @property {number} CMD_RGB_POWER_OPEN_RGB=13500 CMD_RGB_POWER_OPEN_RGB value
 * @property {number} CMD_RGB_POWER_CLOSE_RGB=13501 CMD_RGB_POWER_CLOSE_RGB value
 * @property {number} CMD_RGB_POWER_POWER_DOWN=13502 CMD_RGB_POWER_POWER_DOWN value
 * @property {number} CMD_RGB_POWER_POWERIND_ON=13503 CMD_RGB_POWER_POWERIND_ON value
 * @property {number} CMD_RGB_POWER_POWERIND_OFF=13504 CMD_RGB_POWER_POWERIND_OFF value
 * @property {number} CMD_RGB_POWER_REBOOT=13505 CMD_RGB_POWER_REBOOT value
 * @property {number} CMD_FOCUS_AUTO_FOCUS=15000 CMD_FOCUS_AUTO_FOCUS value
 * @property {number} CMD_FOCUS_MANUAL_SINGLE_STEP_FOCUS=15001 CMD_FOCUS_MANUAL_SINGLE_STEP_FOCUS value
 * @property {number} CMD_FOCUS_START_MANUAL_CONTINU_FOCUS=15002 CMD_FOCUS_START_MANUAL_CONTINU_FOCUS value
 * @property {number} CMD_FOCUS_STOP_MANUAL_CONTINU_FOCUS=15003 CMD_FOCUS_STOP_MANUAL_CONTINU_FOCUS value
 * @property {number} CMD_FOCUS_START_ASTRO_AUTO_FOCUS=15004 CMD_FOCUS_START_ASTRO_AUTO_FOCUS value
 * @property {number} CMD_FOCUS_STOP_ASTRO_AUTO_FOCUS=15005 CMD_FOCUS_STOP_ASTRO_AUTO_FOCUS value
 * @property {number} CMD_NOTIFY_TELE_WIDI_PICTURE_MATCHING=15200 CMD_NOTIFY_TELE_WIDI_PICTURE_MATCHING value
 * @property {number} CMD_NOTIFY_ELE=15201 CMD_NOTIFY_ELE value
 * @property {number} CMD_NOTIFY_CHARGE=15202 CMD_NOTIFY_CHARGE value
 * @property {number} CMD_NOTIFY_SDCARD_INFO=15203 CMD_NOTIFY_SDCARD_INFO value
 * @property {number} CMD_NOTIFY_TELE_RECORD_TIME=15204 CMD_NOTIFY_TELE_RECORD_TIME value
 * @property {number} CMD_NOTIFY_TELE_TIMELAPSE_OUT_TIME=15205 CMD_NOTIFY_TELE_TIMELAPSE_OUT_TIME value
 * @property {number} CMD_NOTIFY_STATE_CAPTURE_RAW_DARK=15206 CMD_NOTIFY_STATE_CAPTURE_RAW_DARK value
 * @property {number} CMD_NOTIFY_PROGRASS_CAPTURE_RAW_DARK=15207 CMD_NOTIFY_PROGRASS_CAPTURE_RAW_DARK value
 * @property {number} CMD_NOTIFY_STATE_CAPTURE_RAW_LIVE_STACKING=15208 CMD_NOTIFY_STATE_CAPTURE_RAW_LIVE_STACKING value
 * @property {number} CMD_NOTIFY_PROGRASS_CAPTURE_RAW_LIVE_STACKING=15209 CMD_NOTIFY_PROGRASS_CAPTURE_RAW_LIVE_STACKING value
 * @property {number} CMD_NOTIFY_STATE_ASTRO_CALIBRATION=15210 CMD_NOTIFY_STATE_ASTRO_CALIBRATION value
 * @property {number} CMD_NOTIFY_STATE_ASTRO_GOTO=15211 CMD_NOTIFY_STATE_ASTRO_GOTO value
 * @property {number} CMD_NOTIFY_STATE_ASTRO_TRACKING=15212 CMD_NOTIFY_STATE_ASTRO_TRACKING value
 * @property {number} CMD_NOTIFY_TELE_SET_PARAM=15213 CMD_NOTIFY_TELE_SET_PARAM value
 * @property {number} CMD_NOTIFY_WIDE_SET_PARAM=15214 CMD_NOTIFY_WIDE_SET_PARAM value
 * @property {number} CMD_NOTIFY_TELE_FUNCTION_STATE=15215 CMD_NOTIFY_TELE_FUNCTION_STATE value
 * @property {number} CMD_NOTIFY_WIDE_FUNCTION_STATE=15216 CMD_NOTIFY_WIDE_FUNCTION_STATE value
 * @property {number} CMD_NOTIFY_SET_FEATURE_PARAM=15217 CMD_NOTIFY_SET_FEATURE_PARAM value
 * @property {number} CMD_NOTIFY_TELE_BURST_PROGRESS=15218 CMD_NOTIFY_TELE_BURST_PROGRESS value
 * @property {number} CMD_NOTIFY_PANORAMA_PROGRESS=15219 CMD_NOTIFY_PANORAMA_PROGRESS value
 * @property {number} CMD_NOTIFY_WIDE_BURST_PROGRESS=15220 CMD_NOTIFY_WIDE_BURST_PROGRESS value
 * @property {number} CMD_NOTIFY_RGB_STATE=15221 CMD_NOTIFY_RGB_STATE value
 * @property {number} CMD_NOTIFY_POWER_IND_STATE=15222 CMD_NOTIFY_POWER_IND_STATE value
 * @property {number} CMD_NOTIFY_WS_HOST_SLAVE_MODE=15223 CMD_NOTIFY_WS_HOST_SLAVE_MODE value
 * @property {number} CMD_NOTIFY_MTP_STATE=15224 CMD_NOTIFY_MTP_STATE value
 * @property {number} CMD_NOTIFY_TRACK_RESULT=15225 CMD_NOTIFY_TRACK_RESULT value
 * @property {number} CMD_NOTIFY_WIDE_TIMELAPSE_OUT_TIME=15226 CMD_NOTIFY_WIDE_TIMELAPSE_OUT_TIME value
 * @property {number} CMD_NOTIFY_CPU_MODE=15227 CMD_NOTIFY_CPU_MODE value
 * @property {number} CMD_NOTIFY_STATE_ASTRO_TRACKING_SPECIAL=15228 CMD_NOTIFY_STATE_ASTRO_TRACKING_SPECIAL value
 * @property {number} CMD_NOTIFY_POWER_OFF=15229 CMD_NOTIFY_POWER_OFF value
 */
$root.DwarfCMD = (function () {
    var valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "NO_CMD")] = 0;
    values[(valuesById[10000] = "CMD_CAMERA_TELE_OPEN_CAMERA")] = 10000;
    values[(valuesById[10001] = "CMD_CAMERA_TELE_CLOSE_CAMERA")] = 10001;
    values[(valuesById[10002] = "CMD_CAMERA_TELE_PHOTOGRAPH")] = 10002;
    values[(valuesById[10003] = "CMD_CAMERA_TELE_BURST")] = 10003;
    values[(valuesById[10004] = "CMD_CAMERA_TELE_STOP_BURST")] = 10004;
    values[(valuesById[10005] = "CMD_CAMERA_TELE_START_RECORD")] = 10005;
    values[(valuesById[10006] = "CMD_CAMERA_TELE_STOP_RECORD")] = 10006;
    values[(valuesById[10007] = "CMD_CAMERA_TELE_SET_EXP_MODE")] = 10007;
    values[(valuesById[10008] = "CMD_CAMERA_TELE_GET_EXP_MODE")] = 10008;
    values[(valuesById[10009] = "CMD_CAMERA_TELE_SET_EXP")] = 10009;
    values[(valuesById[10010] = "CMD_CAMERA_TELE_GET_EXP")] = 10010;
    values[(valuesById[10011] = "CMD_CAMERA_TELE_SET_GAIN_MODE")] = 10011;
    values[(valuesById[10012] = "CMD_CAMERA_TELE_GET_GAIN_MODE")] = 10012;
    values[(valuesById[10013] = "CMD_CAMERA_TELE_SET_GAIN")] = 10013;
    values[(valuesById[10014] = "CMD_CAMERA_TELE_GET_GAIN")] = 10014;
    values[(valuesById[10015] = "CMD_CAMERA_TELE_SET_BRIGHTNESS")] = 10015;
    values[(valuesById[10016] = "CMD_CAMERA_TELE_GET_BRIGHTNESS")] = 10016;
    values[(valuesById[10017] = "CMD_CAMERA_TELE_SET_CONTRAST")] = 10017;
    values[(valuesById[10018] = "CMD_CAMERA_TELE_GET_CONTRAST")] = 10018;
    values[(valuesById[10019] = "CMD_CAMERA_TELE_SET_SATURATION")] = 10019;
    values[(valuesById[10020] = "CMD_CAMERA_TELE_GET_SATURATION")] = 10020;
    values[(valuesById[10021] = "CMD_CAMERA_TELE_SET_HUE")] = 10021;
    values[(valuesById[10022] = "CMD_CAMERA_TELE_GET_HUE")] = 10022;
    values[(valuesById[10023] = "CMD_CAMERA_TELE_SET_SHARPNESS")] = 10023;
    values[(valuesById[10024] = "CMD_CAMERA_TELE_GET_SHARPNESS")] = 10024;
    values[(valuesById[10025] = "CMD_CAMERA_TELE_SET_WB_MODE")] = 10025;
    values[(valuesById[10026] = "CMD_CAMERA_TELE_GET_WB_MODE")] = 10026;
    values[(valuesById[10027] = "CMD_CAMERA_TELE_SET_WB_SCENE")] = 10027;
    values[(valuesById[10028] = "CMD_CAMERA_TELE_GET_WB_SCENE")] = 10028;
    values[(valuesById[10029] = "CMD_CAMERA_TELE_SET_WB_CT")] = 10029;
    values[(valuesById[10030] = "CMD_CAMERA_TELE_GET_WB_CT")] = 10030;
    values[(valuesById[10031] = "CMD_CAMERA_TELE_SET_IRCUT")] = 10031;
    values[(valuesById[10032] = "CMD_CAMERA_TELE_GET_IRCUT")] = 10032;
    values[(valuesById[10033] = "CMD_CAMERA_TELE_START_TIMELAPSE_PHOTO")] = 10033;
    values[(valuesById[10034] = "CMD_CAMERA_TELE_STOP_TIMELAPSE_PHOTO")] = 10034;
    values[(valuesById[10035] = "CMD_CAMERA_TELE_SET_ALL_PARAMS")] = 10035;
    values[(valuesById[10036] = "CMD_CAMERA_TELE_GET_ALL_PARAMS")] = 10036;
    values[(valuesById[10037] = "CMD_CAMERA_TELE_SET_FEATURE_PARAM")] = 10037;
    values[(valuesById[10038] = "CMD_CAMERA_TELE_GET_ALL_FEATURE_PARAMS")] = 10038;
    values[(valuesById[10039] = "CMD_CAMERA_TELE_GET_SYSTEM_WORKING_STATE")] = 10039;
    values[(valuesById[10040] = "CMD_CAMERA_TELE_SET_JPG_QUALITY")] = 10040;
    values[(valuesById[11000] = "CMD_ASTRO_START_CALIBRATION")] = 11000;
    values[(valuesById[11001] = "CMD_ASTRO_STOP_CALIBRATION")] = 11001;
    values[(valuesById[11002] = "CMD_ASTRO_START_GOTO_DSO")] = 11002;
    values[(valuesById[11003] = "CMD_ASTRO_START_GOTO_SOLAR_SYSTEM")] = 11003;
    values[(valuesById[11004] = "CMD_ASTRO_STOP_GOTO")] = 11004;
    values[(valuesById[11005] = "CMD_ASTRO_START_CAPTURE_RAW_LIVE_STACKING")] = 11005;
    values[(valuesById[11006] = "CMD_ASTRO_STOP_CAPTURE_RAW_LIVE_STACKING")] = 11006;
    values[(valuesById[11007] = "CMD_ASTRO_START_CAPTURE_RAW_DARK")] = 11007;
    values[(valuesById[11008] = "CMD_ASTRO_STOP_CAPTURE_RAW_DARK")] = 11008;
    values[(valuesById[11009] = "CMD_ASTRO_CHECK_GOT_DARK")] = 11009;
    values[(valuesById[11010] = "CMD_ASTRO_GO_LIVE")] = 11010;
    values[(valuesById[11011] = "CMD_ASTRO_START_TRACK_SPECIAL_TARGET")] = 11011;
    values[(valuesById[11012] = "CMD_ASTRO_STOP_TRACK_SPECIAL_TARGET")] = 11012;
    values[(valuesById[12000] = "CMD_CAMERA_WIDE_OPEN_CAMERA")] = 12000;
    values[(valuesById[12001] = "CMD_CAMERA_WIDE_CLOSE_CAMERA")] = 12001;
    values[(valuesById[12002] = "CMD_CAMERA_WIDE_SET_EXP_MODE")] = 12002;
    values[(valuesById[12003] = "CMD_CAMERA_WIDE_GET_EXP_MODE")] = 12003;
    values[(valuesById[12004] = "CMD_CAMERA_WIDE_SET_EXP")] = 12004;
    values[(valuesById[12005] = "CMD_CAMERA_WIDE_GET_EXP")] = 12005;
    values[(valuesById[12006] = "CMD_CAMERA_WIDE_SET_GAIN")] = 12006;
    values[(valuesById[12007] = "CMD_CAMERA_WIDE_GET_GAIN")] = 12007;
    values[(valuesById[12008] = "CMD_CAMERA_WIDE_SET_BRIGHTNESS")] = 12008;
    values[(valuesById[12009] = "CMD_CAMERA_WIDE_GET_BRIGHTNESS")] = 12009;
    values[(valuesById[12010] = "CMD_CAMERA_WIDE_SET_CONTRAST")] = 12010;
    values[(valuesById[12011] = "CMD_CAMERA_WIDE_GET_CONTRAST")] = 12011;
    values[(valuesById[12012] = "CMD_CAMERA_WIDE_SET_SATURATION")] = 12012;
    values[(valuesById[12013] = "CMD_CAMERA_WIDE_GET_SATURATION")] = 12013;
    values[(valuesById[12014] = "CMD_CAMERA_WIDE_SET_HUE")] = 12014;
    values[(valuesById[12015] = "CMD_CAMERA_WIDE_GET_HUE")] = 12015;
    values[(valuesById[12016] = "CMD_CAMERA_WIDE_SET_SHARPNESS")] = 12016;
    values[(valuesById[12017] = "CMD_CAMERA_WIDE_GET_SHARPNESS")] = 12017;
    values[(valuesById[12018] = "CMD_CAMERA_WIDE_SET_WB_MODE")] = 12018;
    values[(valuesById[12019] = "CMD_CAMERA_WIDE_GET_WB_MODE")] = 12019;
    values[(valuesById[12020] = "CMD_CAMERA_WIDE_SET_WB_CT")] = 12020;
    values[(valuesById[12021] = "CMD_CAMERA_WIDE_GET_WB_CT")] = 12021;
    values[(valuesById[12022] = "CMD_CAMERA_WIDE_PHOTOGRAPH")] = 12022;
    values[(valuesById[12023] = "CMD_CAMERA_WIDE_BURST")] = 12023;
    values[(valuesById[12024] = "CMD_CAMERA_WIDE_STOP_BURST")] = 12024;
    values[(valuesById[12025] = "CMD_CAMERA_WIDE_START_TIMELAPSE_PHOTO")] = 12025;
    values[(valuesById[12026] = "CMD_CAMERA_WIDE_STOP_TIMELAPSE_PHOTO")] = 12026;
    values[(valuesById[12027] = "CMD_CAMERA_WIDE_GET_ALL_PARAMS")] = 12027;
    values[(valuesById[12028] = "CMD_CAMERA_WIDE_SET_ALL_PARAMS")] = 12028;
    values[(valuesById[13000] = "CMD_SYSTEM_SET_TIME")] = 13000;
    values[(valuesById[13001] = "CMD_SYSTEM_SET_TIME_ZONE")] = 13001;
    values[(valuesById[13002] = "CMD_SYSTEM_SET_MTP_MODE")] = 13002;
    values[(valuesById[13003] = "CMD_SYSTEM_SET_CPU_MODE")] = 13003;
    values[(valuesById[13500] = "CMD_RGB_POWER_OPEN_RGB")] = 13500;
    values[(valuesById[13501] = "CMD_RGB_POWER_CLOSE_RGB")] = 13501;
    values[(valuesById[13502] = "CMD_RGB_POWER_POWER_DOWN")] = 13502;
    values[(valuesById[13503] = "CMD_RGB_POWER_POWERIND_ON")] = 13503;
    values[(valuesById[13504] = "CMD_RGB_POWER_POWERIND_OFF")] = 13504;
    values[(valuesById[13505] = "CMD_RGB_POWER_REBOOT")] = 13505;
    values[(valuesById[15000] = "CMD_FOCUS_AUTO_FOCUS")] = 15000;
    values[(valuesById[15001] = "CMD_FOCUS_MANUAL_SINGLE_STEP_FOCUS")] = 15001;
    values[(valuesById[15002] = "CMD_FOCUS_START_MANUAL_CONTINU_FOCUS")] = 15002;
    values[(valuesById[15003] = "CMD_FOCUS_STOP_MANUAL_CONTINU_FOCUS")] = 15003;
    values[(valuesById[15004] = "CMD_FOCUS_START_ASTRO_AUTO_FOCUS")] = 15004;
    values[(valuesById[15005] = "CMD_FOCUS_STOP_ASTRO_AUTO_FOCUS")] = 15005;
    values[(valuesById[15200] = "CMD_NOTIFY_TELE_WIDI_PICTURE_MATCHING")] = 15200;
    values[(valuesById[15201] = "CMD_NOTIFY_ELE")] = 15201;
    values[(valuesById[15202] = "CMD_NOTIFY_CHARGE")] = 15202;
    values[(valuesById[15203] = "CMD_NOTIFY_SDCARD_INFO")] = 15203;
    values[(valuesById[15204] = "CMD_NOTIFY_TELE_RECORD_TIME")] = 15204;
    values[(valuesById[15205] = "CMD_NOTIFY_TELE_TIMELAPSE_OUT_TIME")] = 15205;
    values[(valuesById[15206] = "CMD_NOTIFY_STATE_CAPTURE_RAW_DARK")] = 15206;
    values[(valuesById[15207] = "CMD_NOTIFY_PROGRASS_CAPTURE_RAW_DARK")] = 15207;
    values[(valuesById[15208] = "CMD_NOTIFY_STATE_CAPTURE_RAW_LIVE_STACKING")] = 15208;
    values[(valuesById[15209] = "CMD_NOTIFY_PROGRASS_CAPTURE_RAW_LIVE_STACKING")] = 15209;
    values[(valuesById[15210] = "CMD_NOTIFY_STATE_ASTRO_CALIBRATION")] = 15210;
    values[(valuesById[15211] = "CMD_NOTIFY_STATE_ASTRO_GOTO")] = 15211;
    values[(valuesById[15212] = "CMD_NOTIFY_STATE_ASTRO_TRACKING")] = 15212;
    values[(valuesById[15213] = "CMD_NOTIFY_TELE_SET_PARAM")] = 15213;
    values[(valuesById[15214] = "CMD_NOTIFY_WIDE_SET_PARAM")] = 15214;
    values[(valuesById[15215] = "CMD_NOTIFY_TELE_FUNCTION_STATE")] = 15215;
    values[(valuesById[15216] = "CMD_NOTIFY_WIDE_FUNCTION_STATE")] = 15216;
    values[(valuesById[15217] = "CMD_NOTIFY_SET_FEATURE_PARAM")] = 15217;
    values[(valuesById[15218] = "CMD_NOTIFY_TELE_BURST_PROGRESS")] = 15218;
    values[(valuesById[15219] = "CMD_NOTIFY_PANORAMA_PROGRESS")] = 15219;
    values[(valuesById[15220] = "CMD_NOTIFY_WIDE_BURST_PROGRESS")] = 15220;
    values[(valuesById[15221] = "CMD_NOTIFY_RGB_STATE")] = 15221;
    values[(valuesById[15222] = "CMD_NOTIFY_POWER_IND_STATE")] = 15222;
    values[(valuesById[15223] = "CMD_NOTIFY_WS_HOST_SLAVE_MODE")] = 15223;
    values[(valuesById[15224] = "CMD_NOTIFY_MTP_STATE")] = 15224;
    values[(valuesById[15225] = "CMD_NOTIFY_TRACK_RESULT")] = 15225;
    values[(valuesById[15226] = "CMD_NOTIFY_WIDE_TIMELAPSE_OUT_TIME")] = 15226;
    values[(valuesById[15227] = "CMD_NOTIFY_CPU_MODE")] = 15227;
    values[(valuesById[15228] = "CMD_NOTIFY_STATE_ASTRO_TRACKING_SPECIAL")] = 15228;
    values[(valuesById[15229] = "CMD_NOTIFY_POWER_OFF")] = 15229;
    return values;
})();
/**
 * DwarfErrorCode enum.
 * @exports DwarfErrorCode
 * @enum {number}
 * @property {number} OK=0 OK value
 * @property {number} WS_PARSE_PROTOBUF_ERROR=-1 WS_PARSE_PROTOBUF_ERROR value
 * @property {number} WS_SDCARD_NOT_EXIST=-2 WS_SDCARD_NOT_EXIST value
 * @property {number} WS_INVALID_PARAM=-3 WS_INVALID_PARAM value
 * @property {number} WS_SDCARD_WRITE_ERROR=-4 WS_SDCARD_WRITE_ERROR value
 * @property {number} CODE_CAMERA_TELE_OPENED=-10500 CODE_CAMERA_TELE_OPENED value
 * @property {number} CODE_CAMERA_TELE_CLOSED=-10501 CODE_CAMERA_TELE_CLOSED value
 * @property {number} CODE_CAMERA_TELE_ISP_SET_FAILED=-10502 CODE_CAMERA_TELE_ISP_SET_FAILED value
 * @property {number} CODE_CAMERA_TELE_OPEN_FAILED=-10504 CODE_CAMERA_TELE_OPEN_FAILED value
 * @property {number} CODE_CAMERA_TELE_WORKING_BUSY_STACK=-10507 CODE_CAMERA_TELE_WORKING_BUSY_STACK value
 * @property {number} CODE_CAMERA_TELE_CAPTURE_RAW_FAILED=-10510 CODE_CAMERA_TELE_CAPTURE_RAW_FAILED value
 * @property {number} CODE_CAMERA_TELE_WORKING_BUSY=-10511 CODE_CAMERA_TELE_WORKING_BUSY value
 * @property {number} CODE_ASTRO_PLATE_SOLVING_FAILED=-11500 CODE_ASTRO_PLATE_SOLVING_FAILED value
 * @property {number} CODE_ASTRO_FUNCTION_BUSY=-11501 CODE_ASTRO_FUNCTION_BUSY value
 * @property {number} CODE_ASTRO_DARK_GAIN_OUT_OF_RANGE=-11502 CODE_ASTRO_DARK_GAIN_OUT_OF_RANGE value
 * @property {number} CODE_ASTRO_DARK_NOT_FOUND=-11503 CODE_ASTRO_DARK_NOT_FOUND value
 * @property {number} CODE_ASTRO_CALIBRATION_FAILED=-11504 CODE_ASTRO_CALIBRATION_FAILED value
 * @property {number} CODE_ASTRO_GOTO_FAILED=-11505 CODE_ASTRO_GOTO_FAILED value
 * @property {number} CODE_ASTRO_NEED_GOTO=-11513 CODE_ASTRO_NEED_GOTO value
 * @property {number} CODE_ASTRO_NEED_ADJUST_SHOOT_PARAM=-11514 CODE_ASTRO_NEED_ADJUST_SHOOT_PARAM value
 * @property {number} CODE_CAMERA_WIDE_OPENED=-12500 CODE_CAMERA_WIDE_OPENED value
 * @property {number} CODE_CAMERA_WIDE_CLOSED=-12501 CODE_CAMERA_WIDE_CLOSED value
 * @property {number} CODE_CAMERA_WIDE_CANNOT_FOUND=-12502 CODE_CAMERA_WIDE_CANNOT_FOUND value
 * @property {number} CODE_CAMERA_WIDE_OPEN_FAILED=-12503 CODE_CAMERA_WIDE_OPEN_FAILED value
 * @property {number} CODE_CAMERA_WIDE_CLOSE_FAILED=-12504 CODE_CAMERA_WIDE_CLOSE_FAILED value
 * @property {number} CODE_CAMERA_WIDE_SET_ISP_FAILED=-12505 CODE_CAMERA_WIDE_SET_ISP_FAILED value
 * @property {number} CODE_CAMERA_WIDE_PHOTOGRAPHING=-12506 CODE_CAMERA_WIDE_PHOTOGRAPHING value
 * @property {number} CODE_SYSTEM_SET_TIME_FAILED=-13300 CODE_SYSTEM_SET_TIME_FAILED value
 * @property {number} CODE_SYSTEM_SET_TIMEZONE_FAILED=-13301 CODE_SYSTEM_SET_TIMEZONE_FAILED value
 * @property {number} CODE_SYSTEM_SETTING_TIMEZONE_FAILED=-13302 CODE_SYSTEM_SETTING_TIMEZONE_FAILED value
 * @property {number} CODE_STEP_MOTOR_LIMIT_POSITION_WARNING=-14518 CODE_STEP_MOTOR_LIMIT_POSITION_WARNING value
 * @property {number} CODE_STEP_MOTOR_LIMIT_POSITION_HITTED=-14519 CODE_STEP_MOTOR_LIMIT_POSITION_HITTED value
 * @property {number} CODE_PANORAMA_PHOTO_FAILED=-15600 CODE_PANORAMA_PHOTO_FAILED value
 * @property {number} CODE_PANORAMA_MOTOR_RESET_FAILED=-15601 CODE_PANORAMA_MOTOR_RESET_FAILED value
 */
$root.DwarfErrorCode = (function () {
    var valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "OK")] = 0;
    values[(valuesById[-1] = "WS_PARSE_PROTOBUF_ERROR")] = -1;
    values[(valuesById[-2] = "WS_SDCARD_NOT_EXIST")] = -2;
    values[(valuesById[-3] = "WS_INVALID_PARAM")] = -3;
    values[(valuesById[-4] = "WS_SDCARD_WRITE_ERROR")] = -4;
    values[(valuesById[-10500] = "CODE_CAMERA_TELE_OPENED")] = -10500;
    values[(valuesById[-10501] = "CODE_CAMERA_TELE_CLOSED")] = -10501;
    values[(valuesById[-10502] = "CODE_CAMERA_TELE_ISP_SET_FAILED")] = -10502;
    values[(valuesById[-10504] = "CODE_CAMERA_TELE_OPEN_FAILED")] = -10504;
    values[(valuesById[-10507] = "CODE_CAMERA_TELE_WORKING_BUSY_STACK")] = -10507;
    values[(valuesById[-10510] = "CODE_CAMERA_TELE_CAPTURE_RAW_FAILED")] = -10510;
    values[(valuesById[-10511] = "CODE_CAMERA_TELE_WORKING_BUSY")] = -10511;
    values[(valuesById[-11500] = "CODE_ASTRO_PLATE_SOLVING_FAILED")] = -11500;
    values[(valuesById[-11501] = "CODE_ASTRO_FUNCTION_BUSY")] = -11501;
    values[(valuesById[-11502] = "CODE_ASTRO_DARK_GAIN_OUT_OF_RANGE")] = -11502;
    values[(valuesById[-11503] = "CODE_ASTRO_DARK_NOT_FOUND")] = -11503;
    values[(valuesById[-11504] = "CODE_ASTRO_CALIBRATION_FAILED")] = -11504;
    values[(valuesById[-11505] = "CODE_ASTRO_GOTO_FAILED")] = -11505;
    values[(valuesById[-11513] = "CODE_ASTRO_NEED_GOTO")] = -11513;
    values[(valuesById[-11514] = "CODE_ASTRO_NEED_ADJUST_SHOOT_PARAM")] = -11514;
    values[(valuesById[-12500] = "CODE_CAMERA_WIDE_OPENED")] = -12500;
    values[(valuesById[-12501] = "CODE_CAMERA_WIDE_CLOSED")] = -12501;
    values[(valuesById[-12502] = "CODE_CAMERA_WIDE_CANNOT_FOUND")] = -12502;
    values[(valuesById[-12503] = "CODE_CAMERA_WIDE_OPEN_FAILED")] = -12503;
    values[(valuesById[-12504] = "CODE_CAMERA_WIDE_CLOSE_FAILED")] = -12504;
    values[(valuesById[-12505] = "CODE_CAMERA_WIDE_SET_ISP_FAILED")] = -12505;
    values[(valuesById[-12506] = "CODE_CAMERA_WIDE_PHOTOGRAPHING")] = -12506;
    values[(valuesById[-13300] = "CODE_SYSTEM_SET_TIME_FAILED")] = -13300;
    values[(valuesById[-13301] = "CODE_SYSTEM_SET_TIMEZONE_FAILED")] = -13301;
    values[(valuesById[-13302] = "CODE_SYSTEM_SETTING_TIMEZONE_FAILED")] = -13302;
    values[(valuesById[-14518] = "CODE_STEP_MOTOR_LIMIT_POSITION_WARNING")] =
        -14518;
    values[(valuesById[-14519] = "CODE_STEP_MOTOR_LIMIT_POSITION_HITTED")] =
        -14519;
    values[(valuesById[-15600] = "CODE_PANORAMA_PHOTO_FAILED")] = -15600;
    values[(valuesById[-15601] = "CODE_PANORAMA_MOTOR_RESET_FAILED")] = -15601;
    return values;
})();
/**
 * AstroTrackingSpecial enum.
 * @exports AstroTrackingSpecial
 * @enum {number}
 * @property {number} TRACKING_SUN=0 TRACKING_SUN value
 * @property {number} TRACKING_MOON=1 TRACKING_MOON value
 */
$root.AstroTrackingSpecial = (function () {
    var valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "TRACKING_SUN")] = 0;
    values[(valuesById[1] = "TRACKING_MOON")] = 1;
    return values;
})();
/**
 * SolarSystemTarget enum.
 * @exports SolarSystemTarget
 * @enum {number}
 * @property {number} Unknown=0 Unknown value
 * @property {number} Mercury=1 Mercury value
 * @property {number} Venus=2 Venus value
 * @property {number} Mars=3 Mars value
 * @property {number} Jupiter=4 Jupiter value
 * @property {number} Saturn=5 Saturn value
 * @property {number} Uranus=6 Uranus value
 * @property {number} Neptune=7 Neptune value
 * @property {number} Moon=8 Moon value
 * @property {number} Sun=9 Sun value
 */
$root.SolarSystemTarget = (function () {
    var valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "Unknown")] = 0;
    values[(valuesById[1] = "Mercury")] = 1;
    values[(valuesById[2] = "Venus")] = 2;
    values[(valuesById[3] = "Mars")] = 3;
    values[(valuesById[4] = "Jupiter")] = 4;
    values[(valuesById[5] = "Saturn")] = 5;
    values[(valuesById[6] = "Uranus")] = 6;
    values[(valuesById[7] = "Neptune")] = 7;
    values[(valuesById[8] = "Moon")] = 8;
    values[(valuesById[9] = "Sun")] = 9;
    return values;
})();
/**
 * PhotoMode enum.
 * @exports PhotoMode
 * @enum {number}
 * @property {number} Auto=0 Auto value
 * @property {number} Manual=1 Manual value
 */
$root.PhotoMode = (function () {
    var valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "Auto")] = 0;
    values[(valuesById[1] = "Manual")] = 1;
    return values;
})();
/**
 * WBMode enum.
 * @exports WBMode
 * @enum {number}
 * @property {number} ColorTemperature=0 ColorTemperature value
 * @property {number} SceneMode=1 SceneMode value
 */
$root.WBMode = (function () {
    var valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "ColorTemperature")] = 0;
    values[(valuesById[1] = "SceneMode")] = 1;
    return values;
})();
/**
 * IrCut enum.
 * @exports IrCut
 * @enum {number}
 * @property {number} CUT=0 CUT value
 * @property {number} PASS=1 PASS value
 */
$root.IrCut = (function () {
    var valuesById = {}, values = Object.create(valuesById);
    values[(valuesById[0] = "CUT")] = 0;
    values[(valuesById[1] = "PASS")] = 1;
    return values;
})();
$root.ReqOpenRgb = (function () {
    /**
     * Properties of a ReqOpenRgb.
     * @exports IReqOpenRgb
     * @interface IReqOpenRgb
     */
    /**
     * Constructs a new ReqOpenRgb.
     * @exports ReqOpenRgb
     * @classdesc Represents a ReqOpenRgb.
     * @implements IReqOpenRgb
     * @constructor
     * @param {IReqOpenRgb=} [properties] Properties to set
     */
    function ReqOpenRgb(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqOpenRgb instance using the specified properties.
     * @function create
     * @memberof ReqOpenRgb
     * @static
     * @param {IReqOpenRgb=} [properties] Properties to set
     * @returns {ReqOpenRgb} ReqOpenRgb instance
     */
    ReqOpenRgb.create = function create(properties) {
        return new ReqOpenRgb(properties);
    };
    /**
     * Encodes the specified ReqOpenRgb message. Does not implicitly {@link ReqOpenRgb.verify|verify} messages.
     * @function encode
     * @memberof ReqOpenRgb
     * @static
     * @param {IReqOpenRgb} message ReqOpenRgb message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqOpenRgb.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqOpenRgb message, length delimited. Does not implicitly {@link ReqOpenRgb.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqOpenRgb
     * @static
     * @param {IReqOpenRgb} message ReqOpenRgb message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqOpenRgb.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqOpenRgb message from the specified reader or buffer.
     * @function decode
     * @memberof ReqOpenRgb
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqOpenRgb} ReqOpenRgb
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqOpenRgb.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqOpenRgb();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqOpenRgb message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqOpenRgb
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqOpenRgb} ReqOpenRgb
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqOpenRgb.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqOpenRgb message.
     * @function verify
     * @memberof ReqOpenRgb
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqOpenRgb.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqOpenRgb message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqOpenRgb
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqOpenRgb} ReqOpenRgb
     */
    ReqOpenRgb.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqOpenRgb)
            return object;
        return new $root.ReqOpenRgb();
    };
    /**
     * Creates a plain object from a ReqOpenRgb message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqOpenRgb
     * @static
     * @param {ReqOpenRgb} message ReqOpenRgb
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqOpenRgb.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqOpenRgb to JSON.
     * @function toJSON
     * @memberof ReqOpenRgb
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqOpenRgb.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqOpenRgb
     * @function getTypeUrl
     * @memberof ReqOpenRgb
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqOpenRgb.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqOpenRgb";
    };
    return ReqOpenRgb;
})();
$root.ReqCloseRgb = (function () {
    /**
     * Properties of a ReqCloseRgb.
     * @exports IReqCloseRgb
     * @interface IReqCloseRgb
     */
    /**
     * Constructs a new ReqCloseRgb.
     * @exports ReqCloseRgb
     * @classdesc Represents a ReqCloseRgb.
     * @implements IReqCloseRgb
     * @constructor
     * @param {IReqCloseRgb=} [properties] Properties to set
     */
    function ReqCloseRgb(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqCloseRgb instance using the specified properties.
     * @function create
     * @memberof ReqCloseRgb
     * @static
     * @param {IReqCloseRgb=} [properties] Properties to set
     * @returns {ReqCloseRgb} ReqCloseRgb instance
     */
    ReqCloseRgb.create = function create(properties) {
        return new ReqCloseRgb(properties);
    };
    /**
     * Encodes the specified ReqCloseRgb message. Does not implicitly {@link ReqCloseRgb.verify|verify} messages.
     * @function encode
     * @memberof ReqCloseRgb
     * @static
     * @param {IReqCloseRgb} message ReqCloseRgb message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqCloseRgb.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqCloseRgb message, length delimited. Does not implicitly {@link ReqCloseRgb.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqCloseRgb
     * @static
     * @param {IReqCloseRgb} message ReqCloseRgb message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqCloseRgb.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqCloseRgb message from the specified reader or buffer.
     * @function decode
     * @memberof ReqCloseRgb
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqCloseRgb} ReqCloseRgb
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqCloseRgb.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqCloseRgb();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqCloseRgb message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqCloseRgb
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqCloseRgb} ReqCloseRgb
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqCloseRgb.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqCloseRgb message.
     * @function verify
     * @memberof ReqCloseRgb
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqCloseRgb.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqCloseRgb message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqCloseRgb
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqCloseRgb} ReqCloseRgb
     */
    ReqCloseRgb.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqCloseRgb)
            return object;
        return new $root.ReqCloseRgb();
    };
    /**
     * Creates a plain object from a ReqCloseRgb message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqCloseRgb
     * @static
     * @param {ReqCloseRgb} message ReqCloseRgb
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqCloseRgb.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqCloseRgb to JSON.
     * @function toJSON
     * @memberof ReqCloseRgb
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqCloseRgb.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqCloseRgb
     * @function getTypeUrl
     * @memberof ReqCloseRgb
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqCloseRgb.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqCloseRgb";
    };
    return ReqCloseRgb;
})();
$root.ReqPowerDown = (function () {
    /**
     * Properties of a ReqPowerDown.
     * @exports IReqPowerDown
     * @interface IReqPowerDown
     */
    /**
     * Constructs a new ReqPowerDown.
     * @exports ReqPowerDown
     * @classdesc Represents a ReqPowerDown.
     * @implements IReqPowerDown
     * @constructor
     * @param {IReqPowerDown=} [properties] Properties to set
     */
    function ReqPowerDown(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqPowerDown instance using the specified properties.
     * @function create
     * @memberof ReqPowerDown
     * @static
     * @param {IReqPowerDown=} [properties] Properties to set
     * @returns {ReqPowerDown} ReqPowerDown instance
     */
    ReqPowerDown.create = function create(properties) {
        return new ReqPowerDown(properties);
    };
    /**
     * Encodes the specified ReqPowerDown message. Does not implicitly {@link ReqPowerDown.verify|verify} messages.
     * @function encode
     * @memberof ReqPowerDown
     * @static
     * @param {IReqPowerDown} message ReqPowerDown message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPowerDown.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqPowerDown message, length delimited. Does not implicitly {@link ReqPowerDown.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPowerDown
     * @static
     * @param {IReqPowerDown} message ReqPowerDown message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPowerDown.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqPowerDown message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPowerDown
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPowerDown} ReqPowerDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPowerDown.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPowerDown();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqPowerDown message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPowerDown
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPowerDown} ReqPowerDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPowerDown.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqPowerDown message.
     * @function verify
     * @memberof ReqPowerDown
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPowerDown.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqPowerDown message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPowerDown
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPowerDown} ReqPowerDown
     */
    ReqPowerDown.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPowerDown)
            return object;
        return new $root.ReqPowerDown();
    };
    /**
     * Creates a plain object from a ReqPowerDown message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPowerDown
     * @static
     * @param {ReqPowerDown} message ReqPowerDown
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPowerDown.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqPowerDown to JSON.
     * @function toJSON
     * @memberof ReqPowerDown
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPowerDown.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqPowerDown
     * @function getTypeUrl
     * @memberof ReqPowerDown
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqPowerDown.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqPowerDown";
    };
    return ReqPowerDown;
})();
$root.ReqOpenPowerInd = (function () {
    /**
     * Properties of a ReqOpenPowerInd.
     * @exports IReqOpenPowerInd
     * @interface IReqOpenPowerInd
     */
    /**
     * Constructs a new ReqOpenPowerInd.
     * @exports ReqOpenPowerInd
     * @classdesc Represents a ReqOpenPowerInd.
     * @implements IReqOpenPowerInd
     * @constructor
     * @param {IReqOpenPowerInd=} [properties] Properties to set
     */
    function ReqOpenPowerInd(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqOpenPowerInd instance using the specified properties.
     * @function create
     * @memberof ReqOpenPowerInd
     * @static
     * @param {IReqOpenPowerInd=} [properties] Properties to set
     * @returns {ReqOpenPowerInd} ReqOpenPowerInd instance
     */
    ReqOpenPowerInd.create = function create(properties) {
        return new ReqOpenPowerInd(properties);
    };
    /**
     * Encodes the specified ReqOpenPowerInd message. Does not implicitly {@link ReqOpenPowerInd.verify|verify} messages.
     * @function encode
     * @memberof ReqOpenPowerInd
     * @static
     * @param {IReqOpenPowerInd} message ReqOpenPowerInd message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqOpenPowerInd.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqOpenPowerInd message, length delimited. Does not implicitly {@link ReqOpenPowerInd.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqOpenPowerInd
     * @static
     * @param {IReqOpenPowerInd} message ReqOpenPowerInd message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqOpenPowerInd.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqOpenPowerInd message from the specified reader or buffer.
     * @function decode
     * @memberof ReqOpenPowerInd
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqOpenPowerInd} ReqOpenPowerInd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqOpenPowerInd.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqOpenPowerInd();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqOpenPowerInd message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqOpenPowerInd
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqOpenPowerInd} ReqOpenPowerInd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqOpenPowerInd.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqOpenPowerInd message.
     * @function verify
     * @memberof ReqOpenPowerInd
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqOpenPowerInd.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqOpenPowerInd message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqOpenPowerInd
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqOpenPowerInd} ReqOpenPowerInd
     */
    ReqOpenPowerInd.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqOpenPowerInd)
            return object;
        return new $root.ReqOpenPowerInd();
    };
    /**
     * Creates a plain object from a ReqOpenPowerInd message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqOpenPowerInd
     * @static
     * @param {ReqOpenPowerInd} message ReqOpenPowerInd
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqOpenPowerInd.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqOpenPowerInd to JSON.
     * @function toJSON
     * @memberof ReqOpenPowerInd
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqOpenPowerInd.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqOpenPowerInd
     * @function getTypeUrl
     * @memberof ReqOpenPowerInd
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqOpenPowerInd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqOpenPowerInd";
    };
    return ReqOpenPowerInd;
})();
$root.ReqClosePowerInd = (function () {
    /**
     * Properties of a ReqClosePowerInd.
     * @exports IReqClosePowerInd
     * @interface IReqClosePowerInd
     */
    /**
     * Constructs a new ReqClosePowerInd.
     * @exports ReqClosePowerInd
     * @classdesc Represents a ReqClosePowerInd.
     * @implements IReqClosePowerInd
     * @constructor
     * @param {IReqClosePowerInd=} [properties] Properties to set
     */
    function ReqClosePowerInd(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqClosePowerInd instance using the specified properties.
     * @function create
     * @memberof ReqClosePowerInd
     * @static
     * @param {IReqClosePowerInd=} [properties] Properties to set
     * @returns {ReqClosePowerInd} ReqClosePowerInd instance
     */
    ReqClosePowerInd.create = function create(properties) {
        return new ReqClosePowerInd(properties);
    };
    /**
     * Encodes the specified ReqClosePowerInd message. Does not implicitly {@link ReqClosePowerInd.verify|verify} messages.
     * @function encode
     * @memberof ReqClosePowerInd
     * @static
     * @param {IReqClosePowerInd} message ReqClosePowerInd message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqClosePowerInd.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqClosePowerInd message, length delimited. Does not implicitly {@link ReqClosePowerInd.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqClosePowerInd
     * @static
     * @param {IReqClosePowerInd} message ReqClosePowerInd message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqClosePowerInd.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqClosePowerInd message from the specified reader or buffer.
     * @function decode
     * @memberof ReqClosePowerInd
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqClosePowerInd} ReqClosePowerInd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqClosePowerInd.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqClosePowerInd();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqClosePowerInd message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqClosePowerInd
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqClosePowerInd} ReqClosePowerInd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqClosePowerInd.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqClosePowerInd message.
     * @function verify
     * @memberof ReqClosePowerInd
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqClosePowerInd.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqClosePowerInd message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqClosePowerInd
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqClosePowerInd} ReqClosePowerInd
     */
    ReqClosePowerInd.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqClosePowerInd)
            return object;
        return new $root.ReqClosePowerInd();
    };
    /**
     * Creates a plain object from a ReqClosePowerInd message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqClosePowerInd
     * @static
     * @param {ReqClosePowerInd} message ReqClosePowerInd
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqClosePowerInd.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqClosePowerInd to JSON.
     * @function toJSON
     * @memberof ReqClosePowerInd
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqClosePowerInd.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqClosePowerInd
     * @function getTypeUrl
     * @memberof ReqClosePowerInd
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqClosePowerInd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqClosePowerInd";
    };
    return ReqClosePowerInd;
})();
$root.ReqReboot = (function () {
    /**
     * Properties of a ReqReboot.
     * @exports IReqReboot
     * @interface IReqReboot
     */
    /**
     * Constructs a new ReqReboot.
     * @exports ReqReboot
     * @classdesc Represents a ReqReboot.
     * @implements IReqReboot
     * @constructor
     * @param {IReqReboot=} [properties] Properties to set
     */
    function ReqReboot(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqReboot instance using the specified properties.
     * @function create
     * @memberof ReqReboot
     * @static
     * @param {IReqReboot=} [properties] Properties to set
     * @returns {ReqReboot} ReqReboot instance
     */
    ReqReboot.create = function create(properties) {
        return new ReqReboot(properties);
    };
    /**
     * Encodes the specified ReqReboot message. Does not implicitly {@link ReqReboot.verify|verify} messages.
     * @function encode
     * @memberof ReqReboot
     * @static
     * @param {IReqReboot} message ReqReboot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqReboot.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqReboot message, length delimited. Does not implicitly {@link ReqReboot.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqReboot
     * @static
     * @param {IReqReboot} message ReqReboot message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqReboot.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqReboot message from the specified reader or buffer.
     * @function decode
     * @memberof ReqReboot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqReboot} ReqReboot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqReboot.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqReboot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqReboot message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqReboot
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqReboot} ReqReboot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqReboot.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqReboot message.
     * @function verify
     * @memberof ReqReboot
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqReboot.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqReboot message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqReboot
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqReboot} ReqReboot
     */
    ReqReboot.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqReboot)
            return object;
        return new $root.ReqReboot();
    };
    /**
     * Creates a plain object from a ReqReboot message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqReboot
     * @static
     * @param {ReqReboot} message ReqReboot
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqReboot.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqReboot to JSON.
     * @function toJSON
     * @memberof ReqReboot
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqReboot.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqReboot
     * @function getTypeUrl
     * @memberof ReqReboot
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqReboot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqReboot";
    };
    return ReqReboot;
})();
$root.ReqSetTime = (function () {
    /**
     * Properties of a ReqSetTime.
     * @exports IReqSetTime
     * @interface IReqSetTime
     * @property {number|Long|null} [timestamp] ReqSetTime timestamp
     */
    /**
     * Constructs a new ReqSetTime.
     * @exports ReqSetTime
     * @classdesc Represents a ReqSetTime.
     * @implements IReqSetTime
     * @constructor
     * @param {IReqSetTime=} [properties] Properties to set
     */
    function ReqSetTime(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetTime timestamp.
     * @member {number|Long} timestamp
     * @memberof ReqSetTime
     * @instance
     */
    ReqSetTime.prototype.timestamp = $util.Long
        ? $util.Long.fromBits(0, 0, true)
        : 0;
    /**
     * Creates a new ReqSetTime instance using the specified properties.
     * @function create
     * @memberof ReqSetTime
     * @static
     * @param {IReqSetTime=} [properties] Properties to set
     * @returns {ReqSetTime} ReqSetTime instance
     */
    ReqSetTime.create = function create(properties) {
        return new ReqSetTime(properties);
    };
    /**
     * Encodes the specified ReqSetTime message. Does not implicitly {@link ReqSetTime.verify|verify} messages.
     * @function encode
     * @memberof ReqSetTime
     * @static
     * @param {IReqSetTime} message ReqSetTime message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetTime.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null &&
            Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.timestamp);
        return writer;
    };
    /**
     * Encodes the specified ReqSetTime message, length delimited. Does not implicitly {@link ReqSetTime.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetTime
     * @static
     * @param {IReqSetTime} message ReqSetTime message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetTime.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetTime message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetTime
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetTime} ReqSetTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetTime.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetTime();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.timestamp = reader.uint64();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetTime message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetTime
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetTime} ReqSetTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetTime.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetTime message.
     * @function verify
     * @memberof ReqSetTime
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetTime.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) &&
                !(message.timestamp &&
                    $util.isInteger(message.timestamp.low) &&
                    $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        return null;
    };
    /**
     * Creates a ReqSetTime message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetTime
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetTime} ReqSetTime
     */
    ReqSetTime.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetTime)
            return object;
        var message = new $root.ReqSetTime();
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        return message;
    };
    /**
     * Creates a plain object from a ReqSetTime message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetTime
     * @static
     * @param {ReqSetTime} message ReqSetTime
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetTime.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp =
                    options.longs === String
                        ? long.toString()
                        : options.longs === Number
                            ? long.toNumber()
                            : long;
            }
            else
                object.timestamp = options.longs === String ? "0" : 0;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp =
                    options.longs === String
                        ? String(message.timestamp)
                        : message.timestamp;
            else
                object.timestamp =
                    options.longs === String
                        ? $util.Long.prototype.toString.call(message.timestamp)
                        : options.longs === Number
                            ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true)
                            : message.timestamp;
        return object;
    };
    /**
     * Converts this ReqSetTime to JSON.
     * @function toJSON
     * @memberof ReqSetTime
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetTime.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetTime
     * @function getTypeUrl
     * @memberof ReqSetTime
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetTime.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetTime";
    };
    return ReqSetTime;
})();
$root.ReqSetTimezone = (function () {
    /**
     * Properties of a ReqSetTimezone.
     * @exports IReqSetTimezone
     * @interface IReqSetTimezone
     * @property {string|null} [timezone] ReqSetTimezone timezone
     */
    /**
     * Constructs a new ReqSetTimezone.
     * @exports ReqSetTimezone
     * @classdesc Represents a ReqSetTimezone.
     * @implements IReqSetTimezone
     * @constructor
     * @param {IReqSetTimezone=} [properties] Properties to set
     */
    function ReqSetTimezone(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetTimezone timezone.
     * @member {string} timezone
     * @memberof ReqSetTimezone
     * @instance
     */
    ReqSetTimezone.prototype.timezone = "";
    /**
     * Creates a new ReqSetTimezone instance using the specified properties.
     * @function create
     * @memberof ReqSetTimezone
     * @static
     * @param {IReqSetTimezone=} [properties] Properties to set
     * @returns {ReqSetTimezone} ReqSetTimezone instance
     */
    ReqSetTimezone.create = function create(properties) {
        return new ReqSetTimezone(properties);
    };
    /**
     * Encodes the specified ReqSetTimezone message. Does not implicitly {@link ReqSetTimezone.verify|verify} messages.
     * @function encode
     * @memberof ReqSetTimezone
     * @static
     * @param {IReqSetTimezone} message ReqSetTimezone message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetTimezone.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timezone != null &&
            Object.hasOwnProperty.call(message, "timezone"))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.timezone);
        return writer;
    };
    /**
     * Encodes the specified ReqSetTimezone message, length delimited. Does not implicitly {@link ReqSetTimezone.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetTimezone
     * @static
     * @param {IReqSetTimezone} message ReqSetTimezone message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetTimezone.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetTimezone message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetTimezone
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetTimezone} ReqSetTimezone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetTimezone.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetTimezone();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.timezone = reader.string();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetTimezone message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetTimezone
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetTimezone} ReqSetTimezone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetTimezone.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetTimezone message.
     * @function verify
     * @memberof ReqSetTimezone
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetTimezone.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timezone != null && message.hasOwnProperty("timezone"))
            if (!$util.isString(message.timezone))
                return "timezone: string expected";
        return null;
    };
    /**
     * Creates a ReqSetTimezone message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetTimezone
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetTimezone} ReqSetTimezone
     */
    ReqSetTimezone.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetTimezone)
            return object;
        var message = new $root.ReqSetTimezone();
        if (object.timezone != null)
            message.timezone = String(object.timezone);
        return message;
    };
    /**
     * Creates a plain object from a ReqSetTimezone message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetTimezone
     * @static
     * @param {ReqSetTimezone} message ReqSetTimezone
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetTimezone.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.timezone = "";
        if (message.timezone != null && message.hasOwnProperty("timezone"))
            object.timezone = message.timezone;
        return object;
    };
    /**
     * Converts this ReqSetTimezone to JSON.
     * @function toJSON
     * @memberof ReqSetTimezone
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetTimezone.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetTimezone
     * @function getTypeUrl
     * @memberof ReqSetTimezone
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetTimezone.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetTimezone";
    };
    return ReqSetTimezone;
})();
$root.ReqSetMtpMode = (function () {
    /**
     * Properties of a ReqSetMtpMode.
     * @exports IReqSetMtpMode
     * @interface IReqSetMtpMode
     * @property {number|null} [mode] ReqSetMtpMode mode
     */
    /**
     * Constructs a new ReqSetMtpMode.
     * @exports ReqSetMtpMode
     * @classdesc Represents a ReqSetMtpMode.
     * @implements IReqSetMtpMode
     * @constructor
     * @param {IReqSetMtpMode=} [properties] Properties to set
     */
    function ReqSetMtpMode(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetMtpMode mode.
     * @member {number} mode
     * @memberof ReqSetMtpMode
     * @instance
     */
    ReqSetMtpMode.prototype.mode = 0;
    /**
     * Creates a new ReqSetMtpMode instance using the specified properties.
     * @function create
     * @memberof ReqSetMtpMode
     * @static
     * @param {IReqSetMtpMode=} [properties] Properties to set
     * @returns {ReqSetMtpMode} ReqSetMtpMode instance
     */
    ReqSetMtpMode.create = function create(properties) {
        return new ReqSetMtpMode(properties);
    };
    /**
     * Encodes the specified ReqSetMtpMode message. Does not implicitly {@link ReqSetMtpMode.verify|verify} messages.
     * @function encode
     * @memberof ReqSetMtpMode
     * @static
     * @param {IReqSetMtpMode} message ReqSetMtpMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetMtpMode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.mode);
        return writer;
    };
    /**
     * Encodes the specified ReqSetMtpMode message, length delimited. Does not implicitly {@link ReqSetMtpMode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetMtpMode
     * @static
     * @param {IReqSetMtpMode} message ReqSetMtpMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetMtpMode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetMtpMode message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetMtpMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetMtpMode} ReqSetMtpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetMtpMode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetMtpMode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.mode = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetMtpMode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetMtpMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetMtpMode} ReqSetMtpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetMtpMode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetMtpMode message.
     * @function verify
     * @memberof ReqSetMtpMode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetMtpMode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            if (!$util.isInteger(message.mode))
                return "mode: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetMtpMode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetMtpMode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetMtpMode} ReqSetMtpMode
     */
    ReqSetMtpMode.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetMtpMode)
            return object;
        var message = new $root.ReqSetMtpMode();
        if (object.mode != null)
            message.mode = object.mode | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetMtpMode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetMtpMode
     * @static
     * @param {ReqSetMtpMode} message ReqSetMtpMode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetMtpMode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mode = 0;
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = message.mode;
        return object;
    };
    /**
     * Converts this ReqSetMtpMode to JSON.
     * @function toJSON
     * @memberof ReqSetMtpMode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetMtpMode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetMtpMode
     * @function getTypeUrl
     * @memberof ReqSetMtpMode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetMtpMode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetMtpMode";
    };
    return ReqSetMtpMode;
})();
$root.ReqSetCpuMode = (function () {
    /**
     * Properties of a ReqSetCpuMode.
     * @exports IReqSetCpuMode
     * @interface IReqSetCpuMode
     * @property {number|null} [mode] ReqSetCpuMode mode
     */
    /**
     * Constructs a new ReqSetCpuMode.
     * @exports ReqSetCpuMode
     * @classdesc Represents a ReqSetCpuMode.
     * @implements IReqSetCpuMode
     * @constructor
     * @param {IReqSetCpuMode=} [properties] Properties to set
     */
    function ReqSetCpuMode(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqSetCpuMode mode.
     * @member {number} mode
     * @memberof ReqSetCpuMode
     * @instance
     */
    ReqSetCpuMode.prototype.mode = 0;
    /**
     * Creates a new ReqSetCpuMode instance using the specified properties.
     * @function create
     * @memberof ReqSetCpuMode
     * @static
     * @param {IReqSetCpuMode=} [properties] Properties to set
     * @returns {ReqSetCpuMode} ReqSetCpuMode instance
     */
    ReqSetCpuMode.create = function create(properties) {
        return new ReqSetCpuMode(properties);
    };
    /**
     * Encodes the specified ReqSetCpuMode message. Does not implicitly {@link ReqSetCpuMode.verify|verify} messages.
     * @function encode
     * @memberof ReqSetCpuMode
     * @static
     * @param {IReqSetCpuMode} message ReqSetCpuMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetCpuMode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.mode);
        return writer;
    };
    /**
     * Encodes the specified ReqSetCpuMode message, length delimited. Does not implicitly {@link ReqSetCpuMode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqSetCpuMode
     * @static
     * @param {IReqSetCpuMode} message ReqSetCpuMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqSetCpuMode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqSetCpuMode message from the specified reader or buffer.
     * @function decode
     * @memberof ReqSetCpuMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqSetCpuMode} ReqSetCpuMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetCpuMode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqSetCpuMode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.mode = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqSetCpuMode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqSetCpuMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqSetCpuMode} ReqSetCpuMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqSetCpuMode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqSetCpuMode message.
     * @function verify
     * @memberof ReqSetCpuMode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqSetCpuMode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            if (!$util.isInteger(message.mode))
                return "mode: integer expected";
        return null;
    };
    /**
     * Creates a ReqSetCpuMode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqSetCpuMode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqSetCpuMode} ReqSetCpuMode
     */
    ReqSetCpuMode.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqSetCpuMode)
            return object;
        var message = new $root.ReqSetCpuMode();
        if (object.mode != null)
            message.mode = object.mode | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqSetCpuMode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqSetCpuMode
     * @static
     * @param {ReqSetCpuMode} message ReqSetCpuMode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqSetCpuMode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.mode = 0;
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = message.mode;
        return object;
    };
    /**
     * Converts this ReqSetCpuMode to JSON.
     * @function toJSON
     * @memberof ReqSetCpuMode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqSetCpuMode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqSetCpuMode
     * @function getTypeUrl
     * @memberof ReqSetCpuMode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqSetCpuMode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqSetCpuMode";
    };
    return ReqSetCpuMode;
})();
$root.ReqStartTrack = (function () {
    /**
     * Properties of a ReqStartTrack.
     * @exports IReqStartTrack
     * @interface IReqStartTrack
     * @property {number|null} [x] ReqStartTrack x
     * @property {number|null} [y] ReqStartTrack y
     * @property {number|null} [w] ReqStartTrack w
     * @property {number|null} [h] ReqStartTrack h
     */
    /**
     * Constructs a new ReqStartTrack.
     * @exports ReqStartTrack
     * @classdesc Represents a ReqStartTrack.
     * @implements IReqStartTrack
     * @constructor
     * @param {IReqStartTrack=} [properties] Properties to set
     */
    function ReqStartTrack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * ReqStartTrack x.
     * @member {number} x
     * @memberof ReqStartTrack
     * @instance
     */
    ReqStartTrack.prototype.x = 0;
    /**
     * ReqStartTrack y.
     * @member {number} y
     * @memberof ReqStartTrack
     * @instance
     */
    ReqStartTrack.prototype.y = 0;
    /**
     * ReqStartTrack w.
     * @member {number} w
     * @memberof ReqStartTrack
     * @instance
     */
    ReqStartTrack.prototype.w = 0;
    /**
     * ReqStartTrack h.
     * @member {number} h
     * @memberof ReqStartTrack
     * @instance
     */
    ReqStartTrack.prototype.h = 0;
    /**
     * Creates a new ReqStartTrack instance using the specified properties.
     * @function create
     * @memberof ReqStartTrack
     * @static
     * @param {IReqStartTrack=} [properties] Properties to set
     * @returns {ReqStartTrack} ReqStartTrack instance
     */
    ReqStartTrack.create = function create(properties) {
        return new ReqStartTrack(properties);
    };
    /**
     * Encodes the specified ReqStartTrack message. Does not implicitly {@link ReqStartTrack.verify|verify} messages.
     * @function encode
     * @memberof ReqStartTrack
     * @static
     * @param {IReqStartTrack} message ReqStartTrack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStartTrack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.y);
        if (message.w != null && Object.hasOwnProperty.call(message, "w"))
            writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.w);
        if (message.h != null && Object.hasOwnProperty.call(message, "h"))
            writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.h);
        return writer;
    };
    /**
     * Encodes the specified ReqStartTrack message, length delimited. Does not implicitly {@link ReqStartTrack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStartTrack
     * @static
     * @param {IReqStartTrack} message ReqStartTrack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStartTrack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStartTrack message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStartTrack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStartTrack} ReqStartTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStartTrack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStartTrack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    message.x = reader.int32();
                    break;
                }
                case 2: {
                    message.y = reader.int32();
                    break;
                }
                case 3: {
                    message.w = reader.int32();
                    break;
                }
                case 4: {
                    message.h = reader.int32();
                    break;
                }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStartTrack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStartTrack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStartTrack} ReqStartTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStartTrack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStartTrack message.
     * @function verify
     * @memberof ReqStartTrack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStartTrack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (!$util.isInteger(message.x))
                return "x: integer expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (!$util.isInteger(message.y))
                return "y: integer expected";
        if (message.w != null && message.hasOwnProperty("w"))
            if (!$util.isInteger(message.w))
                return "w: integer expected";
        if (message.h != null && message.hasOwnProperty("h"))
            if (!$util.isInteger(message.h))
                return "h: integer expected";
        return null;
    };
    /**
     * Creates a ReqStartTrack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStartTrack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStartTrack} ReqStartTrack
     */
    ReqStartTrack.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStartTrack)
            return object;
        var message = new $root.ReqStartTrack();
        if (object.x != null)
            message.x = object.x | 0;
        if (object.y != null)
            message.y = object.y | 0;
        if (object.w != null)
            message.w = object.w | 0;
        if (object.h != null)
            message.h = object.h | 0;
        return message;
    };
    /**
     * Creates a plain object from a ReqStartTrack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStartTrack
     * @static
     * @param {ReqStartTrack} message ReqStartTrack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStartTrack.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
            object.w = 0;
            object.h = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = message.y;
        if (message.w != null && message.hasOwnProperty("w"))
            object.w = message.w;
        if (message.h != null && message.hasOwnProperty("h"))
            object.h = message.h;
        return object;
    };
    /**
     * Converts this ReqStartTrack to JSON.
     * @function toJSON
     * @memberof ReqStartTrack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStartTrack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStartTrack
     * @function getTypeUrl
     * @memberof ReqStartTrack
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStartTrack.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStartTrack";
    };
    return ReqStartTrack;
})();
$root.ReqStopTrack = (function () {
    /**
     * Properties of a ReqStopTrack.
     * @exports IReqStopTrack
     * @interface IReqStopTrack
     */
    /**
     * Constructs a new ReqStopTrack.
     * @exports ReqStopTrack
     * @classdesc Represents a ReqStopTrack.
     * @implements IReqStopTrack
     * @constructor
     * @param {IReqStopTrack=} [properties] Properties to set
     */
    function ReqStopTrack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqStopTrack instance using the specified properties.
     * @function create
     * @memberof ReqStopTrack
     * @static
     * @param {IReqStopTrack=} [properties] Properties to set
     * @returns {ReqStopTrack} ReqStopTrack instance
     */
    ReqStopTrack.create = function create(properties) {
        return new ReqStopTrack(properties);
    };
    /**
     * Encodes the specified ReqStopTrack message. Does not implicitly {@link ReqStopTrack.verify|verify} messages.
     * @function encode
     * @memberof ReqStopTrack
     * @static
     * @param {IReqStopTrack} message ReqStopTrack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopTrack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqStopTrack message, length delimited. Does not implicitly {@link ReqStopTrack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqStopTrack
     * @static
     * @param {IReqStopTrack} message ReqStopTrack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqStopTrack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqStopTrack message from the specified reader or buffer.
     * @function decode
     * @memberof ReqStopTrack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqStopTrack} ReqStopTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopTrack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqStopTrack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqStopTrack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqStopTrack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqStopTrack} ReqStopTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqStopTrack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqStopTrack message.
     * @function verify
     * @memberof ReqStopTrack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqStopTrack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqStopTrack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqStopTrack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqStopTrack} ReqStopTrack
     */
    ReqStopTrack.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqStopTrack)
            return object;
        return new $root.ReqStopTrack();
    };
    /**
     * Creates a plain object from a ReqStopTrack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqStopTrack
     * @static
     * @param {ReqStopTrack} message ReqStopTrack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqStopTrack.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqStopTrack to JSON.
     * @function toJSON
     * @memberof ReqStopTrack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqStopTrack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqStopTrack
     * @function getTypeUrl
     * @memberof ReqStopTrack
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqStopTrack.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqStopTrack";
    };
    return ReqStopTrack;
})();
$root.ReqPauseTrack = (function () {
    /**
     * Properties of a ReqPauseTrack.
     * @exports IReqPauseTrack
     * @interface IReqPauseTrack
     */
    /**
     * Constructs a new ReqPauseTrack.
     * @exports ReqPauseTrack
     * @classdesc Represents a ReqPauseTrack.
     * @implements IReqPauseTrack
     * @constructor
     * @param {IReqPauseTrack=} [properties] Properties to set
     */
    function ReqPauseTrack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqPauseTrack instance using the specified properties.
     * @function create
     * @memberof ReqPauseTrack
     * @static
     * @param {IReqPauseTrack=} [properties] Properties to set
     * @returns {ReqPauseTrack} ReqPauseTrack instance
     */
    ReqPauseTrack.create = function create(properties) {
        return new ReqPauseTrack(properties);
    };
    /**
     * Encodes the specified ReqPauseTrack message. Does not implicitly {@link ReqPauseTrack.verify|verify} messages.
     * @function encode
     * @memberof ReqPauseTrack
     * @static
     * @param {IReqPauseTrack} message ReqPauseTrack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPauseTrack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqPauseTrack message, length delimited. Does not implicitly {@link ReqPauseTrack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqPauseTrack
     * @static
     * @param {IReqPauseTrack} message ReqPauseTrack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqPauseTrack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqPauseTrack message from the specified reader or buffer.
     * @function decode
     * @memberof ReqPauseTrack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqPauseTrack} ReqPauseTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPauseTrack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqPauseTrack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqPauseTrack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqPauseTrack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqPauseTrack} ReqPauseTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqPauseTrack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqPauseTrack message.
     * @function verify
     * @memberof ReqPauseTrack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqPauseTrack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqPauseTrack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqPauseTrack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqPauseTrack} ReqPauseTrack
     */
    ReqPauseTrack.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqPauseTrack)
            return object;
        return new $root.ReqPauseTrack();
    };
    /**
     * Creates a plain object from a ReqPauseTrack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqPauseTrack
     * @static
     * @param {ReqPauseTrack} message ReqPauseTrack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqPauseTrack.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqPauseTrack to JSON.
     * @function toJSON
     * @memberof ReqPauseTrack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqPauseTrack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqPauseTrack
     * @function getTypeUrl
     * @memberof ReqPauseTrack
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqPauseTrack.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqPauseTrack";
    };
    return ReqPauseTrack;
})();
$root.ReqContinueTrack = (function () {
    /**
     * Properties of a ReqContinueTrack.
     * @exports IReqContinueTrack
     * @interface IReqContinueTrack
     */
    /**
     * Constructs a new ReqContinueTrack.
     * @exports ReqContinueTrack
     * @classdesc Represents a ReqContinueTrack.
     * @implements IReqContinueTrack
     * @constructor
     * @param {IReqContinueTrack=} [properties] Properties to set
     */
    function ReqContinueTrack(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Creates a new ReqContinueTrack instance using the specified properties.
     * @function create
     * @memberof ReqContinueTrack
     * @static
     * @param {IReqContinueTrack=} [properties] Properties to set
     * @returns {ReqContinueTrack} ReqContinueTrack instance
     */
    ReqContinueTrack.create = function create(properties) {
        return new ReqContinueTrack(properties);
    };
    /**
     * Encodes the specified ReqContinueTrack message. Does not implicitly {@link ReqContinueTrack.verify|verify} messages.
     * @function encode
     * @memberof ReqContinueTrack
     * @static
     * @param {IReqContinueTrack} message ReqContinueTrack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqContinueTrack.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };
    /**
     * Encodes the specified ReqContinueTrack message, length delimited. Does not implicitly {@link ReqContinueTrack.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqContinueTrack
     * @static
     * @param {IReqContinueTrack} message ReqContinueTrack message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqContinueTrack.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a ReqContinueTrack message from the specified reader or buffer.
     * @function decode
     * @memberof ReqContinueTrack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqContinueTrack} ReqContinueTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqContinueTrack.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqContinueTrack();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes a ReqContinueTrack message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqContinueTrack
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqContinueTrack} ReqContinueTrack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqContinueTrack.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a ReqContinueTrack message.
     * @function verify
     * @memberof ReqContinueTrack
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqContinueTrack.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };
    /**
     * Creates a ReqContinueTrack message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqContinueTrack
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqContinueTrack} ReqContinueTrack
     */
    ReqContinueTrack.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqContinueTrack)
            return object;
        return new $root.ReqContinueTrack();
    };
    /**
     * Creates a plain object from a ReqContinueTrack message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqContinueTrack
     * @static
     * @param {ReqContinueTrack} message ReqContinueTrack
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqContinueTrack.toObject = function toObject() {
        return {};
    };
    /**
     * Converts this ReqContinueTrack to JSON.
     * @function toJSON
     * @memberof ReqContinueTrack
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqContinueTrack.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for ReqContinueTrack
     * @function getTypeUrl
     * @memberof ReqContinueTrack
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReqContinueTrack.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReqContinueTrack";
    };
    return ReqContinueTrack;
})();
export default $root;
