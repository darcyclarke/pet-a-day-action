require("jasmine");
import { LoadPreviousImageUseCase } from "./load-previous-image.use-case";
import {
  mockClient,
  mockClientHavingASingleImage,
  mockClientHavingNoImages,
} from "../Common/TestDoubles/mock-factory";
import { UseCaseType } from "./use-case-type";
import { NoImagesError } from "../Domain/no-images-error";

describe("LoadPreviousImageUseCase", () => {
  let useCase: LoadPreviousImageUseCase;

  beforeEach(() => {
    useCase = new LoadPreviousImageUseCase();
  });

  it("should work", async () => {
    useCase.client = mockClient(UseCaseType.LoadPreviousImage);
    const previousImage = await useCase.execute();
    expect(previousImage).toBeDefined();
  });

  it("should work with a single image", async () => {
    useCase.client = mockClientHavingASingleImage();
    const previousImage = await useCase.execute();
    expect(previousImage).toBeDefined();
  });

  it("should throw with zero images", async () => {
    useCase.client = mockClientHavingNoImages();
    let error: any = null;
    try {
      await useCase.execute();
    } catch (ex) {
      error = ex;
    } finally {
      expect(error).toBeInstanceOf(NoImagesError);
    }
  });
});
