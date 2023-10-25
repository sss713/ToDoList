import { FC } from "react";
import styles from "./style.module.sass";
import Text from "shared/ui/Text";
import LinkTo from "shared/ui/LinkTo";
import { useDispatch } from "react-redux";
import { logout } from "shared/api/reducers/userReducer";

interface UserLogoutProps {
  text?: string;
}

const UserLogout: FC<UserLogoutProps> = ({ text = "Выйти" }) => {
  const dispatch: any = useDispatch();
  return (
    <div className={styles.logout}>
      <Text
        style={styles.text}
        type="text_small"
        onClick={() => dispatch(logout)}
      >
        <LinkTo src="/">{text}</LinkTo>
      </Text>
    </div>
  );
};

export default UserLogout;
