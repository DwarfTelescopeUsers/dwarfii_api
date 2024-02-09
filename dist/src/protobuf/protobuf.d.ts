import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a ReqStartCalibration. */
export interface IReqStartCalibration {
}

/** Represents a ReqStartCalibration. */
export class ReqStartCalibration implements IReqStartCalibration {

    /**
     * Constructs a new ReqStartCalibration.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStartCalibration);

    /**
     * Creates a new ReqStartCalibration instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStartCalibration instance
     */
    public static create(properties?: IReqStartCalibration): ReqStartCalibration;

    /**
     * Encodes the specified ReqStartCalibration message. Does not implicitly {@link ReqStartCalibration.verify|verify} messages.
     * @param message ReqStartCalibration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStartCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStartCalibration message, length delimited. Does not implicitly {@link ReqStartCalibration.verify|verify} messages.
     * @param message ReqStartCalibration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStartCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStartCalibration message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStartCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStartCalibration;

    /**
     * Decodes a ReqStartCalibration message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStartCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStartCalibration;

    /**
     * Verifies a ReqStartCalibration message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStartCalibration message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStartCalibration
     */
    public static fromObject(object: { [k: string]: any }): ReqStartCalibration;

    /**
     * Creates a plain object from a ReqStartCalibration message. Also converts values to other types if specified.
     * @param message ReqStartCalibration
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStartCalibration, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStartCalibration to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStartCalibration
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopCalibration. */
export interface IReqStopCalibration {
}

/** Represents a ReqStopCalibration. */
export class ReqStopCalibration implements IReqStopCalibration {

    /**
     * Constructs a new ReqStopCalibration.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopCalibration);

    /**
     * Creates a new ReqStopCalibration instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopCalibration instance
     */
    public static create(properties?: IReqStopCalibration): ReqStopCalibration;

    /**
     * Encodes the specified ReqStopCalibration message. Does not implicitly {@link ReqStopCalibration.verify|verify} messages.
     * @param message ReqStopCalibration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopCalibration message, length delimited. Does not implicitly {@link ReqStopCalibration.verify|verify} messages.
     * @param message ReqStopCalibration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopCalibration message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopCalibration;

    /**
     * Decodes a ReqStopCalibration message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopCalibration;

    /**
     * Verifies a ReqStopCalibration message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopCalibration message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopCalibration
     */
    public static fromObject(object: { [k: string]: any }): ReqStopCalibration;

    /**
     * Creates a plain object from a ReqStopCalibration message. Also converts values to other types if specified.
     * @param message ReqStopCalibration
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopCalibration, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopCalibration to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopCalibration
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqGotoDSO. */
export interface IReqGotoDSO {

    /** ReqGotoDSO ra */
    ra?: (number|null);

    /** ReqGotoDSO dec */
    dec?: (number|null);

    /** ReqGotoDSO targetName */
    targetName?: (string|null);
}

/** Represents a ReqGotoDSO. */
export class ReqGotoDSO implements IReqGotoDSO {

    /**
     * Constructs a new ReqGotoDSO.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGotoDSO);

    /** ReqGotoDSO ra. */
    public ra: number;

    /** ReqGotoDSO dec. */
    public dec: number;

    /** ReqGotoDSO targetName. */
    public targetName: string;

    /**
     * Creates a new ReqGotoDSO instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGotoDSO instance
     */
    public static create(properties?: IReqGotoDSO): ReqGotoDSO;

    /**
     * Encodes the specified ReqGotoDSO message. Does not implicitly {@link ReqGotoDSO.verify|verify} messages.
     * @param message ReqGotoDSO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGotoDSO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGotoDSO message, length delimited. Does not implicitly {@link ReqGotoDSO.verify|verify} messages.
     * @param message ReqGotoDSO message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGotoDSO, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGotoDSO message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGotoDSO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGotoDSO;

    /**
     * Decodes a ReqGotoDSO message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGotoDSO
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGotoDSO;

    /**
     * Verifies a ReqGotoDSO message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGotoDSO message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGotoDSO
     */
    public static fromObject(object: { [k: string]: any }): ReqGotoDSO;

    /**
     * Creates a plain object from a ReqGotoDSO message. Also converts values to other types if specified.
     * @param message ReqGotoDSO
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGotoDSO, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGotoDSO to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGotoDSO
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqGotoSolarSystem. */
export interface IReqGotoSolarSystem {

    /** ReqGotoSolarSystem index */
    index?: (number|null);

    /** ReqGotoSolarSystem lon */
    lon?: (number|null);

    /** ReqGotoSolarSystem lat */
    lat?: (number|null);

    /** ReqGotoSolarSystem targetName */
    targetName?: (string|null);
}

/** Represents a ReqGotoSolarSystem. */
export class ReqGotoSolarSystem implements IReqGotoSolarSystem {

    /**
     * Constructs a new ReqGotoSolarSystem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGotoSolarSystem);

    /** ReqGotoSolarSystem index. */
    public index: number;

    /** ReqGotoSolarSystem lon. */
    public lon: number;

    /** ReqGotoSolarSystem lat. */
    public lat: number;

    /** ReqGotoSolarSystem targetName. */
    public targetName: string;

    /**
     * Creates a new ReqGotoSolarSystem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGotoSolarSystem instance
     */
    public static create(properties?: IReqGotoSolarSystem): ReqGotoSolarSystem;

    /**
     * Encodes the specified ReqGotoSolarSystem message. Does not implicitly {@link ReqGotoSolarSystem.verify|verify} messages.
     * @param message ReqGotoSolarSystem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGotoSolarSystem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGotoSolarSystem message, length delimited. Does not implicitly {@link ReqGotoSolarSystem.verify|verify} messages.
     * @param message ReqGotoSolarSystem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGotoSolarSystem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGotoSolarSystem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGotoSolarSystem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGotoSolarSystem;

    /**
     * Decodes a ReqGotoSolarSystem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGotoSolarSystem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGotoSolarSystem;

    /**
     * Verifies a ReqGotoSolarSystem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGotoSolarSystem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGotoSolarSystem
     */
    public static fromObject(object: { [k: string]: any }): ReqGotoSolarSystem;

    /**
     * Creates a plain object from a ReqGotoSolarSystem message. Also converts values to other types if specified.
     * @param message ReqGotoSolarSystem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGotoSolarSystem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGotoSolarSystem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGotoSolarSystem
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopGoto. */
export interface IReqStopGoto {
}

/** Represents a ReqStopGoto. */
export class ReqStopGoto implements IReqStopGoto {

    /**
     * Constructs a new ReqStopGoto.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopGoto);

    /**
     * Creates a new ReqStopGoto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopGoto instance
     */
    public static create(properties?: IReqStopGoto): ReqStopGoto;

    /**
     * Encodes the specified ReqStopGoto message. Does not implicitly {@link ReqStopGoto.verify|verify} messages.
     * @param message ReqStopGoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopGoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopGoto message, length delimited. Does not implicitly {@link ReqStopGoto.verify|verify} messages.
     * @param message ReqStopGoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopGoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopGoto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopGoto;

    /**
     * Decodes a ReqStopGoto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopGoto;

    /**
     * Verifies a ReqStopGoto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopGoto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopGoto
     */
    public static fromObject(object: { [k: string]: any }): ReqStopGoto;

    /**
     * Creates a plain object from a ReqStopGoto message. Also converts values to other types if specified.
     * @param message ReqStopGoto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopGoto, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopGoto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopGoto
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqCaptureRawLiveStacking. */
export interface IReqCaptureRawLiveStacking {
}

/** Represents a ReqCaptureRawLiveStacking. */
export class ReqCaptureRawLiveStacking implements IReqCaptureRawLiveStacking {

    /**
     * Constructs a new ReqCaptureRawLiveStacking.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCaptureRawLiveStacking);

    /**
     * Creates a new ReqCaptureRawLiveStacking instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCaptureRawLiveStacking instance
     */
    public static create(properties?: IReqCaptureRawLiveStacking): ReqCaptureRawLiveStacking;

    /**
     * Encodes the specified ReqCaptureRawLiveStacking message. Does not implicitly {@link ReqCaptureRawLiveStacking.verify|verify} messages.
     * @param message ReqCaptureRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCaptureRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCaptureRawLiveStacking message, length delimited. Does not implicitly {@link ReqCaptureRawLiveStacking.verify|verify} messages.
     * @param message ReqCaptureRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCaptureRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCaptureRawLiveStacking message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCaptureRawLiveStacking;

    /**
     * Decodes a ReqCaptureRawLiveStacking message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCaptureRawLiveStacking;

    /**
     * Verifies a ReqCaptureRawLiveStacking message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCaptureRawLiveStacking message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCaptureRawLiveStacking
     */
    public static fromObject(object: { [k: string]: any }): ReqCaptureRawLiveStacking;

    /**
     * Creates a plain object from a ReqCaptureRawLiveStacking message. Also converts values to other types if specified.
     * @param message ReqCaptureRawLiveStacking
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCaptureRawLiveStacking, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCaptureRawLiveStacking to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCaptureRawLiveStacking
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopCaptureRawLiveStacking. */
export interface IReqStopCaptureRawLiveStacking {
}

/** Represents a ReqStopCaptureRawLiveStacking. */
export class ReqStopCaptureRawLiveStacking implements IReqStopCaptureRawLiveStacking {

    /**
     * Constructs a new ReqStopCaptureRawLiveStacking.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopCaptureRawLiveStacking);

    /**
     * Creates a new ReqStopCaptureRawLiveStacking instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopCaptureRawLiveStacking instance
     */
    public static create(properties?: IReqStopCaptureRawLiveStacking): ReqStopCaptureRawLiveStacking;

    /**
     * Encodes the specified ReqStopCaptureRawLiveStacking message. Does not implicitly {@link ReqStopCaptureRawLiveStacking.verify|verify} messages.
     * @param message ReqStopCaptureRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopCaptureRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopCaptureRawLiveStacking message, length delimited. Does not implicitly {@link ReqStopCaptureRawLiveStacking.verify|verify} messages.
     * @param message ReqStopCaptureRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopCaptureRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopCaptureRawLiveStacking message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopCaptureRawLiveStacking;

    /**
     * Decodes a ReqStopCaptureRawLiveStacking message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopCaptureRawLiveStacking;

    /**
     * Verifies a ReqStopCaptureRawLiveStacking message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopCaptureRawLiveStacking message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopCaptureRawLiveStacking
     */
    public static fromObject(object: { [k: string]: any }): ReqStopCaptureRawLiveStacking;

    /**
     * Creates a plain object from a ReqStopCaptureRawLiveStacking message. Also converts values to other types if specified.
     * @param message ReqStopCaptureRawLiveStacking
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopCaptureRawLiveStacking, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopCaptureRawLiveStacking to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopCaptureRawLiveStacking
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqCheckDarkFrame. */
export interface IReqCheckDarkFrame {
}

/** Represents a ReqCheckDarkFrame. */
export class ReqCheckDarkFrame implements IReqCheckDarkFrame {

    /**
     * Constructs a new ReqCheckDarkFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCheckDarkFrame);

    /**
     * Creates a new ReqCheckDarkFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCheckDarkFrame instance
     */
    public static create(properties?: IReqCheckDarkFrame): ReqCheckDarkFrame;

    /**
     * Encodes the specified ReqCheckDarkFrame message. Does not implicitly {@link ReqCheckDarkFrame.verify|verify} messages.
     * @param message ReqCheckDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCheckDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCheckDarkFrame message, length delimited. Does not implicitly {@link ReqCheckDarkFrame.verify|verify} messages.
     * @param message ReqCheckDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCheckDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCheckDarkFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCheckDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCheckDarkFrame;

    /**
     * Decodes a ReqCheckDarkFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCheckDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCheckDarkFrame;

    /**
     * Verifies a ReqCheckDarkFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCheckDarkFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCheckDarkFrame
     */
    public static fromObject(object: { [k: string]: any }): ReqCheckDarkFrame;

    /**
     * Creates a plain object from a ReqCheckDarkFrame message. Also converts values to other types if specified.
     * @param message ReqCheckDarkFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCheckDarkFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCheckDarkFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCheckDarkFrame
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ResCheckDarkFrame. */
export interface IResCheckDarkFrame {

    /** ResCheckDarkFrame progress */
    progress?: (number|null);

    /** ResCheckDarkFrame code */
    code?: (number|null);
}

/** Represents a ResCheckDarkFrame. */
export class ResCheckDarkFrame implements IResCheckDarkFrame {

    /**
     * Constructs a new ResCheckDarkFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResCheckDarkFrame);

    /** ResCheckDarkFrame progress. */
    public progress: number;

    /** ResCheckDarkFrame code. */
    public code: number;

    /**
     * Creates a new ResCheckDarkFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResCheckDarkFrame instance
     */
    public static create(properties?: IResCheckDarkFrame): ResCheckDarkFrame;

    /**
     * Encodes the specified ResCheckDarkFrame message. Does not implicitly {@link ResCheckDarkFrame.verify|verify} messages.
     * @param message ResCheckDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResCheckDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResCheckDarkFrame message, length delimited. Does not implicitly {@link ResCheckDarkFrame.verify|verify} messages.
     * @param message ResCheckDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResCheckDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResCheckDarkFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResCheckDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResCheckDarkFrame;

    /**
     * Decodes a ResCheckDarkFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResCheckDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResCheckDarkFrame;

    /**
     * Verifies a ResCheckDarkFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResCheckDarkFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResCheckDarkFrame
     */
    public static fromObject(object: { [k: string]: any }): ResCheckDarkFrame;

    /**
     * Creates a plain object from a ResCheckDarkFrame message. Also converts values to other types if specified.
     * @param message ResCheckDarkFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResCheckDarkFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResCheckDarkFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResCheckDarkFrame
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqCaptureDarkFrame. */
export interface IReqCaptureDarkFrame {

    /** ReqCaptureDarkFrame reshoot */
    reshoot?: (number|null);
}

/** Represents a ReqCaptureDarkFrame. */
export class ReqCaptureDarkFrame implements IReqCaptureDarkFrame {

    /**
     * Constructs a new ReqCaptureDarkFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCaptureDarkFrame);

    /** ReqCaptureDarkFrame reshoot. */
    public reshoot: number;

    /**
     * Creates a new ReqCaptureDarkFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCaptureDarkFrame instance
     */
    public static create(properties?: IReqCaptureDarkFrame): ReqCaptureDarkFrame;

    /**
     * Encodes the specified ReqCaptureDarkFrame message. Does not implicitly {@link ReqCaptureDarkFrame.verify|verify} messages.
     * @param message ReqCaptureDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCaptureDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCaptureDarkFrame message, length delimited. Does not implicitly {@link ReqCaptureDarkFrame.verify|verify} messages.
     * @param message ReqCaptureDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCaptureDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCaptureDarkFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCaptureDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCaptureDarkFrame;

    /**
     * Decodes a ReqCaptureDarkFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCaptureDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCaptureDarkFrame;

    /**
     * Verifies a ReqCaptureDarkFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCaptureDarkFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCaptureDarkFrame
     */
    public static fromObject(object: { [k: string]: any }): ReqCaptureDarkFrame;

    /**
     * Creates a plain object from a ReqCaptureDarkFrame message. Also converts values to other types if specified.
     * @param message ReqCaptureDarkFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCaptureDarkFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCaptureDarkFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCaptureDarkFrame
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopCaptureDarkFrame. */
export interface IReqStopCaptureDarkFrame {
}

/** Represents a ReqStopCaptureDarkFrame. */
export class ReqStopCaptureDarkFrame implements IReqStopCaptureDarkFrame {

    /**
     * Constructs a new ReqStopCaptureDarkFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopCaptureDarkFrame);

    /**
     * Creates a new ReqStopCaptureDarkFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopCaptureDarkFrame instance
     */
    public static create(properties?: IReqStopCaptureDarkFrame): ReqStopCaptureDarkFrame;

    /**
     * Encodes the specified ReqStopCaptureDarkFrame message. Does not implicitly {@link ReqStopCaptureDarkFrame.verify|verify} messages.
     * @param message ReqStopCaptureDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopCaptureDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopCaptureDarkFrame message, length delimited. Does not implicitly {@link ReqStopCaptureDarkFrame.verify|verify} messages.
     * @param message ReqStopCaptureDarkFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopCaptureDarkFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopCaptureDarkFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopCaptureDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopCaptureDarkFrame;

    /**
     * Decodes a ReqStopCaptureDarkFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopCaptureDarkFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopCaptureDarkFrame;

    /**
     * Verifies a ReqStopCaptureDarkFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopCaptureDarkFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopCaptureDarkFrame
     */
    public static fromObject(object: { [k: string]: any }): ReqStopCaptureDarkFrame;

    /**
     * Creates a plain object from a ReqStopCaptureDarkFrame message. Also converts values to other types if specified.
     * @param message ReqStopCaptureDarkFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopCaptureDarkFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopCaptureDarkFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopCaptureDarkFrame
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqGoLive. */
export interface IReqGoLive {
}

/** Represents a ReqGoLive. */
export class ReqGoLive implements IReqGoLive {

    /**
     * Constructs a new ReqGoLive.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGoLive);

    /**
     * Creates a new ReqGoLive instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGoLive instance
     */
    public static create(properties?: IReqGoLive): ReqGoLive;

    /**
     * Encodes the specified ReqGoLive message. Does not implicitly {@link ReqGoLive.verify|verify} messages.
     * @param message ReqGoLive message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGoLive, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGoLive message, length delimited. Does not implicitly {@link ReqGoLive.verify|verify} messages.
     * @param message ReqGoLive message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGoLive, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGoLive message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGoLive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGoLive;

    /**
     * Decodes a ReqGoLive message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGoLive
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGoLive;

    /**
     * Verifies a ReqGoLive message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGoLive message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGoLive
     */
    public static fromObject(object: { [k: string]: any }): ReqGoLive;

    /**
     * Creates a plain object from a ReqGoLive message. Also converts values to other types if specified.
     * @param message ReqGoLive
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGoLive, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGoLive to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGoLive
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqTrackSpecialTarget. */
export interface IReqTrackSpecialTarget {

    /** ReqTrackSpecialTarget index */
    index?: (number|null);

    /** ReqTrackSpecialTarget lon */
    lon?: (number|null);

    /** ReqTrackSpecialTarget lat */
    lat?: (number|null);
}

/** Represents a ReqTrackSpecialTarget. */
export class ReqTrackSpecialTarget implements IReqTrackSpecialTarget {

    /**
     * Constructs a new ReqTrackSpecialTarget.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqTrackSpecialTarget);

    /** ReqTrackSpecialTarget index. */
    public index: number;

    /** ReqTrackSpecialTarget lon. */
    public lon: number;

