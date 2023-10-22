import UserLoginForm from "../../entities/User/ui/UserLogin/index";
import styles from "./style.module.sass";

function Login() {
  return (
    <div className={styles.registration}>
      <UserLoginForm></UserLoginForm>
    </div>
  );
}

export default Login;
