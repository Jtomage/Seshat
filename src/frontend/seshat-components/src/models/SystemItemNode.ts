import type { TreeViewDefaultItemModelProperties } from "@mui/x-tree-view";

import { InvalidPathError } from "../errors/InvalidPathError";
import { cleanAndvalidatePath } from "./File.helpers";

export class SystemItemNode implements TreeViewDefaultItemModelProperties {
  children?: SystemItemNode[];
  id: string;
  isDirectory: boolean;
  label: string;

  protected constructor(
    id: string,
    isDirectory: boolean,
    label: string,
    children?: SystemItemNode[]
  ) {
    this.id = id;
    this.isDirectory = isDirectory;
    this.label = label;
    this.children = children;
  }

  // Factory to "update" a node by returning a new instance with a new children array
  static clonewithUpdatedChildren(
    original: SystemItemNode,
    newChildren: SystemItemNode[] | undefined
  ): SystemItemNode {
    //TODO: add sort

    return new SystemItemNode(
      original.id,
      original.isDirectory,
      original.label,
      newChildren
    );
  }

  /**
   * main factory function to create System item nodes
   * @param id
   * @param isDirectory
   * @param children
   * @returns
   */
  static create(
    id: string,
    isDirectory: boolean,
    children?: SystemItemNode[]
  ): SystemItemNode {
    id = cleanAndvalidatePath(id);

    // get file name
    const name = id.split("/").pop();
    if (!name)
      throw new InvalidPathError(
        "Invalid file / folder name, undefined or empty"
      );

    // validate children to make sure they are in the same path
    children?.forEach((child) => {
      if (id !== child.getParentPath())
        throw new InvalidPathError(
          `Children do not match parent. parentId: ${id} childId: ${child.id}`
        );
    });

    return new SystemItemNode(id, isDirectory, name, children);
  }

  /**
   * get the files from the current node, NOT NESTED
   * @returns only the current nodes children, does NOT go multiple levels
   */
  getFiles(): SystemItemNode[] {
    // there should be no files as this is NOT a directory
    if (!this.isDirectory) return [];

    const onlyChildFiles = this.children?.filter((child) => !child.isDirectory);
    return onlyChildFiles ?? [];
  }

  /**
   * Returns a new FileSystemItem tree, multi-level / nested, containing ONLY directories.
   * If the current node is a file, it returns null.
   */
  getFolderTree(): null | SystemItemNode {
    // return null if the current node is a file
    if (!this.isDirectory) return null;

    // recursively get children.
    const onlyDirectoryChildren = this.children
      ?.map((child) => child.getFolderTree())
      .filter((child) => child !== null);

    // Optimization for useMemo: Check if we actually need to return a new object
    // We only return 'this' if:
    // a) There were NO files in the immediate children
    // b) AND every child's reference remained the same (no nested files removed)
    const hasFiles = (this.children ?? []).some((c) => !c.isDirectory);
    const childrenReferencesChanged = onlyDirectoryChildren?.some(
      (child, index) => child !== this.children?.[index]
    );

    if (!hasFiles && !childrenReferencesChanged) {
      return this;
    }

    // return new instance represting the filtered branch
    return new SystemItemNode(
      this.id,
      this.isDirectory,
      this.label,
      onlyDirectoryChildren
    );
  }

  getParentPath(): string {
    return this.id.slice(0, this.id.lastIndexOf("/"));
  }
}
