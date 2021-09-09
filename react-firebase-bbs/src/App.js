import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import { Footer, MainNav, BBsMain, Header, BBsWrite } from "./comps";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainNav />
        <section className="main_section">
          <Route exact path="/" component={BBsMain} />
          <Route exact path="/write" component={BBsWrite} />
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
