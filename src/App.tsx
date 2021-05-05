import React from "react";
import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import { NavbarComponent } from "./components";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <NavbarComponent menu={{ name: "propsname", path: "propsPath" }} />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
    </div>
            
  );
}

export default App;
