import { FC, useState } from "react";
import styles from "./style.module.sass";
import ToggleButton from "shared/ui/ToggleButton";
import Text from "shared/ui/Text";

interface TaskProps {
  id: number;
  description: string;
  name: string;
  status: number;
  dedline: Date;
  completed: Boolean;
  isFull?: boolean;
}

const Task: FC<TaskProps> = ({
  id,
  name,
  description,
  status,
  dedline,
  completed,
  isFull = false,
}) => {
  const [full, setFull] = useState(isFull);
  return (
    <div key={id} className={[styles.task, completed].join(" ")}>
      <ToggleButton type={completed ? "_completed" : ""} />
      <Text style={styles.name} onClick={() => setFull(!full)}>
        {name}
      </Text>
      <Text type="text_small" style={styles.dedline}>
        {dedline.toLocaleDateString()}
      </Text>
      <Text type="text_small" style={styles.dedline}>
        {dedline.toLocaleDateString()}
      </Text>
      {full && <Text style={styles.description}>{description}</Text>}
    </div>
  );
};

export default Task;
