import type { Meta, StoryObj } from "@storybook/react";
import UserSignup from ".";

const meta = {
  title: "Example/UserSignup",
  component: UserSignup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UserSignup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserSignupPrimary: Story = {
  args: {
    navigate: (path) => {
      ("");
    },
  },
};
