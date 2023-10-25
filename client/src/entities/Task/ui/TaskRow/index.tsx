import { FC } from "react";
import styles from "./style.module.sass";
import Task from "../Task";

interface TaskProps {
  id: number;
  name: string;
  description: string;
  status: number;
  dedline: Date;
  comleted: boolean;
}

interface TasksRowProps {
  tasks: TaskProps[] | undefined;
}

const TasksRow: FC<TasksRowProps> = ({ tasks }) => {
  return (
    <div className={styles.task__container}>
      {tasks?.map((t) => (
        <Task
          id={t.id}
          name={t.name}
          description={t.description}
          status={t.status}
          dedline={t.dedline}
          completed={t.comleted}
        />
      ))}
    </div>
  );
};

export default TasksRow;
