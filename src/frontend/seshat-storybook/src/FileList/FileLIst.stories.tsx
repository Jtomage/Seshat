import type { Meta, StoryObj } from "@storybook/react-vite";

import { FileList, type SelectableSystemItem } from "@seshat/components";
import { action } from "storybook/actions";

const meta: Meta<typeof FileList> = {
  component: FileList,
  parameters: {
    docs: {
      description: {
        component:
          "This is an uncontrolled component used to display the files and / or folders from a single SystemItemNode",
      },
    },
  },
  render: (args) => <FileList {...args} />,
  tags: ["autodocs"],
  title: "Components/FileList",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    enableCheckboxes: false,
    onChange: (id) => {
      action("onChange")(id);
    },
  },
  render: ({ ...rest }) => {
    const generateSampleData = () => {
      const temp: SelectableSystemItem[] = [];
      const parentId = "/c:/users/documents";
      for (let i: number = 0; i < 5; i++) {
        temp.push({
          id: parentId,
          isDirectory: true,
          label: `folder ${i.toString()}`,
          selected: i % 2 === 0,
        });
        temp.push({
          id: parentId,
          isDirectory: false,
          label: `file ${i.toString()}`,
          selected: i % 2 === 0,
        });
      }
      return temp;
    };

    const items = generateSampleData();

    return <FileList {...rest} items={items} />;
  },
};
