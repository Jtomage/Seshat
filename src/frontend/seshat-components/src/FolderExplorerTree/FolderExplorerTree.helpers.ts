import type { TreeViewDefaultItemModelProperties } from "@mui/x-tree-view";

/**
 * @param folderPaths converts 1 level to tree items. Assumes all paths use forward slash/
 */
export const folderPathsToTreeViewDefaultItemModelProperties = (
  folderPaths: string[]
): TreeViewDefaultItemModelProperties[] => {
  const results: TreeViewDefaultItemModelProperties[] = [];

  for (const path of folderPaths) {
    const item = folderPathToTreeViewDefaultItemModelProperties(path);
    if (item) results.push(item);
  }

  return results;
};

export const folderPathToTreeViewDefaultItemModelProperties = (
  folderPath: string
): null | TreeViewDefaultItemModelProperties => {
  const folderName = folderPath.split("/").pop();
  if (folderName) {
    const item: TreeViewDefaultItemModelProperties = {
      id: folderPath,
      label: folderName,
    };

    return item;
  }

  return null;
};
