import React from "react";

export default function NavItem({ title, url }) {
  return (
    <div className="mb-3 w-fit">
      <a href={`${url}`} class="group transition duration-300">
        {title}
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
      </a>
    </div>
  );
}
