import { currentData } from "@/interfaces/currentData";
import { forecastData } from "@/interfaces/forecastData";
import { locationData } from "@/interfaces/locationData";

export function TempInfo({
  current,
  location,
  forecast,
  grad,
}: {
  current: currentData;
  location: locationData;
  forecast: forecastData;
  grad: string;
}) {
  return (
    <>
      <div>
        <h1 className="lg:text-2xl md:text-xl text-lg font-bold">
          {location.name}, {location.region}
        </h1>
        <p className="dark:opacity-70 opacity-90 lg:text-base md:text-sm text-xs">
          {location.country}
        </p>
        {grad === "F" ? (
          <p className="font-semibold pt-4 md:text-base text-xs">
            {Math.round(forecast.forecastday[0].day.mintemp_f)} °F /{" "}
            {Math.round(forecast.forecastday[0].day.maxtemp_f)} °F
          </p>
        ) : (
          <p className="font-semibold pt-4 md:text-base text-xs">
            {Math.round(forecast.forecastday[0].day.mintemp_c)} °C /{" "}
            {Math.round(forecast.forecastday[0].day.maxtemp_c)} °C
          </p>
        )}
      </div>
      {grad === "F" ? (
        <div className="flex">
          <p className="lg:text-9xl md:text-8xl text-7xl font-semibold">
            {Math.round(current.temp_f)}
          </p>
          <p className="lg:text-3xl md:text-2xl text-xl font-semibold md:pt-2 pt-1">
            °F
          </p>
        </div>
      ) : (
        <div className="flex">
          <p className="lg:text-9xl md:text-8xl text-7xl font-semibold">
            {Math.round(current.temp_c)}
          </p>
          <p className="lg:text-3xl md:text-2xl text-xl font-semibold md:pt-2 pt-1">
            °C
          </p>
        </div>
      )}
    </>
  );
}
