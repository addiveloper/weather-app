"use client";

import { useTheme } from "next-themes";
import { IconMoon } from "../icons/IconMoon";
import { IconSun } from "../icons/IconSun";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <button
        className="hidden dark:block p-2 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded transition-all"
        onClick={() => setTheme("light")}
      >
        <IconSun />
      </button>
      <button
        className="dark:hidden p-2 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded transition-all"
        onClick={() => setTheme("dark")}
      >
        <IconMoon />
      </button>
    </>
  );
}
