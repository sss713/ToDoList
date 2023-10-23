import { FC } from "react";
import styles from "./style.module.sass";
import Text from "../Text";

interface ButtonProps {
  children?: React.ReactNode;
  style?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: any;
}

const Button: FC<ButtonProps> = ({
  children,
  style,
  disabled = false,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={[styles.button, style].join(" ")}
      onClick={onClick}
    >
      <Text type="h2">{children}</Text>
    </button>
  );
};

export default Button;
