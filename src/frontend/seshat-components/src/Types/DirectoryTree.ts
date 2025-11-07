import { Tree, TreeNode } from "./Tree";

export interface DirectoryInfo {
  fullPath: string;
  name: string;
}

export class DirectoryTree extends Tree<DirectoryInfo> {
  constructor() {
    const rootVal: DirectoryInfo = { fullPath: "/", name: "/" };
    super(rootVal);
  }

  /**
   * walk the file path
   * @param path the file path
   * @returns DirectoryTreeNode if found otherwise returns null
   */
  walk(path: string): null | TreeNode<DirectoryInfo> {
    const pathSplit = path.split("/").filter((item) => item.trim() !== "");

    // walk the path using recursion
    const recursionWalk = (
      pathArr: string[],
      node: TreeNode<DirectoryInfo>
    ): null | TreeNode<DirectoryInfo> => {
      const currName = pathArr.shift();

      // if currName is null / empty return node as empty strings should be removed and path found
      if (!currName) return node;

      // search children to see if matches curr
      const result = node.children.find(({ value }) => value.name === currName);

      if (!result) return null;

      return recursionWalk(pathArr, result);
    };

    return recursionWalk(pathSplit, this.root);
  }
}
