import { FC } from "react";
import styles from "./style.module.sass";
import Task from "../Task";

interface TaskProps {
  id: number;
  name: string;
  description: string;
  status: number;
  dedline: Date;
  completed: boolean;
}

interface TasksRowProps {
  tasks: Array<TaskProps> | [];
}

const TasksRow: FC<TasksRowProps> = ({ tasks }) => {
  return (
    <div className={styles.task__container}>
      {tasks?.map((t: TaskProps) => (
        <Task
          key={t.id}
          taskId={t.id}
          name={t.name}
          deadline={t.dedline}
          completed={t.completed}
          description={t.description}
          status={t.status}
        />
      ))}
    </div>
  );
};

export default TasksRow;
