"use client";

import { Combobox } from "@headlessui/react";
import { useState } from "react";
import fetchCity from "../fetchCity";
import { SearchItem } from "./SearchItem";
import { SearchData } from "@/interfaces/searchData";

export function SearchInput({ grad }: { grad: string }) {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);
  const [display, setDisplay] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    if (event.target.value.length > 4) {
      getData();
      setDisplay(true);
    }
  };

  const getData = async () => {
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const data = await fetchCity(
      `https://api.weatherapi.com/v1/search.json?key=${key}&q=${search}`
    );
    setOptions(data);
  };
  return (
    <>
      <div className="flex items-center p-2 space-x-1">
        <Combobox.Input
          as="input"
          autoComplete="off"
          onChange={(e) => handleChange(e)}
          className="w-full h-10 pl-2 bg-transparent border-none focus:outline-none"
          placeholder="Enter a city..."
        />
      </div>
      <Combobox.Options className="border-t border-gray-200 dark:border-neutral-600 overflow-y-auto max-h-96">
        {options.map((option: SearchData, index) => {
          return (
            <>
              <SearchItem
                key={index}
                id={option.id}
                name={option.name}
                region={option.region}
                country={option.country}
                grad={grad}
              />
            </>
          );
        })}
      </Combobox.Options>
    </>
  );
}
