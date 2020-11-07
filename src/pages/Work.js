import React, { useState, useEffect } from "react";
import axios from "../axios";
import WorkTodolist from "../components/WorkTodolist";
function Work() {
  const [inputText, setInputText] = useState("");
  const [workTodos, setWorkTodos] = useState([]);

  useEffect(() => {
    axios.get("/work/new").then((res) => {
      console.log(res.data);
      setWorkTodos(res.data);
    });
  }, []);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = async (e) => {
    e.preventDefault();
    await axios.post("/work", {
      text: inputText,
      id: Math.floor(Math.random() * 1000),
    });
    setInputText("");
  };

  return (
    <div>
      <header>
        <h1>Work TodoList</h1>
      </header>
      <div>
        <form>
          <input
            onChange={inputTextHandler}
            type="text"
            className="todo-input"
            value={inputText}
          />
          <button
            onClick={submitTodoHandler}
            type="submit"
            className="todo-button"
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </form>
      </div>
      <WorkTodolist workTodos={workTodos} setWorkTodos={setWorkTodos} />
    </div>
  );
}

export default Work;
