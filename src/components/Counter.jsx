"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  increaseCount,
  resetCount,
} from "@/redux/slices/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.globalCounter.count);
  const dispatch = useDispatch();

  return (
    <div className="bg-white/10 text-white p-6 rounded-lg shadow-lg space-y-4">
      <h1 className="text-2xl font-bold text-center">⏱ Counter</h1>
      <h4 className="text-lg text-gray-300 text-center">Count: {count}</h4>
      <div className="flex justify-between gap-2">
        <button
          className="bg-white/10 hover:bg-white/15 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          onClick={() => dispatch(increaseCount(2))}
        >
          Increase
        </button>
        <button
          className="bg-white/10 hover:bg-white/15 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          onClick={() => dispatch(decreaseCount(2))}
        >
          Decrease
        </button>
        <button
          className="bg-white/10 hover:bg-white/15 text-red-500 font-semibold py-2 px-4 rounded-md transition duration-200"
          onClick={() => dispatch(resetCount())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
