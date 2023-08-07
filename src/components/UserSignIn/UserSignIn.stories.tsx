import type { Meta, StoryObj } from "@storybook/react";
import UserSignIn from ".";

const meta = {
  title: "Example/UserSignIn",
  component: UserSignIn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UserSignIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserSignInPrimary: Story = {
  args: {
    navigate: (path) => {
      ("");
    },
  },
};
