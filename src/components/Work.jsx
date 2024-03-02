import React from "react";
import GoToButton from "./GoToButton";

export default function Work(props) {
  return (
    <div>
      <div className="text-4xl font-medium mb-5">{props.title}</div>
      <div
        className={`h-[33.1rem] rounded-lg bg-[url('/img/${props.imgFullName}')] bg-cover bg-no-repeat bg-center mb-7`}
      ></div>
      <div className="flex justify-between">
        <div className="lg:max-w-xs mr-5">{props.description}</div>
        <GoToButton goToUrl={props.goToUrl} />
      </div>
    </div>
  );
}
