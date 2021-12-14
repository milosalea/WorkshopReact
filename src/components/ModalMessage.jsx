import React from "react";
import { Alert } from "react-bootstrap";

const ModalMessage = ({ message, type }) => {
  return (
    <Alert variant={type} style={{ textAlign: "left" }}>
      <p>{message}</p>
    </Alert>
  );
};

export default ModalMessage;
