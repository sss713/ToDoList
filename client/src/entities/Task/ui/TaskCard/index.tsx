import { FC } from "react";
import styles from "./style.module.sass";
import ToggleButton from "shared/ui/ToggleButton";
import Text from "shared/ui/Text";

interface TaskCardProps {
  id: number;
  description: string;
  name: string;
  status: string;
  dedline: string;
}

const TaskCard: FC<TaskCardProps> = ({
  id,
  name,
  description,
  status,
  dedline,
}) => {
  return <div key={id} className={styles.taskCard}></div>;
};

export default TaskCard;
