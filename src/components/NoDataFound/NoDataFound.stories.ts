import NoDataFound from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/NoDataFound",
  component: NoDataFound,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NoDataFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoDataFoundPrimary: Story = {
  args: {},
};
