import React, { useState } from "react";
import "./addTask.css";
function AddTask({ addTask }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  function validForm() {
    if (task !== "") {
      addTask(task);
      setTask("");
      setError("");
      alert("task added");
    } else {
      setError("Ajoutez une tache");
    }
  }

  return (
    <div>
      <input
        className="add"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        type="text"
        placeholder="Task..."
      />
      <button className="btn-add" onClick={validForm}>
        add
      </button>
      <p className="error">{error}</p>
    </div>
  );
}

export default AddTask;
