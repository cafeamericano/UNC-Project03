import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Overview from "./components/Overview";
import LiquidAssets from "./components/LiquidAssets";
import FrozenAssets from "./components/FrozenAssets";
import Liabilities from "./components/Liabilities";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Route exact path="/" component={Overview} />
        <Route exact path="/liquidassets" component={LiquidAssets} />
        <Route exact path="/frozenassets" component={FrozenAssets} />
        <Route exact path="/liabilities" component={Liabilities} /> */}
      </div>
    </Router>
  );
}

export default App;
