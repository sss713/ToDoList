import TasksRow from "entities/Task/ui/TaskRow";
import styles from "./style.module.sass";
import { useEffect, useState } from "react";
interface TaskProps {
  id: number;
  name: string;
  description: string;
  status: number;
  dedline: Date;
  comleted: boolean;
}

function ToDo() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  useEffect(() => {
    try {
      fetch("http://localhost//api/posts/all")
        .then((response) => response.json())
        .then((data) => {
          setTasks(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className={styles.taskRow}>
      <TasksRow tasks={tasks} />
    </div>
  );
}

export default ToDo;
