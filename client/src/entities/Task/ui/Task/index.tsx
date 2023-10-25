import { FC, useState } from "react";
import styles from "./style.module.sass";
import ToggleButton from "shared/ui/ToggleButton";
import Text from "shared/ui/Text";
import TaskCard from "../TaskCard";

interface TaskProps {
  name: string;
  dedline: Date;
  completed: Boolean;
}

const Task: FC<TaskProps> = ({ name, dedline, completed }) => {
  const [taskCard, setTaskCard] = useState(false);
  return (
    <div
      className={[styles.task, completed].join(" ")}
      onClick={() => setTaskCard(!taskCard)}
    >
      <ToggleButton type={completed ? "_completed" : ""} />
      <Text style={styles.name}>{name}</Text>
      <Text type="text_small" style={styles.dedline}>
        {dedline.toLocaleDateString()}
      </Text>
      {taskCard && <TaskCard setHidden={() => setTaskCard(!taskCard)} />}
    </div>
  );
};

export default Task;
