import { useState, type ChangeEvent } from "react";
import styles from "./Input.module.css";

export type InputProps = {
  type?: "text" | "password" | "number";
  value: string;
  placeholder?: string;
  clearable?: boolean;
  onChange: (value: string) => void;
};

export const Input = ({
  type = "text",
  value,
  placeholder,
  clearable = false,
  onChange,
}: InputProps) => {
  const [isPasswordVisible, setiSPasswordVisible] = useState(false);

  const isPassword = type === "password";
  const showClearButton = clearable && value.length > 0;

  const inputType = type === "password" && isPasswordVisible ? "text" : type;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  const handleClear = () => {
    onChange("");
  };
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />

      {isPassword && (
        <button
          type="button"
          className={styles.iconButton}
          onClick={() => setiSPasswordVisible((prev) => !prev)}
        >
          {isPasswordVisible ? "🙈" : "👁"}
        </button>
      )}
      {showClearButton && (
        <button
          type="button"
          onClick={handleClear}
          className={`${styles.iconButton} ${styles.clearButton}`}
        >
          x
        </button>
      )}
    </div>
  );
};
