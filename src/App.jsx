import { useState } from "react";
import "./App.css";
import Pages1 from "./pages/Pages1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Header from "./components/Header";
import Page4 from "./pages/Page4";
import Page6 from "./pages/Page6";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Pages1 />
      <Page2 />
      <Page3 />
      <Page4 />
      {/* <Page5 /> */}
      <Page6 />

    </>
  );
}

export default App;
