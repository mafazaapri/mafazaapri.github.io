import React from "react";
import GoToButton from "./GoToButton";
import { Link } from "react-router-dom";

export default function Work({
  title,
  imgName,
  description,
  goToUrl,
  imgCoverName,
}) {
  return (
    <div
      className={`w-full bg-[url('/img/${imgCoverName}')] pt-9 pl-12 rounded-xl overflow-hidden`}
    >
      <div className="pr-5">
        <div className="text-4xl font-medium mb-5">{title}</div>
        <div className="max-w-sm mb-5">{description}</div>
        <div className="underline font-medium font-matter underline-offset-4 mb-14">
          <Link to={goToUrl}>Read case study</Link>
        </div>
      </div>
      <img
        src={`/img/${imgName}`}
        className="h-[21.25rem] object-cover object-left"
      />
    </div>
  );
}
