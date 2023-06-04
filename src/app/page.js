import { H4, H5 } from "@/components/text/Headers";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col gap-5 items-center justify-center">
      <H5 className="font-bold">You have a wallet</H5>
      <Link href="/teams">
        <H4 className="font-bold underline">Now what</H4>
      </Link>
      Some images around here
    </div>
  );
}
