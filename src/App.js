import { useState } from "react";
import "./App.css";
import AddTask from "./components/addTask/AddTask";
import Header from "./components/Header/Header";
import TaskList from "./components/taskList/TaskList";
import { getNextTaskId } from "./utils";

const todos = [
  {
    id: 1,
    name: "Acheter un nouveau bateau",
    isDone: true,
  },
  {
    id: 2,
    name: "Jeter l'ancre",
    isDone: false,
  },
  {
    id: 3,
    name: "A vous les studios",
    isDone: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(todos);

  function addTask(tache) {
    setTasks([
      ...tasks,
      {
        id: getNextTaskId(tasks),
        name: tache,
        isDone: false,
      },
    ]);
  }
  function deleteTask(id) {
    const newArray = tasks.filter((task) => task.id !== id);
    setTasks(newArray);
    alert("Task deleted");
  }

  function changeIsDone(id) {
    const updatedTaskList = tasks.map((task) => {
      if (task.id === id) {
        const updatedTask = {
          id: task.id,
          name: task.name,
          isDone: !task.isDone,
        };
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTaskList);
  }

  function deleteAllTasksDone() {
    const taskFilterd = tasks.filter((task) => task.isDone === false);
    setTasks(taskFilterd);
  }
  function selectAllTasks(e) {
    if (e.target.checked) {
      const tasksSelected = tasks.map((task) => {
        return {
          id: task.id,
          name: task.name,
          isDone: true,
        };
      });
      setTasks(tasksSelected);
    } else {
      const tasksSelected = tasks.map((task) => {
        return {
          id: task.id,
          name: task.name,
          isDone: false,
        };
      });
      setTasks(tasksSelected);
    }
  }

  return (
    <div className="App">
      <Header />
      <AddTask addTask={addTask} />
      <TaskList
        changeIsDone={changeIsDone}
        deleteTask={deleteTask}
        todos={tasks}
        deleteAllTasksDone={deleteAllTasksDone}
        selectAllTasks={selectAllTasks}
      />
    </div>
  );
}

export default App;
