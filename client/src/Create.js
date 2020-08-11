import React from "react";
import LinkLists from "./LinkLists";
import LinkForm from "./LinkForm";

class Create extends React.Component {
  state = {
    links: [],
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

export default Create;
