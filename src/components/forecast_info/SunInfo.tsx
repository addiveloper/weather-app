import { forecastData } from "@/interfaces/forecastData";

export function SunInfo({ forecast }: { forecast: forecastData }) {
  return (
    <>
      <div className="text-base flex flex-col justify-center items-center">
        <p className="font-semibold">Sunrise</p>
        <p className="dark:opacity-70 opacity-90 md:text-base text-sm">
          {forecast.forecastday[0].astro.sunrise}
        </p>
      </div>
      <div className="text-base flex flex-col justify-center items-center">
        <p className="font-semibold">Sunset</p>
        <p className="dark:opacity-70 opacity-90 md:text-base text-sm">
          {forecast.forecastday[0].astro.sunset}
        </p>
      </div>
    </>
  );
}
