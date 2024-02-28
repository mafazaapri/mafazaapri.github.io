import React from "react";

export default function Logo(props) {
  return (
    <>
      <div className="inline-flex justify-center items-center">
        <div
          className={`text-[2.56rem] font-matter font-medium rotate-90 mr-2 ${
            props.isLight && "text-white"
          }`}
        >
          M
        </div>
        <div
          className={`font-matter font-medium text-start text-[0.9375rem] leading-snug ${
            props.isLight && "text-white"
          }`}
        >
          MAFAZA<br></br>
          APRI
        </div>
      </div>
    </>
  );
}
