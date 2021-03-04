export class FaultError extends Error {
  constructor(public faultCode: number, public faultString: string) {
    super(`[${faultCode}]: ${faultString}`);
  }
}
