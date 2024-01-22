/* eslint-disable @next/next/no-img-element */
import { currentData } from "@/interfaces/currentData";

export function DayInfo({ current }: { current: currentData }) {
  return (
    <>
      <p className="lg:text-lg md:text-sm font-semibold">
        {current.condition.text}
      </p>
      <img
        src={current.condition.icon}
        alt={current.condition.text}
        className="lg:w-12 md:w-10"
      />
    </>
  );
}
