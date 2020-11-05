import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import EditLinkList from "./EditLinkList";


const testData = [
  {
    orderNumber: 0,
    title: "Google",
    url: "https://www.google.com",
  },
  {
    orderNumber: 1,
    title: "Facebook",
    url: "https://www.facebook.com",
  },
  {
    orderNumber: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/josh-andreasian-9931a393/",
  },
];

function LinkForm () {
  const [redirect, setRedirect] =  useState(false);
  const [mainTitle, setmainTitle] =  useState('');
  const [profileUrl, setprofileUrl] =  useState('');
  const [orderNumber, setOrderNumber] =  useState(0);
  const [links, setLinks] =  useState(testData);
  const [validated, setValidated] =  useState(false);

  function addLinkToList(event) {
    event.preventDefault();

    // //Create object to be inserted into links state.
    var obj = {
      orderNumber: orderNumber,
      title: "",
      url: "",
    };

    links.push(obj);

    setOrderNumber(orderNumber + 1)
  };

  function handleRemove(orderNumber) {
    console.log(orderNumber);
    setLinks((links) => {
      return links.filter( (i) => i.orderNumber !== orderNumber)
    });
  }

  function handleEditLinkTitleChange(title, orderNumber) {
    console.log(title)
    setLinks((links) => {
        return links.map( (i) => i.orderNumber === orderNumber ? { ...i, title} : i)
    });
  }

  function handleEditLinkUrlChange(url, orderNumber) {
    setLinks((links) => {
        return links.map( (i) => i.orderNumber === orderNumber ? { ...i, url} : i)
    });
  }

  function handleSubmit(event) {
    //Add post here
    event.preventDefault();

    const form = event.currentTarget;
    if(form.checkValidity() === true) {
      console.log("valid")
      fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        linkUrl: profileUrl,
        title: mainTitle,
        links: links,
      }),
      }).then((response) => {
        if (response.ok) {
          setRedirect("/")
          console.log(redirect)
        } else {
          throw new Error("Something went wrong ...");
        }
      });
    } 
    if(form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 
    setValidated(true);
  };

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div className="container">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="formBody"
        controlId="form1"
      >
        <Form.Group controlId="formBasicTitle1">
          <Form.Row>
            <Form.Label column sm="0">
              Title
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter Title Here"
                value={mainTitle}
                onChange={(event) =>
                  setmainTitle(event.target.value)
                }
                required
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="formUserUrl1">
          <Form.Row>
            <Col>
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>localhost:8080/</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Enter Name Here"
                  required
                  value={profileUrl}
                  onChange={(event) =>
                    setprofileUrl(event.target.value)
                  }
                />
              </InputGroup>
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="formBasicLink1">
          <Form.Row>
            <Col>
              <Button onClick={addLinkToList} variant="primary">
                Add URL
              </Button>
            </Col>
          </Form.Row>
        </Form.Group>
        <EditLinkList 
          links={links} 
          handleEditLinkTitleChange={handleEditLinkTitleChange}
          handleEditLinkUrlChange={handleEditLinkUrlChange}
          handleRemove={handleRemove}/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LinkForm;
