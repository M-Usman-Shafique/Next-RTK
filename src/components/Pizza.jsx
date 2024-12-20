"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  ordered as pizzaOrdered,
  restocked as pizzaRestocked,
} from "@/redux/slices/pizzaSlice";

export default function Pizza() {
  const dispatch = useDispatch();
  const numOfPizzas = useSelector((state) => state.pizzaReducer.numOfPizzas);
  console.log("Total Pizzas:", numOfPizzas);

  return (
    <div className="bg-white/10 text-white p-6 rounded-lg shadow-lg space-y-4">
      <h1 className="text-2xl font-bold text-center">🍕 Pizza</h1>
      <h4 className="text-lg text-gray-300 text-center">
        Quantity: {numOfPizzas}
      </h4>
      <div className="flex justify-between gap-2">
        <button
          className="bg-white/10 hover:bg-white/15 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          onClick={() => dispatch(pizzaOrdered())}
        >
          Order Pizza
        </button>
        <button
          className="bg-white/10 hover:bg-white/15 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          onClick={() => dispatch(pizzaRestocked(3))}
        >
          Restock Pizzas
        </button>
      </div>
    </div>
  );
}
