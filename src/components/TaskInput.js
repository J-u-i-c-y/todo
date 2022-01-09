import React, { useState } from "react";

function TaskInput(props) {
  const [inputMessage, setInputMessage] = useState('');

  const addTask = () => {
    if (inputMessage) {
      props.addTask(inputMessage);
      setInputMessage('');
    }
  }

  const inputChange = (e) => {
    setInputMessage(e.target.value);
  }

  return (
    <div className="task-input">
      <input onChange={inputChange} value={inputMessage}></input>
      <button onClick={addTask}>ADD</button>
    </div>
  )
}

export default TaskInput;