import Counter from "@/components/Counter";
import Users from "@/components/Users";

export default function Home() {
  return (
    <main className="flex justify-center items-center gap-5 min-h-screen">
      <Counter />
      <Users />
    </main>
  );
}
