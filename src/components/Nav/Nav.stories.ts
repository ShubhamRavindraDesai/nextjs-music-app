import Nav from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Nav",
  component: Nav,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavPrimary: Story = {
  args: {},
};
