import { FC } from "react";
import styles from "./style.module.sass";
import Text from "../Text";

interface ErrorMessageProps {
  message?: string;
  style?: string;
  onClick?: () => void;
}

const ErrorMessage: FC<ErrorMessageProps> = ({
  message = "Ошибка!",
  style,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <Text type="text_small" style={[style, styles.message].join(" ")}>
        {message}
      </Text>
    </div>
  );
};

export default ErrorMessage;
