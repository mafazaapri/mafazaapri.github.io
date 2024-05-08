import React from "react";
import { twMerge } from "tailwind-merge";

export default function HeaderImage({ imgName, imgCoverName, className }) {
  return (
    <div className="container lg:mx-12 lg:max-w-none lg:p-0 lg:w-auto">
      <div
        className={`bg-[url('/img/${imgCoverName}')] mx-auto rounded-xl mb-16 mt-10 w-full h-[46.25rem] relative overflow-hidden`}
      >
        <img
          src={`/img/${imgName}`}
          className={twMerge(
            `mx-auto rounded-xl max-h-[34.5rem] absolute -bottom-1 left-1/2 -translate-x-1/2`,
            className
          )}
        />
      </div>
    </div>
  );
}
