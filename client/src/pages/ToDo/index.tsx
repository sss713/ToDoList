import TasksRow from "entities/Task/ui/TaskRow";
import AddButton from "shared/ui/AddButton";
import styles from "./style.module.sass";
import { useState, useEffect } from "react";
import UserLogout from "entities/User/ui/UserLogout";
import TaskCard from "entities/Task/ui/TaskCard";
import TelegrammButton from "shared/ui/TelegrammButton";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "entities/Task/model/tasks";

interface TaskProps {
  id: number;
  name: string;
  description: string;
  status: number;
  dedline: Date;
  completed: boolean;
}

function ToDo() {
  const userId = useSelector((state: any) => state.user.id);
  const dispatch: any = useDispatch();
  console.log(useSelector((state: any) => state.user));
  console.log(dispatch(getAllPosts(userId)) || []);
  const [tasks, setTasks] = useState<[] | TaskProps[]>(
    Array.of(dispatch(getAllPosts(userId))) || []
    // [
    //   {
    //     id: 1,
    //     name: "task1",
    //     description: "task1Description",
    //     status: 2,
    //     dedline: new Date(),
    //     completed: false,
    //   },
    //   {
    //     id: 2,
    //     name: "task2",
    //     description: "task2Description",
    //     status: 1,
    //     dedline: new Date(),
    //     completed: true,
    //   },
    // ] || []
  );
  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);
  const [isCreatingTask, setCreatingTask] = useState(false);
<<<<<<< HEAD
=======
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

>>>>>>> temp
  const isAuth = useSelector((state: any) => state.user.isAuth);
  return (
    <div className={styles.taskRow}>
      {!isAuth ? <UserLogout text="Обратно" /> : <UserLogout />}
      <TasksRow tasks={tasks} />
>>>>>>> temp
      <TelegrammButton
        onClick={() => (window.location.href = "https://t.me/ToDo_teambot")}
      />
      {isCreatingTask ? (
        <TaskCard
          setHidden={() => setCreatingTask(!isCreatingTask)}
<<<<<<< HEAD
          isEditing={false}
          taskId={-1}
=======
          isEditing={isEditing}
          setEditing={() => setEditing(!isEditing)}
>>>>>>> temp
        />
      ) : (
        <AddButton
          style={styles.addButton}
          onClick={() => setCreatingTask(!isCreatingTask)}
        >
          +
        </AddButton>
      )}
    </div>
  );
}

export default ToDo;
