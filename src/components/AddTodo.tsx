"use client";

import { useTodos } from "@/store/todos";
import React, { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const {handleAddTodo} = useTodos();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="write your todo"
        name=""
        value={todo}
        id=""
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default AddTodo;
function handleAddTodo(todo: string) {
    throw new Error("Function not implemented.");
}

