import type { Meta, StoryObj } from "@storybook/react";
import { AccordionDemo } from "../components/accordion";

const meta = {
  title: "Components/Accordion",
  component: AccordionDemo,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof AccordionDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
