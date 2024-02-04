import { Header } from "@/components/layout/Header";
import fetchForecast from "@/components/search/fetchForecast";
import { DayInfo } from "@/components/forecast_info/DayInfo";
import { TempInfo } from "@/components/forecast_info/TempInfo";
import { AnalysisInfo } from "@/components/forecast_info/AnalysisInfo";
import { SunInfo } from "@/components/forecast_info/SunInfo";
import { Map } from "@/components/forecast_info/Map";
import { DaysForecast } from "@/components/forecast_info/DaysForecast";
import { MoonInfo } from "@/components/forecast_info/MoonInfo";
import { HoursForecast } from "@/components/forecast_info/HoursForecast";
import { AirInfo } from "@/components/forecast_info/AirInfo";
import { searchParams } from "@/interfaces/searchParams";

export const revalidate = 0;

export default async function Home({
  searchParams,
}: {
  searchParams: searchParams;
}) {
  const id = parseInt(searchParams.search);
  const res = await fetchForecast(id);
  const current = res?.current;
  const location = res?.location;
  const forecast = res?.forecast;

  const search =
    typeof searchParams.search === "string" ? searchParams.search : "";
  const grad = typeof searchParams.grad === "string" ? searchParams.grad : "C";

  return (
    <main className="md:h-screen bg-gray-200 dark:bg-neutral-950">
      <section className="md:h-full grid grid-cols-2 md:grid-cols-8 md:grid-rows-8 p-4 gap-4">
        <div className="bg-white dark:bg-neutral-900 col-span-2 md:col-span-8 rounded-xl flex items-center justify-center md:p-3 lg:p-5 p-4">
          <Header search={search} grad={grad} />
        </div>
        <div className="bg-white dark:bg-neutral-900 hidden col-span-2 rounded-xl md:flex items-center justify-center md:p-3 lg:p-5">
          <DayInfo current={current} />
        </div>
        <div className="bg-white dark:bg-neutral-900 col-span-2 md:col-span-4 lg:row-span-3 md:row-span-2 rounded-xl flex items-center justify-between md:py-2 lg:py-5 md:px-3 lg:px-8 p-4">
          <TempInfo
            current={current}
            location={location}
            forecast={forecast}
            grad={grad}
          />
        </div>
        <div className="bg-white dark:bg-neutral-900 hidden md:col-span-2 md:row-span-2 rounded-xl md:flex items-center justify-center">
          <Map location={location} />
        </div>
        <div className="bg-white dark:bg-neutral-900 md:col-span-2 md:row-span-4 rounded-xl grid grid-cols-1 grid-rows-6 md:p-3 lg:p-5 gap-2 p-4">
          <AnalysisInfo current={current} forecast={forecast} grad={grad} />
        </div>
        <div className="bg-white dark:bg-neutral-900 md:col-span-2 md:row-span-3 rounded-xl flex flex-col md:p-4 lg:p-5 p-4">
          <DaysForecast forecast={forecast} grad={grad} />
        </div>
        <div className="bg-white dark:bg-neutral-900 lg:col-span-1 md:col-span-2 md:row-span-2 rounded-xl grid grid-cols-1 grid-rows-2 md:p-4 lg:p-5 gap-2 p-4">
          <SunInfo forecast={forecast} />
        </div>
        <div className="bg-white dark:bg-neutral-900 lg:col-span-1 md:col-span-2 md:row-span-2 rounded-xl flex flex-col items-center justify-evenly md:p-4 lg:p-5 p-4">
          <AirInfo current={current} />
        </div>
        <div className="bg-white dark:bg-neutral-900 col-span-2 md:col-span-4 lg:col-span-2 lg:row-span-2 rounded-xl grid grid-cols-2 lg:p-5 gap-2 p-4">
          <MoonInfo forecast={forecast} />
        </div>
        <div className="bg-white dark:bg-neutral-900 col-span-2 md:col-span-8 md:row-span-2 rounded-xl flex items-center justify-center md:p-4 lg:p-5 p-4">
          <HoursForecast forecast={forecast} grad={grad} />
        </div>
        <div className="bg-white md:hidden dark:bg-neutral-900 col-span-2 rounded-xl flex items-center justify-center md:p-4 lg:p-5 p-4">
          <p>🧅 Build by Addiveloper 🧅</p>
        </div>
      </section>
    </main>
  );
}
