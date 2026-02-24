import type { Meta, StoryObj } from "@storybook/react-vite";

import { FileList, type SelectableSystemItem } from "@seshat/components";
import { useState } from "react";
import { action } from "storybook/actions";

const meta: Meta<typeof FileList> = {
  component: FileList,
  parameters: {
    docs: {
      description: {
        component:
          "This is an uncontrolled dumb component used to display the files and / or folders from a single SystemItemNode",
      },
    },
  },
  render: (args) => <FileList {...args} />,
  tags: ["autodocs"],
  title: "Components/FileList",
};

export default meta;

type Story = StoryObj<typeof meta>;

const generateSampleData = () => {
  const temp: SelectableSystemItem[] = [];
  const parentId = "/c:/users/documents";
  for (let i: number = 0; i < 5; i++) {
    temp.push({
      id: `${parentId}/folder ${i.toString()}`,
      isDirectory: true,
      label: `folder ${i.toString()}`,
      selected: i % 2 === 0,
    });
    temp.push({
      id: `${parentId}/file ${i.toString()}`,
      isDirectory: false,
      label: `file ${i.toString()}`,
      selected: i % 2 === 0,
    });
  }
  return temp;
};

export const Default: Story = {
  args: {
    fileListMode: "readonly",
    items: generateSampleData(),
  },
  render: (args) => {
    return <FileList {...args} />;
  },
};

export const SingleSelect: Story = {
  args: {
    fileListMode: "singleSelect",
    items: generateSampleData(),
    onItemClicked: (id: string) => {
      action("onItemClicked")(id);
    },
  },
  render: (args) => {
    return <FileList {...args} />;
  },
};

export const ControlledMultiSelect: Story = {
  args: {
    fileListMode: "multiSelect",
  },
  render: (args) => {
    const [items, setItems] = useState(() => generateSampleData());

    const handleOnCheckboxChange = (id: string) => {
      action("onCheckboxChange")(id);
      // create new array
      const updatedItems: SelectableSystemItem[] = items.map((i) =>
        i.id === id ? { ...i, selected: !i.selected } : i
      );
      setItems(updatedItems);
    };

    return (
      <FileList
        {...args}
        items={items}
        onCheckboxChange={handleOnCheckboxChange}
      />
    );
  },
};
