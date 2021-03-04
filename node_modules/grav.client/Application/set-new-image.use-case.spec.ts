require("jasmine");
import { SetNewImageUseCase } from "./set-new-image.use-case";
import {
  mockClient,
  mockHttpRequests
} from "../Common/TestDoubles/mock-factory";
import { UseCaseType } from "./use-case-type";
import { fakeImageFilePath, imageUrl } from "../Common/TestDoubles/primitive-stubs";
import { ImageRating } from "../Presentation";

describe("SetNewImageUseCase", () => {
  let useCase: SetNewImageUseCase;

  beforeEach(() => {
    mockHttpRequests();
    useCase = new SetNewImageUseCase();
    useCase.client = mockClient(UseCaseType.SetNewImage);
  });

  it("should upload image file", async () => {
    useCase.imageFilePath = fakeImageFilePath;
    useCase.imageRating = ImageRating.G;
    const newImageName = await useCase.execute();
    expect(newImageName).toBeDefined();
  });

  it("should upload image from url", async () => {
    useCase.imageUrl = imageUrl;
    useCase.imageRating = ImageRating.G;
    const newImageName = await useCase.execute();
    expect(newImageName).toBeDefined();
  });

  it("should throw if image not provided", async () => {
    let message = false;
    try {
      await useCase.execute();
    } catch (ex) {
      message = ex.message;
    }
    expect(message).toBeTruthy();
  });
});
