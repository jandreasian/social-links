import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class LinkForm extends React.Component {
  state = {
    redirect: null,
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
    }).then((response) => {
      if (response.ok) {
        this.setState({ redirect: "/" });
      } else {
        throw new Error("Something went wrong ...");
      }
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className="container">
        <Form>
          <Form.Group controlId="formBasicTitle">
            <Form.Row>
              <Form.Label column sm="0">
                Title
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Large text"
                  value={this.state.mainTitle}
                  onChange={(event) =>
                    this.setState({ mainTitle: event.target.value })
                  }
                  required
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="formUserUrl">
            <Form.Row>
              <Col>
                <InputGroup className="mb-2">
                  <InputGroup.Prepend>
                    <InputGroup.Text>social-l.ink/</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="enternamehere"
                    required
                    value={this.state.profileUrl}
                    onChange={(event) =>
                      this.setState({ profileUrl: event.target.value })
                    }
                  />
                </InputGroup>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlId="formBasicLink">
            <Form.Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Enter URL here"
                  value={this.state.url}
                  onChange={(event) =>
                    this.setState({ url: event.target.value })
                  }
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Enter Description here"
                  value={this.state.title}
                  onChange={(event) =>
                    this.setState({ title: event.target.value })
                  }
                />
              </Col>
              <Col>
                <Button onClick={this.addLinkToList} variant="primary">
                  Add URL
                </Button>
              </Col>
            </Form.Row>
          </Form.Group>
          <Button onClick={this.handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default LinkForm;
