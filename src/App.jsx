import { ScrollRestoration } from "react-router-dom";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [blackScreenVisible, setBlackScreenVisible] = useState(false);

  const displayBlackScreen = () => {
    setBlackScreenVisible(true);
  };

  const hideBlackScreen = () => {
    setBlackScreenVisible(false);
  };

  return (
    <>
      <ScrollRestoration />
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
