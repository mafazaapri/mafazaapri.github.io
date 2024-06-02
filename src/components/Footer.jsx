import React from "react";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#000000] rounded-lg mx-6 mb-5">
      <div className="container">
        <div className="pt-7 pb-16">
          <Logo isLight={true} className="mr-auto" />

          <hr className="bg-[#CFCFCF] mb-8 mt-6"></hr>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-14 lg:mb-0">
              <div className="uppercase text-4xl lg:text-[4.6875rem] text-start font-medium leading-none text-white mb-8">
                Let's Work<br></br>
                Together <br></br>
              </div>
              <p className="text-white max-w-[23.75rem]">
                I would love to talk about your ideas, let’s build awesome
                product together.
              </p>
            </div>
            <div className="lg:mt-auto">
              <ul className="lg:text-end text-[#D9D9D9] underline underline-offset-4">
                <li className="mb-5">
                  <a href="mailto:mafaza.apri@gmail.com" target="_blank">
                    Mafaza.apri@gmail.com
                  </a>
                </li>
                <li className="mb-5">
                  <a
                    href="https://www.linkedin.com/in/mafazaapri/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="mb-5">
                  <a
                    href="https://www.dropbox.com/scl/fi/81ay4yid0axev5woiavf2/Mafaza-UXResume.pdf?rlkey=j8pik31m41iqfpz0bg6ouevst&st=wxwnvxy0&dl=0"
                    target="_blank"
                  >
                  View my resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
