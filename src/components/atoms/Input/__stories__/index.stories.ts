import InputField from "..";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputFieldPrimary: Story = {
  args: {
    type: "text",
    value: "email@gmail.com",
    id: "email",
    placeholder: "Email",
    dataTestId: "email-input",
    onChange: () => {
      ("");
    },
  },
};
