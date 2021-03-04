export class NoImagesError extends Error {
  constructor() {
    super("Whoops, looks like you don't have any images yet! Please add some to your Gravatar account.");
  }
}
