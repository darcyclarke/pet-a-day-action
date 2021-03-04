import { UseCase } from "./use-case.interface";
import { GravatarClient } from "../Presentation";

export class VerifyAccountUseCase implements UseCase<boolean> {
  public client: GravatarClient;

  async execute(): Promise<boolean> {
    const existsResponse = await this.client.exists();
    const testResponse = await this.client.test();
    const emailExists = existsResponse.success;
    const sanityCheckPasses = !!testResponse.response;
    return emailExists && sanityCheckPasses;
  }
}