    /** ReqTrackSpecialTarget lat. */
    public lat: number;

    /**
     * Creates a new ReqTrackSpecialTarget instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqTrackSpecialTarget instance
     */
    public static create(properties?: IReqTrackSpecialTarget): ReqTrackSpecialTarget;

    /**
     * Encodes the specified ReqTrackSpecialTarget message. Does not implicitly {@link ReqTrackSpecialTarget.verify|verify} messages.
     * @param message ReqTrackSpecialTarget message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqTrackSpecialTarget, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqTrackSpecialTarget message, length delimited. Does not implicitly {@link ReqTrackSpecialTarget.verify|verify} messages.
     * @param message ReqTrackSpecialTarget message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqTrackSpecialTarget, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqTrackSpecialTarget message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqTrackSpecialTarget
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqTrackSpecialTarget;

    /**
     * Decodes a ReqTrackSpecialTarget message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqTrackSpecialTarget
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqTrackSpecialTarget;

    /**
     * Verifies a ReqTrackSpecialTarget message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqTrackSpecialTarget message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqTrackSpecialTarget
     */
    public static fromObject(object: { [k: string]: any }): ReqTrackSpecialTarget;

    /**
     * Creates a plain object from a ReqTrackSpecialTarget message. Also converts values to other types if specified.
     * @param message ReqTrackSpecialTarget
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqTrackSpecialTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqTrackSpecialTarget to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqTrackSpecialTarget
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ReqStopTrackSpecialTarget. */
export interface IReqStopTrackSpecialTarget {
}

/** Represents a ReqStopTrackSpecialTarget. */
export class ReqStopTrackSpecialTarget implements IReqStopTrackSpecialTarget {

    /**
     * Constructs a new ReqStopTrackSpecialTarget.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopTrackSpecialTarget);

    /**
     * Creates a new ReqStopTrackSpecialTarget instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopTrackSpecialTarget instance
     */
    public static create(properties?: IReqStopTrackSpecialTarget): ReqStopTrackSpecialTarget;

    /**
     * Encodes the specified ReqStopTrackSpecialTarget message. Does not implicitly {@link ReqStopTrackSpecialTarget.verify|verify} messages.
     * @param message ReqStopTrackSpecialTarget message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopTrackSpecialTarget, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopTrackSpecialTarget message, length delimited. Does not implicitly {@link ReqStopTrackSpecialTarget.verify|verify} messages.
     * @param message ReqStopTrackSpecialTarget message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopTrackSpecialTarget, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopTrackSpecialTarget message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopTrackSpecialTarget
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopTrackSpecialTarget;

    /**
     * Decodes a ReqStopTrackSpecialTarget message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopTrackSpecialTarget
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopTrackSpecialTarget;

    /**
     * Verifies a ReqStopTrackSpecialTarget message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopTrackSpecialTarget message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopTrackSpecialTarget
     */
    public static fromObject(object: { [k: string]: any }): ReqStopTrackSpecialTarget;

    /**
     * Creates a plain object from a ReqStopTrackSpecialTarget message. Also converts values to other types if specified.
     * @param message ReqStopTrackSpecialTarget
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopTrackSpecialTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopTrackSpecialTarget to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopTrackSpecialTarget
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** WsMajorVersion enum. */
export enum WsMajorVersion {
    WS_MAJOR_VERSION_UNKNOWN = 0,
    WS_MAJOR_VERSION_NUMBER = 1
}

/** WsMinorVersion enum. */
export enum WsMinorVersion {
    WS_MINOR_VERSION_UNKNOWN = 0,
    WS_MINOR_VERSION_NUMBER = 1
}

/** Represents a WsPacket. */
export class WsPacket implements IWsPacket {

    /**
     * Constructs a new WsPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWsPacket);

    /** WsPacket majorVersion. */
    public majorVersion: number;

    /** WsPacket minorVersion. */
    public minorVersion: number;

    /** WsPacket deviceId. */
    public deviceId: number;

    /** WsPacket moduleId. */
    public moduleId: number;

    /** WsPacket cmd. */
    public cmd: number;

    /** WsPacket type. */
    public type: number;

    /** WsPacket data. */
    public data: Uint8Array;

    /** WsPacket clientId. */
    public clientId: string;

    /**
     * Creates a new WsPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WsPacket instance
     */
    public static create(properties?: IWsPacket): WsPacket;

    /**
     * Encodes the specified WsPacket message. Does not implicitly {@link WsPacket.verify|verify} messages.
     * @param message WsPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWsPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WsPacket message, length delimited. Does not implicitly {@link WsPacket.verify|verify} messages.
     * @param message WsPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWsPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WsPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WsPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WsPacket;

    /**
     * Decodes a WsPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WsPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WsPacket;

    /**
     * Verifies a WsPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WsPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WsPacket
     */
    public static fromObject(object: { [k: string]: any }): WsPacket;

    /**
     * Creates a plain object from a WsPacket message. Also converts values to other types if specified.
     * @param message WsPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WsPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WsPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for WsPacket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ComResponse. */
export class ComResponse implements IComResponse {

    /**
     * Constructs a new ComResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IComResponse);

    /** ComResponse code. */
    public code: number;

    /**
     * Creates a new ComResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ComResponse instance
     */
    public static create(properties?: IComResponse): ComResponse;

    /**
     * Encodes the specified ComResponse message. Does not implicitly {@link ComResponse.verify|verify} messages.
     * @param message ComResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IComResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ComResponse message, length delimited. Does not implicitly {@link ComResponse.verify|verify} messages.
     * @param message ComResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IComResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ComResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ComResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ComResponse;

    /**
     * Decodes a ComResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ComResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ComResponse;

    /**
     * Verifies a ComResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ComResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ComResponse
     */
    public static fromObject(object: { [k: string]: any }): ComResponse;

    /**
     * Creates a plain object from a ComResponse message. Also converts values to other types if specified.
     * @param message ComResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ComResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ComResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ComResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ComResWithInt. */
export class ComResWithInt implements IComResWithInt {

    /**
     * Constructs a new ComResWithInt.
     * @param [properties] Properties to set
     */
    constructor(properties?: IComResWithInt);

    /** ComResWithInt value. */
    public value: number;

    /** ComResWithInt code. */
    public code: number;

    /**
     * Creates a new ComResWithInt instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ComResWithInt instance
     */
    public static create(properties?: IComResWithInt): ComResWithInt;

    /**
     * Encodes the specified ComResWithInt message. Does not implicitly {@link ComResWithInt.verify|verify} messages.
     * @param message ComResWithInt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IComResWithInt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ComResWithInt message, length delimited. Does not implicitly {@link ComResWithInt.verify|verify} messages.
     * @param message ComResWithInt message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IComResWithInt, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ComResWithInt message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ComResWithInt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ComResWithInt;

    /**
     * Decodes a ComResWithInt message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ComResWithInt
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ComResWithInt;

    /**
     * Verifies a ComResWithInt message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ComResWithInt message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ComResWithInt
     */
    public static fromObject(object: { [k: string]: any }): ComResWithInt;

    /**
     * Creates a plain object from a ComResWithInt message. Also converts values to other types if specified.
     * @param message ComResWithInt
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ComResWithInt, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ComResWithInt to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ComResWithInt
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ComResWithDouble. */
export class ComResWithDouble implements IComResWithDouble {

    /**
     * Constructs a new ComResWithDouble.
     * @param [properties] Properties to set
     */
    constructor(properties?: IComResWithDouble);

    /** ComResWithDouble value. */
    public value: number;

    /** ComResWithDouble code. */
    public code: number;

    /**
     * Creates a new ComResWithDouble instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ComResWithDouble instance
     */
    public static create(properties?: IComResWithDouble): ComResWithDouble;

    /**
     * Encodes the specified ComResWithDouble message. Does not implicitly {@link ComResWithDouble.verify|verify} messages.
     * @param message ComResWithDouble message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IComResWithDouble, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ComResWithDouble message, length delimited. Does not implicitly {@link ComResWithDouble.verify|verify} messages.
     * @param message ComResWithDouble message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IComResWithDouble, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ComResWithDouble message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ComResWithDouble
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ComResWithDouble;

    /**
     * Decodes a ComResWithDouble message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ComResWithDouble
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ComResWithDouble;

    /**
     * Verifies a ComResWithDouble message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ComResWithDouble message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ComResWithDouble
     */
    public static fromObject(object: { [k: string]: any }): ComResWithDouble;

    /**
     * Creates a plain object from a ComResWithDouble message. Also converts values to other types if specified.
     * @param message ComResWithDouble
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ComResWithDouble, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ComResWithDouble to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ComResWithDouble
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CommonParam. */
export class CommonParam implements ICommonParam {

    /**
     * Constructs a new CommonParam.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommonParam);

    /** CommonParam hasAuto. */
    public hasAuto: boolean;

    /** CommonParam autoMode. */
    public autoMode: number;

    /** CommonParam id. */
    public id: number;

    /** CommonParam modeIndex. */
    public modeIndex: number;

    /** CommonParam index. */
    public index: number;

    /** CommonParam continueValue. */
    public continueValue: number;

    /**
     * Creates a new CommonParam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommonParam instance
     */
    public static create(properties?: ICommonParam): CommonParam;

    /**
     * Encodes the specified CommonParam message. Does not implicitly {@link CommonParam.verify|verify} messages.
     * @param message CommonParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommonParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommonParam message, length delimited. Does not implicitly {@link CommonParam.verify|verify} messages.
     * @param message CommonParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommonParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommonParam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommonParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommonParam;

    /**
     * Decodes a CommonParam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommonParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommonParam;

    /**
     * Verifies a CommonParam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommonParam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommonParam
     */
    public static fromObject(object: { [k: string]: any }): CommonParam;

    /**
     * Creates a plain object from a CommonParam message. Also converts values to other types if specified.
     * @param message CommonParam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommonParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommonParam to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CommonParam
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqOpenCamera. */
export class ReqOpenCamera implements IReqOpenCamera {

    /**
     * Constructs a new ReqOpenCamera.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqOpenCamera);

    /** ReqOpenCamera binning. */
    public binning: boolean;

    /**
     * Creates a new ReqOpenCamera instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqOpenCamera instance
     */
    public static create(properties?: IReqOpenCamera): ReqOpenCamera;

    /**
     * Encodes the specified ReqOpenCamera message. Does not implicitly {@link ReqOpenCamera.verify|verify} messages.
     * @param message ReqOpenCamera message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqOpenCamera, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqOpenCamera message, length delimited. Does not implicitly {@link ReqOpenCamera.verify|verify} messages.
     * @param message ReqOpenCamera message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqOpenCamera, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqOpenCamera message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqOpenCamera
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqOpenCamera;

    /**
     * Decodes a ReqOpenCamera message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqOpenCamera
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqOpenCamera;

    /**
     * Verifies a ReqOpenCamera message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqOpenCamera message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqOpenCamera
     */
    public static fromObject(object: { [k: string]: any }): ReqOpenCamera;

    /**
     * Creates a plain object from a ReqOpenCamera message. Also converts values to other types if specified.
     * @param message ReqOpenCamera
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqOpenCamera, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqOpenCamera to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqOpenCamera
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqCloseCamera. */
export class ReqCloseCamera implements IReqCloseCamera {

    /**
     * Constructs a new ReqCloseCamera.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCloseCamera);

    /**
     * Creates a new ReqCloseCamera instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCloseCamera instance
     */
    public static create(properties?: IReqCloseCamera): ReqCloseCamera;

    /**
     * Encodes the specified ReqCloseCamera message. Does not implicitly {@link ReqCloseCamera.verify|verify} messages.
     * @param message ReqCloseCamera message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCloseCamera, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCloseCamera message, length delimited. Does not implicitly {@link ReqCloseCamera.verify|verify} messages.
     * @param message ReqCloseCamera message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCloseCamera, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCloseCamera message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCloseCamera
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCloseCamera;

    /**
     * Decodes a ReqCloseCamera message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCloseCamera
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCloseCamera;

    /**
     * Verifies a ReqCloseCamera message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCloseCamera message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCloseCamera
     */
    public static fromObject(object: { [k: string]: any }): ReqCloseCamera;

    /**
     * Creates a plain object from a ReqCloseCamera message. Also converts values to other types if specified.
     * @param message ReqCloseCamera
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCloseCamera, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCloseCamera to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCloseCamera
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqPhoto. */
export class ReqPhoto implements IReqPhoto {

    /**
     * Constructs a new ReqPhoto.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPhoto);

    /**
     * Creates a new ReqPhoto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPhoto instance
     */
    public static create(properties?: IReqPhoto): ReqPhoto;

    /**
     * Encodes the specified ReqPhoto message. Does not implicitly {@link ReqPhoto.verify|verify} messages.
     * @param message ReqPhoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPhoto message, length delimited. Does not implicitly {@link ReqPhoto.verify|verify} messages.
     * @param message ReqPhoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPhoto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPhoto;

    /**
     * Decodes a ReqPhoto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPhoto;

    /**
     * Verifies a ReqPhoto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPhoto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPhoto
     */
    public static fromObject(object: { [k: string]: any }): ReqPhoto;

    /**
     * Creates a plain object from a ReqPhoto message. Also converts values to other types if specified.
     * @param message ReqPhoto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPhoto, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPhoto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqPhoto
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqBurstPhoto. */
export class ReqBurstPhoto implements IReqBurstPhoto {

    /**
     * Constructs a new ReqBurstPhoto.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqBurstPhoto);

    /** ReqBurstPhoto count. */
    public count: number;

    /**
     * Creates a new ReqBurstPhoto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqBurstPhoto instance
     */
    public static create(properties?: IReqBurstPhoto): ReqBurstPhoto;

    /**
     * Encodes the specified ReqBurstPhoto message. Does not implicitly {@link ReqBurstPhoto.verify|verify} messages.
     * @param message ReqBurstPhoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqBurstPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqBurstPhoto message, length delimited. Does not implicitly {@link ReqBurstPhoto.verify|verify} messages.
     * @param message ReqBurstPhoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqBurstPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqBurstPhoto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqBurstPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqBurstPhoto;

    /**
     * Decodes a ReqBurstPhoto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqBurstPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqBurstPhoto;

    /**
     * Verifies a ReqBurstPhoto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqBurstPhoto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqBurstPhoto
     */
    public static fromObject(object: { [k: string]: any }): ReqBurstPhoto;

    /**
     * Creates a plain object from a ReqBurstPhoto message. Also converts values to other types if specified.
     * @param message ReqBurstPhoto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqBurstPhoto, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqBurstPhoto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqBurstPhoto
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStopBurstPhoto. */
export class ReqStopBurstPhoto implements IReqStopBurstPhoto {

    /**
     * Constructs a new ReqStopBurstPhoto.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopBurstPhoto);

    /**
     * Creates a new ReqStopBurstPhoto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopBurstPhoto instance
     */
    public static create(properties?: IReqStopBurstPhoto): ReqStopBurstPhoto;

    /**
     * Encodes the specified ReqStopBurstPhoto message. Does not implicitly {@link ReqStopBurstPhoto.verify|verify} messages.
     * @param message ReqStopBurstPhoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopBurstPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopBurstPhoto message, length delimited. Does not implicitly {@link ReqStopBurstPhoto.verify|verify} messages.
     * @param message ReqStopBurstPhoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopBurstPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopBurstPhoto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopBurstPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopBurstPhoto;

    /**
     * Decodes a ReqStopBurstPhoto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopBurstPhoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopBurstPhoto;

    /**
     * Verifies a ReqStopBurstPhoto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopBurstPhoto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopBurstPhoto
     */
    public static fromObject(object: { [k: string]: any }): ReqStopBurstPhoto;

    /**
     * Creates a plain object from a ReqStopBurstPhoto message. Also converts values to other types if specified.
     * @param message ReqStopBurstPhoto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopBurstPhoto, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopBurstPhoto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopBurstPhoto
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStartRecord. */
export class ReqStartRecord implements IReqStartRecord {

    /**
     * Constructs a new ReqStartRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStartRecord);

    /**
     * Creates a new ReqStartRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStartRecord instance
     */
    public static create(properties?: IReqStartRecord): ReqStartRecord;

    /**
     * Encodes the specified ReqStartRecord message. Does not implicitly {@link ReqStartRecord.verify|verify} messages.
     * @param message ReqStartRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStartRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStartRecord message, length delimited. Does not implicitly {@link ReqStartRecord.verify|verify} messages.
     * @param message ReqStartRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStartRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStartRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStartRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStartRecord;

    /**
     * Decodes a ReqStartRecord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStartRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStartRecord;

    /**
     * Verifies a ReqStartRecord message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStartRecord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStartRecord
     */
    public static fromObject(object: { [k: string]: any }): ReqStartRecord;

    /**
     * Creates a plain object from a ReqStartRecord message. Also converts values to other types if specified.
     * @param message ReqStartRecord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStartRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStartRecord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStartRecord
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStopRecord. */
export class ReqStopRecord implements IReqStopRecord {

    /**
     * Constructs a new ReqStopRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopRecord);

    /**
     * Creates a new ReqStopRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopRecord instance
     */
    public static create(properties?: IReqStopRecord): ReqStopRecord;

    /**
     * Encodes the specified ReqStopRecord message. Does not implicitly {@link ReqStopRecord.verify|verify} messages.
     * @param message ReqStopRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopRecord message, length delimited. Does not implicitly {@link ReqStopRecord.verify|verify} messages.
     * @param message ReqStopRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopRecord;

    /**
     * Decodes a ReqStopRecord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopRecord;

    /**
     * Verifies a ReqStopRecord message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopRecord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopRecord
     */
    public static fromObject(object: { [k: string]: any }): ReqStopRecord;

    /**
     * Creates a plain object from a ReqStopRecord message. Also converts values to other types if specified.
     * @param message ReqStopRecord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopRecord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopRecord
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetExpMode. */
export class ReqSetExpMode implements IReqSetExpMode {

    /**
     * Constructs a new ReqSetExpMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetExpMode);

    /** ReqSetExpMode mode. */
    public mode: number;

    /**
     * Creates a new ReqSetExpMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetExpMode instance
     */
    public static create(properties?: IReqSetExpMode): ReqSetExpMode;

    /**
     * Encodes the specified ReqSetExpMode message. Does not implicitly {@link ReqSetExpMode.verify|verify} messages.
     * @param message ReqSetExpMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetExpMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetExpMode message, length delimited. Does not implicitly {@link ReqSetExpMode.verify|verify} messages.
     * @param message ReqSetExpMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetExpMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetExpMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetExpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetExpMode;

    /**
     * Decodes a ReqSetExpMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetExpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetExpMode;

    /**
     * Verifies a ReqSetExpMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetExpMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetExpMode
     */
    public static fromObject(object: { [k: string]: any }): ReqSetExpMode;

