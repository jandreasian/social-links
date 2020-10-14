import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";

const testData = [
  {
    _id: 1,
    orderNumer: 1,
    title: "Google",
    url: "https://www.google.com",
  },
  {
    _id: 2,
    orderNumer: 2,
    title: "Facebook",
    url: "https://www.facebook.com",
  },
  {
    _id: 3,
    orderNumer: 3,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/josh-andreasian-9931a393/",
  },
];

class LinkForm extends React.Component {
  state = {
    redirect: null,
    mainTitle: "",
    profileUrl: "",
    _id: "",
    orderNumber: 0,
    title: "",
    url: "",
    //links: testData,
    links: [],
  };

  addLinkToList = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    //Create object to be inserted into links state.
    var obj = {
      orderNumber: this.state.orderNumber,
      title: this.state.title,
      url: this.state.url,
    };

    this.state.links.push(obj);
    this.setState({
      title: "",
      url: "",
      orderNumber: this.state.orderNumber + 1,
    });
  };

  handleRemove(orderNumber) {
    //Creates a new list without the link
    const newList = this.state.links.filter(
      (link) => link.orderNumber !== orderNumber
    );

    this.setState({ links: newList });
  }

  handleEditLinkListTitleChange = (index, event) => {
    var links = this.state.links.slice();
    links[index].title = event.target.value;
    this.setState({ links: links });
  };

  handleEditLinkListUrlChange = (index, event) => {
    var links = this.state.links.slice();
    links[index].url = event.target.value;
    this.setState({ links: links });
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
                    <InputGroup.Text>sociallinks.com/</InputGroup.Text>
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
          <Form.Group>
            <Card>
              <Card.Header>Links</Card.Header>
              <Card.Body>
                <ul>
                  {this.state.links.map((links, index) => (
                    <Form key={index}>
                      <Form.Group controlId="formEditLink">
                        <Form.Row>
                          {/* <Col column sm={1}>
              <FaAngleUp className="moveIcon" />
              <FaAngleDown className="moveIcon" />
            </Col> */}
                          <Col>
                            <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                <InputGroup.Text>Title</InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl
                                placeholder="Enter title here"
                                required
                                value={links.title}
                                onChange={this.handleEditLinkListTitleChange.bind(
                                  this,
                                  index
                                )}
                              />
                            </InputGroup>
                            <InputGroup className="mb-2">
                              <InputGroup.Prepend>
                                <InputGroup.Text>URL</InputGroup.Text>
                              </InputGroup.Prepend>
                              <FormControl
                                placeholder="Enter URL here"
                                required
                                value={links.url}
                                onChange={this.handleEditLinkListUrlChange.bind(
                                  this,
                                  index
                                )}
                              />
                            </InputGroup>
                          </Col>
                          <Col sm={1}>
                            <button
                              type="button"
                              onClick={() =>
                                this.handleRemove(links.orderNumber)
                              }
                              // onClick={handleRemove(links.id)}
                            >
                              Remove
                            </button>
                          </Col>
                        </Form.Row>
                      </Form.Group>
                    </Form>
                  ))}
                </ul>
              </Card.Body>
            </Card>
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
