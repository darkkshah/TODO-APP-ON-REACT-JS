import React, { useState } from 'react';
import './App.css'; 

function ToDoApp() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const delRow = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editRow = (index) => {
    const updatedText = prompt('Enter Text');
    if (updatedText !== null) {
      const newTasks = [...tasks];
      newTasks[index] = updatedText;
      setTasks(newTasks);
    }
  };

  const deleteRow = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const deleteAll = () => {
    setTasks([]);
  };

  const addTask = () => {
    if (inputValue === '') {
      alert('Write Something In The Box');
    } else {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="container main_body">
      <div className="app_body">
        <h1>ENTER TASK</h1>
        <h2>ASSIGNMENT To-Do-App</h2>

        <div className="app_input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn1" onClick={addTask}>
            Add
          </button>
        </div>

        <ul id="list">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className="btn2" onClick={() => delRow(index)}>
                Delete
              </button>
              <button className="btn2" onClick={() => editRow(index)}>
                Edit
              </button>

              <button className="btn2" onClick={deleteAll}>
                Delete All
              </button>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoApp;