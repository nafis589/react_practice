import React from "react";
import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const add = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: Math.floor(Math.random() * 100),
      })
    );
    setInput("");
  };
  const remoLi = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="some text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={add}>Add</button>
      <ul>
        {todos.map(({ text, id }) => {
          return (
            <li>
              <span>{text}</span>
              <button onClick={() => remoLi(id)}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