    /**
     * Creates a plain object from a ReqSetExpMode message. Also converts values to other types if specified.
     * @param message ReqSetExpMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetExpMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetExpMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetExpMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetExpMode. */
export class ReqGetExpMode implements IReqGetExpMode {

    /**
     * Constructs a new ReqGetExpMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetExpMode);

    /**
     * Creates a new ReqGetExpMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetExpMode instance
     */
    public static create(properties?: IReqGetExpMode): ReqGetExpMode;

    /**
     * Encodes the specified ReqGetExpMode message. Does not implicitly {@link ReqGetExpMode.verify|verify} messages.
     * @param message ReqGetExpMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetExpMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetExpMode message, length delimited. Does not implicitly {@link ReqGetExpMode.verify|verify} messages.
     * @param message ReqGetExpMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetExpMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetExpMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetExpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetExpMode;

    /**
     * Decodes a ReqGetExpMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetExpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetExpMode;

    /**
     * Verifies a ReqGetExpMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetExpMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetExpMode
     */
    public static fromObject(object: { [k: string]: any }): ReqGetExpMode;

    /**
     * Creates a plain object from a ReqGetExpMode message. Also converts values to other types if specified.
     * @param message ReqGetExpMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetExpMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetExpMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetExpMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetExp. */
export class ReqSetExp implements IReqSetExp {

    /**
     * Constructs a new ReqSetExp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetExp);

    /** ReqSetExp index. */
    public index: number;

    /**
     * Creates a new ReqSetExp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetExp instance
     */
    public static create(properties?: IReqSetExp): ReqSetExp;

    /**
     * Encodes the specified ReqSetExp message. Does not implicitly {@link ReqSetExp.verify|verify} messages.
     * @param message ReqSetExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetExp message, length delimited. Does not implicitly {@link ReqSetExp.verify|verify} messages.
     * @param message ReqSetExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetExp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetExp;

    /**
     * Decodes a ReqSetExp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetExp;

    /**
     * Verifies a ReqSetExp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetExp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetExp
     */
    public static fromObject(object: { [k: string]: any }): ReqSetExp;

    /**
     * Creates a plain object from a ReqSetExp message. Also converts values to other types if specified.
     * @param message ReqSetExp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetExp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetExp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetExp
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetExp. */
export class ReqGetExp implements IReqGetExp {

    /**
     * Constructs a new ReqGetExp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetExp);

    /**
     * Creates a new ReqGetExp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetExp instance
     */
    public static create(properties?: IReqGetExp): ReqGetExp;

    /**
     * Encodes the specified ReqGetExp message. Does not implicitly {@link ReqGetExp.verify|verify} messages.
     * @param message ReqGetExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetExp message, length delimited. Does not implicitly {@link ReqGetExp.verify|verify} messages.
     * @param message ReqGetExp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetExp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetExp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetExp;

    /**
     * Decodes a ReqGetExp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetExp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetExp;

    /**
     * Verifies a ReqGetExp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetExp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetExp
     */
    public static fromObject(object: { [k: string]: any }): ReqGetExp;

    /**
     * Creates a plain object from a ReqGetExp message. Also converts values to other types if specified.
     * @param message ReqGetExp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetExp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetExp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetExp
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetGainMode. */
export class ReqSetGainMode implements IReqSetGainMode {

    /**
     * Constructs a new ReqSetGainMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetGainMode);

    /** ReqSetGainMode mode. */
    public mode: number;

    /**
     * Creates a new ReqSetGainMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetGainMode instance
     */
    public static create(properties?: IReqSetGainMode): ReqSetGainMode;

    /**
     * Encodes the specified ReqSetGainMode message. Does not implicitly {@link ReqSetGainMode.verify|verify} messages.
     * @param message ReqSetGainMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetGainMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetGainMode message, length delimited. Does not implicitly {@link ReqSetGainMode.verify|verify} messages.
     * @param message ReqSetGainMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetGainMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetGainMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetGainMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetGainMode;

    /**
     * Decodes a ReqSetGainMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetGainMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetGainMode;

    /**
     * Verifies a ReqSetGainMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetGainMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetGainMode
     */
    public static fromObject(object: { [k: string]: any }): ReqSetGainMode;

    /**
     * Creates a plain object from a ReqSetGainMode message. Also converts values to other types if specified.
     * @param message ReqSetGainMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetGainMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetGainMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetGainMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetGainMode. */
export class ReqGetGainMode implements IReqGetGainMode {

    /**
     * Constructs a new ReqGetGainMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetGainMode);

    /**
     * Creates a new ReqGetGainMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetGainMode instance
     */
    public static create(properties?: IReqGetGainMode): ReqGetGainMode;

    /**
     * Encodes the specified ReqGetGainMode message. Does not implicitly {@link ReqGetGainMode.verify|verify} messages.
     * @param message ReqGetGainMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetGainMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetGainMode message, length delimited. Does not implicitly {@link ReqGetGainMode.verify|verify} messages.
     * @param message ReqGetGainMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetGainMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetGainMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetGainMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetGainMode;

    /**
     * Decodes a ReqGetGainMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetGainMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetGainMode;

    /**
     * Verifies a ReqGetGainMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetGainMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetGainMode
     */
    public static fromObject(object: { [k: string]: any }): ReqGetGainMode;

    /**
     * Creates a plain object from a ReqGetGainMode message. Also converts values to other types if specified.
     * @param message ReqGetGainMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetGainMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetGainMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetGainMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetGain. */
export class ReqSetGain implements IReqSetGain {

    /**
     * Constructs a new ReqSetGain.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetGain);

    /** ReqSetGain index. */
    public index: number;

    /**
     * Creates a new ReqSetGain instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetGain instance
     */
    public static create(properties?: IReqSetGain): ReqSetGain;

    /**
     * Encodes the specified ReqSetGain message. Does not implicitly {@link ReqSetGain.verify|verify} messages.
     * @param message ReqSetGain message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetGain, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetGain message, length delimited. Does not implicitly {@link ReqSetGain.verify|verify} messages.
     * @param message ReqSetGain message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetGain, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetGain message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetGain;

    /**
     * Decodes a ReqSetGain message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetGain;

    /**
     * Verifies a ReqSetGain message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetGain message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetGain
     */
    public static fromObject(object: { [k: string]: any }): ReqSetGain;

    /**
     * Creates a plain object from a ReqSetGain message. Also converts values to other types if specified.
     * @param message ReqSetGain
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetGain, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetGain to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetGain
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetGain. */
export class ReqGetGain implements IReqGetGain {

    /**
     * Constructs a new ReqGetGain.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetGain);

    /**
     * Creates a new ReqGetGain instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetGain instance
     */
    public static create(properties?: IReqGetGain): ReqGetGain;

    /**
     * Encodes the specified ReqGetGain message. Does not implicitly {@link ReqGetGain.verify|verify} messages.
     * @param message ReqGetGain message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetGain, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetGain message, length delimited. Does not implicitly {@link ReqGetGain.verify|verify} messages.
     * @param message ReqGetGain message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetGain, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetGain message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetGain;

    /**
     * Decodes a ReqGetGain message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetGain;

    /**
     * Verifies a ReqGetGain message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetGain message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetGain
     */
    public static fromObject(object: { [k: string]: any }): ReqGetGain;

    /**
     * Creates a plain object from a ReqGetGain message. Also converts values to other types if specified.
     * @param message ReqGetGain
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetGain, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetGain to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetGain
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetBrightness. */
export class ReqSetBrightness implements IReqSetBrightness {

    /**
     * Constructs a new ReqSetBrightness.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetBrightness);

    /** ReqSetBrightness value. */
    public value: number;

    /**
     * Creates a new ReqSetBrightness instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetBrightness instance
     */
    public static create(properties?: IReqSetBrightness): ReqSetBrightness;

    /**
     * Encodes the specified ReqSetBrightness message. Does not implicitly {@link ReqSetBrightness.verify|verify} messages.
     * @param message ReqSetBrightness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetBrightness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetBrightness message, length delimited. Does not implicitly {@link ReqSetBrightness.verify|verify} messages.
     * @param message ReqSetBrightness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetBrightness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetBrightness message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetBrightness;

    /**
     * Decodes a ReqSetBrightness message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetBrightness;

    /**
     * Verifies a ReqSetBrightness message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetBrightness message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetBrightness
     */
    public static fromObject(object: { [k: string]: any }): ReqSetBrightness;

    /**
     * Creates a plain object from a ReqSetBrightness message. Also converts values to other types if specified.
     * @param message ReqSetBrightness
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetBrightness, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetBrightness to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetBrightness
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetBrightness. */
export class ReqGetBrightness implements IReqGetBrightness {

    /**
     * Constructs a new ReqGetBrightness.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetBrightness);

    /**
     * Creates a new ReqGetBrightness instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetBrightness instance
     */
    public static create(properties?: IReqGetBrightness): ReqGetBrightness;

    /**
     * Encodes the specified ReqGetBrightness message. Does not implicitly {@link ReqGetBrightness.verify|verify} messages.
     * @param message ReqGetBrightness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetBrightness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetBrightness message, length delimited. Does not implicitly {@link ReqGetBrightness.verify|verify} messages.
     * @param message ReqGetBrightness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetBrightness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetBrightness message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetBrightness;

    /**
     * Decodes a ReqGetBrightness message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetBrightness;

    /**
     * Verifies a ReqGetBrightness message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetBrightness message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetBrightness
     */
    public static fromObject(object: { [k: string]: any }): ReqGetBrightness;

    /**
     * Creates a plain object from a ReqGetBrightness message. Also converts values to other types if specified.
     * @param message ReqGetBrightness
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetBrightness, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetBrightness to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetBrightness
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetContrast. */
export class ReqSetContrast implements IReqSetContrast {

    /**
     * Constructs a new ReqSetContrast.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetContrast);

    /** ReqSetContrast value. */
    public value: number;

    /**
     * Creates a new ReqSetContrast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetContrast instance
     */
    public static create(properties?: IReqSetContrast): ReqSetContrast;

    /**
     * Encodes the specified ReqSetContrast message. Does not implicitly {@link ReqSetContrast.verify|verify} messages.
     * @param message ReqSetContrast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetContrast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetContrast message, length delimited. Does not implicitly {@link ReqSetContrast.verify|verify} messages.
     * @param message ReqSetContrast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetContrast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetContrast message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetContrast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetContrast;

    /**
     * Decodes a ReqSetContrast message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetContrast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetContrast;

    /**
     * Verifies a ReqSetContrast message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetContrast message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetContrast
     */
    public static fromObject(object: { [k: string]: any }): ReqSetContrast;

    /**
     * Creates a plain object from a ReqSetContrast message. Also converts values to other types if specified.
     * @param message ReqSetContrast
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetContrast, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetContrast to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetContrast
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetContrast. */
export class ReqGetContrast implements IReqGetContrast {

    /**
     * Constructs a new ReqGetContrast.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetContrast);

    /**
     * Creates a new ReqGetContrast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetContrast instance
     */
    public static create(properties?: IReqGetContrast): ReqGetContrast;

    /**
     * Encodes the specified ReqGetContrast message. Does not implicitly {@link ReqGetContrast.verify|verify} messages.
     * @param message ReqGetContrast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetContrast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetContrast message, length delimited. Does not implicitly {@link ReqGetContrast.verify|verify} messages.
     * @param message ReqGetContrast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetContrast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetContrast message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetContrast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetContrast;

    /**
     * Decodes a ReqGetContrast message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetContrast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetContrast;

    /**
     * Verifies a ReqGetContrast message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetContrast message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetContrast
     */
    public static fromObject(object: { [k: string]: any }): ReqGetContrast;

    /**
     * Creates a plain object from a ReqGetContrast message. Also converts values to other types if specified.
     * @param message ReqGetContrast
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetContrast, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetContrast to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetContrast
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetHue. */
export class ReqSetHue implements IReqSetHue {

    /**
     * Constructs a new ReqSetHue.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetHue);

    /** ReqSetHue value. */
    public value: number;

    /**
     * Creates a new ReqSetHue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetHue instance
     */
    public static create(properties?: IReqSetHue): ReqSetHue;

    /**
     * Encodes the specified ReqSetHue message. Does not implicitly {@link ReqSetHue.verify|verify} messages.
     * @param message ReqSetHue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetHue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetHue message, length delimited. Does not implicitly {@link ReqSetHue.verify|verify} messages.
     * @param message ReqSetHue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetHue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetHue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetHue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetHue;

    /**
     * Decodes a ReqSetHue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetHue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetHue;

    /**
     * Verifies a ReqSetHue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetHue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetHue
     */
    public static fromObject(object: { [k: string]: any }): ReqSetHue;

    /**
     * Creates a plain object from a ReqSetHue message. Also converts values to other types if specified.
     * @param message ReqSetHue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetHue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetHue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetHue
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetHue. */
export class ReqGetHue implements IReqGetHue {

    /**
     * Constructs a new ReqGetHue.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetHue);

    /**
     * Creates a new ReqGetHue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetHue instance
     */
    public static create(properties?: IReqGetHue): ReqGetHue;

    /**
     * Encodes the specified ReqGetHue message. Does not implicitly {@link ReqGetHue.verify|verify} messages.
     * @param message ReqGetHue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetHue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetHue message, length delimited. Does not implicitly {@link ReqGetHue.verify|verify} messages.
     * @param message ReqGetHue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetHue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetHue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetHue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetHue;

    /**
     * Decodes a ReqGetHue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetHue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetHue;

    /**
     * Verifies a ReqGetHue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetHue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetHue
     */
    public static fromObject(object: { [k: string]: any }): ReqGetHue;

    /**
     * Creates a plain object from a ReqGetHue message. Also converts values to other types if specified.
     * @param message ReqGetHue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetHue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetHue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetHue
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetSaturation. */
export class ReqSetSaturation implements IReqSetSaturation {

    /**
     * Constructs a new ReqSetSaturation.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetSaturation);

    /** ReqSetSaturation value. */
    public value: number;

    /**
     * Creates a new ReqSetSaturation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetSaturation instance
     */
    public static create(properties?: IReqSetSaturation): ReqSetSaturation;

    /**
     * Encodes the specified ReqSetSaturation message. Does not implicitly {@link ReqSetSaturation.verify|verify} messages.
     * @param message ReqSetSaturation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetSaturation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetSaturation message, length delimited. Does not implicitly {@link ReqSetSaturation.verify|verify} messages.
     * @param message ReqSetSaturation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetSaturation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetSaturation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetSaturation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetSaturation;

    /**
     * Decodes a ReqSetSaturation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetSaturation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetSaturation;

    /**
     * Verifies a ReqSetSaturation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetSaturation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetSaturation
     */
    public static fromObject(object: { [k: string]: any }): ReqSetSaturation;

    /**
     * Creates a plain object from a ReqSetSaturation message. Also converts values to other types if specified.
     * @param message ReqSetSaturation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetSaturation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetSaturation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetSaturation
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetSaturation. */
export class ReqGetSaturation implements IReqGetSaturation {

    /**
     * Constructs a new ReqGetSaturation.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetSaturation);

    /**
     * Creates a new ReqGetSaturation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetSaturation instance
     */
    public static create(properties?: IReqGetSaturation): ReqGetSaturation;

    /**
     * Encodes the specified ReqGetSaturation message. Does not implicitly {@link ReqGetSaturation.verify|verify} messages.
     * @param message ReqGetSaturation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetSaturation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetSaturation message, length delimited. Does not implicitly {@link ReqGetSaturation.verify|verify} messages.
     * @param message ReqGetSaturation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetSaturation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetSaturation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetSaturation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetSaturation;

    /**
     * Decodes a ReqGetSaturation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetSaturation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetSaturation;

    /**
     * Verifies a ReqGetSaturation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetSaturation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetSaturation
     */
    public static fromObject(object: { [k: string]: any }): ReqGetSaturation;

    /**
     * Creates a plain object from a ReqGetSaturation message. Also converts values to other types if specified.
     * @param message ReqGetSaturation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetSaturation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetSaturation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetSaturation
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetSharpness. */
export class ReqSetSharpness implements IReqSetSharpness {

    /**
     * Constructs a new ReqSetSharpness.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetSharpness);

    /** ReqSetSharpness value. */
    public value: number;

    /**
     * Creates a new ReqSetSharpness instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetSharpness instance
     */
    public static create(properties?: IReqSetSharpness): ReqSetSharpness;

    /**
     * Encodes the specified ReqSetSharpness message. Does not implicitly {@link ReqSetSharpness.verify|verify} messages.
     * @param message ReqSetSharpness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetSharpness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetSharpness message, length delimited. Does not implicitly {@link ReqSetSharpness.verify|verify} messages.
     * @param message ReqSetSharpness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetSharpness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetSharpness message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetSharpness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetSharpness;

    /**
     * Decodes a ReqSetSharpness message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetSharpness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetSharpness;

    /**
     * Verifies a ReqSetSharpness message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetSharpness message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetSharpness
     */
    public static fromObject(object: { [k: string]: any }): ReqSetSharpness;

    /**
     * Creates a plain object from a ReqSetSharpness message. Also converts values to other types if specified.
     * @param message ReqSetSharpness
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetSharpness, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetSharpness to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetSharpness
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetSharpness. */
export class ReqGetSharpness implements IReqGetSharpness {

    /**
     * Constructs a new ReqGetSharpness.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetSharpness);

    /**
     * Creates a new ReqGetSharpness instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetSharpness instance
     */
    public static create(properties?: IReqGetSharpness): ReqGetSharpness;

    /**
     * Encodes the specified ReqGetSharpness message. Does not implicitly {@link ReqGetSharpness.verify|verify} messages.
     * @param message ReqGetSharpness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetSharpness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetSharpness message, length delimited. Does not implicitly {@link ReqGetSharpness.verify|verify} messages.
     * @param message ReqGetSharpness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetSharpness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetSharpness message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetSharpness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetSharpness;

    /**
     * Decodes a ReqGetSharpness message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetSharpness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetSharpness;

    /**
     * Verifies a ReqGetSharpness message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetSharpness message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetSharpness
     */
    public static fromObject(object: { [k: string]: any }): ReqGetSharpness;

    /**
     * Creates a plain object from a ReqGetSharpness message. Also converts values to other types if specified.
     * @param message ReqGetSharpness
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetSharpness, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetSharpness to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetSharpness
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetWBMode. */
export class ReqSetWBMode implements IReqSetWBMode {

    /**
     * Constructs a new ReqSetWBMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetWBMode);

    /** ReqSetWBMode mode. */
    public mode: number;

