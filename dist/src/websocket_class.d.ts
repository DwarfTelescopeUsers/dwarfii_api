/**
 * WebSocketHandler is the main interface to send messages to the Dwarf II via websocket
 * It will analyse all messages received by the Dwarf II and send the recieved messages to the caller
 * It's a singleton class
 * @class
 * @constructor
 * @public
 */
export class WebSocketHandler {
    static instance: any;
    /**
     * Create a link to the Api and set the IP address of the dwarf II to connect to
     * @param {string | undefined} IPDwarf ; Set the IP address of the dwarf II to connect to
     */
    constructor(IPDwarf: string | undefined);
    socket: any;
    is_opened: boolean;
    IPDwarf: any;
    WS_Packet: {};
    isCallbackMessages: boolean;
    packetCallbackMessages: {};
    isCallbackErrors: boolean;
    packetCallbackErrors: {};
    isCallbackConnectStates: boolean;
    packetCallbackConnectStates: {};
    callbackReconnectFunction: any;
    /**
     * closeSocketTimer : Timer could be defined to manage a connection time of the dwarf that is too long
     */
    closeSocketTimer: any;
    /**
     * closeTimerHandler : function could be defined : to close the timeout timer.
     */
    closeTimerHandler: () => void;
    /**
     * onStopTimerHandler : function could be defined : this function will be called in case of error during connection
     */
    onStopTimerHandler: () => void;
    keep_connection: boolean;
    is_running: boolean;
    is_sending: boolean;
    is_receiving: boolean;
    is_stopping: boolean;
    is_buffered: boolean;
    sendingQueue: Queue;
    is_pong_received: boolean;
    is_ping_stopped: boolean;
    signal_ping_stop: boolean;
    ping_interval: number;
    nb_reconnect_default: number;
    nb_reconnect: number;
    nb_ping_error_default: number;
    nb_ping_error: number;
    /**
     * Set the IP address of the dwarf II to connect to
     * @param {string} IPDwarf ; Set the IP address of the dwarf II to connect to, force another one that was configured when calling the constructor.
     * @returns {Promise<void>}
     */
    setNewIpDwarf(IPDwarf: string): Promise<void>;
    /**
     * Set the intervall of the build in Ping function defult is 10s
     * @param {number} IntervalInSecond ; in Seconds
     * @returns {void}
     */
    setPingInterval(IntervalInSecond: number): void;
    /**
     * Set the nb of times for trying to reconnect to the dwarf if the connection closes, default is 5.
     * @param {number} nbTimes ;
     * @returns {void}
     */
    setDefaultReconnect(nbTimes: number): void;
    /**
     * Set the nb of times to stop connection after not receiving pong, default is 10.
     * @param {number} nbTimes ;
     * @returns {void}
     */
    setDefaultPongError(nbTimes: number): void;
    /**
     * Verify the status of the connection with the Dwarf II
     * @returns {boolean} status of the connection
     */
    isConnected(): boolean;
    /**
     * Main function, to call after prepare function, send the message and start dialogue with the Dwarf II
     * @returns {Promise<boolean>} false if the IP has not been set or if old Socket can't be closed
     */
    run(): Promise<boolean>;
    start(): void;
    /**
     * Prepare function : Define the message to send and the command to listen to and the callbacks functions
     * @param {Object|Object[]} WS_Packet ; Message or Array of Messages from the API to send to the Dwarf II
     * @param {string} senderId ; identifier of the sender
     * @param {string[]} expectedResponseCmd ; List of the Command Id to listen to, can be "*" to get all commands.
     * @param {function} callbackMessage ; Callback Fonction (const customMessageHandler = (txt_info:string, result_data:object)) to analyse reponses from the Dwarf II
     * @param {function} callbackConnectState ; Callback Fonction (const customStateHandler = (state)) to get the status result of the current connection of the Dwarf II
     * @param {function} callbackError ; Callback Fonction (const customErrorHandler = ()) called after an socket error.
     * @param {function} callbackReconnect ; Callback Fonction (const customReconnectHandler = ()) called after a socket reconnection.
     * @returns {Promise<void>}
     */
    prepare(WS_Packet: any | any[], senderId: string, expectedResponseCmd?: string[], callbackMessage?: Function, callbackConnectState?: Function, callbackError?: Function, callbackReconnect?: Function): Promise<void>;
    pingDwarf(): Promise<void>;
    wait_ping_stop(): Promise<void>;
    send(): Promise<void>;
    /**
     * stopCallbacks function : Stop receiving on the callbacks functions
     * @param {string} senderId ; Identifier of caller
     * @returns {void}
     **/
    stopCallbacks(senderId: string): void;
    deleteCallbacks(senderId?: string): void;
    packetCallbackReconnect: any[];
    verifyCallBacks(): void;
    sendCallbackConnectStates(state: any): void;
    sendCallbackErrors(): void;
    handleMessage(event: any): void;
    handleError(message: any): void;
    /**
     * Handle close event of the socket connection with the dwarf II
     * To call from a timeout function during the connection with the dwarf II
     * @returns {Promise<void>}
     */
    handleClose(message: any): Promise<void>;
    /**
     * Force close the socket connection with the dwarf II
     * @returns {Promise<void>}
     */
    close(): Promise<void>;
    /**
     * cleanup function : Stop all the functions
     * @param {boolean} forceStop ; if true do not try a reconnection, false by default
     * @returns {Promise<void>}
     **/
    cleanup(forceStop?: boolean): Promise<void>;
    cleanup_socket(): Promise<void>;
}
declare class Queue {
    constructor(...elements: any[]);
    elements: any[];
    push(...args: any[]): number;
    shift(...args: any[]): any;
    set length(length: number);
    get length(): number;
}
export {};
//# sourceMappingURL=websocket_class.d.ts.map