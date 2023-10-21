import FormRegistration from "shared/ui/FormRegistration";
import Text from "shared/ui/Text";
import styles from "./style.module.sass";

function Registration() {
  return (
    <div className={styles.registration}>
      <FormRegistration
        name="To&Do"
        onClick={() => {
          window.location.assign("http://localhost:3000/todo");
        }}
      />
      <Text type="text_small" style={styles.loginPage}>
        Вход
      </Text>
    </div>
  );
}

export default Registration;
