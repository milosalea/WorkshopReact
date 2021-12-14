import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";

const Balance = () => {
  const balance = useSelector((state) => state.tickets.balance);
  return (
    <InputGroup className="mb-2 balanceWidth" style={{ marginLeft: "auto" }}>
      <InputGroup.Text className="balance">Balance:</InputGroup.Text>
      <FormControl
        id="inlineFormInputGroup"
        placeholder={balance.toFixed(2)}
        readOnly
      />
    </InputGroup>
  );
};

export default Balance;
