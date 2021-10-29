import React from "react";

const Task = ({ id, name, isDone, handleChecked, handleDelete }) => {
  return (
    <li className={isDone ? "task task-done" : "task"}>
      <label>
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => handleChecked(id)}
        />
        {name}
        <button className="deletee" onClick={() => handleDelete(id)}>
          X
        </button>
      </label>
    </li>
  );
};

export default Task;
