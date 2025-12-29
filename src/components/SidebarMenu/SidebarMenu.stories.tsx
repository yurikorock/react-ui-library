import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SidebarMenu, type MenuItem } from "./SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
};

export default meta;

type Story = StoryObj<typeof SidebarMenu>;

const menuItems: MenuItem[] = [
  { label: "Home" },
  {
    label: "Products",
    children: [{ label: "Product 1" }, { label: "Product 2" }],
  },
  { label: "About" },
];
export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <>
        <button onClick={() => setIsOpen(true)}>Open Menu</button>
        <SidebarMenu
          items={menuItems}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </>
    );
  },
};
