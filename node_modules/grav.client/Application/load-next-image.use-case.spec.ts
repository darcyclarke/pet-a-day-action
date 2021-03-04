require("jasmine");
import { LoadNextImageUseCase } from "./load-next-image.use-case";
import {
  mockClient,
  mockClientHavingASingleImage,
  mockClientHavingNoImages,
} from "../Common/TestDoubles/mock-factory";
import { UseCaseType } from "./use-case-type";
import { NoImagesError } from "../Domain/no-images-error";

describe("LoadNextImageUseCase", () => {
  let useCase: LoadNextImageUseCase;

  beforeEach(() => {
    useCase = new LoadNextImageUseCase();
  });

  it("should work", async () => {
    useCase.client = mockClient(UseCaseType.LoadNextImage);
    const nextImage = await useCase.execute();
    expect(nextImage).toBeDefined();
  });

  it("should work with a single image", async () => {
    useCase.client = mockClientHavingASingleImage();
    const nextImage = await useCase.execute();
    expect(nextImage).toBeDefined();
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
