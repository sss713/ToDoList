import { FC, useState } from "react";
import styles from "./style.module.sass";
import ToggleButton from "shared/ui/ToggleButton";
import Text from "shared/ui/Text";
import TaskCard from "../TaskCard";

interface TaskProps {
  name?: string;
  description?: string;
  deadline?: Date;
  status?: number;
  completed?: boolean;
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
  return (
    <>
      <div
        className={[styles.task, completed].join(" ")}
        onClick={() => setTaskCard(!taskCard)}
      >
        <ToggleButton type={completed ? "_completed" : ""} />
        <Text style={styles.name}>{name}</Text>
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
          completed={completed}
        />
      )}
    </>
  );
};

export default Task;