    /**
     * Creates a new ReqSetWBMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetWBMode instance
     */
    public static create(properties?: IReqSetWBMode): ReqSetWBMode;

    /**
     * Encodes the specified ReqSetWBMode message. Does not implicitly {@link ReqSetWBMode.verify|verify} messages.
     * @param message ReqSetWBMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetWBMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetWBMode message, length delimited. Does not implicitly {@link ReqSetWBMode.verify|verify} messages.
     * @param message ReqSetWBMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetWBMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetWBMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetWBMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetWBMode;

    /**
     * Decodes a ReqSetWBMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetWBMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetWBMode;

    /**
     * Verifies a ReqSetWBMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetWBMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetWBMode
     */
    public static fromObject(object: { [k: string]: any }): ReqSetWBMode;

    /**
     * Creates a plain object from a ReqSetWBMode message. Also converts values to other types if specified.
     * @param message ReqSetWBMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetWBMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetWBMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetWBMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetWBMode. */
export class ReqGetWBMode implements IReqGetWBMode {

    /**
     * Constructs a new ReqGetWBMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetWBMode);

    /**
     * Creates a new ReqGetWBMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetWBMode instance
     */
    public static create(properties?: IReqGetWBMode): ReqGetWBMode;

    /**
     * Encodes the specified ReqGetWBMode message. Does not implicitly {@link ReqGetWBMode.verify|verify} messages.
     * @param message ReqGetWBMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetWBMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetWBMode message, length delimited. Does not implicitly {@link ReqGetWBMode.verify|verify} messages.
     * @param message ReqGetWBMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetWBMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetWBMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetWBMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetWBMode;

    /**
     * Decodes a ReqGetWBMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetWBMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetWBMode;

    /**
     * Verifies a ReqGetWBMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetWBMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetWBMode
     */
    public static fromObject(object: { [k: string]: any }): ReqGetWBMode;

    /**
     * Creates a plain object from a ReqGetWBMode message. Also converts values to other types if specified.
     * @param message ReqGetWBMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetWBMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetWBMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetWBMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetWBSence. */
export class ReqSetWBSence implements IReqSetWBSence {

    /**
     * Constructs a new ReqSetWBSence.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetWBSence);

    /** ReqSetWBSence value. */
    public value: number;

    /**
     * Creates a new ReqSetWBSence instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetWBSence instance
     */
    public static create(properties?: IReqSetWBSence): ReqSetWBSence;

    /**
     * Encodes the specified ReqSetWBSence message. Does not implicitly {@link ReqSetWBSence.verify|verify} messages.
     * @param message ReqSetWBSence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetWBSence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetWBSence message, length delimited. Does not implicitly {@link ReqSetWBSence.verify|verify} messages.
     * @param message ReqSetWBSence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetWBSence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetWBSence message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetWBSence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetWBSence;

    /**
     * Decodes a ReqSetWBSence message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetWBSence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetWBSence;

    /**
     * Verifies a ReqSetWBSence message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetWBSence message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetWBSence
     */
    public static fromObject(object: { [k: string]: any }): ReqSetWBSence;

    /**
     * Creates a plain object from a ReqSetWBSence message. Also converts values to other types if specified.
     * @param message ReqSetWBSence
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetWBSence, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetWBSence to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetWBSence
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetWBSence. */
export class ReqGetWBSence implements IReqGetWBSence {

    /**
     * Constructs a new ReqGetWBSence.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetWBSence);

    /**
     * Creates a new ReqGetWBSence instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetWBSence instance
     */
    public static create(properties?: IReqGetWBSence): ReqGetWBSence;

    /**
     * Encodes the specified ReqGetWBSence message. Does not implicitly {@link ReqGetWBSence.verify|verify} messages.
     * @param message ReqGetWBSence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetWBSence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetWBSence message, length delimited. Does not implicitly {@link ReqGetWBSence.verify|verify} messages.
     * @param message ReqGetWBSence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetWBSence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetWBSence message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetWBSence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetWBSence;

    /**
     * Decodes a ReqGetWBSence message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetWBSence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetWBSence;

    /**
     * Verifies a ReqGetWBSence message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetWBSence message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetWBSence
     */
    public static fromObject(object: { [k: string]: any }): ReqGetWBSence;

    /**
     * Creates a plain object from a ReqGetWBSence message. Also converts values to other types if specified.
     * @param message ReqGetWBSence
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetWBSence, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetWBSence to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetWBSence
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetWBCT. */
export class ReqSetWBCT implements IReqSetWBCT {

    /**
     * Constructs a new ReqSetWBCT.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetWBCT);

    /** ReqSetWBCT index. */
    public index: number;

    /**
     * Creates a new ReqSetWBCT instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetWBCT instance
     */
    public static create(properties?: IReqSetWBCT): ReqSetWBCT;

    /**
     * Encodes the specified ReqSetWBCT message. Does not implicitly {@link ReqSetWBCT.verify|verify} messages.
     * @param message ReqSetWBCT message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetWBCT, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetWBCT message, length delimited. Does not implicitly {@link ReqSetWBCT.verify|verify} messages.
     * @param message ReqSetWBCT message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetWBCT, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetWBCT message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetWBCT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetWBCT;

    /**
     * Decodes a ReqSetWBCT message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetWBCT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetWBCT;

    /**
     * Verifies a ReqSetWBCT message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetWBCT message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetWBCT
     */
    public static fromObject(object: { [k: string]: any }): ReqSetWBCT;

    /**
     * Creates a plain object from a ReqSetWBCT message. Also converts values to other types if specified.
     * @param message ReqSetWBCT
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetWBCT, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetWBCT to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetWBCT
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetWBCT. */
export class ReqGetWBCT implements IReqGetWBCT {

    /**
     * Constructs a new ReqGetWBCT.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetWBCT);

    /**
     * Creates a new ReqGetWBCT instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetWBCT instance
     */
    public static create(properties?: IReqGetWBCT): ReqGetWBCT;

    /**
     * Encodes the specified ReqGetWBCT message. Does not implicitly {@link ReqGetWBCT.verify|verify} messages.
     * @param message ReqGetWBCT message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetWBCT, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetWBCT message, length delimited. Does not implicitly {@link ReqGetWBCT.verify|verify} messages.
     * @param message ReqGetWBCT message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetWBCT, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetWBCT message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetWBCT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetWBCT;

    /**
     * Decodes a ReqGetWBCT message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetWBCT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetWBCT;

    /**
     * Verifies a ReqGetWBCT message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetWBCT message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetWBCT
     */
    public static fromObject(object: { [k: string]: any }): ReqGetWBCT;

    /**
     * Creates a plain object from a ReqGetWBCT message. Also converts values to other types if specified.
     * @param message ReqGetWBCT
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetWBCT, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetWBCT to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetWBCT
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetIrCut. */
export class ReqSetIrCut implements IReqSetIrCut {

    /**
     * Constructs a new ReqSetIrCut.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetIrCut);

    /** ReqSetIrCut value. */
    public value: number;

    /**
     * Creates a new ReqSetIrCut instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetIrCut instance
     */
    public static create(properties?: IReqSetIrCut): ReqSetIrCut;

    /**
     * Encodes the specified ReqSetIrCut message. Does not implicitly {@link ReqSetIrCut.verify|verify} messages.
     * @param message ReqSetIrCut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetIrCut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetIrCut message, length delimited. Does not implicitly {@link ReqSetIrCut.verify|verify} messages.
     * @param message ReqSetIrCut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetIrCut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetIrCut message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetIrCut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetIrCut;

    /**
     * Decodes a ReqSetIrCut message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetIrCut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetIrCut;

    /**
     * Verifies a ReqSetIrCut message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetIrCut message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetIrCut
     */
    public static fromObject(object: { [k: string]: any }): ReqSetIrCut;

    /**
     * Creates a plain object from a ReqSetIrCut message. Also converts values to other types if specified.
     * @param message ReqSetIrCut
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetIrCut, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetIrCut to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetIrCut
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetIrcut. */
export class ReqGetIrcut implements IReqGetIrcut {

    /**
     * Constructs a new ReqGetIrcut.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetIrcut);

    /**
     * Creates a new ReqGetIrcut instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetIrcut instance
     */
    public static create(properties?: IReqGetIrcut): ReqGetIrcut;

    /**
     * Encodes the specified ReqGetIrcut message. Does not implicitly {@link ReqGetIrcut.verify|verify} messages.
     * @param message ReqGetIrcut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetIrcut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetIrcut message, length delimited. Does not implicitly {@link ReqGetIrcut.verify|verify} messages.
     * @param message ReqGetIrcut message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetIrcut, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetIrcut message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetIrcut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetIrcut;

    /**
     * Decodes a ReqGetIrcut message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetIrcut
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetIrcut;

    /**
     * Verifies a ReqGetIrcut message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetIrcut message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetIrcut
     */
    public static fromObject(object: { [k: string]: any }): ReqGetIrcut;

    /**
     * Creates a plain object from a ReqGetIrcut message. Also converts values to other types if specified.
     * @param message ReqGetIrcut
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetIrcut, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetIrcut to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetIrcut
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStartTimeLapse. */
export class ReqStartTimeLapse implements IReqStartTimeLapse {

    /**
     * Constructs a new ReqStartTimeLapse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStartTimeLapse);

    /**
     * Creates a new ReqStartTimeLapse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStartTimeLapse instance
     */
    public static create(properties?: IReqStartTimeLapse): ReqStartTimeLapse;

    /**
     * Encodes the specified ReqStartTimeLapse message. Does not implicitly {@link ReqStartTimeLapse.verify|verify} messages.
     * @param message ReqStartTimeLapse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStartTimeLapse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStartTimeLapse message, length delimited. Does not implicitly {@link ReqStartTimeLapse.verify|verify} messages.
     * @param message ReqStartTimeLapse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStartTimeLapse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStartTimeLapse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStartTimeLapse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStartTimeLapse;

    /**
     * Decodes a ReqStartTimeLapse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStartTimeLapse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStartTimeLapse;

    /**
     * Verifies a ReqStartTimeLapse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStartTimeLapse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStartTimeLapse
     */
    public static fromObject(object: { [k: string]: any }): ReqStartTimeLapse;

    /**
     * Creates a plain object from a ReqStartTimeLapse message. Also converts values to other types if specified.
     * @param message ReqStartTimeLapse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStartTimeLapse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStartTimeLapse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStartTimeLapse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStopTimeLapse. */
export class ReqStopTimeLapse implements IReqStopTimeLapse {

    /**
     * Constructs a new ReqStopTimeLapse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopTimeLapse);

    /**
     * Creates a new ReqStopTimeLapse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopTimeLapse instance
     */
    public static create(properties?: IReqStopTimeLapse): ReqStopTimeLapse;

    /**
     * Encodes the specified ReqStopTimeLapse message. Does not implicitly {@link ReqStopTimeLapse.verify|verify} messages.
     * @param message ReqStopTimeLapse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopTimeLapse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopTimeLapse message, length delimited. Does not implicitly {@link ReqStopTimeLapse.verify|verify} messages.
     * @param message ReqStopTimeLapse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopTimeLapse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopTimeLapse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopTimeLapse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopTimeLapse;

    /**
     * Decodes a ReqStopTimeLapse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopTimeLapse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopTimeLapse;

    /**
     * Verifies a ReqStopTimeLapse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopTimeLapse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopTimeLapse
     */
    public static fromObject(object: { [k: string]: any }): ReqStopTimeLapse;

    /**
     * Creates a plain object from a ReqStopTimeLapse message. Also converts values to other types if specified.
     * @param message ReqStopTimeLapse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopTimeLapse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopTimeLapse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopTimeLapse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetAllParams. */
export class ReqSetAllParams implements IReqSetAllParams {

    /**
     * Constructs a new ReqSetAllParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetAllParams);

    /** ReqSetAllParams expMode. */
    public expMode: number;

    /** ReqSetAllParams expIndex. */
    public expIndex: number;

    /** ReqSetAllParams gainMode. */
    public gainMode: number;

    /** ReqSetAllParams gainIndex. */
    public gainIndex: number;

    /** ReqSetAllParams ircutValue. */
    public ircutValue: number;

    /** ReqSetAllParams wbMode. */
    public wbMode: number;

    /** ReqSetAllParams wbIndexType. */
    public wbIndexType: number;

    /** ReqSetAllParams wbIndex. */
    public wbIndex: number;

    /** ReqSetAllParams brightness. */
    public brightness: number;

    /** ReqSetAllParams contrast. */
    public contrast: number;

    /** ReqSetAllParams hue. */
    public hue: number;

    /** ReqSetAllParams saturation. */
    public saturation: number;

    /** ReqSetAllParams sharpness. */
    public sharpness: number;

    /** ReqSetAllParams jpgQuality. */
    public jpgQuality: number;

    /**
     * Creates a new ReqSetAllParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetAllParams instance
     */
    public static create(properties?: IReqSetAllParams): ReqSetAllParams;

    /**
     * Encodes the specified ReqSetAllParams message. Does not implicitly {@link ReqSetAllParams.verify|verify} messages.
     * @param message ReqSetAllParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetAllParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetAllParams message, length delimited. Does not implicitly {@link ReqSetAllParams.verify|verify} messages.
     * @param message ReqSetAllParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetAllParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetAllParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetAllParams;

    /**
     * Decodes a ReqSetAllParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetAllParams;

    /**
     * Verifies a ReqSetAllParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetAllParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetAllParams
     */
    public static fromObject(object: { [k: string]: any }): ReqSetAllParams;

    /**
     * Creates a plain object from a ReqSetAllParams message. Also converts values to other types if specified.
     * @param message ReqSetAllParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetAllParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetAllParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetAllParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetAllParams. */
export class ReqGetAllParams implements IReqGetAllParams {

    /**
     * Constructs a new ReqGetAllParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetAllParams);

    /**
     * Creates a new ReqGetAllParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetAllParams instance
     */
    public static create(properties?: IReqGetAllParams): ReqGetAllParams;

    /**
     * Encodes the specified ReqGetAllParams message. Does not implicitly {@link ReqGetAllParams.verify|verify} messages.
     * @param message ReqGetAllParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetAllParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetAllParams message, length delimited. Does not implicitly {@link ReqGetAllParams.verify|verify} messages.
     * @param message ReqGetAllParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetAllParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetAllParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetAllParams;

    /**
     * Decodes a ReqGetAllParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetAllParams;

    /**
     * Verifies a ReqGetAllParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetAllParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetAllParams
     */
    public static fromObject(object: { [k: string]: any }): ReqGetAllParams;

    /**
     * Creates a plain object from a ReqGetAllParams message. Also converts values to other types if specified.
     * @param message ReqGetAllParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetAllParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetAllParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetAllParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResGetAllParams. */
export class ResGetAllParams implements IResGetAllParams {

    /**
     * Constructs a new ResGetAllParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGetAllParams);

    /** ResGetAllParams allParams. */
    public allParams: ICommonParam[];

    /** ResGetAllParams code. */
    public code: number;

    /**
     * Creates a new ResGetAllParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGetAllParams instance
     */
    public static create(properties?: IResGetAllParams): ResGetAllParams;

    /**
     * Encodes the specified ResGetAllParams message. Does not implicitly {@link ResGetAllParams.verify|verify} messages.
     * @param message ResGetAllParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGetAllParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGetAllParams message, length delimited. Does not implicitly {@link ResGetAllParams.verify|verify} messages.
     * @param message ResGetAllParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGetAllParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGetAllParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGetAllParams;

    /**
     * Decodes a ResGetAllParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGetAllParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGetAllParams;

    /**
     * Verifies a ResGetAllParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGetAllParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGetAllParams
     */
    public static fromObject(object: { [k: string]: any }): ResGetAllParams;

    /**
     * Creates a plain object from a ResGetAllParams message. Also converts values to other types if specified.
     * @param message ResGetAllParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGetAllParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGetAllParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResGetAllParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetFeatureParams. */
export class ReqSetFeatureParams implements IReqSetFeatureParams {

    /**
     * Constructs a new ReqSetFeatureParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetFeatureParams);

    /** ReqSetFeatureParams param. */
    public param?: (ICommonParam|null);

    /**
     * Creates a new ReqSetFeatureParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetFeatureParams instance
     */
    public static create(properties?: IReqSetFeatureParams): ReqSetFeatureParams;

    /**
     * Encodes the specified ReqSetFeatureParams message. Does not implicitly {@link ReqSetFeatureParams.verify|verify} messages.
     * @param message ReqSetFeatureParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetFeatureParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetFeatureParams message, length delimited. Does not implicitly {@link ReqSetFeatureParams.verify|verify} messages.
     * @param message ReqSetFeatureParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetFeatureParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetFeatureParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetFeatureParams;

    /**
     * Decodes a ReqSetFeatureParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetFeatureParams;

    /**
     * Verifies a ReqSetFeatureParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetFeatureParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetFeatureParams
     */
    public static fromObject(object: { [k: string]: any }): ReqSetFeatureParams;

    /**
     * Creates a plain object from a ReqSetFeatureParams message. Also converts values to other types if specified.
     * @param message ReqSetFeatureParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetFeatureParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetFeatureParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetFeatureParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetAllFeatureParams. */
export class ReqGetAllFeatureParams implements IReqGetAllFeatureParams {

    /**
     * Constructs a new ReqGetAllFeatureParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetAllFeatureParams);

    /**
     * Creates a new ReqGetAllFeatureParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetAllFeatureParams instance
     */
    public static create(properties?: IReqGetAllFeatureParams): ReqGetAllFeatureParams;

    /**
     * Encodes the specified ReqGetAllFeatureParams message. Does not implicitly {@link ReqGetAllFeatureParams.verify|verify} messages.
     * @param message ReqGetAllFeatureParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetAllFeatureParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetAllFeatureParams message, length delimited. Does not implicitly {@link ReqGetAllFeatureParams.verify|verify} messages.
     * @param message ReqGetAllFeatureParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetAllFeatureParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetAllFeatureParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetAllFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetAllFeatureParams;

    /**
     * Decodes a ReqGetAllFeatureParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetAllFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetAllFeatureParams;

    /**
     * Verifies a ReqGetAllFeatureParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetAllFeatureParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetAllFeatureParams
     */
    public static fromObject(object: { [k: string]: any }): ReqGetAllFeatureParams;

    /**
     * Creates a plain object from a ReqGetAllFeatureParams message. Also converts values to other types if specified.
     * @param message ReqGetAllFeatureParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetAllFeatureParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetAllFeatureParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetAllFeatureParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResGetAllFeatureParams. */
export class ResGetAllFeatureParams implements IResGetAllFeatureParams {

