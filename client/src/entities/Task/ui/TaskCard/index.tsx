import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./style.module.sass";
import Label from "shared/ui/Label";
import AddButton from "shared/ui/AddButton";
import Close from "shared/ui/Close";

type TaskData = {
  taskName: string;
  description: string;
  importance: number;
  dedline: Date;
};

interface TaskCardProps {
  editing?: boolean;
  isHidden: boolean;
  setHidden: () => void;
}

const TaskCard: FC<TaskCardProps> = ({
  editing = false,
  isHidden,
  setHidden,
}) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<TaskData>({ mode: "onBlur" });
  const onSubmit = handleSubmit((data) => {
    console.log(JSON.stringify(data));
    reset();
  });
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  // const [importance, setImportance] = useState(0);
  const [isEditing, setEditing] = useState(editing);
  const [dedline, setDedline] = useState(new Date());

  return (
    <div className={styles.form__container}>
      <Close onClick={() => setHidden} />
      <form onSubmit={onSubmit} className={styles.form}>
        <Label
          errorHidden={Boolean(errors?.taskName)}
          errorMessage={errors?.taskName?.message}
        >
          <input
            disabled={!isEditing}
            placeholder="Название"
            type="text"
            value={taskName}
            className={[
              styles.input,
              errors?.taskName && styles.input_error,
            ].join(" ")}
            {...register("taskName", {
              required: "Поле обязательно",
              minLength: {
                value: 3,
                message: "Минимум 3 символа",
              },
              maxLength: {
                value: 65,
                message: "Максимум 65 символов",
              },
            })}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </Label>
        <Label
          errorHidden={Boolean(errors?.dedline)}
          errorMessage={errors?.dedline?.message}
        >
          <input
            disabled={!isEditing}
            placeholder="Дедлайн"
            type="datetime-local"
            value={dedline.toISOString().substring(0, 16)}
            className={[
              styles.input,
              errors?.dedline && styles.input_error,
            ].join(" ")}
            {...register("dedline", {
              required: "Поле обязательно",
              // pattern: {
              //   value:
              //     /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
              //   message: "Введено не валидное время",
              // },
            })}
            onChange={(e) => {
              const date = new Date(e.target.value);
              setDedline(date);
            }}
            onKeyDown={(e) => {
              e.preventDefault();
            }}
          />
        </Label>
        <Label
          errorHidden={Boolean(errors?.description)}
          errorMessage={errors?.description?.message}
          style={styles.description}
        >
          <textarea
            disabled={!isEditing}
            placeholder="Описание"
            value={description}
            className={[
              styles.input,
              errors?.description && styles.input_error,
            ].join(" ")}
            {...register("description", {
              required: "Поле обязательно",
              minLength: {
                value: 3,
                message: "Минимум 3 символа",
              },
              maxLength: {
                value: 300,
                message: "Максимум 300 символов",
              },
            })}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Label>
        {isEditing ? (
          <AddButton
            type="submit"
            style={styles.button}
            disabled={!isValid}
            onClick={setHidden}
          >
            +
          </AddButton>
        ) : (
          <AddButton
            type="button"
            style={styles.button}
            onClick={() => {
              setEditing(!isEditing);
            }}
          >
            ✎
          </AddButton>
        )}
      </form>
    </div>
  );
};

export default TaskCard;