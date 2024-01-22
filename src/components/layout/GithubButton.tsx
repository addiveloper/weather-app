import Link from "next/link";
import { IconGithub } from "../icons/IconGithub";

export function GithubButton() {
  return (
    <>
      <Link
        href="https://www.github.com/addiveloper/weather-app"
        className="p-2 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded transition-all"
      >
        <IconGithub />
      </Link>
    </>
  );
}
