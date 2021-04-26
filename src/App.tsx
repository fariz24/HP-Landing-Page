import React from "react";
import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Navbar menu={{ name: "propsname", path: "propsPath" }} />
      <div className="content">
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </div>
      </div>
      
    </div>
            
  );
}

export default App;