    /**
     * Constructs a new ResGetAllFeatureParams.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResGetAllFeatureParams);

    /** ResGetAllFeatureParams allFeatureParams. */
    public allFeatureParams: ICommonParam[];

    /** ResGetAllFeatureParams code. */
    public code: number;

    /**
     * Creates a new ResGetAllFeatureParams instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResGetAllFeatureParams instance
     */
    public static create(properties?: IResGetAllFeatureParams): ResGetAllFeatureParams;

    /**
     * Encodes the specified ResGetAllFeatureParams message. Does not implicitly {@link ResGetAllFeatureParams.verify|verify} messages.
     * @param message ResGetAllFeatureParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResGetAllFeatureParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResGetAllFeatureParams message, length delimited. Does not implicitly {@link ResGetAllFeatureParams.verify|verify} messages.
     * @param message ResGetAllFeatureParams message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResGetAllFeatureParams, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResGetAllFeatureParams message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResGetAllFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResGetAllFeatureParams;

    /**
     * Decodes a ResGetAllFeatureParams message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResGetAllFeatureParams
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResGetAllFeatureParams;

    /**
     * Verifies a ResGetAllFeatureParams message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResGetAllFeatureParams message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResGetAllFeatureParams
     */
    public static fromObject(object: { [k: string]: any }): ResGetAllFeatureParams;

    /**
     * Creates a plain object from a ResGetAllFeatureParams message. Also converts values to other types if specified.
     * @param message ResGetAllFeatureParams
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResGetAllFeatureParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResGetAllFeatureParams to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResGetAllFeatureParams
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetSystemWorkingState. */
export class ReqGetSystemWorkingState implements IReqGetSystemWorkingState {

    /**
     * Constructs a new ReqGetSystemWorkingState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetSystemWorkingState);

    /**
     * Creates a new ReqGetSystemWorkingState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetSystemWorkingState instance
     */
    public static create(properties?: IReqGetSystemWorkingState): ReqGetSystemWorkingState;

    /**
     * Encodes the specified ReqGetSystemWorkingState message. Does not implicitly {@link ReqGetSystemWorkingState.verify|verify} messages.
     * @param message ReqGetSystemWorkingState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetSystemWorkingState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetSystemWorkingState message, length delimited. Does not implicitly {@link ReqGetSystemWorkingState.verify|verify} messages.
     * @param message ReqGetSystemWorkingState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetSystemWorkingState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetSystemWorkingState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetSystemWorkingState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetSystemWorkingState;

    /**
     * Decodes a ReqGetSystemWorkingState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetSystemWorkingState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetSystemWorkingState;

    /**
     * Verifies a ReqGetSystemWorkingState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetSystemWorkingState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetSystemWorkingState
     */
    public static fromObject(object: { [k: string]: any }): ReqGetSystemWorkingState;

    /**
     * Creates a plain object from a ReqGetSystemWorkingState message. Also converts values to other types if specified.
     * @param message ReqGetSystemWorkingState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetSystemWorkingState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetSystemWorkingState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetSystemWorkingState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetJpgQuality. */
export class ReqSetJpgQuality implements IReqSetJpgQuality {

    /**
     * Constructs a new ReqSetJpgQuality.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetJpgQuality);

    /** ReqSetJpgQuality quality. */
    public quality: number;

    /**
     * Creates a new ReqSetJpgQuality instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetJpgQuality instance
     */
    public static create(properties?: IReqSetJpgQuality): ReqSetJpgQuality;

    /**
     * Encodes the specified ReqSetJpgQuality message. Does not implicitly {@link ReqSetJpgQuality.verify|verify} messages.
     * @param message ReqSetJpgQuality message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetJpgQuality, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetJpgQuality message, length delimited. Does not implicitly {@link ReqSetJpgQuality.verify|verify} messages.
     * @param message ReqSetJpgQuality message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetJpgQuality, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetJpgQuality message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetJpgQuality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetJpgQuality;

    /**
     * Decodes a ReqSetJpgQuality message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetJpgQuality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetJpgQuality;

    /**
     * Verifies a ReqSetJpgQuality message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetJpgQuality message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetJpgQuality
     */
    public static fromObject(object: { [k: string]: any }): ReqSetJpgQuality;

    /**
     * Creates a plain object from a ReqSetJpgQuality message. Also converts values to other types if specified.
     * @param message ReqSetJpgQuality
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetJpgQuality, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetJpgQuality to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetJpgQuality
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqGetJpgQuality. */
export class ReqGetJpgQuality implements IReqGetJpgQuality {

    /**
     * Constructs a new ReqGetJpgQuality.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqGetJpgQuality);

    /**
     * Creates a new ReqGetJpgQuality instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqGetJpgQuality instance
     */
    public static create(properties?: IReqGetJpgQuality): ReqGetJpgQuality;

    /**
     * Encodes the specified ReqGetJpgQuality message. Does not implicitly {@link ReqGetJpgQuality.verify|verify} messages.
     * @param message ReqGetJpgQuality message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqGetJpgQuality, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqGetJpgQuality message, length delimited. Does not implicitly {@link ReqGetJpgQuality.verify|verify} messages.
     * @param message ReqGetJpgQuality message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqGetJpgQuality, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqGetJpgQuality message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqGetJpgQuality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqGetJpgQuality;

    /**
     * Decodes a ReqGetJpgQuality message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqGetJpgQuality
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqGetJpgQuality;

    /**
     * Verifies a ReqGetJpgQuality message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqGetJpgQuality message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqGetJpgQuality
     */
    public static fromObject(object: { [k: string]: any }): ReqGetJpgQuality;

    /**
     * Creates a plain object from a ReqGetJpgQuality message. Also converts values to other types if specified.
     * @param message ReqGetJpgQuality
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqGetJpgQuality, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqGetJpgQuality to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqGetJpgQuality
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqManualSingleStepFocus. */
export class ReqManualSingleStepFocus implements IReqManualSingleStepFocus {

    /**
     * Constructs a new ReqManualSingleStepFocus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqManualSingleStepFocus);

    /** ReqManualSingleStepFocus direction. */
    public direction: number;

    /**
     * Creates a new ReqManualSingleStepFocus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqManualSingleStepFocus instance
     */
    public static create(properties?: IReqManualSingleStepFocus): ReqManualSingleStepFocus;

    /**
     * Encodes the specified ReqManualSingleStepFocus message. Does not implicitly {@link ReqManualSingleStepFocus.verify|verify} messages.
     * @param message ReqManualSingleStepFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqManualSingleStepFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqManualSingleStepFocus message, length delimited. Does not implicitly {@link ReqManualSingleStepFocus.verify|verify} messages.
     * @param message ReqManualSingleStepFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqManualSingleStepFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqManualSingleStepFocus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqManualSingleStepFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqManualSingleStepFocus;

    /**
     * Decodes a ReqManualSingleStepFocus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqManualSingleStepFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqManualSingleStepFocus;

    /**
     * Verifies a ReqManualSingleStepFocus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqManualSingleStepFocus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqManualSingleStepFocus
     */
    public static fromObject(object: { [k: string]: any }): ReqManualSingleStepFocus;

    /**
     * Creates a plain object from a ReqManualSingleStepFocus message. Also converts values to other types if specified.
     * @param message ReqManualSingleStepFocus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqManualSingleStepFocus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqManualSingleStepFocus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqManualSingleStepFocus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqManualContinuFocus. */
export class ReqManualContinuFocus implements IReqManualContinuFocus {

    /**
     * Constructs a new ReqManualContinuFocus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqManualContinuFocus);

    /** ReqManualContinuFocus direction. */
    public direction: number;

    /**
     * Creates a new ReqManualContinuFocus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqManualContinuFocus instance
     */
    public static create(properties?: IReqManualContinuFocus): ReqManualContinuFocus;

    /**
     * Encodes the specified ReqManualContinuFocus message. Does not implicitly {@link ReqManualContinuFocus.verify|verify} messages.
     * @param message ReqManualContinuFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqManualContinuFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqManualContinuFocus message, length delimited. Does not implicitly {@link ReqManualContinuFocus.verify|verify} messages.
     * @param message ReqManualContinuFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqManualContinuFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqManualContinuFocus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqManualContinuFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqManualContinuFocus;

    /**
     * Decodes a ReqManualContinuFocus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqManualContinuFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqManualContinuFocus;

    /**
     * Verifies a ReqManualContinuFocus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqManualContinuFocus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqManualContinuFocus
     */
    public static fromObject(object: { [k: string]: any }): ReqManualContinuFocus;

    /**
     * Creates a plain object from a ReqManualContinuFocus message. Also converts values to other types if specified.
     * @param message ReqManualContinuFocus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqManualContinuFocus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqManualContinuFocus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqManualContinuFocus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStopManualContinuFocus. */
export class ReqStopManualContinuFocus implements IReqStopManualContinuFocus {

    /**
     * Constructs a new ReqStopManualContinuFocus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopManualContinuFocus);

    /**
     * Creates a new ReqStopManualContinuFocus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopManualContinuFocus instance
     */
    public static create(properties?: IReqStopManualContinuFocus): ReqStopManualContinuFocus;

    /**
     * Encodes the specified ReqStopManualContinuFocus message. Does not implicitly {@link ReqStopManualContinuFocus.verify|verify} messages.
     * @param message ReqStopManualContinuFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopManualContinuFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopManualContinuFocus message, length delimited. Does not implicitly {@link ReqStopManualContinuFocus.verify|verify} messages.
     * @param message ReqStopManualContinuFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopManualContinuFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopManualContinuFocus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopManualContinuFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopManualContinuFocus;

    /**
     * Decodes a ReqStopManualContinuFocus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopManualContinuFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopManualContinuFocus;

    /**
     * Verifies a ReqStopManualContinuFocus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopManualContinuFocus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopManualContinuFocus
     */
    public static fromObject(object: { [k: string]: any }): ReqStopManualContinuFocus;

    /**
     * Creates a plain object from a ReqStopManualContinuFocus message. Also converts values to other types if specified.
     * @param message ReqStopManualContinuFocus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopManualContinuFocus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopManualContinuFocus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopManualContinuFocus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqNormalAutoFocus. */
export class ReqNormalAutoFocus implements IReqNormalAutoFocus {

    /**
     * Constructs a new ReqNormalAutoFocus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqNormalAutoFocus);

    /** ReqNormalAutoFocus mode. */
    public mode: number;

    /** ReqNormalAutoFocus centerX. */
    public centerX: number;

    /** ReqNormalAutoFocus centerY. */
    public centerY: number;

    /**
     * Creates a new ReqNormalAutoFocus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqNormalAutoFocus instance
     */
    public static create(properties?: IReqNormalAutoFocus): ReqNormalAutoFocus;

    /**
     * Encodes the specified ReqNormalAutoFocus message. Does not implicitly {@link ReqNormalAutoFocus.verify|verify} messages.
     * @param message ReqNormalAutoFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqNormalAutoFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqNormalAutoFocus message, length delimited. Does not implicitly {@link ReqNormalAutoFocus.verify|verify} messages.
     * @param message ReqNormalAutoFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqNormalAutoFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqNormalAutoFocus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqNormalAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqNormalAutoFocus;

    /**
     * Decodes a ReqNormalAutoFocus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqNormalAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqNormalAutoFocus;

    /**
     * Verifies a ReqNormalAutoFocus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqNormalAutoFocus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqNormalAutoFocus
     */
    public static fromObject(object: { [k: string]: any }): ReqNormalAutoFocus;

    /**
     * Creates a plain object from a ReqNormalAutoFocus message. Also converts values to other types if specified.
     * @param message ReqNormalAutoFocus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqNormalAutoFocus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqNormalAutoFocus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqNormalAutoFocus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqAstroAutoFocus. */
export class ReqAstroAutoFocus implements IReqAstroAutoFocus {

    /**
     * Constructs a new ReqAstroAutoFocus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqAstroAutoFocus);

    /** ReqAstroAutoFocus mode. */
    public mode: number;

    /**
     * Creates a new ReqAstroAutoFocus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqAstroAutoFocus instance
     */
    public static create(properties?: IReqAstroAutoFocus): ReqAstroAutoFocus;

    /**
     * Encodes the specified ReqAstroAutoFocus message. Does not implicitly {@link ReqAstroAutoFocus.verify|verify} messages.
     * @param message ReqAstroAutoFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqAstroAutoFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqAstroAutoFocus message, length delimited. Does not implicitly {@link ReqAstroAutoFocus.verify|verify} messages.
     * @param message ReqAstroAutoFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqAstroAutoFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqAstroAutoFocus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqAstroAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqAstroAutoFocus;

    /**
     * Decodes a ReqAstroAutoFocus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqAstroAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqAstroAutoFocus;

    /**
     * Verifies a ReqAstroAutoFocus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqAstroAutoFocus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqAstroAutoFocus
     */
    public static fromObject(object: { [k: string]: any }): ReqAstroAutoFocus;

    /**
     * Creates a plain object from a ReqAstroAutoFocus message. Also converts values to other types if specified.
     * @param message ReqAstroAutoFocus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqAstroAutoFocus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqAstroAutoFocus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqAstroAutoFocus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqStopAstroAutoFocus. */
export class ReqStopAstroAutoFocus implements IReqStopAstroAutoFocus {

    /**
     * Constructs a new ReqStopAstroAutoFocus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqStopAstroAutoFocus);

    /**
     * Creates a new ReqStopAstroAutoFocus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqStopAstroAutoFocus instance
     */
    public static create(properties?: IReqStopAstroAutoFocus): ReqStopAstroAutoFocus;

    /**
     * Encodes the specified ReqStopAstroAutoFocus message. Does not implicitly {@link ReqStopAstroAutoFocus.verify|verify} messages.
     * @param message ReqStopAstroAutoFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqStopAstroAutoFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqStopAstroAutoFocus message, length delimited. Does not implicitly {@link ReqStopAstroAutoFocus.verify|verify} messages.
     * @param message ReqStopAstroAutoFocus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqStopAstroAutoFocus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqStopAstroAutoFocus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqStopAstroAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqStopAstroAutoFocus;

    /**
     * Decodes a ReqStopAstroAutoFocus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqStopAstroAutoFocus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqStopAstroAutoFocus;

    /**
     * Verifies a ReqStopAstroAutoFocus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqStopAstroAutoFocus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqStopAstroAutoFocus
     */
    public static fromObject(object: { [k: string]: any }): ReqStopAstroAutoFocus;

    /**
     * Creates a plain object from a ReqStopAstroAutoFocus message. Also converts values to other types if specified.
     * @param message ReqStopAstroAutoFocus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqStopAstroAutoFocus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqStopAstroAutoFocus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqStopAstroAutoFocus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** State enum. */
export enum State {
    STATE_IDLE = 0,
    STATE_RUNNING = 1,
    STATE_STOPPING = 2,
    STATE_STOPPED = 3,
    STATE_SUCCESS = 4,
    STATE_FAILED = 5,
    STATE_ASTRO_PLATE_SOLVING = 6
}

/** OperationState enum. */
export enum OperationState {
    OPERATION_STATE_IDLE = 0,
    OPERATION_STATE_RUNNING = 1,
    OPERATION_STATE_STOPPING = 2,
    OPERATION_STATE_STOPPED = 3
}

/** AstroState enum. */
export enum AstroState {
    ASTRO_STATE_IDLE = 0,
    ASTRO_STATE_RUNNING = 1,
    ASTRO_STATE_STOPPING = 2,
    ASTRO_STATE_STOPPED = 3,
    ASTRO_STATE_PLATE_SOLVING = 4
}

/** Represents a ResNotifyPictureMatching. */
export class ResNotifyPictureMatching implements IResNotifyPictureMatching {

    /**
     * Constructs a new ResNotifyPictureMatching.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyPictureMatching);

    /** ResNotifyPictureMatching x. */
    public x: number;

    /** ResNotifyPictureMatching y. */
    public y: number;

    /** ResNotifyPictureMatching width. */
    public width: number;

    /** ResNotifyPictureMatching height. */
    public height: number;

    /** ResNotifyPictureMatching value. */
    public value: number;

    /** ResNotifyPictureMatching code. */
    public code: number;

    /**
     * Creates a new ResNotifyPictureMatching instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyPictureMatching instance
     */
    public static create(properties?: IResNotifyPictureMatching): ResNotifyPictureMatching;

    /**
     * Encodes the specified ResNotifyPictureMatching message. Does not implicitly {@link ResNotifyPictureMatching.verify|verify} messages.
     * @param message ResNotifyPictureMatching message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyPictureMatching, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyPictureMatching message, length delimited. Does not implicitly {@link ResNotifyPictureMatching.verify|verify} messages.
     * @param message ResNotifyPictureMatching message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyPictureMatching, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyPictureMatching message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyPictureMatching
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyPictureMatching;

    /**
     * Decodes a ResNotifyPictureMatching message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyPictureMatching
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyPictureMatching;

    /**
     * Verifies a ResNotifyPictureMatching message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyPictureMatching message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyPictureMatching
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyPictureMatching;

    /**
     * Creates a plain object from a ResNotifyPictureMatching message. Also converts values to other types if specified.
     * @param message ResNotifyPictureMatching
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyPictureMatching, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyPictureMatching to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyPictureMatching
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifySDcardInfo. */
export class ResNotifySDcardInfo implements IResNotifySDcardInfo {

    /**
     * Constructs a new ResNotifySDcardInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifySDcardInfo);

    /** ResNotifySDcardInfo availableSize. */
    public availableSize: number;

    /** ResNotifySDcardInfo totalSize. */
    public totalSize: number;

    /** ResNotifySDcardInfo code. */
    public code: number;

    /**
     * Creates a new ResNotifySDcardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifySDcardInfo instance
     */
    public static create(properties?: IResNotifySDcardInfo): ResNotifySDcardInfo;

    /**
     * Encodes the specified ResNotifySDcardInfo message. Does not implicitly {@link ResNotifySDcardInfo.verify|verify} messages.
     * @param message ResNotifySDcardInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifySDcardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifySDcardInfo message, length delimited. Does not implicitly {@link ResNotifySDcardInfo.verify|verify} messages.
     * @param message ResNotifySDcardInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifySDcardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifySDcardInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifySDcardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifySDcardInfo;

    /**
     * Decodes a ResNotifySDcardInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifySDcardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifySDcardInfo;

    /**
     * Verifies a ResNotifySDcardInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifySDcardInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifySDcardInfo
     */
    public static fromObject(object: { [k: string]: any }): ResNotifySDcardInfo;

