import TasksRow from "entities/Task/ui/TaskRow";
function ToDo() {
  return (
    <TasksRow
      tasks={[
        { id: 1, name: "Task1", description: "", status: "", dedline: "" },
        { id: 2, name: "Task2", description: "", status: "", dedline: "" },
        { id: 3, name: "Task2", description: "", status: "", dedline: "" },
      ]}
    ></TasksRow>
  );
}

export default ToDo;
