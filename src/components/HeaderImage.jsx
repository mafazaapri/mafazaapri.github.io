import React from "react";
import { twMerge } from "tailwind-merge";

export default function HeaderImage(props) {
  return (
    <div className="container lg:mx-12 lg:max-w-none lg:p-0 lg:w-auto">
      <img
        src={`/img/${props.imgName}`}
        className={twMerge(
          `mx-auto rounded-xl mb-16 mt-10 object-cover w-full max-h-[46.25rem] object-center`,
          props.className
        )}
      />
    </div>
  );
}
