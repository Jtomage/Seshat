import { faker } from "@faker-js/faker";
import { SystemItemFragment, SystemItemTree } from "@seshat/components";

export const createSystemItemTree = (numChildren: number): SystemItemTree => {
  let rootDir = SystemItemTree.createRoot();
  // add child and grand children
  for (let i: number = 0; i < numChildren; i++) {
    // create child dirs
    const childDirPath = `/${faker.word.noun()}`;
    rootDir = rootDir.addChild(childDirPath, true);
    // create grand children
    const grandChildren: SystemItemFragment[] =
      createRandomChildrenItemFragment(numChildren);
    // add grand children
    rootDir = rootDir.addChildren(childDirPath, grandChildren);
  }

  return rootDir;
};

export const createRandomChildrenItemFragment = (
  numChildren: number
): SystemItemFragment[] => {
  const items: SystemItemFragment[] = [];
  for (let j: number = 0; j < numChildren; j++) {
    // change the probabilty to give more chance to create directories
    if (faker.datatype.boolean({ probability: 0.4 }))
      items.push(createDirectoryItemFragment());
    else items.push(createFileItemFragment());
  }

  return items;
};

export const createFileItemFragment = (): SystemItemFragment => {
  return new SystemItemFragment(false, faker.person.firstName());
};

export const createDirectoryItemFragment = (): SystemItemFragment => {
  return new SystemItemFragment(true, faker.word.noun());
};
