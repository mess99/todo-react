import React from "react";
import "./taskList.css";
import image from "../../public/image/parch.png";
import Task from "./Task";

const TaskList = ({
  todos,
  deleteTask,
  changeIsDone,
  deleteAllTasksDone,
  selectAllTasks,
}) => {
  const handleDelete = (id) => {
    deleteTask(id);
  };

  const handleChecked = (id) => {
    changeIsDone(id);
  };

  const tasksDone = todos.filter((todo) => todo.isDone);
  const taskNotDone = todos.filter((todo) => !todo.isDone);

  return (
    <div className="tas">
      <img className="bg-task" src={image} alt="parchemin" />
      <ul className="tasks">
        <p>Done ({tasksDone.length})</p>
        {tasksDone.map((todo) => (
          <Task
            key={todo.id}
            {...todo}
            handleDelete={handleDelete}
            handleChecked={handleChecked}
          />
        ))}
        <p>Not done ({taskNotDone.length})</p>
        {taskNotDone.map((todo) => {
          return (
            <Task
              key={todo.id}
              {...todo}
              handleDelete={handleDelete}
              handleChecked={handleChecked}
            />
          );
        })}
      </ul>
      <button className="btn-delete-all" onClick={deleteAllTasksDone}>
        Delete done
      </button>
      <label className="btn-select-all" htmlFor="selAll">
        <input type="checkbox" id="selAll" onChange={selectAllTasks} />
        Select all
      </label>
    </div>
  );
};

export default TaskList;
