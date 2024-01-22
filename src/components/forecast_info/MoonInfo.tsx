/* eslint-disable @next/next/no-img-element */
import { forecastData } from "@/interfaces/forecastData";

export function MoonInfo({ forecast }: { forecast: forecastData }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="font-semibold">Moonrise</p>
        <p className="dark:opacity-70 md:text-base text-sm">
          {forecast.forecastday[0].astro.moonrise}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-semibold">Moonset</p>
        <p className="dark:opacity-70 md:text-base text-sm">
          {forecast.forecastday[0].astro.moonset}
        </p>
      </div>
    </>
  );
}
