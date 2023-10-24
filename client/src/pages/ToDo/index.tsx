import TasksRow from "entities/Task/ui/TaskRow";
import AddButton from "shared/ui/AddButton";
import styles from "./style.module.sass";
import { useState } from "react";
import UserLogout from "entities/User/ui/UserLogout";
import TaskCard from "entities/Task/ui/TaskCard";
import TelegrammButton from "shared/ui/TelegrammButton";
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
  const [isCreatingTask, setCreatingTask] = useState(false);

  return (
    <div className={styles.taskRow}>
      <UserLogout />
      <TasksRow tasks={tasks} />
      <TelegrammButton
        onClick={() => (window.location.href = "https://t.me/ToDo_teambot")}
      />
      {isCreatingTask ? (
        <TaskCard
          isHidden={isCreatingTask}
          setHidden={() => setCreatingTask(!isCreatingTask)}
          editing={true}
        />
      ) : (
        <AddButton onClick={() => setCreatingTask(!isCreatingTask)}>
          +
        </AddButton>
      )}
    </div>
  );
}

export default ToDo;
