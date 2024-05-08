import React from "react";
import { twMerge } from "tailwind-merge";
import StylishHeaderTitle from "./StylishHeaderTitle";
import GoToButton from "./GoToButton";
import { Link } from "react-router-dom";

export default function ReadNext({
  imgName,
  imgClassName,
  imgCoverName,
  url,
  title,
  desc,
}) {
  return (
    <div>
      <StylishHeaderTitle className="mb-12">Read Next</StylishHeaderTitle>
      <div
        className={`bg-[url('/img/${imgCoverName}')] mx-auto rounded-xl mb-16 mt-10 w-full h-[21.0625rem] relative overflow-hidden`}
      >
        <img
          src={`/img/${imgName}`}
          className={twMerge(
            `rounded-lg max-w-[80%] absolute top-10 left-1/2 object-cover -translate-x-1/2`,
            imgClassName
          )}
        />
      </div>
      <div className="mb-16 gap-16">
        <div>
          <div className="font-medium underline underline-offset-4 text-3xl mb-4 max-w-[21.875rem]">
            {title}
          </div>
          <div className="flex justify-between">
            <p className="max-w-[21.875rem]">{desc}</p>
            <div className="underline font-medium font-matter underline-offset-4 mb-14">
              <Link to={url}>Read case study</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
