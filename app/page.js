"use client";
import React, { forwardRef, useState } from "react";

export default function TodoApp() {
  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  function reloadHandler(e) {
    e.preventDefault();
    setMainTask([...mainTask, { text, desc }]);
    setText("");
    setDesc("");
  }

  let showTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    showTask = mainTask.map((task, i) => (
      <li key={i} className="mb-5 flex">
        <div className="flex justify-evenly items-center w-2/3">
          <h5 className="text-2xl font-serif">{task.text}</h5>
          <h5 className="text-2xl font-serif">{task.desc}</h5>
        </div>
        <button onClick={() => {
          let referTask = [...mainTask];
          referTask.splice(i,1);
          setMainTask(referTask);
        }} className="bg-red-500 text-center text-white p-2.5 rounded-md font-bold">Delete</button>
      </li>
    ));
  }

  return (
    <>
      <div className="text-center flex-wrap">
        <h1 className="bg-black text-cyan-400 p-5 text-center font-bold text-5xl shadow-2xl">
          TODO APP
        </h1>
        <form onSubmit={reloadHandler}>
          <input
            type="text"
            placeholder="Enter text here"
            className="border-2 border-black m-5 p-2 rounded-md"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Description"
            className="border-2 border-black m-5 p-2 rounded-md"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="bg-black text-cyan-400 p-2 m-5 rounded-md border-2">
            Confirm
          </button>
        </form>
      

        <div className="bg-slate-300 p-7">
          <ul>{showTask}</ul>
        </div>
      </div>
    </>
  );
}
