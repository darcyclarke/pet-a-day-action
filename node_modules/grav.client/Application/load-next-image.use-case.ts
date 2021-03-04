import { UseCase } from "./use-case.interface";
import { GravatarClient } from "../Presentation";
import { UserImage } from "../Domain/user-image";
import { NoImagesError } from "../Domain/no-images-error";
import { GetPrimaryImageUseCase } from "./get-primary-image.use-case";

export class LoadNextImageUseCase implements UseCase<UserImage> {
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
      .then((primaryImageIndex) => primaryImageIndex + 1)
      .then((nextImageIndex) => {
        return nextImageIndex >= userImages.length
          ? userImages[0]
          : userImages[nextImageIndex];
      })
      .then(async (image) => {
        await this.client.useUserImage(image.name);
        return image;
      });
  }
}
