import React from "react";
import EducationTodo from "./EducationTodo";

function Todolist({ educationTodos, setEducationTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {educationTodos.map((todo) => (
          <EducationTodo key={todo.id} todo={todo} text={todo.text} />
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
