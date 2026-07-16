import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-bold underline">Next.js Press</h2>
        <Link href="/posts"><Button>Posts</Button></Link>
      </div>
    </div>
  );
}
