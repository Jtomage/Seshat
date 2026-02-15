import { cleanAndvalidatePath } from "./File.helpers";
import { SystemItemFragment } from "./SystemItemFragment";
import { SystemItemNode } from "./SystemItemNode";

export class SystemItemTree extends SystemItemNode {
  private constructor(
    id: string,
    isDirectory: boolean,
    label: string,
    children?: SystemItemNode[]
  ) {
    super(id, isDirectory, label, children);
  }

  static createRoot(): SystemItemTree {
    return new SystemItemTree("/", true, "/");
  }

  /**
   * DOES NOT REPLACE / UPSERT CHILD
   * found it is sometimes easier, usually with directories, to add a
   * single child. With directories it will prevent multiple loops for
   * adding (grand x N) children
   * @param path the child path
   * @param isDirectory
   */
  addChild(path: string, isDirectory: boolean): SystemItemTree {
    // create new child Node
    const newChild = SystemItemNode.create(path, isDirectory);

    const parentPathArr = newChild
      .getParentPath()
      .split("/")
      .filter((f) => f.trim() !== "");

    const nextRoot = this.walk(this, parentPathArr, (parent) => {
      // do NOT add chilren if its a file
      // TODO: add error handling
      if (!parent.isDirectory) return parent;

      // check if child exists
      const childFound = parent.children?.find(({ id }) => id === newChild.id);

      // if found return parent, does NOT override, to signal nothing changed
      // walk will check if anything changed
      if (childFound) return parent;

      return SystemItemNode.clonewithUpdatedChildren(parent, [
        ...(parent.children ?? []),
        newChild,
      ]);
    });

    return nextRoot
      ? new SystemItemTree(
          nextRoot.id,
          nextRoot.isDirectory,
          nextRoot.label,
          nextRoot.children
        )
      : this;
  }

  /**
   * only adds children that match the same path
   * upserts, if old child will be replace by incoming / new child
   * @param parentPath the parent path
   * @param childItems the child items
   * @returns
   */
  addChildren(
    parentPath: string,
    childFragments: SystemItemFragment[]
  ): SystemItemTree {
    // create child nodes
    const newChildren = childFragments.map((i) => {
      const childPath = parentPath.endsWith("/")
        ? `${parentPath}${i.name}`
        : `${parentPath}/${i.name}`;
      return SystemItemNode.create(childPath, i.isDirectory);
    });

    // create path Array
    const parentPathArr = parentPath.split("/").filter((f) => f.trim() !== "");

    // walk the path and add the new children
    const nextRoot = this.walk(this, parentPathArr, (parent) => {
      // create a map to allow for replacing the old child with the new child (upsert logic)
      const childMap = new Map<string, SystemItemNode>(
        parent.children?.map((child) => [child.id, child])
      );

      // process new items: replace if ID exists otherwise add
      newChildren.forEach((newChild) => {
        childMap.set(newChild.id, newChild);
      });

      const updateChildren = Array.from(childMap.values());

      return SystemItemNode.clonewithUpdatedChildren(parent, updateChildren);
    });

    //if result returned it was updated then update rooth
    return nextRoot
      ? new SystemItemTree(
          nextRoot.id,
          nextRoot.isDirectory,
          nextRoot.label,
          nextRoot.children
        )
      : this;
  }

  find(path: string): null | SystemItemNode {
    path = cleanAndvalidatePath(path);

    // create path Array
    const pathArr = path.split("/").filter((f) => f.trim() !== "");

    const result = this.walk(this, pathArr);
    return result;
  }

  /**
   * return directories ONLY of the entire tree
   */
  getOnlyFolders(): SystemItemNode[] {
    const foldersRoot = super.getFolderTree();
    return foldersRoot?.children ?? [];
  }

  /**
   * remove children
   * @param parentPath the path to the parent
   * @param childNamesToRemove just the name of the child files
   */
  removeChildren(
    parentPath: string,
    childNamesToRemove: string[]
  ): SystemItemTree {
    // removal look up
    const removalSet = new Set<string>();

    // create child paths
    childNamesToRemove.forEach((name) => {
      const childPath = parentPath.endsWith("/")
        ? `${parentPath}${name}`
        : `${parentPath}/${name}`;
      removalSet.add(childPath);
    });

    // create path Array
    const parentPathArr = parentPath.split("/").filter((f) => f.trim() !== "");

    const nextRoot = this.walk(this, parentPathArr, (parent) => {
      const filtered = parent.children?.filter(
        (child) => !removalSet.has(child.id)
      );
      // If no children were actually removed, return original reference to skip React update
      // this will trigger a null check in walk
      if (filtered?.length === parent.children?.length) return parent;

      return SystemItemNode.clonewithUpdatedChildren(parent, filtered);
    });

    // next has a result it was changed update root
    return nextRoot
      ? new SystemItemTree(
          nextRoot.id,
          nextRoot.isDirectory,
          nextRoot.label,
          nextRoot.children
        )
      : this;
  }

  /**
   * replaces the children with the new children
   * @param parentPath
   * @param childFragments
   * @returns
   */
  replaceChildren(
    parentPath: string,
    childFragments: SystemItemFragment[]
  ): SystemItemTree {
    // create child nodes
    const newChildren = childFragments.map((i) => {
      const childPath = parentPath.endsWith("/")
        ? `${parentPath}${i.name}`
        : `${parentPath}/${i.name}`;
      return SystemItemNode.create(childPath, i.isDirectory);
    });

    // create path Array
    const parentPathArr = parentPath.split("/").filter((f) => f.trim() !== "");

    // walk the path and add the new children
    const nextRoot = this.walk(this, parentPathArr, (parent) => {
      return SystemItemNode.clonewithUpdatedChildren(parent, newChildren);
    });

    // if result returned then update root
    return nextRoot
      ? new SystemItemTree(
          nextRoot.id,
          nextRoot.isDirectory,
          nextRoot.label,
          nextRoot.children
        )
      : this;
  }

  /**
   * Transversal engine
   * @param currentNode the current node
   * @param targetPathArr the rest of the path in array form
   * @param transformer call back to transform node
   * @returns
   */
  private walk(
    currentNode: SystemItemNode,
    targetPathArr: string[],
    transformer?: (node: SystemItemNode) => SystemItemNode
  ): null | SystemItemNode {
    // end of target path return current node to callback func
    if (targetPathArr.length === 0) {
      // if no transformer return current node
      if (!transformer) return currentNode;
      //transform
      const transformed = transformer(currentNode);
      // if transformer returned same object, no change occurred
      return transformed === currentNode ? null : transformed;
    }

    // if current node is a file OR does not have children return null
    // TODO: add error handling
    if (!currentNode.isDirectory || !currentNode.children) return null;

    // create child id
    const childName = targetPathArr[0]; // using index as it returns a string
    const childId =
      currentNode.id === "/"
        ? `${currentNode.id}${childName}`
        : `${currentNode.id}/${childName}`;

    const childFound = currentNode.children.find(({ id }) => id === childId);

    // if child not found return null
    // TODO: add error handling
    if (!childFound) return null;

    // continue recursively walking since child found
    const walkResult = this.walk(
      childFound,
      targetPathArr.slice(1),
      transformer
    );

    // If we are just SEARCHING, pass the result straight up
    if (!transformer) return walkResult;

    // if updating child has any changes, if no changes return null
    if (!walkResult) return null;

    // 4. Something changed: Create a new array and replace the old child with the new one
    const newChildren = currentNode.children.map((child) =>
      child.id === childId ? walkResult : child
    );

    // return changes
    return SystemItemNode.clonewithUpdatedChildren(currentNode, newChildren);
  }
}
