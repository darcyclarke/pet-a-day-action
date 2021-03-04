import { UseCase } from "./use-case.interface";
import { GravatarClient } from "../Presentation";
import { UserImage } from "../Domain/user-image";

export class GetPrimaryImageUseCase implements UseCase<UserImage> {
  public client: GravatarClient;

  execute(): Promise<UserImage> {
    return this.client
      .addresses()
      .then((response) => response.userAddresses)
      .then((addresses) => {
        return addresses.find(
          (address) => address.email == this.client.email
        ) as any;
      })
      .then(
        (address) =>
          ({
            name: address.imageName,
            rating: address.imageRating,
            url: address.imageUrl,
          } as UserImage)
      );
  }
}
