"use client";
import { fetchUsers } from "@/redux/slices/usersSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Users() {
  const { isLoading, users, error } = useSelector(
    (state) => state.usersReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="bg-white/10 text-white p-6 rounded-lg shadow-lg space-y-2">
      <h1 className="text-2xl font-bold">Users List</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error ? <p>Error: {error}</p> : null}
      <ul className="px-4">
        {!isLoading && users?.length > 0
          ? users?.map((user) => <li key={user.id} className="list-disc">{user.name}</li>)
          : <p className="">No users yet.</p>}
      </ul>
    </div>
  );
}
