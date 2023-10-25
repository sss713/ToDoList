import TasksRow from "entities/Task/ui/TaskRow";
import AddButton from "shared/ui/AddButton";
import styles from "./style.module.sass";
import { useState } from "react";
import UserLogout from "entities/User/ui/UserLogout";
import TaskCard from "entities/Task/ui/TaskCard";
import TelegrammButton from "shared/ui/TelegrammButton";
import { useSelector } from "react-redux";

interface TaskProps {
  id: number;
  name: string;
  description: string;
  status: number;
  dedline: Date;
  comleted: boolean;
}

function ToDo() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: 1,
      name: "Task1",
      status: 0,
      description: "lamslkdmlksm",
      dedline: new Date(),
      comleted: false,
    },
  ]);
  const [isCreatingTask, setCreatingTask] = useState(false);
<<<<<<< HEAD
  const [isEditing, setEditing] = useState(true);
  const date: TaskProps = {
    id: 1,
    name: "asdas",
    description: "asdsaasd",
    status: 1,
    dedline: new Date(),
    comleted: true,
  };
  return (
    <div className={styles.taskRow}>
      <UserLogout />
      <TasksRow tasks={[date]} />
=======

  const isAuth = useSelector((state: any) => state.user.isAuth);
  return (
    <div className={styles.taskRow}>
      {isAuth ? <UserLogout text="Обратно" /> : <UserLogout />}
      <TasksRow tasks={tasks} />
>>>>>>> temp
      <TelegrammButton
        onClick={() => (window.location.href = "https://t.me/ToDo_teambot")}
      />
      {isCreatingTask ? (
        <TaskCard
          setHidden={() => setCreatingTask(!isCreatingTask)}
          isEditing={isEditing}
          setEditing={() => setEditing(!isEditing)}
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
