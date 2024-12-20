import Cake from "@/components/Cake";
import Counter from "@/components/Counter";
import Pizza from "@/components/Pizza";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center gap-5 min-h-screen">
      {/* <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={280}
        height={38}
        priority
      /> */}
      <Cake />
      <Pizza />
      <Counter />
    </main>
  );
}
