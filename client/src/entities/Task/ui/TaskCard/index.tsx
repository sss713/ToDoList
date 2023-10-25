import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./style.module.sass";
import Label from "shared/ui/Label";
import AddButton from "shared/ui/AddButton";
import Close from "shared/ui/Close";

type TaskData = {
  taskName: string;
  description: string;
  status: number;
  dedline: Date;
};

interface TaskCardProps {
  editing?: boolean;
  setHidden: () => void;
  name?: string;
  description?: string;
  dedline?: Date;
  status?: number;
}

const TaskCard: FC<TaskCardProps> = ({
  editing = false,
  setHidden,
  name: taskName = "",
  description: taskDescription = "",
  dedline: taskDedline = new Date(),
  status: taskStatus = 1,
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
  const [isEditing, setEditing] = useState(editing);
  const [name, setName] = useState(taskName);
  const [description, setDescription] = useState(taskDescription);
  const [dedline, setDedline] = useState(taskDedline);
  const [status, setStatus] = useState(taskStatus);

  return (
    <div className={styles.form__container}>
      <Close onClick={setHidden} />
      <form onSubmit={onSubmit} className={styles.form}>
        <Label
          errorHidden={Boolean(errors?.taskName)}
          errorMessage={errors?.taskName?.message}
          style={styles.taskName}
        >
          <input
            disabled={!isEditing}
            placeholder="Название"
            type="text"
            value={name}
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
            onChange={(e) => setName(e.target.value)}
          />
        </Label>
        <Label
          errorHidden={Boolean(errors?.dedline)}
          errorMessage={errors?.dedline?.message}
          style={styles.dedline}
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
          errorHidden={Boolean(errors?.status)}
          errorMessage={errors?.status?.message}
          style={styles.status}
        >
          <input
            disabled={!isEditing}
            placeholder="Важность"
            type="number"
            value={status}
            className={[
              styles.input,
              errors?.status && styles.input_error,
            ].join(" ")}
            {...register("status", {
              max: {
                value: 10,
                message: "Должно быть меньше 10",
              },
              min: {
                value: 1,
                message: "Должно быть не меньше 1",
              },
            })}
            onChange={(e) => setStatus(parseInt(e.target.value))}
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
