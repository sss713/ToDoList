import { FC } from "react";
import styles from "./style.module.sass";
import Text from "../Text";

interface ToggleButtonProps {
  style?: string;
  onClick?: () => void;
  type?: string;
}

const ToggleButton: FC<ToggleButtonProps> = ({
  style,
  onClick,
  type = "_regular",
}) => {
  function getTypeStyle(type: string) {
    switch (type) {
      case "completed": {
        return styles._completed;
      }
      case "overdue": {
        return styles._overdue;
      }
      default: {
        return styles._regular;
      }
    }
  }
  return (
    <div className={[style, getTypeStyle(type), styles.toggle].join(" ")}>
      <button className={styles.button} onClick={onClick}>
        {type == "completed" ? <Text>✓</Text> : <></>}
      </button>
    </div>
  );
};

export default ToggleButton;
