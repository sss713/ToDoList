import { FC, useState } from "react";
import styles from "./style.module.sass";
import ToggleButton from "shared/ui/ToggleButton";
import Text from "shared/ui/Text";

interface TaskProps {
  id: number;
  description: string;
  name: string;
  status: string;
  dedline: string;
  isFull: boolean;
}

const Task: FC<TaskProps> = ({
  id,
  name,
  description,
  status,
  dedline,
  isFull,
}) => {
  const [full, setFull] = useState(isFull);
  function getTypeStyle(status: string) {
    switch (status) {
      case "completed": {
        return styles._completed;
      }
      case "overdue": {
        return styles._overdue;
      }
    }
  }
  return (
    <div key={id} className={[styles.task, getTypeStyle(status)].join(" ")}>
      <ToggleButton type={status} />
      <Text style={styles.name} onClick={() => setFull(!full)}>
        {name}
      </Text>
      <Text type="text_small" style={styles.dedline}>
        {dedline}
      </Text>
      {full && <Text style={styles.description}>{description}</Text>}
    </div>
  );
};

export default Task;
