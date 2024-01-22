/* eslint-disable @next/next/no-img-element */
import { forecastData } from "@/interfaces/forecastData";
import { HourCard } from "./HourCard";

export function HoursForecast({
  forecast,
  grad,
}: {
  forecast: forecastData;
  grad: string;
}) {
  return (
    <>
      <div className="flex py-3 overflow-x-auto w-full scrollbar-thin hover:scrollbar-thumb-gray-500 scrollbar-thumb-gray-400 scrollbar-track-gray-300 scrollbar-thumb-rounded-md scrollbar-track-rounded-md dark:scrollbar-track-neutral-800 dark:scrollbar-thumb-neutral-600">
        {forecast.forecastday[0].hour.map((hour, i) => {
          return (
            <HourCard
              key={i}
              temp_c={hour.temp_c}
              temp_f={hour.temp_f}
              icon={hour.condition.icon}
              time_epoch={hour.time_epoch}
              grad={grad}
            />
          );
        })}
      </div>
    </>
  );
}
