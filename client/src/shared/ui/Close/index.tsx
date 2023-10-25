import { FC } from "react";
import styles from "./style.module.sass";
import Text from "shared/ui/Text";

interface CloseProps {
  onClick?: () => void;
}

const Close: FC<CloseProps> = ({ onClick }) => {
  return (
    <div className={styles.close} onClick={onClick}>
      <Text style={styles.text} type="text_small">
        ✕
      </Text>
    </div>
  );
};

export default Close;
