import "./App.css";

import MainNav from "./comps/MainNav";
import BBsMain from "./comps/BBsMain";
import BBsWrite from "./comps/BBsWrite";
import Header from "./comps/Header";

import { BrowserRouter, Route } from "react-router-dom";
import { Footer } from "./comps";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainNav />
        {/* <BBsMain /> */}
        <BBsWrite />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
