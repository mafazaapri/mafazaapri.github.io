import React from "react";

export default function HeaderTitle(props) {
  return (
    <div className="uppercase px-5 py-2 border-solid border-[0.5px] border-black rounded-2xl text-sm items-center font-medium font-matter inline-block mb-8">
      {props.children}
    </div>
  );
}
