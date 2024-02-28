import React from "react";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#222222] rounded-lg mx-6 mb-5">
      <div className="container">
        <div className="pt-7 pb-16">
          <Logo isLight={true} className="mr-auto" />

          <hr className="bg-[#CFCFCF] mb-8 mt-6"></hr>
          <div className="flex justify-between">
            <div>
              <div className="uppercase text-[4.6875rem] text-start font-medium leading-none text-white mb-8">
                Let's Work<br></br>
                Together <br></br>
              </div>
              <p className="text-white max-w-[23.75rem]">
                I would love to talk about your ideas, let’s build awesome
                product together.
              </p>
            </div>
            <div className="mt-auto">
              <ul className="text-end text-[#D9D9D9] underline underline-offset-4">
                <li className="mb-5">Mafaza.apri@gmail.com</li>
                <li className="mb-5">LinkedIn</li>
                <li className="mb-5">View my resume</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
