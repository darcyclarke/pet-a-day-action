import { UseCase } from "./use-case.interface";
import { GravatarClient } from "../Presentation";
import { UserImage } from "../Domain/user-image";

export class FindImageUseCase implements UseCase<UserImage | undefined> {
  public client: GravatarClient;

  public imageName: string;

  execute(): Promise<UserImage | undefined> {
    return this.client
      .userImages()
      .then((response) => response.userImages)
      .then((userImages) =>
        userImages.find((image) => image.name == this.imageName)
      );
  }
}
