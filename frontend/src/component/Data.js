import React from "react";
import "./Data.css";
import { useEffect, useState } from "react";
import DeleteToDo from "./DeleteToDo";

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/todo/getAll`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setData(jsonRes));
  }, []);

  return (
    <div>
      {typeof data === "undefined" ? ( //wiedergeben vom fetch
        <p className="mobileText ">Loading...</p>
      ) : (
        <div className="data-container">
          All ToDo with Description:
          {data.map((e) => (
            <div key={e.id} className="data">
              <p>{e.todo} :</p>
              <p>{e.description}</p>
              <DeleteToDo id={e.id}></DeleteToDo>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Data;
