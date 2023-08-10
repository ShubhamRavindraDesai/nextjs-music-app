import CustomSlider from "..";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/CustomSlider",
  component: CustomSlider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CustomSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomSliderPrimary: Story = {
  args: {
    value: 50,
    onChange: () => (event: Event, value: number | number[]) => {
      ("");
    },
    dataTestId: "slider",
    min: 0,
    max: 100,
  },
};
