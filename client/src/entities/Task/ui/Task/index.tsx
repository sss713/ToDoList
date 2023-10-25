import { FC, useState } from "react";
import styles from "./style.module.sass";
import ToggleButton from "shared/ui/ToggleButton";
import Text from "shared/ui/Text";
import TaskCard from "../TaskCard";

interface TaskProps {
  id: number;
  description: string;
  name: string;
  status: number;
  dedline: Date;
  completed: boolean;
  onclick?: () => void;
}

const Task: FC<TaskProps> = ({
  id,
  name,
  description,
  status,
  dedline,
  completed,
}) => {
  const [isCreatingTask, setCreatingTask] = useState(false);
  const [isEditing, setEditing] = useState(false);
  return (
    <div
      key={id}
      className={[styles.task, completed].join(" ")}
      onClick={() => setCreatingTask(!isCreatingTask)}
    >
      <ToggleButton type={completed ? "_completed" : ""} />
      <Text style={styles.name}>{name}</Text>
      <Text type="text_small" style={styles.dedline}>
        {dedline.toLocaleDateString()}
      </Text>
      {isCreatingTask && (
        <TaskCard
          setHidden={() => setCreatingTask(!isCreatingTask)}
          isEditing={isEditing}
          setEditing={() => setEditing(!isEditing)}
          taskName={name}
          description={description}
          dedline={dedline}
          importance={status}
        />
      )}
    </div>
  );
};

export default Task;
