import { ScrollRestoration } from "react-router-dom";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [blackScreenVisible, setBlackScreenVisible] = useState(false);
  const [isNavbarBg, setIsNavbarBg] = useState(false);

  const displayBlackScreen = () => {
    setBlackScreenVisible(true);
  };

  const hideBlackScreen = () => {
    setBlackScreenVisible(false);
  };

  const handleOnScroll = (offset) => {
    if (offset > 0) {
      setIsNavbarBg(true);
    } else {
      setIsNavbarBg(false);
    }
  };

  useEffect(() => {
    const onScroll = () => handleOnScroll(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollRestoration />
      <div
        className={`sticky top-0 z-50 ${
          isNavbarBg
            ? "backdrop-blur transition-colors duration-500 lg:border-b bg-white shadow-sm bg-transparent supports-backdrop-blur:bg-white/95"
            : "h-0"
        }`}
      >
        <div className={`container`}>
          <Navbar
            displayBlackScreen={displayBlackScreen}
            hideBlackScreen={hideBlackScreen}
            isNavbarBg={isNavbarBg}
          />
        </div>
      </div>
      <div className="relative">
        <Outlet context={[displayBlackScreen, hideBlackScreen]} />
        <div
          className={`bg-black opacity-30 z-40 w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            !blackScreenVisible && "hidden"
          }
  `}
        ></div>
      </div>
    </>
  );
}

export default App;
