import React from "react";
import LinkLists from "./LinkLists";
import LinkForm from "./LinkForm";

const testData = [
  {
    id: 1,
    link_text: "Google",
    link: "https://www.google.com",
  },
  {
    id: 2,
    link_text: "Facebook",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    link_text: "LinkedIn",
    link: "https://www.linkedin.com/in/josh-andreasian-9931a393/",
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
        <LinkForm onSubmit={this.addNewLink} />
        <LinkLists links={this.state.links} />
      </div>
    );
  }
}

export default Sample;
