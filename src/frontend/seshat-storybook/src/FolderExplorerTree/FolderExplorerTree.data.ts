import { faker } from "@faker-js/faker";
import { DirectoryRoot } from "@seshat/components";

export const createDirectoryStringPath = (parentPath: string): string => {
  // child folder name
  const childDirName = faker.word.noun();

  let path = parentPath;

  if (parentPath.endsWith("/")) path += childDirName;
  else path += "/" + childDirName;

  return path;
};

export const createDirectoryRoot = (numChildren: number): DirectoryRoot => {
  const dirRoot = new DirectoryRoot();

  for (let i: number = 0; i < numChildren; i++) {
    const childPath = createDirectoryStringPath("/");
    dirRoot.addChild(childPath);
    for (let j: number = 0; j < numChildren; j++) {
      const grandChild = createDirectoryStringPath(childPath);
      dirRoot.addChild(grandChild);
    }
  }
  return dirRoot;
};
