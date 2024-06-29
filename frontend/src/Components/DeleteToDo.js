import React from "react";
import "./Data.css";
import { handleDeleteToDo } from "../services/toDoHandler";

function DeleteToDo(id) {
  return (
    <div>
      <input formAction="/"
        type="submit"
        value="delete"
        onClick={() => {
          handleDeleteToDo(id.id);
        }}
      />
    </div>
  );
}

export default DeleteToDo;
