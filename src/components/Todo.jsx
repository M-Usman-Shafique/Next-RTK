"use client";
import { addTodo, removeTodo, clearAllTodos } from "@/redux/slices/todoSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Todo() {
  const todos = useSelector((state) => state.globalTodo.todos);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold text-center">📝 Custom Todos</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 text-white p-4 rounded-lg shadow-lg flex justify-between gap-2"
      >
        <input
          type="text"
          name="task"
          value={task}
          placeholder="Enter your todo..."
          onChange={(e) => setTask(e.target.value)}
          className="bg-white/10 text-white py-2 px-4 rounded-md transition outline-none"
        />
        <button
          type="submit"
          className="bg-white/10 hover:bg-white/15 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Add Todo
        </button>
        <button
          type="button"
          className="bg-white/10 hover:bg-white/15 text-red-500 font-semibold py-2 px-4 rounded-md transition duration-200"
          onClick={() => dispatch(clearAllTodos())}
        >
          Delete All
        </button>
      </form>
      <div>
        {todos.length > 0 ? (
          todos?.map((todo, index) => (
            <div
              key={index}
              className="bg-white/10 text-white p-6 rounded-lg shadow-lg my-2 flex justify-between"
            >
              <h3>{todo}</h3>
              <button
                type="button"
                onClick={() => dispatch(removeTodo(index))}
                className="opacity-60 hover:opacity-90"
              >
                ❌
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-stone-500">No custom todos.</p>
        )}
      </div>
    </div>
  );
}
