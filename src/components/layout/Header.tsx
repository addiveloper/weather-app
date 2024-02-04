"use client";

import Link from "next/link";
import { GradToggle } from "../grad/GradToggle";
import { ThemeToggle } from "../themes/ThemeToggle";
import { Search } from "../search/Search";
import { GithubButton } from "./GithubButton";

export function Header({ search, grad }: { search: string; grad: string }) {
  const dateNow = new Date();

  return (
    <header className="flex w-full items-center justify-between">
      <nav>
        <ul>
          <li>
            <Link href="/" className="text-md font-semibold">
              weather app
            </Link>
          </li>
          <li>
            <Link href="/" className="text-xs dark:opacity-70">
              Today, {dateNow.toLocaleDateString()}
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex items-center justify-center gap-3 md:gap-6 text-sm font-semibold">
          <li>
            <Search grad={grad} />
          </li>
          <li className="flex items-center">
            <GithubButton />
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <GradToggle search={search} degree={grad} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
