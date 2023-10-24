import { FC } from "react";
import styles from "./style.module.sass";
import Text from "shared/ui/Text";
import LinkTo from "shared/ui/LinkTo";

interface UserLogoutProps {}

const UserLogout: FC<UserLogoutProps> = () => {
  return (
    <div className={styles.logout}>
      <Text style={styles.text} type="text_small">
        <LinkTo src="/">Выйти</LinkTo>
      </Text>
    </div>
  );
};

export default UserLogout;
