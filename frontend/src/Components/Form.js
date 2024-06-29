import React from "react";
import "./Data.css";
import { useEffect, useState } from "react";
import { handleAddToDo } from "../services/toDoHandler";

function Data() {
  let todo = "";
  let description = "";

  return (
    <div className="content">
      <form action="/">
        {" "}
        Add New ToDo
        <div className="container">
          <label>
            ToDo-Name
            <input
              type="text"
              defaultValue={todo}
              onChange={(e) => (todo = e.target.value)}
            />
          </label>
          <br />
          <label>
            ToDo-Description
            <input
              type="text"
              defaultValue={description}
              onChange={(e) => (description = e.target.value)}
            />
          </label>
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={() => {
              handleAddToDo(todo, description);
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Data;
