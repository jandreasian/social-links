import React from "react";
import Nav from "./Nav";
import About from "./About";
import Sample from "./Sample";
import UserLinks from "./UserLinks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/sample" exact component={Sample} />
            <Route path="/:id" component={UserLinks} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
