import { FC } from "react";
import styles from "./style.module.sass";

interface ButtonProps {
  children?: React.ReactNode;
  style?: string;
  size?: "_large" | "_medium" | "_small";
  color?: "_light" | "_dark" | "_accent";
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: any;
  onHover?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  style,
  size = "_medium",
  color = "_dark",
  type,
  disabled = false,
  onClick,
  onHover,
}) => {
  function getSizeStyle(size: "_large" | "_medium" | "_small") {
    switch (size) {
      case "_large": {
        return styles._large;
      }
      case "_medium": {
        return styles._medium;
      }
      case "_small": {
        return styles._small;
      }
    }
  }
  function getColorStyle(color: "_light" | "_dark" | "_accent") {
    switch (color) {
      case "_light": {
        return styles._light;
      }
      case "_dark": {
        return styles._dark;
      }
      case "_accent": {
        return styles._accent;
      }
    }
  }
  return (
    <button
      type={type}
      disabled={disabled}
      className={[
        style,
        styles.button,
        getSizeStyle(size),
        getColorStyle(color),
      ].join(" ")}
      onClick={onClick}
      onMouseEnter={onHover}
    >
      {children}
    </button>
  );
};

export default Button;
