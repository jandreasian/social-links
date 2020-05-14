import React from "react";
import styles from "./style.css";

class LinkForm extends React.Component {
  state = { id: "", link_text: "", link: "" };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ link_text: "", link: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          className={styles.textForm}
          type="text"
          value={this.state.link}
          onChange={(event) => this.setState({ link: event.target.value })}
          placeholder="Enter link here."
          required
        />
        <textarea
          className={styles.textForm}
          type="text"
          value={this.state.link_text}
          onChange={(event) =>
            this.setState({ id: 9, link_text: event.target.value })
          }
          placeholder="Enter link description here."
          required
          maxLength="140"
        />
        <button className={styles.buttonForm}>Add Tweet</button>
      </form>
    );
  }
}

export default LinkForm;
