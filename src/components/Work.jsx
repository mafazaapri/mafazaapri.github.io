import React from "react";
import GoToButton from "./GoToButton";

export default function Work(props) {
  return (
    <div>
      <div className="text-4xl font-medium mb-5">{props.title}</div>
      <img
        src={`/img/${props.imgName}`}
        className="object-cover w-full max-h-[18.75rem] lg:max-h-none lg:h-[33.1rem] object-center mb-7 rounded-lg"
      />
      <div className="flex justify-between">
        <div className="lg:max-w-xs mr-5">{props.description}</div>
        <GoToButton goToUrl={props.goToUrl} />
      </div>
    </div>
  );
}
