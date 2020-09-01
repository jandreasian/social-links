import React from "react";
import Nav from "./Nav";
import Create from "./Create";
import Sample from "./Sample";
import UserLinks from "./UserLinks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const UserLinkRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} component={(props) => <Component {...props} />} />;
};

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => (
        <div>
          <Nav /> {/* HEADER ALWAYS VISIBLE */}
          <Component {...props} />
        </div>
      )}
    />
  );
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/create" component={Create} />
        <UserLinkRoute exact path="/sample" component={Sample} />
        <UserLinkRoute exact path="/:id" component={UserLinks} />
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
