"use client";
import { fetchTodos } from "@/redux/slices/fetchTodoSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function GetTodos() {
  const { isLoading, todos, error } = useSelector(
    (state) => state.fetchTodoReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="bg-white/10 text-white p-6 rounded-lg shadow-lg space-y-2">
      <h1 className="text-2xl font-bold">🌐 API Todos</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error ? <p>Error: {error}</p> : null}
      <ul className="px-4">
        {!isLoading && todos?.length > 0
          ? todos?.slice(0, 10).map((todo) => (
              <li key={todo.id} className="list-disc">
                {todo.title}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
