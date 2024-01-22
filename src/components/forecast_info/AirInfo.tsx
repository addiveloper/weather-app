import { currentData } from "@/interfaces/currentData";

export function AirInfo({ current }: { current: currentData }) {
  return (
    <>
      <p className="font-semibold">Wind</p>
      <p>{current.wind_kph}kph</p>
      <p>{current.wind_dir}</p>
    </>
  );
}
