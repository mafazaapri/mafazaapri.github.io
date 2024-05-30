import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ title, url }) {
  return (
    <div className="mb-3 w-fit">
      <Link to={`${url}`} className="group transition duration-300">
        {title}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
      </Link>
    </div>
  );
}
