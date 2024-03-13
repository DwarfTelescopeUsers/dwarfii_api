export class WebSocketHandler {
    constructor(IPDwarf: any);
    socket: any;
    is_opened: boolean;
    IPDwarf: string;
    WS_Packet: {};
    packetCallbackMessages: {};
    packetCallbackErrors: {};
    packetCallbackConnectStates: {};
    closeSocketTimer: any;
    closeTimerHandler: () => void;
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
    setNewIpDwarf(IPDwarf: any): Promise<void>;
    setPingInterval(IntervalInSecond: any): void;
    isConnected(): boolean;
    run(): Promise<boolean>;
    start(): void;
    prepare(WS_Packet: any, senderId: any, expectedResponseCmd?: any[], callbackMessage?: () => void, callbackConnectState?: () => void, callbackError?: () => void): Promise<void>;
    pingDwarf(): Promise<void>;
    wait_ping_stop(): Promise<void>;
    send(): Promise<void>;
    stop(senderId: any): void;
    deleteCallbacks(senderId?: string): void;
    sendCallbackConnectStates(state: any): void;
    sendCallbackErrors(): void;
    handleMessage(event: any): void;
    handleError(message: any): void;
    handleClose(message: any): Promise<void>;
    close(): Promise<void>;
    cleanup(): Promise<void>;
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