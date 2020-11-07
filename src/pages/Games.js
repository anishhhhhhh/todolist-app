import React, { useState, useEffect } from "react";
import axios from "../axios";
import GamesTodolist from "../components/GamesTodolist";
function Games() {
  const [inputText, setInputText] = useState("");
  const [gamesTodos, setGamesTodos] = useState([]);

  useEffect(() => {
    axios.get("/games/new").then((res) => {
      console.log(res.data);
      setGamesTodos(res.data);
    });
  }, []);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = async (e) => {
    e.preventDefault();
    await axios.post("/games", {
      text: inputText,
      id: Math.floor(Math.random() * 1000),
    });
    setInputText("");
  };

  return (
    <div>
      <header>
        <h1>Games TodoList</h1>
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
      <GamesTodolist gamesTodos={gamesTodos} setGamesTodos={setGamesTodos} />
    </div>
  );
}

export default Games;
