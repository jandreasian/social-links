import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import { FaTimesCircle, FaAngleDown, FaAngleUp } from "react-icons/fa";

import "./style.css";

const EditLinkItem = (props) => {

  function handleEditLinkTitleChange(event) {
    props.handleEditLinkTitleChange(event.target.value, props.orderNumber);
  }

  function handleEditLinkUrlChange(event) {
    props.handleEditLinkUrlChange(event.target.value, props.orderNumber);
  }

  function handleRemove() {
    props.handleRemove(props.orderNumber);
  }

  return (
    <div>
    <Form>
      <Form.Group controlId="formBasicTitle2">
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
                value={props.title}
                onChange={handleEditLinkTitleChange}
              />
            </InputGroup>
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>URL</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Enter URL here"
                required
                value={props.url}
                onChange={handleEditLinkUrlChange}
              />
            </InputGroup>
          </Col>
          <Col sm={1}>
            <FaTimesCircle
              className="removeIcon"
              cursor="pointer"
              onClick={handleRemove}
            />
          </Col>
        </Form.Row>
      </Form.Group>
    </Form>
    </div>
  )
}

export default EditLinkItem;
