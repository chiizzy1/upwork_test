"use client";

import { logo } from "@/assets";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState({
    item1: false,
    item2: false,
  });
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex gap-2">
        <div className="flex py-2 px-8 items-center justify-center bg-white rounded-3xl">
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <Image src={logo} alt="dart_logo" width={40} height={40} />
            <span className="text-black font-bold text-5xl">Dart</span>
          </div>
        </div>

        <ul className="flex gap-4 bg-white rounded-3xl p-2">
          <li
            className={`text-black hover:text-blue-600 hover:bg-blue-200 p-4 rounded-2xl cursor-pointer ${
              active.item1 ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() =>
              setActive(() => ({ item2: false, item1: !active.item1 }))
            }
          >
            <p className="font-semibold text-lg">Item 1</p>
          </li>
          <li
            className={`text-black hover:text-blue-600 hover:bg-blue-200 p-4 rounded-2xl cursor-pointer ${
              active.item2 ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() =>
              setActive(() => ({ item1: false, item2: !active.item2 }))
            }
          >
            <p className="font-semibold text-lg">Item 2</p>
          </li>
        </ul>
      </div>
    </main>
  );
}
