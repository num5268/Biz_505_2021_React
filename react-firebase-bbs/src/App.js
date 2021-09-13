import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer, MainNav, BBsMain, Header, BBsWrite, BBsDetail } from "./comps";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainNav />
        <section className="main_section">
          <Switch>
            <Route exact path="/" component={BBsMain} />
            <Route exact path="/write" component={BBsWrite} />
            <Route exact path="/detail/:id" component={BBsDetail} />
          </Switch>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
