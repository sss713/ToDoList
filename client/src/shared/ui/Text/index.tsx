import { FC } from "react";
import "./style.module.sass";

interface TextProps {
  children?: string;
  style?: string;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "text" | "text_small";
  accent?: boolean;
}

const Text: FC<TextProps> = ({
  children,
  style,
  type = "text",
  accent = false,
}) => {
  return (
    <div className={[style, type, accent && "_accent"].join(" ")}>
      {children}
    </div>
  );
};

export default Text;
