import { UseCase } from "./use-case.interface";
import { GravatarClient } from "../Presentation";
import { UserImage } from "../Domain/user-image";
import { NoImagesError } from "../Domain/no-images-error";
import { GetPrimaryImageUseCase } from "./get-primary-image.use-case";

export class LoadPreviousImageUseCase implements UseCase<UserImage> {
  public client: GravatarClient;

  execute(): Promise<UserImage> {
    let userImages: Array<UserImage> = [];
    let getPrimaryImage = new GetPrimaryImageUseCase();

    getPrimaryImage.client = this.client;

    return getPrimaryImage
      .execute()
      .then(async (primaryImage) => {
        const response = await this.client.userImages();
        userImages = response.userImages;
        if(!userImages.length) throw new NoImagesError();
        return userImages.findIndex(
          (image) => image.name == primaryImage.name
        );
      })
      .then((primaryImageIndex) => primaryImageIndex - 1)
      .then((previousImageIndex) => {
        return previousImageIndex < 0
          ? userImages[userImages.length - 1]
          : userImages[previousImageIndex];
      })
      .then(async (image) => {
        await this.client.useUserImage(image.name);
        return image;
      });
  }
}
