import React from "react";
import { Trash2 } from "lucide-react";

interface TodoListItemProps {
  done: boolean;
  taskText: string;
  handleDelete: () => void;
  handleChange: () => void;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  done = false,
  taskText,
  handleDelete,
  handleChange,
}) => {
  return (
    <div className="flex items-center justify-between mb-4 ml-2 mr-4 box-border w-[94%]">
      <div className="flex items-center w-full">
        <input
          type="checkbox"
          checked={done}
          onChange={handleChange}
          className="mr-2 accent-primary"
        />
        <p className={`${done ? "line-through" : ""} font-instrument-sans`}>
          {taskText}
        </p>
      </div>
      <button onClick={handleDelete} className="ml-2 text-primary">
        <Trash2 />
      </button>
    </div>
  );
};
