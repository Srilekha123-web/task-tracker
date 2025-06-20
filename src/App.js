import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
    };

    setTaskList([...taskList, newTask]);
    setTask(""); // Clear input
  };

  const handleDeleteTask = (id) => {
    const updatedList = taskList.filter((t) => t.id !== id);
    setTaskList(updatedList);
  };

  return (
    <div className="App">
      <h1>📝 Task Tracker</h1>
      <div>
        <input
          type="text"
          value={task}
          placeholder="Enter your task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul>
        {taskList.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDeleteTask(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
