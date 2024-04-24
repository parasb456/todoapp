"use client"
import React from "react";
import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <main>
      <h2>TODO NEXT APP</h2>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  );
};

export default page;
