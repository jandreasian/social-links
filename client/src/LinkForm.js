import React, { useState, useEffect } from "react";
import styles from "./style.css";

class LinkForm extends React.Component {
  state = {
    mainTitle: "",
    profileUrl: "",
    _id: "",
    orderNumber: 1,
    title: "",
    url: "",
    links: [],
  };

  addLinkToList = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    //Create object to be inserted into links state.
    var obj = { orderNumber: 1, title: this.state.title, url: this.state.url };
    //console.log(obj);
    this.state.links.push(obj);
    this.setState({ title: "", url: "" });
  };

  handleSubmit = (event) => {
    //Add post here
    event.preventDefault();
    console.log(this.state);

    fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        linkUrl: this.state.profileUrl,
        title: this.state.mainTitle,
        links: this.state.links,
      }),
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            className={styles.textForm}
            type="text"
            value={this.state.mainTitle}
            onChange={(event) =>
              this.setState({ mainTitle: event.target.value })
            }
            placeholder="Enter Title here."
            required
          />
          <textarea
            className={styles.textForm}
            type="text"
            value={this.state.profileUrl}
            onChange={(event) =>
              this.setState({ profileUrl: event.target.value })
            }
            placeholder="Enter profile url here."
            required
          />
          <button className={styles.buttonForm}>Submit</button>
        </form>
        <form onSubmit={this.addLinkToList}>
          <textarea
            className={styles.textForm}
            type="text"
            value={this.state.url}
            onChange={(event) => this.setState({ url: event.target.value })}
            placeholder="Enter url here."
            required
          />
          <textarea
            className={styles.textForm}
            type="text"
            value={this.state.title}
            onChange={(event) =>
              this.setState({ _id: 9, title: event.target.value })
            }
            placeholder="Enter url description here."
            required
            maxLength="140"
          />
          <button className={styles.buttonForm}>Add url</button>
        </form>
      </div>
    );
  }
}

export default LinkForm;
