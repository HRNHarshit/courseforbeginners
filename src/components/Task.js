import React from "react";

const Task = (props) => {
  return (
    <>
      <div key={props.task.id} className="todo">
        <h1>
          {props.task.id + 1}. {props.task.taskName}
        </h1>
        <button className="btn" onClick={() => props.removeTask(props.task.id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Task;