    /**
     * Creates a plain object from a ResNotifySDcardInfo message. Also converts values to other types if specified.
     * @param message ResNotifySDcardInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifySDcardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifySDcardInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifySDcardInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyRecordTime. */
export class ResNotifyRecordTime implements IResNotifyRecordTime {

    /**
     * Constructs a new ResNotifyRecordTime.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyRecordTime);

    /** ResNotifyRecordTime recordTime. */
    public recordTime: number;

    /**
     * Creates a new ResNotifyRecordTime instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyRecordTime instance
     */
    public static create(properties?: IResNotifyRecordTime): ResNotifyRecordTime;

    /**
     * Encodes the specified ResNotifyRecordTime message. Does not implicitly {@link ResNotifyRecordTime.verify|verify} messages.
     * @param message ResNotifyRecordTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyRecordTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyRecordTime message, length delimited. Does not implicitly {@link ResNotifyRecordTime.verify|verify} messages.
     * @param message ResNotifyRecordTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyRecordTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyRecordTime message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyRecordTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyRecordTime;

    /**
     * Decodes a ResNotifyRecordTime message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyRecordTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyRecordTime;

    /**
     * Verifies a ResNotifyRecordTime message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyRecordTime message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyRecordTime
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyRecordTime;

    /**
     * Creates a plain object from a ResNotifyRecordTime message. Also converts values to other types if specified.
     * @param message ResNotifyRecordTime
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyRecordTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyRecordTime to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyRecordTime
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyTimeLapseOutTime. */
export class ResNotifyTimeLapseOutTime implements IResNotifyTimeLapseOutTime {

    /**
     * Constructs a new ResNotifyTimeLapseOutTime.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyTimeLapseOutTime);

    /** ResNotifyTimeLapseOutTime interval. */
    public interval: number;

    /** ResNotifyTimeLapseOutTime outTime. */
    public outTime: number;

    /** ResNotifyTimeLapseOutTime totalTime. */
    public totalTime: number;

    /**
     * Creates a new ResNotifyTimeLapseOutTime instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyTimeLapseOutTime instance
     */
    public static create(properties?: IResNotifyTimeLapseOutTime): ResNotifyTimeLapseOutTime;

    /**
     * Encodes the specified ResNotifyTimeLapseOutTime message. Does not implicitly {@link ResNotifyTimeLapseOutTime.verify|verify} messages.
     * @param message ResNotifyTimeLapseOutTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyTimeLapseOutTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyTimeLapseOutTime message, length delimited. Does not implicitly {@link ResNotifyTimeLapseOutTime.verify|verify} messages.
     * @param message ResNotifyTimeLapseOutTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyTimeLapseOutTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyTimeLapseOutTime message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyTimeLapseOutTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyTimeLapseOutTime;

    /**
     * Decodes a ResNotifyTimeLapseOutTime message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyTimeLapseOutTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyTimeLapseOutTime;

    /**
     * Verifies a ResNotifyTimeLapseOutTime message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyTimeLapseOutTime message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyTimeLapseOutTime
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyTimeLapseOutTime;

    /**
     * Creates a plain object from a ResNotifyTimeLapseOutTime message. Also converts values to other types if specified.
     * @param message ResNotifyTimeLapseOutTime
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyTimeLapseOutTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyTimeLapseOutTime to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyTimeLapseOutTime
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyOperationState. */
export class ResNotifyOperationState implements IResNotifyOperationState {

    /**
     * Constructs a new ResNotifyOperationState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyOperationState);

    /** ResNotifyOperationState state. */
    public state: OperationState;

    /**
     * Creates a new ResNotifyOperationState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyOperationState instance
     */
    public static create(properties?: IResNotifyOperationState): ResNotifyOperationState;

    /**
     * Encodes the specified ResNotifyOperationState message. Does not implicitly {@link ResNotifyOperationState.verify|verify} messages.
     * @param message ResNotifyOperationState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyOperationState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyOperationState message, length delimited. Does not implicitly {@link ResNotifyOperationState.verify|verify} messages.
     * @param message ResNotifyOperationState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyOperationState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyOperationState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyOperationState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyOperationState;

    /**
     * Decodes a ResNotifyOperationState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyOperationState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyOperationState;

    /**
     * Verifies a ResNotifyOperationState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyOperationState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyOperationState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyOperationState;

    /**
     * Creates a plain object from a ResNotifyOperationState message. Also converts values to other types if specified.
     * @param message ResNotifyOperationState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyOperationState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyOperationState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyOperationState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyStateAstroCalibration. */
export class ResNotifyStateAstroCalibration implements IResNotifyStateAstroCalibration {

    /**
     * Constructs a new ResNotifyStateAstroCalibration.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyStateAstroCalibration);

    /** ResNotifyStateAstroCalibration state. */
    public state: AstroState;

    /** ResNotifyStateAstroCalibration plateSolvingTimes. */
    public plateSolvingTimes: number;

    /**
     * Creates a new ResNotifyStateAstroCalibration instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyStateAstroCalibration instance
     */
    public static create(properties?: IResNotifyStateAstroCalibration): ResNotifyStateAstroCalibration;

    /**
     * Encodes the specified ResNotifyStateAstroCalibration message. Does not implicitly {@link ResNotifyStateAstroCalibration.verify|verify} messages.
     * @param message ResNotifyStateAstroCalibration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyStateAstroCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyStateAstroCalibration message, length delimited. Does not implicitly {@link ResNotifyStateAstroCalibration.verify|verify} messages.
     * @param message ResNotifyStateAstroCalibration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyStateAstroCalibration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyStateAstroCalibration message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyStateAstroCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyStateAstroCalibration;

    /**
     * Decodes a ResNotifyStateAstroCalibration message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyStateAstroCalibration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyStateAstroCalibration;

    /**
     * Verifies a ResNotifyStateAstroCalibration message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyStateAstroCalibration message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyStateAstroCalibration
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyStateAstroCalibration;

    /**
     * Creates a plain object from a ResNotifyStateAstroCalibration message. Also converts values to other types if specified.
     * @param message ResNotifyStateAstroCalibration
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyStateAstroCalibration, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyStateAstroCalibration to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyStateAstroCalibration
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyStateAstroGoto. */
export class ResNotifyStateAstroGoto implements IResNotifyStateAstroGoto {

    /**
     * Constructs a new ResNotifyStateAstroGoto.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyStateAstroGoto);

    /** ResNotifyStateAstroGoto state. */
    public state: AstroState;

    /**
     * Creates a new ResNotifyStateAstroGoto instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyStateAstroGoto instance
     */
    public static create(properties?: IResNotifyStateAstroGoto): ResNotifyStateAstroGoto;

    /**
     * Encodes the specified ResNotifyStateAstroGoto message. Does not implicitly {@link ResNotifyStateAstroGoto.verify|verify} messages.
     * @param message ResNotifyStateAstroGoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyStateAstroGoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyStateAstroGoto message, length delimited. Does not implicitly {@link ResNotifyStateAstroGoto.verify|verify} messages.
     * @param message ResNotifyStateAstroGoto message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyStateAstroGoto, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyStateAstroGoto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyStateAstroGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyStateAstroGoto;

    /**
     * Decodes a ResNotifyStateAstroGoto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyStateAstroGoto
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyStateAstroGoto;

    /**
     * Verifies a ResNotifyStateAstroGoto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyStateAstroGoto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyStateAstroGoto
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyStateAstroGoto;

    /**
     * Creates a plain object from a ResNotifyStateAstroGoto message. Also converts values to other types if specified.
     * @param message ResNotifyStateAstroGoto
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyStateAstroGoto, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyStateAstroGoto to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyStateAstroGoto
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyStateAstroTracking. */
export class ResNotifyStateAstroTracking implements IResNotifyStateAstroTracking {

    /**
     * Constructs a new ResNotifyStateAstroTracking.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyStateAstroTracking);

    /** ResNotifyStateAstroTracking state. */
    public state: OperationState;

    /** ResNotifyStateAstroTracking targetName. */
    public targetName: string;

    /**
     * Creates a new ResNotifyStateAstroTracking instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyStateAstroTracking instance
     */
    public static create(properties?: IResNotifyStateAstroTracking): ResNotifyStateAstroTracking;

    /**
     * Encodes the specified ResNotifyStateAstroTracking message. Does not implicitly {@link ResNotifyStateAstroTracking.verify|verify} messages.
     * @param message ResNotifyStateAstroTracking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyStateAstroTracking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyStateAstroTracking message, length delimited. Does not implicitly {@link ResNotifyStateAstroTracking.verify|verify} messages.
     * @param message ResNotifyStateAstroTracking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyStateAstroTracking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyStateAstroTracking message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyStateAstroTracking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyStateAstroTracking;

    /**
     * Decodes a ResNotifyStateAstroTracking message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyStateAstroTracking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyStateAstroTracking;

    /**
     * Verifies a ResNotifyStateAstroTracking message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyStateAstroTracking message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyStateAstroTracking
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyStateAstroTracking;

    /**
     * Creates a plain object from a ResNotifyStateAstroTracking message. Also converts values to other types if specified.
     * @param message ResNotifyStateAstroTracking
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyStateAstroTracking, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyStateAstroTracking to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyStateAstroTracking
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyProgressCaptureRawDark. */
export class ResNotifyProgressCaptureRawDark implements IResNotifyProgressCaptureRawDark {

    /**
     * Constructs a new ResNotifyProgressCaptureRawDark.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyProgressCaptureRawDark);

    /** ResNotifyProgressCaptureRawDark progress. */
    public progress: number;

    /** ResNotifyProgressCaptureRawDark remainingTime. */
    public remainingTime: number;

    /**
     * Creates a new ResNotifyProgressCaptureRawDark instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyProgressCaptureRawDark instance
     */
    public static create(properties?: IResNotifyProgressCaptureRawDark): ResNotifyProgressCaptureRawDark;

    /**
     * Encodes the specified ResNotifyProgressCaptureRawDark message. Does not implicitly {@link ResNotifyProgressCaptureRawDark.verify|verify} messages.
     * @param message ResNotifyProgressCaptureRawDark message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyProgressCaptureRawDark, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyProgressCaptureRawDark message, length delimited. Does not implicitly {@link ResNotifyProgressCaptureRawDark.verify|verify} messages.
     * @param message ResNotifyProgressCaptureRawDark message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyProgressCaptureRawDark, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyProgressCaptureRawDark message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyProgressCaptureRawDark
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyProgressCaptureRawDark;

    /**
     * Decodes a ResNotifyProgressCaptureRawDark message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyProgressCaptureRawDark
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyProgressCaptureRawDark;

    /**
     * Verifies a ResNotifyProgressCaptureRawDark message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyProgressCaptureRawDark message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyProgressCaptureRawDark
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyProgressCaptureRawDark;

    /**
     * Creates a plain object from a ResNotifyProgressCaptureRawDark message. Also converts values to other types if specified.
     * @param message ResNotifyProgressCaptureRawDark
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyProgressCaptureRawDark, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyProgressCaptureRawDark to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyProgressCaptureRawDark
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyProgressCaptureRawLiveStacking. */
export class ResNotifyProgressCaptureRawLiveStacking implements IResNotifyProgressCaptureRawLiveStacking {

    /**
     * Constructs a new ResNotifyProgressCaptureRawLiveStacking.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyProgressCaptureRawLiveStacking);

    /** ResNotifyProgressCaptureRawLiveStacking totalCount. */
    public totalCount: number;

    /** ResNotifyProgressCaptureRawLiveStacking updateCountType. */
    public updateCountType: number;

    /** ResNotifyProgressCaptureRawLiveStacking currentCount. */
    public currentCount: number;

    /** ResNotifyProgressCaptureRawLiveStacking stackedCount. */
    public stackedCount: number;

    /** ResNotifyProgressCaptureRawLiveStacking expIndex. */
    public expIndex: number;

    /** ResNotifyProgressCaptureRawLiveStacking gainIndex. */
    public gainIndex: number;

    /** ResNotifyProgressCaptureRawLiveStacking targetName. */
    public targetName: string;

    /**
     * Creates a new ResNotifyProgressCaptureRawLiveStacking instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyProgressCaptureRawLiveStacking instance
     */
    public static create(properties?: IResNotifyProgressCaptureRawLiveStacking): ResNotifyProgressCaptureRawLiveStacking;

    /**
     * Encodes the specified ResNotifyProgressCaptureRawLiveStacking message. Does not implicitly {@link ResNotifyProgressCaptureRawLiveStacking.verify|verify} messages.
     * @param message ResNotifyProgressCaptureRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyProgressCaptureRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyProgressCaptureRawLiveStacking message, length delimited. Does not implicitly {@link ResNotifyProgressCaptureRawLiveStacking.verify|verify} messages.
     * @param message ResNotifyProgressCaptureRawLiveStacking message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyProgressCaptureRawLiveStacking, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyProgressCaptureRawLiveStacking message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyProgressCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyProgressCaptureRawLiveStacking;

    /**
     * Decodes a ResNotifyProgressCaptureRawLiveStacking message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyProgressCaptureRawLiveStacking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyProgressCaptureRawLiveStacking;

    /**
     * Verifies a ResNotifyProgressCaptureRawLiveStacking message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyProgressCaptureRawLiveStacking message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyProgressCaptureRawLiveStacking
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyProgressCaptureRawLiveStacking;

    /**
     * Creates a plain object from a ResNotifyProgressCaptureRawLiveStacking message. Also converts values to other types if specified.
     * @param message ResNotifyProgressCaptureRawLiveStacking
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyProgressCaptureRawLiveStacking, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyProgressCaptureRawLiveStacking to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyProgressCaptureRawLiveStacking
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyParam. */
export class ResNotifyParam implements IResNotifyParam {

    /**
     * Constructs a new ResNotifyParam.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyParam);

    /** ResNotifyParam param. */
    public param: ICommonParam[];

    /**
     * Creates a new ResNotifyParam instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyParam instance
     */
    public static create(properties?: IResNotifyParam): ResNotifyParam;

    /**
     * Encodes the specified ResNotifyParam message. Does not implicitly {@link ResNotifyParam.verify|verify} messages.
     * @param message ResNotifyParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyParam message, length delimited. Does not implicitly {@link ResNotifyParam.verify|verify} messages.
     * @param message ResNotifyParam message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyParam, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyParam message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyParam;

    /**
     * Decodes a ResNotifyParam message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyParam
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyParam;

    /**
     * Verifies a ResNotifyParam message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyParam message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyParam
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyParam;

    /**
     * Creates a plain object from a ResNotifyParam message. Also converts values to other types if specified.
     * @param message ResNotifyParam
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyParam to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyParam
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyCamFunctionState. */
export class ResNotifyCamFunctionState implements IResNotifyCamFunctionState {

    /**
     * Constructs a new ResNotifyCamFunctionState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyCamFunctionState);

    /** ResNotifyCamFunctionState state. */
    public state: OperationState;

    /** ResNotifyCamFunctionState functionId. */
    public functionId: number;

    /**
     * Creates a new ResNotifyCamFunctionState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyCamFunctionState instance
     */
    public static create(properties?: IResNotifyCamFunctionState): ResNotifyCamFunctionState;

    /**
     * Encodes the specified ResNotifyCamFunctionState message. Does not implicitly {@link ResNotifyCamFunctionState.verify|verify} messages.
     * @param message ResNotifyCamFunctionState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyCamFunctionState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyCamFunctionState message, length delimited. Does not implicitly {@link ResNotifyCamFunctionState.verify|verify} messages.
     * @param message ResNotifyCamFunctionState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyCamFunctionState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyCamFunctionState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyCamFunctionState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyCamFunctionState;

    /**
     * Decodes a ResNotifyCamFunctionState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyCamFunctionState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyCamFunctionState;

    /**
     * Verifies a ResNotifyCamFunctionState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyCamFunctionState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyCamFunctionState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyCamFunctionState;

    /**
     * Creates a plain object from a ResNotifyCamFunctionState message. Also converts values to other types if specified.
     * @param message ResNotifyCamFunctionState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyCamFunctionState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyCamFunctionState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyCamFunctionState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyBurstProgress. */
export class ResNotifyBurstProgress implements IResNotifyBurstProgress {

    /**
     * Constructs a new ResNotifyBurstProgress.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyBurstProgress);

    /** ResNotifyBurstProgress totalCount. */
    public totalCount: number;

    /** ResNotifyBurstProgress completedCount. */
    public completedCount: number;

    /**
     * Creates a new ResNotifyBurstProgress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyBurstProgress instance
     */
    public static create(properties?: IResNotifyBurstProgress): ResNotifyBurstProgress;

    /**
     * Encodes the specified ResNotifyBurstProgress message. Does not implicitly {@link ResNotifyBurstProgress.verify|verify} messages.
     * @param message ResNotifyBurstProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyBurstProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyBurstProgress message, length delimited. Does not implicitly {@link ResNotifyBurstProgress.verify|verify} messages.
     * @param message ResNotifyBurstProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyBurstProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyBurstProgress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyBurstProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyBurstProgress;

    /**
     * Decodes a ResNotifyBurstProgress message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyBurstProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyBurstProgress;

    /**
     * Verifies a ResNotifyBurstProgress message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyBurstProgress message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyBurstProgress
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyBurstProgress;

    /**
     * Creates a plain object from a ResNotifyBurstProgress message. Also converts values to other types if specified.
     * @param message ResNotifyBurstProgress
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyBurstProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyBurstProgress to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyBurstProgress
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyPanoramaProgress. */
export class ResNotifyPanoramaProgress implements IResNotifyPanoramaProgress {

    /**
     * Constructs a new ResNotifyPanoramaProgress.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyPanoramaProgress);

    /** ResNotifyPanoramaProgress totalCount. */
    public totalCount: number;

    /** ResNotifyPanoramaProgress completedCount. */
    public completedCount: number;

    /**
     * Creates a new ResNotifyPanoramaProgress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyPanoramaProgress instance
     */
    public static create(properties?: IResNotifyPanoramaProgress): ResNotifyPanoramaProgress;

    /**
     * Encodes the specified ResNotifyPanoramaProgress message. Does not implicitly {@link ResNotifyPanoramaProgress.verify|verify} messages.
     * @param message ResNotifyPanoramaProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyPanoramaProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyPanoramaProgress message, length delimited. Does not implicitly {@link ResNotifyPanoramaProgress.verify|verify} messages.
     * @param message ResNotifyPanoramaProgress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyPanoramaProgress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyPanoramaProgress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyPanoramaProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyPanoramaProgress;

    /**
     * Decodes a ResNotifyPanoramaProgress message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyPanoramaProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyPanoramaProgress;

    /**
     * Verifies a ResNotifyPanoramaProgress message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyPanoramaProgress message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyPanoramaProgress
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyPanoramaProgress;

    /**
     * Creates a plain object from a ResNotifyPanoramaProgress message. Also converts values to other types if specified.
     * @param message ResNotifyPanoramaProgress
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyPanoramaProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyPanoramaProgress to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyPanoramaProgress
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyRgbState. */
export class ResNotifyRgbState implements IResNotifyRgbState {

