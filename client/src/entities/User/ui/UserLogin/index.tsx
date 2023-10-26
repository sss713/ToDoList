import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./style.module.sass";
import LinkTo from "shared/ui/LinkTo";
import Text from "shared/ui/Text";
import Label from "shared/ui/Label";
import Button from "shared/ui/Button";
import { login, registration } from "entities/User/model/user";
import { useDispatch } from "react-redux";

type UserLoginFormData = {
  nickName: string;
  phone: string;
  email: string;
  password: string;
};

interface UserLoginFormProps {}

const UserLoginForm: FC<UserLoginFormProps> = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<UserLoginFormData>({ mode: "onBlur" });
  const onSubmit = handleSubmit((data) => {
    const { email, password, nickName } = data
    console.log(JSON.stringify(data));
    console.log(isValid)
    isValid && isRegistration
    ? registration(email, password, nickName)
    : dispatch(login(email, password));
    reset();
  });
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistration, setIsRegistration] = useState(true);
  const dispatch: any = useDispatch();


  return (
    <div className={styles.form__container}>
      <Text type="h2" style={styles.name}>
        To&Do
      </Text>
      <form onSubmit={onSubmit} className={styles.form}>
        {isRegistration && (
          <Label
            name="Никнейм"
            errorHidden={Boolean(errors?.nickName)}
            errorMessage={errors?.nickName?.message}
          >
            <input
              placeholder="Никнейм"
              type="text"
              value={nickName}
              className={[
                styles.input,
                errors?.nickName && styles.input_error,
              ].join(" ")}
              {...register("nickName", {
                required: "Поле обязательно",
                minLength: {
                  value: 3,
                  message: "Минимум 3 символа",
                },
                maxLength: {
                  value: 20,
                  message: "Максимум 20 символов",
                },
              })}
              onChange={(e) => setNickName(e.target.value)}
            />
          </Label>
        )}
        <Label
          name="Email"
          errorHidden={Boolean(errors?.email)}
          errorMessage={errors?.email?.message}
        >
          <input
            placeholder="Email"
            type="email"
            value={email}
            className={[styles.input, errors?.email && styles.input_error].join(
              " "
            )}
            {...register("email", {
              required: "Поле обязательно",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Введен не валидный email",
              },
              minLength: {
                value: 3,
                message: "Минимум 3 символа",
              },
              maxLength: {
                value: 20,
                message: "Максимум 20 символов",
              },
            })}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <Label
          name="Пароль"
          errorHidden={Boolean(errors?.password)}
          errorMessage={errors?.password?.message}
        >
          <input
            placeholder="Пароль"
            type="password"
            value={password}
            className={[
              styles.input,
              errors?.password && styles.input_error,
            ].join(" ")}
            {...register("password", {
              required: "Поле обязательно",
              minLength: {
                value: 8,
                message: "Минимум 8 символа",
              },
              maxLength: {
                value: 16,
                message: "Максимум 16 символов",
              },
            })}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        <Button
          type="submit"
          style={styles.button}
          color={!isValid ? "_light" : "_dark"}
          disabled={!isValid}
          onClick={() => {
            isValid && isRegistration
              ? registration(email, password, nickName)
              : dispatch(login(email, password));
          }}
        >
          <LinkTo iswork={isValid} src="/todo">
            {isRegistration ? "Зарегистрироваться" : "Войти"}
          </LinkTo>
        </Button>
      </form>
      <Text
        type="text_small"
        style={styles.page}
        onClick={() => setIsRegistration(!isRegistration)}
      >
        {isRegistration ? "Вход" : "Регистрация"}
      </Text>
    </div>
  );
};

export default UserLoginForm;
