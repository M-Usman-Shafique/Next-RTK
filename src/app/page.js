import Todo from "@/components/Todo";
import GetTodos from "@/components/GetTodos";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-5 min-h-screen py-10">
      <Todo />
      <GetTodos />
    </main>
  );
}
