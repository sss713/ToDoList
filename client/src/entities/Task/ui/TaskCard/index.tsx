import { FC, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./style.module.sass";
import Label from "shared/ui/Label";
import AddButton from "shared/ui/AddButton";
import Close from "shared/ui/Close";
import { createPost, updatePost } from "entities/Task/model/tasks";
import { useSelector, useDispatch } from "react-redux";

type TaskData = {
  taskName: string;
  description: string;
  status: number;
  deadline: Date;
};

interface TaskCardProps {
<<<<<<< HEAD
  isEditing?: boolean;
  setHidden: () => void;
  name?: string;
  description?: string;
  deadline?: Date;
  status?: number;
  completed?: boolean;
  taskId: number;
}

const TaskCard: FC<TaskCardProps> = ({
  isEditing = true,
  setHidden,
  name: taskName = "",
  description: taskDescription = "",
  deadline: taskDeadline = new Date(),
  status: taskStatus = 1,
  completed = false,
  taskId,
}) => {
  const userId = useSelector((state: any) => state.user.id);
  const dispatch: any = useDispatch();
=======
<<<<<<< HEAD
  isEditing?: boolean;
  setEditing?: () => void;
=======
  editing?: boolean;
>>>>>>> temp
  setHidden: () => void;
  taskName?: string;
  description?: string;
  importance?: number;
  dedline?: Date;
}

<<<<<<< HEAD
const TaskCard: FC<TaskCardProps> = ({
  isEditing,
  setEditing,
  setHidden,
  taskName: task = "",
  description: desc = "",
  importance: imp = 0,
  dedline: ded = new Date(),
}) => {
=======
const TaskCard: FC<TaskCardProps> = ({ editing = false, setHidden }) => {
>>>>>>> temp
>>>>>>> temp
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<TaskData>({ mode: "onBlur" });
  const onSubmit = handleSubmit((data) => {
    console.log(JSON.stringify(data));
    isEditing
      ? dispatch(
          updatePost(
            name,
            description,
            status,
            deadline,
            completed,
            taskId,
            userId
          )
        )
      : dispatch(
          createPost(name, description, status, deadline, completed, userId)
        );
    reset();
  });
<<<<<<< HEAD
  const [name, setName] = useState(taskName);
  const [description, setDescription] = useState(taskDescription);
  const [deadline, setDedline] = useState(taskDeadline);
  const [status, setStatus] = useState(taskStatus);
=======
  const [taskName, setTaskName] = useState(task);
  const [description, setDescription] = useState(desc);
  // const [importance, setImportance] = useState(imp);
  const [dedline, setDedline] = useState(ded);
>>>>>>> temp

  return (
    <div className={styles.form__container}>
      <Close onClick={setHidden} />
      <form onSubmit={() => onSubmit} className={styles.form}>
        <Label
          errorHidden={Boolean(errors?.taskName)}
          errorMessage={errors?.taskName?.message}
          style={styles.taskName}
        >
          <input
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
          errorHidden={Boolean(errors?.deadline)}
          errorMessage={errors?.deadline?.message}
          style={styles.dedline}
        >
          <input
            placeholder="Дедлайн"
            type="datetime-local"
            value={deadline.toISOString().substring(0, 16)}
            className={[
              styles.input,
              errors?.deadline && styles.input_error,
            ].join(" ")}
            {...register("deadline", {
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
<<<<<<< HEAD

        <AddButton
          type="submit"
          style={styles.button}
          disabled={!isValid}
          onClick={setHidden}
        >
          {isEditing ? "✎" : "+"}
        </AddButton>
=======
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
            onClick={() => setEditing}
          >
            ✎
          </AddButton>
        )}
>>>>>>> temp
      </form>
    </div>
  );
};

export default TaskCard;
