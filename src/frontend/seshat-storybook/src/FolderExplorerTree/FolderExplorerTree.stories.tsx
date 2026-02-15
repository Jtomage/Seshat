import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  FolderExplorerTree,
  SystemItemFragment,
  SystemItemNode,
  SystemItemTree,
} from "@seshat/components";
import { useState } from "react";

import {
  createRandomChildrenItemFragment,
  createSystemItemTree,
} from "../mock/mockSystemFileData";

const meta: Meta<typeof FolderExplorerTree> = {
  component: FolderExplorerTree,
  render: (args) => <FolderExplorerTree {...args} />,
  tags: ["autodocs"],
  title: "Components/FolderExplorerTree",
} satisfies Meta<typeof FolderExplorerTree>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tree: createSystemItemTree(5),
  },
};

export const LazyTree: Story = {
  args: {
    tree: createSystemItemTree(5),
  },
  render: ({ tree: initialTree, ...rest }) => {
    const [tree, setTree] = useState<SystemItemTree>(initialTree);

    const handleItemExpansion = (
      _event: null | React.SyntheticEvent,
      itemId: string,
      isExpanded: boolean
    ) => {
      // must have children or will not allowe it expand, will need to load grand children
      // only fetch if exapanding and not already loaded
      if (!isExpanded) return;

      // get expanded directory item
      const expandedItem = tree.find(itemId);
      // the item and children should have already been defined
      if (!expandedItem || !expandedItem.children) return;

      // check if has grand children
      let newTree: SystemItemTree = tree;
      for (const child of expandedItem.children) {
        // if it is a file or has children skip
        if (!child.isDirectory || child.children) continue;
        // if no grand children add grand children
        const grandKids: SystemItemFragment[] =
          createRandomChildrenItemFragment(8);
        // add grandkids to tree
        newTree = newTree.addChildren(child.id, grandKids);
      }
      //update to new tree
      setTree(newTree);
    };

    return (
      <FolderExplorerTree
        {...rest}
        onItemExpansionToggle={handleItemExpansion}
        tree={tree}
      ></FolderExplorerTree>
    );
  },
};
