import { useState } from "react";
import {
  addTodo,
  toggleTodo,
  setFilter,
  deleteCompleted,
  deleteItemCompleted,
} from "./features/todo/todoSlice";

import { useAppDispatch, useAppSelector } from "./store/store";

import { FiTrash } from "react-icons/fi";

export default function App() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const { items, filter } = useAppSelector((state) => state.todos);

  const filteredTodos = items.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="p-5 w-[500px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-3xl font-bold text-center">#todo</h1>

      {/* Tabs */}
      <div className="flex  justify-between  relative space-x-5 my-5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gray-500 after:content-['']">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            className={`relative cursor-pointer font-[500] w-[100px] py-3 ${
              filter === f
                ? "after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[4px] after:bg-blue-500 after:content-['']"
                : "border-transparent"
            }`}
            onClick={() => dispatch(setFilter(f))}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Add todo */}
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="add details"
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={() => {
            if (text.trim()) {
              dispatch(addTodo(text));
              setText("");
            }
          }}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {/* List */}
      <div className="mt-5">
        {filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between gap-2 my-2"
          >
            <div className="flex items-center gap-2 ">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              <span
                className={`font-semibold text-[15px] ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.text}
              </span>
            </div>
            {filter === "completed" && (
              <button
                className="cursor-pointer"
                onClick={() => dispatch(deleteItemCompleted(todo.id))}
              >
                <FiTrash />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Delete Completed */}
      {filter === "completed" && filteredTodos.length > 0 && (
        <button
          onClick={() => dispatch(deleteCompleted())}
          className="mt-5 bg-red-500 text-white px-4 py-1 rounded"
        >
          Delete all
        </button>
      )}
    </div>
  );
}
