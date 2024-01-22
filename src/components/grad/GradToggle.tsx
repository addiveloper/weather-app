"use client";
import Link from "next/link";

export function GradToggle({
  search,
  degree,
}: {
  search: string;
  degree: string;
}) {
  return (
    <>
      {degree === "F" ? (
        <Link
          href={{ query: { ...(search ? { search } : {}), grad: "C" } }}
          className="font-light text-xl p-2 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded transition-all"
        >
          °C
        </Link>
      ) : (
        <Link
          href={{ query: { ...(search ? { search } : {}), grad: "F" } }}
          className="font-light text-xl p-2 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded transition-all"
        >
          °F
        </Link>
      )}
    </>
  );
}