    /**
     * Constructs a new ResNotifyRgbState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyRgbState);

    /** ResNotifyRgbState state. */
    public state: number;

    /**
     * Creates a new ResNotifyRgbState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyRgbState instance
     */
    public static create(properties?: IResNotifyRgbState): ResNotifyRgbState;

    /**
     * Encodes the specified ResNotifyRgbState message. Does not implicitly {@link ResNotifyRgbState.verify|verify} messages.
     * @param message ResNotifyRgbState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyRgbState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyRgbState message, length delimited. Does not implicitly {@link ResNotifyRgbState.verify|verify} messages.
     * @param message ResNotifyRgbState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyRgbState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyRgbState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyRgbState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyRgbState;

    /**
     * Decodes a ResNotifyRgbState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyRgbState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyRgbState;

    /**
     * Verifies a ResNotifyRgbState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyRgbState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyRgbState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyRgbState;

    /**
     * Creates a plain object from a ResNotifyRgbState message. Also converts values to other types if specified.
     * @param message ResNotifyRgbState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyRgbState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyRgbState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyRgbState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyPowerIndState. */
export class ResNotifyPowerIndState implements IResNotifyPowerIndState {

    /**
     * Constructs a new ResNotifyPowerIndState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyPowerIndState);

    /** ResNotifyPowerIndState state. */
    public state: number;

    /**
     * Creates a new ResNotifyPowerIndState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyPowerIndState instance
     */
    public static create(properties?: IResNotifyPowerIndState): ResNotifyPowerIndState;

    /**
     * Encodes the specified ResNotifyPowerIndState message. Does not implicitly {@link ResNotifyPowerIndState.verify|verify} messages.
     * @param message ResNotifyPowerIndState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyPowerIndState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyPowerIndState message, length delimited. Does not implicitly {@link ResNotifyPowerIndState.verify|verify} messages.
     * @param message ResNotifyPowerIndState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyPowerIndState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyPowerIndState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyPowerIndState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyPowerIndState;

    /**
     * Decodes a ResNotifyPowerIndState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyPowerIndState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyPowerIndState;

    /**
     * Verifies a ResNotifyPowerIndState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyPowerIndState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyPowerIndState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyPowerIndState;

    /**
     * Creates a plain object from a ResNotifyPowerIndState message. Also converts values to other types if specified.
     * @param message ResNotifyPowerIndState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyPowerIndState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyPowerIndState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyPowerIndState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyHostSlaveMode. */
export class ResNotifyHostSlaveMode implements IResNotifyHostSlaveMode {

    /**
     * Constructs a new ResNotifyHostSlaveMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyHostSlaveMode);

    /** ResNotifyHostSlaveMode mode. */
    public mode: number;

    /**
     * Creates a new ResNotifyHostSlaveMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyHostSlaveMode instance
     */
    public static create(properties?: IResNotifyHostSlaveMode): ResNotifyHostSlaveMode;

    /**
     * Encodes the specified ResNotifyHostSlaveMode message. Does not implicitly {@link ResNotifyHostSlaveMode.verify|verify} messages.
     * @param message ResNotifyHostSlaveMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyHostSlaveMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyHostSlaveMode message, length delimited. Does not implicitly {@link ResNotifyHostSlaveMode.verify|verify} messages.
     * @param message ResNotifyHostSlaveMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyHostSlaveMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyHostSlaveMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyHostSlaveMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyHostSlaveMode;

    /**
     * Decodes a ResNotifyHostSlaveMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyHostSlaveMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyHostSlaveMode;

    /**
     * Verifies a ResNotifyHostSlaveMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyHostSlaveMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyHostSlaveMode
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyHostSlaveMode;

    /**
     * Creates a plain object from a ResNotifyHostSlaveMode message. Also converts values to other types if specified.
     * @param message ResNotifyHostSlaveMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyHostSlaveMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyHostSlaveMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyHostSlaveMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyMTPState. */
export class ResNotifyMTPState implements IResNotifyMTPState {

    /**
     * Constructs a new ResNotifyMTPState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyMTPState);

    /** ResNotifyMTPState mode. */
    public mode: number;

    /**
     * Creates a new ResNotifyMTPState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyMTPState instance
     */
    public static create(properties?: IResNotifyMTPState): ResNotifyMTPState;

    /**
     * Encodes the specified ResNotifyMTPState message. Does not implicitly {@link ResNotifyMTPState.verify|verify} messages.
     * @param message ResNotifyMTPState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyMTPState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyMTPState message, length delimited. Does not implicitly {@link ResNotifyMTPState.verify|verify} messages.
     * @param message ResNotifyMTPState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyMTPState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyMTPState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyMTPState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyMTPState;

    /**
     * Decodes a ResNotifyMTPState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyMTPState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyMTPState;

    /**
     * Verifies a ResNotifyMTPState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyMTPState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyMTPState
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyMTPState;

    /**
     * Creates a plain object from a ResNotifyMTPState message. Also converts values to other types if specified.
     * @param message ResNotifyMTPState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyMTPState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyMTPState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyMTPState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyTrackResult. */
export class ResNotifyTrackResult implements IResNotifyTrackResult {

    /**
     * Constructs a new ResNotifyTrackResult.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyTrackResult);

    /** ResNotifyTrackResult x. */
    public x: number;

    /** ResNotifyTrackResult y. */
    public y: number;

    /** ResNotifyTrackResult w. */
    public w: number;

    /** ResNotifyTrackResult h. */
    public h: number;

    /**
     * Creates a new ResNotifyTrackResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyTrackResult instance
     */
    public static create(properties?: IResNotifyTrackResult): ResNotifyTrackResult;

    /**
     * Encodes the specified ResNotifyTrackResult message. Does not implicitly {@link ResNotifyTrackResult.verify|verify} messages.
     * @param message ResNotifyTrackResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyTrackResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyTrackResult message, length delimited. Does not implicitly {@link ResNotifyTrackResult.verify|verify} messages.
     * @param message ResNotifyTrackResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyTrackResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyTrackResult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyTrackResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyTrackResult;

    /**
     * Decodes a ResNotifyTrackResult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyTrackResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyTrackResult;

    /**
     * Verifies a ResNotifyTrackResult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyTrackResult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyTrackResult
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyTrackResult;

    /**
     * Creates a plain object from a ResNotifyTrackResult message. Also converts values to other types if specified.
     * @param message ResNotifyTrackResult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyTrackResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyTrackResult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyTrackResult
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyCPUMode. */
export class ResNotifyCPUMode implements IResNotifyCPUMode {

    /**
     * Constructs a new ResNotifyCPUMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyCPUMode);

    /** ResNotifyCPUMode mode. */
    public mode: number;

    /**
     * Creates a new ResNotifyCPUMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyCPUMode instance
     */
    public static create(properties?: IResNotifyCPUMode): ResNotifyCPUMode;

    /**
     * Encodes the specified ResNotifyCPUMode message. Does not implicitly {@link ResNotifyCPUMode.verify|verify} messages.
     * @param message ResNotifyCPUMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyCPUMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyCPUMode message, length delimited. Does not implicitly {@link ResNotifyCPUMode.verify|verify} messages.
     * @param message ResNotifyCPUMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyCPUMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyCPUMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyCPUMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyCPUMode;

    /**
     * Decodes a ResNotifyCPUMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyCPUMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyCPUMode;

    /**
     * Verifies a ResNotifyCPUMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyCPUMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyCPUMode
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyCPUMode;

    /**
     * Creates a plain object from a ResNotifyCPUMode message. Also converts values to other types if specified.
     * @param message ResNotifyCPUMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyCPUMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyCPUMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyCPUMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyStateAstroTrackingSpecial. */
export class ResNotifyStateAstroTrackingSpecial implements IResNotifyStateAstroTrackingSpecial {

    /**
     * Constructs a new ResNotifyStateAstroTrackingSpecial.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyStateAstroTrackingSpecial);

    /** ResNotifyStateAstroTrackingSpecial state. */
    public state: OperationState;

    /** ResNotifyStateAstroTrackingSpecial targetName. */
    public targetName: string;

    /** ResNotifyStateAstroTrackingSpecial index. */
    public index: number;

    /**
     * Creates a new ResNotifyStateAstroTrackingSpecial instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyStateAstroTrackingSpecial instance
     */
    public static create(properties?: IResNotifyStateAstroTrackingSpecial): ResNotifyStateAstroTrackingSpecial;

    /**
     * Encodes the specified ResNotifyStateAstroTrackingSpecial message. Does not implicitly {@link ResNotifyStateAstroTrackingSpecial.verify|verify} messages.
     * @param message ResNotifyStateAstroTrackingSpecial message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyStateAstroTrackingSpecial, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyStateAstroTrackingSpecial message, length delimited. Does not implicitly {@link ResNotifyStateAstroTrackingSpecial.verify|verify} messages.
     * @param message ResNotifyStateAstroTrackingSpecial message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyStateAstroTrackingSpecial, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyStateAstroTrackingSpecial message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyStateAstroTrackingSpecial
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyStateAstroTrackingSpecial;

    /**
     * Decodes a ResNotifyStateAstroTrackingSpecial message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyStateAstroTrackingSpecial
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyStateAstroTrackingSpecial;

    /**
     * Verifies a ResNotifyStateAstroTrackingSpecial message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyStateAstroTrackingSpecial message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyStateAstroTrackingSpecial
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyStateAstroTrackingSpecial;

    /**
     * Creates a plain object from a ResNotifyStateAstroTrackingSpecial message. Also converts values to other types if specified.
     * @param message ResNotifyStateAstroTrackingSpecial
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyStateAstroTrackingSpecial, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyStateAstroTrackingSpecial to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyStateAstroTrackingSpecial
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResNotifyPowerOff. */
export class ResNotifyPowerOff implements IResNotifyPowerOff {

    /**
     * Constructs a new ResNotifyPowerOff.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResNotifyPowerOff);

    /**
     * Creates a new ResNotifyPowerOff instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResNotifyPowerOff instance
     */
    public static create(properties?: IResNotifyPowerOff): ResNotifyPowerOff;

    /**
     * Encodes the specified ResNotifyPowerOff message. Does not implicitly {@link ResNotifyPowerOff.verify|verify} messages.
     * @param message ResNotifyPowerOff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResNotifyPowerOff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResNotifyPowerOff message, length delimited. Does not implicitly {@link ResNotifyPowerOff.verify|verify} messages.
     * @param message ResNotifyPowerOff message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResNotifyPowerOff, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResNotifyPowerOff message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResNotifyPowerOff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResNotifyPowerOff;

    /**
     * Decodes a ResNotifyPowerOff message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResNotifyPowerOff
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResNotifyPowerOff;

    /**
     * Verifies a ResNotifyPowerOff message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResNotifyPowerOff message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResNotifyPowerOff
     */
    public static fromObject(object: { [k: string]: any }): ResNotifyPowerOff;

    /**
     * Creates a plain object from a ResNotifyPowerOff message. Also converts values to other types if specified.
     * @param message ResNotifyPowerOff
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResNotifyPowerOff, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResNotifyPowerOff to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResNotifyPowerOff
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ModuleId enum. */
export enum ModuleId {
    MODULE_NONE = 0,
    MODULE_CAMERA_TELE = 1,
    MODULE_CAMERA_WIDE = 2,
    MODULE_ASTRO = 3,
    MODULE_SYSTEM = 4,
    MODULE_RGB_POWER = 5,
    MODULE_MOTOR = 6,
    MODULE_TRACK = 7,
    MODULE_FOCUS = 8,
    MODULE_NOTIFY = 9,
    MODULE_PANORAMA = 10
}

/** MessageTypeId enum. */
export enum MessageTypeId {
    TYPE_REQUEST = 0,
    TYPE_REQUEST_RESPONSE = 1,
    TYPE_NOTIFICATION = 2,
    TYPE_NOTIFICATION_RESPONSE = 3
}

/** DwarfCMD enum. */
export enum DwarfCMD {
    NO_CMD = 0,
    CMD_CAMERA_TELE_OPEN_CAMERA = 10000,
    CMD_CAMERA_TELE_CLOSE_CAMERA = 10001,
    CMD_CAMERA_TELE_PHOTOGRAPH = 10002,
    CMD_CAMERA_TELE_BURST = 10003,
    CMD_CAMERA_TELE_STOP_BURST = 10004,
    CMD_CAMERA_TELE_START_RECORD = 10005,
    CMD_CAMERA_TELE_STOP_RECORD = 10006,
    CMD_CAMERA_TELE_SET_EXP_MODE = 10007,
    CMD_CAMERA_TELE_GET_EXP_MODE = 10008,
    CMD_CAMERA_TELE_SET_EXP = 10009,
    CMD_CAMERA_TELE_GET_EXP = 10010,
    CMD_CAMERA_TELE_SET_GAIN_MODE = 10011,
    CMD_CAMERA_TELE_GET_GAIN_MODE = 10012,
    CMD_CAMERA_TELE_SET_GAIN = 10013,
    CMD_CAMERA_TELE_GET_GAIN = 10014,
    CMD_CAMERA_TELE_SET_BRIGHTNESS = 10015,
    CMD_CAMERA_TELE_GET_BRIGHTNESS = 10016,
    CMD_CAMERA_TELE_SET_CONTRAST = 10017,
    CMD_CAMERA_TELE_GET_CONTRAST = 10018,
    CMD_CAMERA_TELE_SET_SATURATION = 10019,
    CMD_CAMERA_TELE_GET_SATURATION = 10020,
    CMD_CAMERA_TELE_SET_HUE = 10021,
    CMD_CAMERA_TELE_GET_HUE = 10022,
    CMD_CAMERA_TELE_SET_SHARPNESS = 10023,
    CMD_CAMERA_TELE_GET_SHARPNESS = 10024,
    CMD_CAMERA_TELE_SET_WB_MODE = 10025,
    CMD_CAMERA_TELE_GET_WB_MODE = 10026,
    CMD_CAMERA_TELE_SET_WB_SCENE = 10027,
    CMD_CAMERA_TELE_GET_WB_SCENE = 10028,
    CMD_CAMERA_TELE_SET_WB_CT = 10029,
    CMD_CAMERA_TELE_GET_WB_CT = 10030,
    CMD_CAMERA_TELE_SET_IRCUT = 10031,
    CMD_CAMERA_TELE_GET_IRCUT = 10032,
    CMD_CAMERA_TELE_START_TIMELAPSE_PHOTO = 10033,
    CMD_CAMERA_TELE_STOP_TIMELAPSE_PHOTO = 10034,
    CMD_CAMERA_TELE_SET_ALL_PARAMS = 10035,
    CMD_CAMERA_TELE_GET_ALL_PARAMS = 10036,
    CMD_CAMERA_TELE_SET_FEATURE_PARAM = 10037,
    CMD_CAMERA_TELE_GET_ALL_FEATURE_PARAMS = 10038,
    CMD_CAMERA_TELE_GET_SYSTEM_WORKING_STATE = 10039,
    CMD_CAMERA_TELE_SET_JPG_QUALITY = 10040,
    CMD_ASTRO_START_CALIBRATION = 11000,
    CMD_ASTRO_STOP_CALIBRATION = 11001,
    CMD_ASTRO_START_GOTO_DSO = 11002,
    CMD_ASTRO_START_GOTO_SOLAR_SYSTEM = 11003,
    CMD_ASTRO_STOP_GOTO = 11004,
    CMD_ASTRO_START_CAPTURE_RAW_LIVE_STACKING = 11005,
    CMD_ASTRO_STOP_CAPTURE_RAW_LIVE_STACKING = 11006,
    CMD_ASTRO_START_CAPTURE_RAW_DARK = 11007,
    CMD_ASTRO_STOP_CAPTURE_RAW_DARK = 11008,
    CMD_ASTRO_CHECK_GOT_DARK = 11009,
    CMD_ASTRO_GO_LIVE = 11010,
    CMD_ASTRO_START_TRACK_SPECIAL_TARGET = 11011,
    CMD_ASTRO_STOP_TRACK_SPECIAL_TARGET = 11012,
    CMD_CAMERA_WIDE_OPEN_CAMERA = 12000,
    CMD_CAMERA_WIDE_CLOSE_CAMERA = 12001,
    CMD_CAMERA_WIDE_SET_EXP_MODE = 12002,
    CMD_CAMERA_WIDE_GET_EXP_MODE = 12003,
    CMD_CAMERA_WIDE_SET_EXP = 12004,
    CMD_CAMERA_WIDE_GET_EXP = 12005,
    CMD_CAMERA_WIDE_SET_GAIN = 12006,
    CMD_CAMERA_WIDE_GET_GAIN = 12007,
    CMD_CAMERA_WIDE_SET_BRIGHTNESS = 12008,
    CMD_CAMERA_WIDE_GET_BRIGHTNESS = 12009,
    CMD_CAMERA_WIDE_SET_CONTRAST = 12010,
    CMD_CAMERA_WIDE_GET_CONTRAST = 12011,
    CMD_CAMERA_WIDE_SET_SATURATION = 12012,
    CMD_CAMERA_WIDE_GET_SATURATION = 12013,
    CMD_CAMERA_WIDE_SET_HUE = 12014,
    CMD_CAMERA_WIDE_GET_HUE = 12015,
    CMD_CAMERA_WIDE_SET_SHARPNESS = 12016,
    CMD_CAMERA_WIDE_GET_SHARPNESS = 12017,
    CMD_CAMERA_WIDE_SET_WB_MODE = 12018,
    CMD_CAMERA_WIDE_GET_WB_MODE = 12019,
    CMD_CAMERA_WIDE_SET_WB_CT = 12020,
    CMD_CAMERA_WIDE_GET_WB_CT = 12021,
    CMD_CAMERA_WIDE_PHOTOGRAPH = 12022,
    CMD_CAMERA_WIDE_BURST = 12023,
    CMD_CAMERA_WIDE_STOP_BURST = 12024,
    CMD_CAMERA_WIDE_START_TIMELAPSE_PHOTO = 12025,
    CMD_CAMERA_WIDE_STOP_TIMELAPSE_PHOTO = 12026,
    CMD_CAMERA_WIDE_GET_ALL_PARAMS = 12027,
    CMD_CAMERA_WIDE_SET_ALL_PARAMS = 12028,
    CMD_SYSTEM_SET_TIME = 13000,
    CMD_SYSTEM_SET_TIME_ZONE = 13001,
    CMD_SYSTEM_SET_MTP_MODE = 13002,
    CMD_SYSTEM_SET_CPU_MODE = 13003,
    CMD_RGB_POWER_OPEN_RGB = 13500,
    CMD_RGB_POWER_CLOSE_RGB = 13501,
    CMD_RGB_POWER_POWER_DOWN = 13502,
    CMD_RGB_POWER_POWERIND_ON = 13503,
    CMD_RGB_POWER_POWERIND_OFF = 13504,
    CMD_RGB_POWER_REBOOT = 13505,
    CMD_FOCUS_AUTO_FOCUS = 15000,
    CMD_FOCUS_MANUAL_SINGLE_STEP_FOCUS = 15001,
    CMD_FOCUS_START_MANUAL_CONTINU_FOCUS = 15002,
    CMD_FOCUS_STOP_MANUAL_CONTINU_FOCUS = 15003,
    CMD_FOCUS_START_ASTRO_AUTO_FOCUS = 15004,
    CMD_FOCUS_STOP_ASTRO_AUTO_FOCUS = 15005,
    CMD_NOTIFY_TELE_WIDI_PICTURE_MATCHING = 15200,
    CMD_NOTIFY_ELE = 15201,
    CMD_NOTIFY_CHARGE = 15202,
    CMD_NOTIFY_SDCARD_INFO = 15203,
    CMD_NOTIFY_TELE_RECORD_TIME = 15204,
    CMD_NOTIFY_TELE_TIMELAPSE_OUT_TIME = 15205,
    CMD_NOTIFY_STATE_CAPTURE_RAW_DARK = 15206,
    CMD_NOTIFY_PROGRASS_CAPTURE_RAW_DARK = 15207,
    CMD_NOTIFY_STATE_CAPTURE_RAW_LIVE_STACKING = 15208,
    CMD_NOTIFY_PROGRASS_CAPTURE_RAW_LIVE_STACKING = 15209,
    CMD_NOTIFY_STATE_ASTRO_CALIBRATION = 15210,
    CMD_NOTIFY_STATE_ASTRO_GOTO = 15211,
    CMD_NOTIFY_STATE_ASTRO_TRACKING = 15212,
    CMD_NOTIFY_TELE_SET_PARAM = 15213,
    CMD_NOTIFY_WIDE_SET_PARAM = 15214,
    CMD_NOTIFY_TELE_FUNCTION_STATE = 15215,
    CMD_NOTIFY_WIDE_FUNCTION_STATE = 15216,
    CMD_NOTIFY_SET_FEATURE_PARAM = 15217,
    CMD_NOTIFY_TELE_BURST_PROGRESS = 15218,
    CMD_NOTIFY_PANORAMA_PROGRESS = 15219,
    CMD_NOTIFY_WIDE_BURST_PROGRESS = 15220,
    CMD_NOTIFY_RGB_STATE = 15221,
    CMD_NOTIFY_POWER_IND_STATE = 15222,
    CMD_NOTIFY_WS_HOST_SLAVE_MODE = 15223,
    CMD_NOTIFY_MTP_STATE = 15224,
    CMD_NOTIFY_TRACK_RESULT = 15225,
    CMD_NOTIFY_WIDE_TIMELAPSE_OUT_TIME = 15226,
    CMD_NOTIFY_CPU_MODE = 15227,
    CMD_NOTIFY_STATE_ASTRO_TRACKING_SPECIAL = 15228,
    CMD_NOTIFY_POWER_OFF = 15229
}

/** DwarfErrorCode enum. */
export enum DwarfErrorCode {
    OK = 0,
    WS_PARSE_PROTOBUF_ERROR = -1,
    WS_SDCARD_NOT_EXIST = -2,
    WS_INVALID_PARAM = -3,
    WS_SDCARD_WRITE_ERROR = -4,
    CODE_CAMERA_TELE_OPENED = -10500,
    CODE_CAMERA_TELE_CLOSED = -10501,
    CODE_CAMERA_TELE_ISP_SET_FAILED = -10502,
    CODE_CAMERA_TELE_OPEN_FAILED = -10504,
    CODE_CAMERA_TELE_WORKING_BUSY_STACK = -10507,
    CODE_CAMERA_TELE_CAPTURE_RAW_FAILED = -10510,
    CODE_CAMERA_TELE_WORKING_BUSY = -10511,
    CODE_ASTRO_PLATE_SOLVING_FAILED = -11500,
    CODE_ASTRO_FUNCTION_BUSY = -11501,
    CODE_ASTRO_DARK_GAIN_OUT_OF_RANGE = -11502,
    CODE_ASTRO_DARK_NOT_FOUND = -11503,
    CODE_ASTRO_CALIBRATION_FAILED = -11504,
    CODE_ASTRO_GOTO_FAILED = -11505,
    CODE_ASTRO_NEED_GOTO = -11513,
    CODE_ASTRO_NEED_ADJUST_SHOOT_PARAM = -11514,
    CODE_CAMERA_WIDE_OPENED = -12500,
    CODE_CAMERA_WIDE_CLOSED = -12501,
    CODE_CAMERA_WIDE_CANNOT_FOUND = -12502,
    CODE_CAMERA_WIDE_OPEN_FAILED = -12503,
    CODE_CAMERA_WIDE_CLOSE_FAILED = -12504,
    CODE_CAMERA_WIDE_SET_ISP_FAILED = -12505,
    CODE_CAMERA_WIDE_PHOTOGRAPHING = -12506,
    CODE_SYSTEM_SET_TIME_FAILED = -13300,
    CODE_SYSTEM_SET_TIMEZONE_FAILED = -13301,
    CODE_SYSTEM_SETTING_TIMEZONE_FAILED = -13302,
    CODE_STEP_MOTOR_LIMIT_POSITION_WARNING = -14518,
    CODE_STEP_MOTOR_LIMIT_POSITION_HITTED = -14519,
    CODE_PANORAMA_PHOTO_FAILED = -15600,
    CODE_PANORAMA_MOTOR_RESET_FAILED = -15601
}

/** AstroTrackingSpecial enum. */
export enum AstroTrackingSpecial {
    TRACKING_SUN = 0,
    TRACKING_MOON = 1
}

/** SolarSystemTarget enum. */
export enum SolarSystemTarget {
    Mercury = 1,
    Venus = 2,
    Mars = 3,
    Jupiter = 4,
    Saturn = 5,
    Uranus = 6,
    Neptune = 7,
    Moon = 8,
    Sun = 9
}

/** PhotoMode enum. */
export enum PhotoMode {
    Auto = 0,
    Manual = 1
}

/** WBMode enum. */
export enum WBMode {
    ColorTemperature = 0,
    SceneMode = 1
}

/** IrCut enum. */
export enum IrCut {
    CUT = 0,
    PASS = 1
}

/** Represents a ReqOpenRgb. */
export class ReqOpenRgb implements IReqOpenRgb {

