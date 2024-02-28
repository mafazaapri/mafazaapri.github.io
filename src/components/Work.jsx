import React from "react";

export default function Work(props) {
  return (
    <div>
      <div className="text-4xl font-medium mb-5">{props.title}</div>
      <div
        className={`h-[33.1rem] rounded-lg bg-[url('${props.imgPath}')] bg-cover bg-no-repeat bg-center`}
      ></div>
    </div>
  );
}
