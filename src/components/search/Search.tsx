"use client";

import { Dialog, Transition, Combobox } from "@headlessui/react";
import { Fragment, useState } from "react";
import { SearchInput } from "./superkey/SearchInput";
import { IconGlass } from "../icons/IconGlass";

export function Search({ grad }: { grad: string }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="p-2 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded transition-all"
      >
        <IconGlass />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 p-5 pt-[25vh] overflow-y-auto mx-auto max-w-xl h-screen"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="transform overflow-hidden rounded-lg bg-white dark:bg-neutral-800 shadow-xl transition-all">
              <Combobox
                as="div"
                onChange={closeModal}
                className="relative max-w-xl mx-auto overflow-hidden rounded-md shadow-2xl"
              >
                <SearchInput grad={grad} />
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
