import React from "react";
import "./Form.css";
import { handleAddToDo } from "../services/toDoHandler";
import { useRef, useEffect } from "react";

function Form() {
  let todo = "";
  let description = "";

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="content">
      <form className="form-container" action="">
        <div className="form-header">Add New ToDo</div>
        <label className="form-child">
          ToDo-Name
          <input
            ref={inputRef}
            type="text"
            defaultValue={todo}
            required
            onChange={(e) => (todo = e.target.value)}
          />
        </label>
        <br />
        <label className="form-child">
          ToDo-Description
          <input
            type="text"
            defaultValue={description}
            onChange={(e) => (description = e.target.value)}
          />
        </label>
        <br />
        <div className="center">
          <input
            type="submit"
            value="Submit"
            onClick={() => {
              if (todo !== "") {
                handleAddToDo(todo, description);
                this.forceUpdate();
              }
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
