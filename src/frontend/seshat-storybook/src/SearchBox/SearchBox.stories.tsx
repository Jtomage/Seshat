import type { Meta, StoryObj } from "@storybook/react-vite";

import { SearchBox } from "@seshat/components";
import { action } from "storybook/actions";

const meta = {
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "outlined", "standard"],
    },
  },
  component: SearchBox,
  render: (args) => <SearchBox {...args} />,
  tags: ["autodocs"],
  title: "Components/SearchBox",
} satisfies Meta<typeof SearchBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Search",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      action("onChange")(e);
    },
    placeholder: "",
    size: "medium",
    variant: "standard",
  },
};
