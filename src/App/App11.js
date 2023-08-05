import React, { useState } from "react";
import "../App Styles/App11.css";
import Task from "../components/Task";

const App11 = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const removeTask = (key) => {
    const newTodoList = todoList.filter((todo) => key !== todo.id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <div className="App11">
        <div className="addTask">
          <input type="text" onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
        
        <div className="list">
          {todoList.map((task) => {
            return <Task task={task} removeTask={removeTask} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App11;
