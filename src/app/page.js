import Todo from "@/components/Todo";
import GetTodos from "@/components/GetTodos";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-5 min-h-screen">
      <Todo />
      <GetTodos />
    </main>
  );
}
