import React from "react";
import GamesTodo from "./GamesTodo";

function GamesTodolist({ gamesTodos, setGamesTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {gamesTodos.map((todo) => (
          <GamesTodo key={todo.id} todo={todo} text={todo.text} />
        ))}
      </ul>
    </div>
  );
}

export default GamesTodolist;
