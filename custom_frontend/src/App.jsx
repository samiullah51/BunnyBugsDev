import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomePage />
      {/*  <AboutPage /> */}
    </>
  );
}

export default App;
