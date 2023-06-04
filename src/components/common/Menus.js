"use client";

import Link from "next/link";
import { P1, P4 } from "../text/Paragraphs";
import { useRef } from "react";

export function HomepageMenu() {
  const ref = useRef(null);
  const theme = "";
  return (
    <div
      ref={ref}
      className={`${
        theme === "grey"
          ? "text-grey bg-blue"
          : theme === "blue"
          ? "text-blue bg-grey"
          : "text-grey bg-black"
      } fixed z-10 top-0 left-0 py-1 sm:py-4 px-2 sm:px-8 grid grid-cols-2 gap-8 w-full transition-all duration-150 ease-out text-center`}
    >
      <Link href="/" className="flex items-center justify-start gap-4">
        <P1 className="font-bold bg-transparent">MVP</P1>
      </Link>
      <div className="flex items-center justify-end">
        <P4
          className={
            "text-blue bg-grey rounded-full px-4 py-2 font-bold transition-all duration-150 ease-out"
          }
        >
          Sign In
        </P4>
      </div>
    </div>
  );
}
