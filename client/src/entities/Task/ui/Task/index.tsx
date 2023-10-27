import { FC, useState, useEffect } from "react";
import styles from "./style.module.sass";
import ToggleButton from "shared/ui/ToggleButton";
import Text from "shared/ui/Text";
import TaskCard from "../TaskCard";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "entities/Task/model/tasks";

interface TaskProps {
  name: string;
  description: string;
  deadline: Date;
  status: number;
  completed: boolean;
  taskId: number;
}

const Task: FC<TaskProps> = ({
  name,
  description,
  deadline,
  status,
  completed,
  taskId,
}) => {
  const [taskCard, setTaskCard] = useState(false);
  const [isCompleted, setCompleted] = useState(completed);
  const userId = useSelector((state: any) => state.user.id);
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(
      updatePost(
        name,
        description,
        status,
        deadline,
        isCompleted,
        taskId,
        userId
      )
    );
  }, [isCompleted]);
  return (
    <>
      <div
        className={[styles.task, isCompleted ? styles._completed : ""].join(
          " "
        )}
      >
        <ToggleButton
          type={isCompleted ? "completed" : ""}
          onClick={() => {
            setCompleted(!isCompleted);
          }}
        />
        <Text onClick={() => setTaskCard(!taskCard)} style={styles.name}>
          {name}
        </Text>
        <Text type="text_small" style={styles.dedline}>
          {deadline?.toLocaleDateString()}
        </Text>
      </div>
      {taskCard && (
        <TaskCard
          setHidden={() => setTaskCard(!taskCard)}
          taskId={taskId}
          name={name}
          description={description}
          deadline={deadline}
          status={status}
          completed={isCompleted}
        />
      )}
    </>
  );
};

export default Task;
