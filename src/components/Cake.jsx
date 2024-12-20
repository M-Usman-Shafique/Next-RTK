"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  ordered as cakeOrdered,
  restocked as cakeRestocked,
} from "@/redux/slices/cakeSlice";

export default function Cake() {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cakeReducer.numOfCakes);
  console.log("Total Cakes:", numOfCakes);

  return (
    <div className="bg-white/10 text-white p-6 rounded-lg shadow-lg space-y-4">
      <h1 className="text-2xl font-bold text-center">🎂 Cake</h1>
      <h4 className="text-lg text-gray-300 text-center">
        Quantity: {numOfCakes}
      </h4>
      <div className="flex justify-between gap-2">
        <button
          className="bg-white/10 hover:bg-white/15 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          onClick={() => dispatch(cakeOrdered())}
        >
          Order Cake
        </button>
        <button
          className="bg-white/10 hover:bg-white/15 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          onClick={() => dispatch(cakeRestocked(5))}
        >
          Restock Cakes
        </button>
      </div>
    </div>
  );
}
