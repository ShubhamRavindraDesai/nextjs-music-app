import ForgotPassword from "@/src/components/ForgotPassword";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/ForgotPassword",
  component: ForgotPassword,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ForgotPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ForgotPasswordPrimary: Story = {
  args: {
    onForgotPassword: async () => {
      ("");
    },
  },
};
