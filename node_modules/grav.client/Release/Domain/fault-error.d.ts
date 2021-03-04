export declare class FaultError extends Error {
    faultCode: number;
    faultString: string;
    constructor(faultCode: number, faultString: string);
}
