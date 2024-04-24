"use client";
import { useTodos } from "@/store/todos";
import { useSearchParams } from "next/navigation";
import React from "react";

const Todos = () => {
  const { todos, toggleTodoAsCompledted, handleTodoDelete } = useTodos();
  let filterTodos = todos;
  const seachParams = useSearchParams();
  const todoFilter = seachParams.get("todos");

  if (todoFilter === "active") {
    filterTodos = filterTodos.filter((todo) => !todo.completed);
  } else if (todoFilter === "completed") {
    filterTodos = filterTodos.filter((todo) => todo.completed);
  }
  console.log(todos);
  return (
    <ul>
      {filterTodos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              onChange={() => toggleTodoAsCompledted(todo.id)}
              checked={todo.completed}
              type="checkbox"
              name=""
              id={`todo-${todo.id}`}
            />

            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

            {todo.completed && (
              <button type="button" onClick={() => handleTodoDelete(todo.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
