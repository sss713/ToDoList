import { FC } from "react";
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

const Task: FC<TaskProps> = ({ id, name, description, status, dedline }) => {
  return (
    <div key={id} className={styles.task}>
      <ToggleButton />
      <Text>{name}</Text>
    </div>
  );
};

export default Task;
