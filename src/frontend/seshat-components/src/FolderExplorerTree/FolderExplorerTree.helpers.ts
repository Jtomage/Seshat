import type { TreeViewDefaultItemModelProperties } from "@mui/x-tree-view";

/**
 * @param folderPaths converts 1 level to tree items. Assumes all paths use forward slash/
 */
export const folderPathsToTreeViewBaseItem = (
  folderPaths: string[]
): TreeViewDefaultItemModelProperties[] => {
  const results: TreeViewDefaultItemModelProperties[] = [];

  for (const path of folderPaths) {
    const folderName = path.split("/").pop();
    if (folderName) {
      const item: TreeViewDefaultItemModelProperties = {
        id: path,
        label: folderName,
      };

      results.push(item);
    }
  }

  return results;
};
