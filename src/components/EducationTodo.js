import React, { useState } from "react";
import axios from "../axios";

function Todo({ text, todo }) {
  const [completed, setCompleted] = useState(false);
  const deleteHandler = async () => {
    await axios.post("/education/delete", {
      id: todo.id,
    });
  };

  const completeHandler = () => {
    setCompleted(!completed);
  };

  return (
    <div className="todo">
      <li className={`${completed && "completed"}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
