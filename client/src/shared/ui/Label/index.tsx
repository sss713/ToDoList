import { FC } from "react";
import styles from "./style.module.sass";
import ErrorMessage from "../ErrorMessage";
import Text from "../Text";

interface LabelProps {
  children?: React.ReactNode;
  style?: string;
  name?: string;
  errorHidden?: boolean;
  errorMessage?: string;
  onClick?: () => void;
}

const Label: FC<LabelProps> = ({
  children,
  style,
  name,
  errorHidden,
  errorMessage,
}) => {
  return (
    <label className={[style, styles.label].join(" ")}>
      <Text type="text_small" style={styles.name}>
        {name}
      </Text>
      {children}
      {!errorHidden && <ErrorMessage message={errorMessage} />}
    </label>
  );
};

export default Label;
