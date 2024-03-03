import React from "react";

export default function DiscoveryPoint(props) {
  return (
    <>
      <div>
        <div className="bg-black rounded-full h-2 w-2 mr-3 mt-2"></div>
      </div>
      <p className="max-w-[40.625rem]">{props.children}</p>
    </>
  );
}
