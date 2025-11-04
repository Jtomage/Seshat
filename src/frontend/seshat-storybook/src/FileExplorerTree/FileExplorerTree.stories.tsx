import type { Meta, StoryObj } from "@storybook/react-vite";

import { FileExplorerTree } from "@seshat/components";

const meta = {
  component: FileExplorerTree,
  render: (args) => <FileExplorerTree {...args} />,
  tags: ["autodocs"],
  title: "Components/FileExplorerTree",
} satisfies Meta<typeof FileExplorerTree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
