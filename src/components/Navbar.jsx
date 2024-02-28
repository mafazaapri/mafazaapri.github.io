import React from "react";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <div>
        <div className="flex text-white bg-black rounded-3xl px-4 py-2 font-matter font-medium">
          <div className="mr-3 uppercase">Home</div>
          <div>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
    </div>
  );
}
