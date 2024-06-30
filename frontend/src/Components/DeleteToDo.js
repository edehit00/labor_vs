import React from "react";
import "./Data.css";
import { handleDeleteToDo } from "../services/toDoHandler";
import { useState, useEffect } from "react";

function DeleteToDo(id) {
  const [idToDo, setIdToDo] = useState(0);

  if (idToDo === 0) {
    setIdToDo(id.id);
  }

  useEffect(() => {
    document.title = "ToDoList Ehremann";
  });

  return (
    <form action="/">
      <input
        type="submit"
        value="delete"
        onClick={() => {
          setIdToDo(handleDeleteToDo(idToDo));
          this.forceUpdate();
        }}
      />
    </form>
  );
}

export default DeleteToDo;
