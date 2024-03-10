import React from "react";
import { twMerge } from "tailwind-merge";
import StylishHeaderTitle from "./StylishHeaderTitle";
import GoToButton from "./GoToButton";

export default function ReadNext(props) {
  return (
    <div>
      <StylishHeaderTitle className="mb-12">Read Next</StylishHeaderTitle>
      <img
        src={`/img/${props.imgName}`}
        className={twMerge(
          `max-h-[18.5rem] object-cover object-center rounded-lg mb-10 w-full`,
          props.imgClassName
        )}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-16 gap-16">
        <div>
          <div className="font-medium underline underline-offset-4 text-3xl mb-4">
            {props.title}
          </div>
          <div className="flex">
            <p className="max-w-[40.625rem] mr-8">{props.desc}</p>
            <GoToButton goToUrl={props.url} />
          </div>
        </div>
      </div>
    </div>
  );
}
