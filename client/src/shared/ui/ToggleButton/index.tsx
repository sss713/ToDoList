import { FC } from "react";
import styles from "./style.module.sass";

interface ToggleButtonProps {
  children?: React.ReactNode;
  style?: string;
  onClick?: () => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ children, style, onClick }) => {
  return (
    <button className={[style, styles.toggle].join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default ToggleButton;
