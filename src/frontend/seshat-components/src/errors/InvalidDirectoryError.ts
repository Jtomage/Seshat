export class InvalidDirectoryError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, InvalidDirectoryError.prototype);
    this.name = "InvalidDirectoryError";
  }
}
