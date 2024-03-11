import { ScrollRestoration } from "react-router-dom";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

export default App;
