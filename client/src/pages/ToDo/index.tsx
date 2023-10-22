import TasksRow from "entities/Task/ui/TaskRow";
import styles from "./style.module.sass";
function ToDo() {
  return (
    <div className={styles.taskRow}>
      <TasksRow
        tasks={[
          {
            id: 1,
            name: "Task1",
            description: "Task1Decription",
            status: "",
            dedline: "24.10.2023",
          },
          {
            id: 2,
            name: "Task2",
            description: "Task2Decription",
            status: "overdue",
            dedline: "20.10.2023",
          },
          {
            id: 3,
            name: "Task2",
            description: "Task3Decription",
            status: "completed",
            dedline: "24.10.2023",
          },
        ]}
      />
    </div>
  );
}

export default ToDo;