    /**
     * Constructs a new ReqOpenRgb.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqOpenRgb);

    /**
     * Creates a new ReqOpenRgb instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqOpenRgb instance
     */
    public static create(properties?: IReqOpenRgb): ReqOpenRgb;

    /**
     * Encodes the specified ReqOpenRgb message. Does not implicitly {@link ReqOpenRgb.verify|verify} messages.
     * @param message ReqOpenRgb message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqOpenRgb, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqOpenRgb message, length delimited. Does not implicitly {@link ReqOpenRgb.verify|verify} messages.
     * @param message ReqOpenRgb message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqOpenRgb, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqOpenRgb message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqOpenRgb
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqOpenRgb;

    /**
     * Decodes a ReqOpenRgb message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqOpenRgb
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqOpenRgb;

    /**
     * Verifies a ReqOpenRgb message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqOpenRgb message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqOpenRgb
     */
    public static fromObject(object: { [k: string]: any }): ReqOpenRgb;

    /**
     * Creates a plain object from a ReqOpenRgb message. Also converts values to other types if specified.
     * @param message ReqOpenRgb
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqOpenRgb, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqOpenRgb to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqOpenRgb
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqCloseRgb. */
export class ReqCloseRgb implements IReqCloseRgb {

    /**
     * Constructs a new ReqCloseRgb.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCloseRgb);

    /**
     * Creates a new ReqCloseRgb instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCloseRgb instance
     */
    public static create(properties?: IReqCloseRgb): ReqCloseRgb;

    /**
     * Encodes the specified ReqCloseRgb message. Does not implicitly {@link ReqCloseRgb.verify|verify} messages.
     * @param message ReqCloseRgb message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCloseRgb, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCloseRgb message, length delimited. Does not implicitly {@link ReqCloseRgb.verify|verify} messages.
     * @param message ReqCloseRgb message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCloseRgb, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCloseRgb message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCloseRgb
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCloseRgb;

    /**
     * Decodes a ReqCloseRgb message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCloseRgb
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCloseRgb;

    /**
     * Verifies a ReqCloseRgb message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCloseRgb message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCloseRgb
     */
    public static fromObject(object: { [k: string]: any }): ReqCloseRgb;

    /**
     * Creates a plain object from a ReqCloseRgb message. Also converts values to other types if specified.
     * @param message ReqCloseRgb
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCloseRgb, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCloseRgb to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqCloseRgb
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqPowerDown. */
export class ReqPowerDown implements IReqPowerDown {

    /**
     * Constructs a new ReqPowerDown.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqPowerDown);

    /**
     * Creates a new ReqPowerDown instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqPowerDown instance
     */
    public static create(properties?: IReqPowerDown): ReqPowerDown;

    /**
     * Encodes the specified ReqPowerDown message. Does not implicitly {@link ReqPowerDown.verify|verify} messages.
     * @param message ReqPowerDown message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqPowerDown, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqPowerDown message, length delimited. Does not implicitly {@link ReqPowerDown.verify|verify} messages.
     * @param message ReqPowerDown message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqPowerDown, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqPowerDown message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqPowerDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqPowerDown;

    /**
     * Decodes a ReqPowerDown message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqPowerDown
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqPowerDown;

    /**
     * Verifies a ReqPowerDown message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqPowerDown message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqPowerDown
     */
    public static fromObject(object: { [k: string]: any }): ReqPowerDown;

    /**
     * Creates a plain object from a ReqPowerDown message. Also converts values to other types if specified.
     * @param message ReqPowerDown
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqPowerDown, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqPowerDown to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqPowerDown
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqOpenPowerInd. */
export class ReqOpenPowerInd implements IReqOpenPowerInd {

    /**
     * Constructs a new ReqOpenPowerInd.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqOpenPowerInd);

    /**
     * Creates a new ReqOpenPowerInd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqOpenPowerInd instance
     */
    public static create(properties?: IReqOpenPowerInd): ReqOpenPowerInd;

    /**
     * Encodes the specified ReqOpenPowerInd message. Does not implicitly {@link ReqOpenPowerInd.verify|verify} messages.
     * @param message ReqOpenPowerInd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqOpenPowerInd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqOpenPowerInd message, length delimited. Does not implicitly {@link ReqOpenPowerInd.verify|verify} messages.
     * @param message ReqOpenPowerInd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqOpenPowerInd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqOpenPowerInd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqOpenPowerInd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqOpenPowerInd;

    /**
     * Decodes a ReqOpenPowerInd message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqOpenPowerInd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqOpenPowerInd;

    /**
     * Verifies a ReqOpenPowerInd message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqOpenPowerInd message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqOpenPowerInd
     */
    public static fromObject(object: { [k: string]: any }): ReqOpenPowerInd;

    /**
     * Creates a plain object from a ReqOpenPowerInd message. Also converts values to other types if specified.
     * @param message ReqOpenPowerInd
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqOpenPowerInd, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqOpenPowerInd to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqOpenPowerInd
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqClosePowerInd. */
export class ReqClosePowerInd implements IReqClosePowerInd {

    /**
     * Constructs a new ReqClosePowerInd.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqClosePowerInd);

    /**
     * Creates a new ReqClosePowerInd instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqClosePowerInd instance
     */
    public static create(properties?: IReqClosePowerInd): ReqClosePowerInd;

    /**
     * Encodes the specified ReqClosePowerInd message. Does not implicitly {@link ReqClosePowerInd.verify|verify} messages.
     * @param message ReqClosePowerInd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqClosePowerInd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqClosePowerInd message, length delimited. Does not implicitly {@link ReqClosePowerInd.verify|verify} messages.
     * @param message ReqClosePowerInd message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqClosePowerInd, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqClosePowerInd message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqClosePowerInd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqClosePowerInd;

    /**
     * Decodes a ReqClosePowerInd message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqClosePowerInd
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqClosePowerInd;

    /**
     * Verifies a ReqClosePowerInd message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqClosePowerInd message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqClosePowerInd
     */
    public static fromObject(object: { [k: string]: any }): ReqClosePowerInd;

    /**
     * Creates a plain object from a ReqClosePowerInd message. Also converts values to other types if specified.
     * @param message ReqClosePowerInd
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqClosePowerInd, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqClosePowerInd to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqClosePowerInd
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqReboot. */
export class ReqReboot implements IReqReboot {

    /**
     * Constructs a new ReqReboot.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqReboot);

    /**
     * Creates a new ReqReboot instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqReboot instance
     */
    public static create(properties?: IReqReboot): ReqReboot;

    /**
     * Encodes the specified ReqReboot message. Does not implicitly {@link ReqReboot.verify|verify} messages.
     * @param message ReqReboot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqReboot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqReboot message, length delimited. Does not implicitly {@link ReqReboot.verify|verify} messages.
     * @param message ReqReboot message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqReboot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqReboot message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqReboot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqReboot;

    /**
     * Decodes a ReqReboot message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqReboot
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqReboot;

    /**
     * Verifies a ReqReboot message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqReboot message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqReboot
     */
    public static fromObject(object: { [k: string]: any }): ReqReboot;

    /**
     * Creates a plain object from a ReqReboot message. Also converts values to other types if specified.
     * @param message ReqReboot
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqReboot, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqReboot to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqReboot
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetTime. */
export class ReqSetTime implements IReqSetTime {

    /**
     * Constructs a new ReqSetTime.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetTime);

    /** ReqSetTime timestamp. */
    public timestamp: (number|Long);

    /**
     * Creates a new ReqSetTime instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetTime instance
     */
    public static create(properties?: IReqSetTime): ReqSetTime;

    /**
     * Encodes the specified ReqSetTime message. Does not implicitly {@link ReqSetTime.verify|verify} messages.
     * @param message ReqSetTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetTime message, length delimited. Does not implicitly {@link ReqSetTime.verify|verify} messages.
     * @param message ReqSetTime message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetTime, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetTime message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetTime;

    /**
     * Decodes a ReqSetTime message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetTime
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetTime;

    /**
     * Verifies a ReqSetTime message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetTime message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetTime
     */
    public static fromObject(object: { [k: string]: any }): ReqSetTime;

    /**
     * Creates a plain object from a ReqSetTime message. Also converts values to other types if specified.
     * @param message ReqSetTime
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetTime to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetTime
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetTimezone. */
export class ReqSetTimezone implements IReqSetTimezone {

    /**
     * Constructs a new ReqSetTimezone.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetTimezone);

    /** ReqSetTimezone timezone. */
    public timezone: string;

    /**
     * Creates a new ReqSetTimezone instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetTimezone instance
     */
    public static create(properties?: IReqSetTimezone): ReqSetTimezone;

    /**
     * Encodes the specified ReqSetTimezone message. Does not implicitly {@link ReqSetTimezone.verify|verify} messages.
     * @param message ReqSetTimezone message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetTimezone, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetTimezone message, length delimited. Does not implicitly {@link ReqSetTimezone.verify|verify} messages.
     * @param message ReqSetTimezone message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetTimezone, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetTimezone message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetTimezone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetTimezone;

    /**
     * Decodes a ReqSetTimezone message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetTimezone
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetTimezone;

    /**
     * Verifies a ReqSetTimezone message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetTimezone message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetTimezone
     */
    public static fromObject(object: { [k: string]: any }): ReqSetTimezone;

    /**
     * Creates a plain object from a ReqSetTimezone message. Also converts values to other types if specified.
     * @param message ReqSetTimezone
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetTimezone, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetTimezone to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetTimezone
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetMtpMode. */
export class ReqSetMtpMode implements IReqSetMtpMode {

    /**
     * Constructs a new ReqSetMtpMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetMtpMode);

    /** ReqSetMtpMode mode. */
    public mode: number;

    /**
     * Creates a new ReqSetMtpMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetMtpMode instance
     */
    public static create(properties?: IReqSetMtpMode): ReqSetMtpMode;

    /**
     * Encodes the specified ReqSetMtpMode message. Does not implicitly {@link ReqSetMtpMode.verify|verify} messages.
     * @param message ReqSetMtpMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetMtpMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetMtpMode message, length delimited. Does not implicitly {@link ReqSetMtpMode.verify|verify} messages.
     * @param message ReqSetMtpMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetMtpMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetMtpMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetMtpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetMtpMode;

    /**
     * Decodes a ReqSetMtpMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetMtpMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetMtpMode;

    /**
     * Verifies a ReqSetMtpMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetMtpMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetMtpMode
     */
    public static fromObject(object: { [k: string]: any }): ReqSetMtpMode;

    /**
     * Creates a plain object from a ReqSetMtpMode message. Also converts values to other types if specified.
     * @param message ReqSetMtpMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetMtpMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetMtpMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetMtpMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReqSetCpuMode. */
export class ReqSetCpuMode implements IReqSetCpuMode {

    /**
     * Constructs a new ReqSetCpuMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqSetCpuMode);

    /** ReqSetCpuMode mode. */
    public mode: number;

    /**
     * Creates a new ReqSetCpuMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqSetCpuMode instance
     */
    public static create(properties?: IReqSetCpuMode): ReqSetCpuMode;

    /**
     * Encodes the specified ReqSetCpuMode message. Does not implicitly {@link ReqSetCpuMode.verify|verify} messages.
     * @param message ReqSetCpuMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqSetCpuMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqSetCpuMode message, length delimited. Does not implicitly {@link ReqSetCpuMode.verify|verify} messages.
     * @param message ReqSetCpuMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqSetCpuMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqSetCpuMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqSetCpuMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqSetCpuMode;

    /**
     * Decodes a ReqSetCpuMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqSetCpuMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqSetCpuMode;

    /**
     * Verifies a ReqSetCpuMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqSetCpuMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqSetCpuMode
     */
    public static fromObject(object: { [k: string]: any }): ReqSetCpuMode;

    /**
     * Creates a plain object from a ReqSetCpuMode message. Also converts values to other types if specified.
     * @param message ReqSetCpuMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqSetCpuMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqSetCpuMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReqSetCpuMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
