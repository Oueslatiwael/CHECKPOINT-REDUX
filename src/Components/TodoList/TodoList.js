import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "../TodoCard/TodoCard";
import "./todolist.css";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);

  return (
    <div className="todos-section">
      {todoList.map((todo) => (
        <ul className="todo-list">
          <TodoCard todo={todo} />
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
