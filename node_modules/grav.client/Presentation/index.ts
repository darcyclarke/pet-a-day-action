import { GravatarService } from "../Services/gravatar.service";
import { HttpShim } from "../Infrastructure/http-shim";

export * from "../Application/find-image.use-case";
export * from "../Application/get-primary-image.use-case";
export * from "../Application/load-next-image.use-case";
export * from "../Application/load-previous-image.use-case";
export * from "../Application/set-new-image.use-case";
export * from "../Application/verify-account.use-case";

export { ImageRating } from "../Domain/image-rating";

export class GravatarClient extends GravatarService {
  constructor(userEmail: string, userPassword: string) {
    super(userEmail, userPassword);
    this.http = new HttpShim(this.emailHash);
  }
}
