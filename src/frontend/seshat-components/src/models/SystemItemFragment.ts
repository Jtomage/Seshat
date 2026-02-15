import { InvalidPathError } from "../errors/InvalidPathError";

/**
 * using a class to handle possible errors.
 */
export class SystemItemFragment {
  readonly isDirectory: boolean;
  readonly name: string;

  constructor(isDirectory: boolean, name: string) {
    if (name.includes("/"))
      throw new InvalidPathError(
        "System Item Fragment cannot contain a forward slash"
      );

    this.name = name;
    this.isDirectory = isDirectory;
  }
}
