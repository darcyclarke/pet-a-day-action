require("jasmine");
import { GetPrimaryImageUseCase } from "./get-primary-image.use-case";
import { mockClient } from "../Common/TestDoubles/mock-factory";
import { UseCaseType } from "./use-case-type";

describe("GetPrimaryImageUseCase", () => {
  let useCase: GetPrimaryImageUseCase;

  beforeAll(() => {
    useCase = new GetPrimaryImageUseCase();
    useCase.client = mockClient(UseCaseType.GetPrimaryImage);
  });

  it("should work", async () => {
    const primaryImage = await useCase.execute();
    expect(primaryImage).toBeDefined();
  });
});
