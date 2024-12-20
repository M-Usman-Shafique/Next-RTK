import { removeTodo } from "@/redux/slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Todos() {
  const todos = useSelector((state) => state.globalTodo.todos);
  const dispatch = useDispatch();

  return (
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
  );
}
