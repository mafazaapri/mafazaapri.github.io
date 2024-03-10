import React from "react";

export default function PainPoint(props) {
  return (
    <>
      <div className="flex gap-3 justify-start items-start">
        <img
          src="/img/paint-point.png"
          className="h-5 w-5 object-contain mt-1"
        />
        <p className="max-w-[40.625rem]">{props.children}</p>
      </div>
    </>
  );
}
