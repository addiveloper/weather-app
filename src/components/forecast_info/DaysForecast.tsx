/* eslint-disable @next/next/no-img-element */
import { forecastData } from "@/interfaces/forecastData";

export function DaysForecast({
  forecast,
  grad,
}: {
  forecast: forecastData;
  grad: string;
}) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const getDayName = (date: string) => {
    const newDate = new Date(date).getDay();
    for (let index = 0; index < days.length; index++) {
      if (index === newDate) {
        return days[index];
      }
    }
  };

  return (
    <>
      <p className="font-semibold mb-3 md:text-start md:text-base text-sm">
        3-day forecast
      </p>
      <div className="grid grid-cols-1 grid-rows-3 gap-1 h-full">
        {forecast.forecastday.map((days, i) => (
          <div
            key={i}
            className="flex lg:justify-between justify-center flex-col lg:flex-row lg:items-center"
          >
            <div className="flex items-center">
              <img
                src={days.day.condition.icon}
                alt={days.day.condition.text}
                className="lg:h-10 md:h-8 h-8 lg:w-10 md:w-8 w-8 mr-2"
              />
              <div>
                <p className="text-sm lg:text-base font-semibold">
                  {getDayName(days.date)}
                </p>
                <p className="text-xs hidden lg:block dark:opacity-70 opacity-90">
                  {days.day.condition.text}
                </p>
              </div>
            </div>
            {grad === "F" ? (
              <p className="text-xs lg:text-sm opacity-90 dark:opacity-70">
                {Math.round(days.day.mintemp_f)}° /{" "}
                {Math.round(days.day.maxtemp_f)}°
              </p>
            ) : (
              <p className="text-xs lg:text-sm opacity-90 dark:opacity-70">
                {Math.round(days.day.mintemp_c)}° /{" "}
                {Math.round(days.day.maxtemp_c)}°
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
