import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
// import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  const [task, setTask] = useState("");
  const [addTask, setAddTask] = useState([]);
  const [trash, setTrash] = useState([]);

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        {addTask.map((elem, index) => {
          return (
            <ul className="check" key={index}>
              <li>
                <input
                  // id="toggle1"
                  type="checkbox"
                  onClick={() => {
                    // setCheckBox(checkBox);
                  }}
                />
                <label>
                  {elem}
                  <button
                    className="trash"
                    onClick={() => {
                      const newTrash = [...trash];
                      newTrash.push(addTask);
                      setTrash(newTrash);
                      // addTask.shift();
                    }}
                  >
                    Trash
                  </button>
                </label>
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
        <div className="confirmTrash">
          {trash.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
