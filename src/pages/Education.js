import React, { useState, useEffect } from "react";
import axios from "../axios";
// import Todo from "../components/Todo";
import EducationTodolist from "../components/EducationTodolist";
function Work() {
  const [inputText, setInputText] = useState("");
  const [educationTodos, setEducationTodos] = useState([]);

  useEffect(() => {
    axios.get("/education/new").then((res) => {
      console.log(res.data);
      setEducationTodos(res.data);
    });
  }, []);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = async (e) => {
    e.preventDefault();
    await axios.post("/education", {
      text: inputText,
      id: Math.floor(Math.random() * 1000),
    });
    setInputText("");
  };

  return (
    <div>
      <header>
        <h1>Education TodoList</h1>
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
      <EducationTodolist
        educationTodos={educationTodos}
        setEducationTodos={setEducationTodos}
      />
    </div>
  );
}

export default Work;
