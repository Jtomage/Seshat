import type { Meta, StoryObj } from "@storybook/react-vite";

import { FileExplorerTreeRoot } from "@seshat/components";

const meta = {
  component: FileExplorerTreeRoot,

  render: (args) => <FileExplorerTreeRoot {...args} />,

  tags: ["autodocs"],

  title: "Components/FileExplorerTree",
} satisfies Meta<typeof FileExplorerTreeRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
