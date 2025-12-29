import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Input/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return <Input placeholder="Enter text" value={value} onChange={setValue} />;
  },
};
export const Password: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Input
        type="password"
        placeholder="Password"
        value={value}
        onChange={setValue}
      />
    );
  },
};
export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState("Clear me");
    return <Input clearable value={value} onChange={setValue} />;
  },
};
