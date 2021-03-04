require("jasmine");
import { VerifyAccountUseCase } from "./verify-account.use-case";
import { mockClient } from "../Common/TestDoubles/mock-factory";
import { UseCaseType } from "./use-case-type";

describe("VerifyAccountUseCase", () => {
  let useCase: VerifyAccountUseCase;

  beforeAll(() => {
    useCase = new VerifyAccountUseCase();
    useCase.client = mockClient(UseCaseType.VerifyAccount);
  });

  it("should work", async () => {
    const exists = await useCase.execute();
    expect(exists).toBe(true);
  });
});
