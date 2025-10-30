import type {Meta, StoryObj} from "@storybook/react-vite";

import { SearchBox } from "@seshat/components";

const meta = {
    title: "Components/SearchBox",
    component: SearchBox,
    tags: ['autodocs']
} satisfies Meta<typeof SearchBox>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        fieldName: "Search"
    }
}