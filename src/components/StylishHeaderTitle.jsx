import React from "react";
import { twMerge } from "tailwind-merge";

export default function StylishHeaderTitle(props) {
  return (
    <div className={twMerge("flex items-center", props.className)}>
      <div className="text-white bg-black rounded-3xl px-4 py-2 font-matter font-medium inline-block mr-5">
        <div className="uppercase w-max">{props.children}</div>
      </div>
      <div className="bg-slate-300 h-[1px] w-full"></div>
    </div>
  );
}
