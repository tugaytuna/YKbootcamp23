import "./App.css";
import Task from "./components/Task";
import { useState } from "react";

function App() {
  const [input1Value, setInput1Value] = useState("");

  const [tasks, setTasks] = useState([
    { id: 1, task: "Github'a Proje Ekle", done: true },
    { id: 2, task: "Javascript Öğren", done: false },
    { id: 3, task: "C# Öğren", done: false },
  ]);

  function saveTask() {
    let tempTask = { id: tasks.length + 1, task: input1Value, done: false };
    setInput1Value("");
    setTasks([...tasks, tempTask]);
  }

  function doneTask(value, id) {
    // console.log("changed", value, id);

    tasks.map((task) => {
      if (task.id == id) {
        console.log(task);
      }
    });
  }

  return (
    <div className="appMain">
      <h1>To-Do List App</h1>

      {tasks.map((item) => (
        <Task
          taskname={item.task}
          done={item.done}
          id={item.id}
          func={doneTask}
        />
      ))}
      <br />
      <input
        onChange={(e) => setInput1Value(e.target.value)}
        value={input1Value}
        type="text"
        name=""
        id=""
        placeholder="write your task..."
      />
      <button onClick={saveTask}>Add Task</button>
    </div>
  );
}

export default App;
