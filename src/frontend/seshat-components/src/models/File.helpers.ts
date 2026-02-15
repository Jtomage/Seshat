import { InvalidPathError } from "../errors/InvalidPathError";

/**
 * Cleans and validates path
 * @param path the file / folder path
 */
export const cleanAndvalidatePath = (path: string): string => {
  if (!path.startsWith("/"))
    throw new InvalidPathError("Path must start with a forward slash");

  // remove forward slash at the end if there is any
  if (path.endsWith("/")) path = path.slice(0, -1);

  //TODO: add illegal character check file character check

  return path;
};
