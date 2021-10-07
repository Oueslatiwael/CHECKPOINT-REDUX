import React from "react";
import EditTodo from "../EditTodo/EditTodo";
import { useDispatch } from "react-redux";
import { completeTodo } from "../JS/Actions/actions";
import "./todocard.css";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li className="todo-card">
      <span
        className="todo-text"
        style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
        onClick={() => dispatch(completeTodo(todo.id))}
      >
        {todo.text}
      </span>

      <EditTodo todo={todo} />
    </li>
  );
};

export default TodoCard;
