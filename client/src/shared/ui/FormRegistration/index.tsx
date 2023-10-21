import { FC } from "react";
import { useForm } from "react-hook-form";
import styles from "./style.module.sass";
import Label from "../Label";
import Text from "../Text";
import Button from "../Button";

type FormRegistrationData = {
  nickName: string;
  email: string;
  password: string;
};

interface FormRegistrationProps {
  name?: string;
}

const FormRegistration: FC<FormRegistrationProps> = ({ name = "Form" }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormRegistrationData>({ mode: "onBlur" });
  const onSubmit = handleSubmit((data) => {
    console.log(JSON.stringify(data));
    reset();
  });
  return (
    <div className={styles.registration}>
      <Text type="h2">{name}</Text>
      <form onSubmit={onSubmit} className={styles.form}>
        <Label
          name="Никнейм"
          errorHidden={Boolean(errors?.nickName)}
          errorMessage={errors?.nickName?.message}
        >
          <input
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
                message: "Минимум 20 символов",
              },
            })}
          />
        </Label>
        <Label
          name="Email"
          errorHidden={Boolean(errors?.email)}
          errorMessage={errors?.email?.message}
        >
          <input
            className={[styles.input, errors?.email && styles.input_error].join(
              " "
            )}
            {...register("email", {
              required: "Поле обязательно",
              minLength: {
                value: 3,
                message: "Минимум 3 символа",
              },
              maxLength: {
                value: 20,
                message: "Минимум 20 символов",
              },
            })}
          />
        </Label>
        <Label
          name="Password"
          errorHidden={Boolean(errors?.password)}
          errorMessage={errors?.password?.message}
        >
          <input
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
                message: "Минимум 16 символов",
              },
            })}
          />
        </Label>
        <Button type="submit" disabled={!isValid}>
          Зарегистрироваться
        </Button>
      </form>
      <Text type="h5">Вход</Text>
    </div>
  );
};

export default FormRegistration;