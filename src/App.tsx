import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { TodoListItem } from "./components/TodoListItem";
import "./index.css";

interface TodoListItem {
  id: string;
  taskText: string;
  done: boolean;
}

export default function App() {
  const [list, setList] = useState<TodoListItem[]>(() => {
    const storedList = localStorage.getItem("todoList");
    return storedList ? JSON.parse(storedList) : [];
  });
  const [listItem, setListItem] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListItem(e.target.value);
  };

  const addToDoItem = () => {
    if (!listItem.trim()) return;

    const item = {
      id: uuid(),
      taskText: listItem,
      done: false,
    };
    setList((prevList) => [...prevList, item]);
    setListItem("");
  };

  const checkTodoItem = (id: string) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const removeToDoItem = (id: string) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center">
      <div className="bg-tertiary rounded-lg p-8 shadow-md h-[400px] w-[600px] flex flex-col">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">
          To-Do List
        </h1>
        <div className="flex items-center mb-4">
          <input
            value={listItem}
            onChange={handleChange}
            className="border w-full rounded p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Add a task"
          />
          <button
            onClick={addToDoItem}
            className={`text-white py-2 px-4 rounded ${
              !listItem.trim() ? "bg-secondary" : "bg-primary hover:bg-primary2"
            }`}
            disabled={!listItem.trim()}
          >
            ADD
          </button>
        </div>
        <div className="overflow-y-auto flex-grow">
          {list
            .slice()
            .reverse()
            .map((item) => (
              <TodoListItem
                key={item.id}
                done={item.done}
                taskText={item.taskText}
                handleDelete={() => removeToDoItem(item.id)}
                handleChange={() => checkTodoItem(item.id)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
