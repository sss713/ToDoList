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
  comleted: boolean;
}

function ToDo() {
  const userId = useSelector((state: any) => state.user.id);
  const dispatch: any = useDispatch();
  console.log(useSelector((state: any) => state.user));
  console.log(dispatch(getAllPosts(userId)) || []);

  const [tasks, setTasks] = useState<Array<TaskProps>>(
    dispatch(getAllPosts(userId)) || []
  );
  const [isCreatingTask, setCreatingTask] = useState(false);
  const isAuth = useSelector((state: any) => state.user.isAuth);
  return (
    <div className={styles.taskRow}>
      {!isAuth ? <UserLogout text="Обратно" /> : <UserLogout />}
      <TasksRow tasks={tasks} />
      <TelegrammButton
        onClick={() => (window.location.href = "https://t.me/ToDo_teambot")}
      />
      {isCreatingTask ? (
        <TaskCard
          setHidden={() => setCreatingTask(!isCreatingTask)}
          isEditing={false}
          taskId={-1}
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
