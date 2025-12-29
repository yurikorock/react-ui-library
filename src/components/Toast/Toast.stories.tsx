import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);

    return (
      <>
        {visible && (
          <Toast
            message="Info message"
            onClose={() => setVisible(false)}
            showCloseButton
          />
        )}
      </>
    );
  },
};

export const Success: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return (
      <>
        {visible && (
          <Toast
            message="Success message"
            type="success"
            onClose={() => setVisible(false)}
            showCloseButton
          />
        )}
      </>
    );
  },
};

export const Error: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return (
      <>
        {" "}
        {visible && (
          <Toast
            message="Error message"
            type="error"
            duration={5000}
            onClose={() => setVisible(false)}
            showCloseButton
          />
        )}
      </>
    );
  },
};

export const Warning: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return (
      <>
        {" "}
        {visible && (
          <Toast
            message="Warning message"
            type="warning"
            duration={3000}
            onClose={() => setVisible(false)}
            showCloseButton
          />
        )}
      </>
    );
  },
};