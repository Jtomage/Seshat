import type { Meta, StoryObj } from "@storybook/react-vite";

import { SearchBox } from "@seshat/components";

const meta = {
  argTypes: {
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

    orientation: {
      control: { type: "select" },

      options: ["vertical", "horizontal"],
    },

    size: {
      control: { type: "select" },

      options: ["small", "medium", "large"],
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
    appearance: "underline",

    fieldName: "Search",

    hint: "this is a hint",

    onChange: (e) => {
      console.log(e);
    },

    orientation: "horizontal",

    placeholder: "",

    size: "medium",
  },
};
