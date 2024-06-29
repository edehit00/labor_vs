import React from "react";
import "./Data.css";
import { useEffect, useState } from "react";

function Data() {
  const [id, setId] = useState();
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
        <div>
          All ToDo with Description{" "}
          {data.map((e) => (
            <div className="data">
              <p key={e.id}>{e.todo} :</p>
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Data;
