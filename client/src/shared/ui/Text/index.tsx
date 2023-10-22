import { FC } from "react";
import styles from "./style.module.sass";

interface TextProps {
  children?: React.ReactNode;
  style?: string;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "text" | "text_small";
  accent?: boolean;
  onClick?: () => void;
}

const Text: FC<TextProps> = ({
  children,
  style,
  type = "text",
  accent = false,
  onClick,
}) => {
  function getTypeStyle(
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "text" | "text_small"
  ) {
    switch (type) {
      case "h1": {
        return styles.h1;
      }
      case "h2": {
        return styles.h2;
      }
      case "h3": {
        return styles.h3;
      }
      case "h4": {
        return styles.h4;
      }
      case "h5": {
        return styles.h5;
      }
      case "text": {
        return styles.text;
      }
      case "text_small": {
        return styles.text_small;
      }
    }
  }

  return (
    <div
      onClick={onClick}
      className={[style, getTypeStyle(type), accent && styles._accent].join(
        " "
      )}
    >
      {children}
    </div>
  );
};

export default Text;
