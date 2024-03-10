import React from "react";

export default function HeaderImage(props) {
  return (
    <div className="container lg:mx-12 lg:max-w-none lg:p-0 lg:w-auto">
      <img
        src={`/img/${props.imgName}`}
        className="mx-auto rounded-xl mb-16 mt-10 object-cover w-full max-h-[46.25rem]"
      />
    </div>
  );
}
