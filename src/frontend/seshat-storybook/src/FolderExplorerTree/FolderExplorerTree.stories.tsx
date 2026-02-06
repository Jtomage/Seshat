import type { TreeViewDefaultItemModelProperties } from "@mui/x-tree-view";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { faker } from "@faker-js/faker";
import { FolderExplorerTree } from "@seshat/components";

const meta = {
  component: FolderExplorerTree,
  render: (args) => <FolderExplorerTree {...args} />,
  tags: ["autodocs"],
  title: "Components/FolderExplorerTree",
} satisfies Meta<typeof FolderExplorerTree>;

export default meta;

type Story = StoryObj<typeof meta>;

const createTreeViewItem = (): TreeViewDefaultItemModelProperties => {
  const item: TreeViewDefaultItemModelProperties = {
    id: faker.string.uuid(),
    label: `${faker.person.firstName()} ${faker.person.lastName()}`,
  };
  return item;
};

const generateInitialData = (): TreeViewDefaultItemModelProperties[] => {
  const items: TreeViewDefaultItemModelProperties[] = [];

  for (let i: number = 0; i < 10; i++) {
    const parent = createTreeViewItem();
    parent.children = [];
    for (let j: number = 0; j < 4; j++) {
      parent.children.push(createTreeViewItem());
    }

    items.push(parent);
  }

  return items;
};

export const Default: Story = {
  args: {
    items: generateInitialData(),
  },
};
