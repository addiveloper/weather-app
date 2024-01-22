import { currentData } from "@/interfaces/currentData";
import { forecastData } from "@/interfaces/forecastData";

export function AnalysisInfo({
  current,
  forecast,
  grad,
}: {
  current: currentData;
  forecast: forecastData;
  grad: string;
}) {
  return (
    <>
      <div className="text-xs md:text-sm lg:text-base flex justify-between items-center border-b border-gray-300 md:px-3 dark:border-neutral-500">
        <p className="dark:opacity-80 opacity-90">Humidity</p>
        <p className="font-semibold">{current.humidity}%</p>
      </div>
      <div className="text-xs md:text-sm lg:text-base flex justify-between items-center border-b border-gray-300 md:px-3 dark:border-neutral-500">
        <p className="dark:opacity-80 opacity-90">Real feel</p>
        {grad === "F" ? (
          <p className="font-semibold">{Math.round(current.feelslike_f)} °F</p>
        ) : (
          <p className="font-semibold">{Math.round(current.feelslike_c)} °C</p>
        )}
      </div>
      <div className="text-xs md:text-sm lg:text-base flex justify-between items-center border-b border-gray-300 md:px-3 dark:border-neutral-500">
        <p className="dark:opacity-80 opacity-90">UV</p>
        <p className="font-semibold">{current.uv}</p>
      </div>
      <div className="text-xs md:text-sm lg:text-base flex justify-between items-center border-b border-gray-300 md:px-3 dark:border-neutral-500">
        <p className="dark:opacity-80 opacity-90">Pressure</p>
        <p className="font-semibold">
          {current.pressure_mb}
          <span className="lg:text-xs md:text-[0.6rem] text-[0.6rem]">
            mbar
          </span>
        </p>
      </div>
      <div className="text-xs md:text-sm lg:text-base flex justify-between items-center border-b border-gray-300 md:px-3 dark:border-neutral-500">
        <p className="dark:opacity-80 opacity-90">Chance of rain</p>
        <p className="font-semibold">
          {forecast.forecastday[0].day.daily_chance_of_rain}%
        </p>
      </div>
      <div className="text-xs md:text-sm lg:text-base flex justify-between items-center border-b border-gray-300 md:px-3 dark:border-neutral-500">
        <p className="dark:opacity-80 opacity-90">Chance of snow</p>
        <p className="font-semibold">
          {forecast.forecastday[0].day.daily_chance_of_snow}%
        </p>
      </div>
    </>
  );
}
