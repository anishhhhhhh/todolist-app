import React from "react";
import WorkTodo from "./WorkTodo";

function Todolist({ workTodos, setWorkTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {workTodos.map((todo) => (
          <WorkTodo key={todo.id} todo={todo} text={todo.text} />
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
