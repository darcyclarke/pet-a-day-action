require("jasmine");
import { FindImageUseCase } from "./find-image.use-case";
import { mockClient } from "../Common/TestDoubles/mock-factory";
import { UseCaseType } from "./use-case-type";
import { imageName } from "../Common/TestDoubles/primitive-stubs";

describe("FindImageUseCase", () => {
  let useCase: FindImageUseCase;

  beforeAll(() => {
    const client = mockClient(UseCaseType.FindImage);
    expect(client).toBeDefined();
    useCase = new FindImageUseCase();
    useCase.client = client;
  });

  it("should work", async () => {
    useCase.imageName = imageName;
    const foundImage = await useCase.execute();
    expect(foundImage).toBeDefined();
  });
});
