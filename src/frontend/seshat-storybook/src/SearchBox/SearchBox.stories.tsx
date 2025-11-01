import type { Meta, StoryObj } from "@storybook/react-vite";

import { SearchBox } from "@seshat/components";

const meta = {
  title: "Components/SearchBox",
  component: SearchBox,
  tags: ["autodocs"],
  render: (args) => <SearchBox {...args} />,
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    appearance: {
      control: { type: "select" },
      options: [
        "outline",
        "underline",
        "filled-darker",
        "filled-lighter",
        "filled-darker-shadow",
        "filled-lighter-shadow",
      ],
    },
  },
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fieldName: "Search",
    orientation: "horizontal",
    hint: "this is a hint",
    size: "medium",
    appearance: "underline",
    placeholder: "",
    onChange: (e) => {
      e;
    },
  },
};
