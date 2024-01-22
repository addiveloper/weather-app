"use client";

import { SearchData } from "@/interfaces/searchData";
import { Combobox } from "@headlessui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function SearchItem({ id, name, region, country, grad }: SearchData) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSearch = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <>
      <Combobox.Option
        value={() => router.push("?" + handleSearch("search", `${id}`))}
        className="space-x-1 px-4 py-2 cursor-pointer border-b dark:border-neutral-600 border-gray-200 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all"
      >
        <div className="flex flex-col">
          <p className="text-sm md:text-base">{name}</p>
          <p className="text-xs opacity-90 dark:opacity-80">
            {region} - {country}
          </p>
        </div>
      </Combobox.Option>
    </>
  );
}
