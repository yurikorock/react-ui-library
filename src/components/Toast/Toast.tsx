import { useEffect, useState } from "react";
import styles from "./Toast.module.css";

export type ToastType = "success" | "error" | "info" | "warning";

export type ToastProps = {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
};

export const Toast = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
  showCloseButton = false,
}: ToastProps) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(() => {
        onClose?.(), 300;
      });
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]} ${exit ? styles["toast-exit"] : ""}`}>
      <span>{message}</span>
      {showCloseButton && (
        <button className={styles.closeButton} onClick={onClose}>
          x
        </button>
      )}
    </div>
  );
};
