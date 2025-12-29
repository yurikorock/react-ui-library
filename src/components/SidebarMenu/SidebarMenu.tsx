import { useState } from "react";
import styles from "./SidebarMenu.module.css";

export type MenuItem = {
  label: string;
  children?: MenuItem[];
};

export type SidebarMenuProps = {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
};

export const SidebarMenu = ({ items, isOpen, onClose }: SidebarMenuProps) => {
  const [open, setOpen] = useState<number[]>([]);

  const toggleSubmenu = (index: number) => {
    setOpen((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose}></div>}

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.menu}>
          {items.map((item, index) => (
            <li key={index}>
              <div
                className={styles.menuItem}
                onClick={() => item.children && toggleSubmenu(index)}
              >
                {item.label}
                {item.children && (
                  <span>{open.includes(index) ? "▾" : "▸"}</span>
                )}
              </div>

              {item.children && open.includes(index) && (
                <ul className={styles.submenu}>
                  {item.children.map((subItem, subIndex) => (
                    <li key={subIndex} className={styles.menuItem}>
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
