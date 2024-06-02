import { useState } from "react";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";

export default function Navbar({
  displayBlackScreen,
  hideBlackScreen,
  isNavbarBg,
}) {
  const [displayPopup, setDisplayPopup] = useState(false);
  const [displayNavButton, setDisplayNavButton] = useState(true);

  const handleOnNavClick = () => {
    displayBlackScreen();
    setDisplayPopup(true);
    setDisplayNavButton(false);
  };

  const handleOnNavCloseClick = () => {
    hideBlackScreen();
    setDisplayPopup(false);
    setDisplayNavButton(true);
  };

  return (
    <>
      <div
        className={`flex justify-between items-center ${
          isNavbarBg ? "py-2" : "pt-12"
        }`}
      >
        <Logo />
        <div className="relative">
          <div
            onClick={handleOnNavClick}
            className={`flex text-white bg-black rounded-lg px-4 py-2 font-matter font-medium cursor-pointer ${
              !displayNavButton && "hidden"
            }`}
          >
            <div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div
            className={`bg-[#101010] ${
              !displayPopup && "hidden"
            } min-w-[27.5rem] z-50 rounded-lg px-10 pt-7 pb-10 text-[#EBEBEB] absolute right-10`}
          >
            <div className="flex justify-between">
              <Logo isLight={true} />
              <FontAwesomeIcon
                icon={faXmark}
                className="text-2xl pt-3 cursor-pointer"
                onClick={handleOnNavCloseClick}
              />
            </div>

            <div className="font-matter font-medium text-4xl mt-16">
              <NavItem title="Work" url="/" />
              <NavItem title="About" url="/about" />
              <NavItem
                title="Resume"
                url="https://www.dropbox.com/scl/fi/81ay4yid0axev5woiavf2/Mafaza-UXResume.pdf?rlkey=j8pik31m41iqfpz0bg6ouevst&st=wxwnvxy0&dl=0"
              />
              <div className="mt-32 font-matter font-medium">
                <div className="uppercase mb-4 text-sm">Social</div>
                <div className="text-xl grid gap-3">
                  <div className="flex items-center">
                    <img
                      src="/img/linkedin.png"
                      className="w-5 inline-block mr-2" url="https://www.linkedin.com/in/mafazaapri/0"
                    />
                    LinkedIn
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/img/instagram.png"
                      className="w-5 inline-block mr-2" 
                    />
                    Instagram
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
