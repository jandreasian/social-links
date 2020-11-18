import React from "react";
import Home from "./Home";
import Sample from "./Sample";
import UserLinks from "./UserLinks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LinkForm from "./LinkForm";

export const UserLinkRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} component={(props) => <Component {...props} />} />;
};

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => (
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/sample">Sample</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <Component {...props} />
        </div>
      )}
    />
  );
};

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute exact path="/create" component={LinkForm} />
          <UserLinkRoute exact path="/sample" component={Sample} />
          <UserLinkRoute path="/:id" component={UserLinks} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
