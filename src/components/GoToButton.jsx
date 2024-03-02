import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function GoToButton(props) {
  return (
    <Link to={props.goToUrl}>
      <div className="bg-black rounded-full inline-flex w-8 h-8 justify-center items-center">
        <FontAwesomeIcon icon={faArrowUp} className="rotate-45 text-white" />
      </div>
    </Link>
  );
}
