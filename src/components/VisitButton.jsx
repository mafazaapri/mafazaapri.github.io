import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function VisitButton(props) {
  return (
    <div className="inline-block">
      <a
        href={props.url}
        target="_blank"
        className="uppercase px-5 py-2 border-solid border-2 border-black rounded-2xl text-sm flex items-center font-matter"
      >
        <FontAwesomeIcon icon={faLink} className="mr-2" />
        <div className="font-medium ">Visit Live Website</div>
      </a>
    </div>
  );
}
