import { FC } from "react";
import styles from "./style.module.sass";

interface ButtonProps {
  children?: React.ReactNode;
  style?: string;
  size?: "_large" | "_medium" | "_small";
  color?: "_light" | "_dark" | "_accent";
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  style,
  size = "medium",
  color = "dark",
  type,
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={[style, styles.button, size, color].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
