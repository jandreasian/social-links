import React from "react";
import LinkLists from "./LinkLists";
import LinkForm from "./LinkForm";

const testData = [
  {
    _id: 1,
    orderNumer: 1,
    title: "Google",
    url: "https://www.google.com",
  },
  {
    id: 2,
    orderNumer: 2,
    title: "Facebook",
    url: "https://www.facebook.com",
  },
  {
    id: 3,
    orderNumer: 3,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/josh-andreasian-9931a393/",
  },
];

class Sample extends React.Component {
  state = {
    links: testData,
    //links: []
  };

  addNewLink = (testData) => {
    this.setState((prevState) => ({
      links: [...prevState.links, testData],
    }));
  };

  render() {
    return (
      <div>
        <LinkLists links={this.state.links} />
      </div>
    );
  }
}

export default Sample;
