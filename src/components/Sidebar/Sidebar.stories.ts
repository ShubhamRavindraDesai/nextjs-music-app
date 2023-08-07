import type { Meta, StoryObj } from "@storybook/react";
import SideBar from ".";

const meta = {
  title: "Example/SideBar",
  component: SideBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SideBarPrimary: Story = {
  args: {},
};
