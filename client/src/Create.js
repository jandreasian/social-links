import React from "react";
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
      </div>
    );
  }
}

export default Create;
