import React from "react";

function Content(props) {
  return (
    <>
      <input
        type="text"
        value={props.task}
        onChange={event => {
          props.setTask(event.target.value);
        }}
        placeholder="New Task"
      />
      <button
        onClick={() => {
          const newTask = [...props.task];
          newTask.push();
          props.setTask(newTask);
        }}
      >
        AddTask
      </button>
    </>
  );
}

export default Content;
