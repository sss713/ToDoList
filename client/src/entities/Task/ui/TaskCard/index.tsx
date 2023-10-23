import { FC } from "react";
import styles from "./style.module.sass";
import ToggleButton from "shared/ui/ToggleButton";
import Text from "shared/ui/Text";
import Task from "../Task";

interface TaskProps {
  id: number;
  name: string;
  description: string;
  status: number;
  dedline: Date;
  comleted: boolean;
}
interface TaskCardProps {
  task: TaskProps;
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  return (
    <div key={task.id} className={styles.taskCard}>
      <Task
        id={task.id}
        name={task.name}
        description={task.description}
        status={task.status}
        dedline={task.dedline}
        completed={false}
      ></Task>
    </div>
  );
};

export default TaskCard;
