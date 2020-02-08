import React, { useState } from "react";
import "./App.css";
// import Footer from "./components/Footer";
// import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  const [task, setTask] = useState("");
  const [addTask, setAddTask] = useState([]);

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        {addTask.map((elem, index) => {
          return (
            <ul key={index}>
              <li>
                <input type="checkbox" />
                {elem}
              </li>
            </ul>
          );
        })}
        <>
          <div className="task">
            <input
              type="text"
              value={task}
              onChange={event => {
                setTask(event.target.value);
              }}
              placeholder="New Task"
            />
            <button
              className="btntask"
              onClick={() => {
                const newTask = [...addTask];
                newTask.push(task);
                setAddTask(newTask);
                setTask("");
              }}
            >
              AddTask
            </button>
          </div>
        </>
        <div className="taskok">
          {addTask.map((elem, index) => {
            return (
              <ul key={index}>
                <li>{elem}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default App;
