import React from "react";
import EditLinkItem from "./EditLinkItem";
import Card from "react-bootstrap/Card";

const EditLinkList = (props) => {

  function handleEditLinkTitleChange(title, orderNumber) {
    props.handleEditLinkTitleChange(title, orderNumber)
  }

  function handleEditLinkUrlChange(url, orderNumber) {
    props.handleEditLinkUrlChange(url, orderNumber)
  }

  function handleRemove(orderNumber) {
    props.handleRemove(orderNumber)
  }

  return (
    <div>
      <Card>
        <Card.Header>Links</Card.Header>
        <Card.Body>
          {props.links.map((link, index) => (
            <EditLinkItem 
            key={link.orderNumber} 
            {...link} 
            handleEditLinkTitleChange={handleEditLinkTitleChange}
            handleEditLinkUrlChange={handleEditLinkUrlChange}
            handleRemove={handleRemove}
            />
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditLinkList;
