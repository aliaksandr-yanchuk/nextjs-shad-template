import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className="text-purple-400 font-bold text-8xl">Hello World</p>
      <Button className="my-5">
        Click
      </Button>
    </main>
  );
}
