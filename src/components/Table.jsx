import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const Table = ({ list, insertTicketData, ticket }) => {
  return (
    <ButtonGroup justified>
      {list !== undefined &&
        list.map((item) => (
          <Button
            id={item.id}
            variant="outline-success"
            size="lg"
            style={{ color: "white", border: "1px solid white" }}
            onClick={() => {
              insertTicketData(item.id);
            }}
            className={`${
              ticket.length && ticket.some((x) => x === item.id) ? "active" : ""
            }`}
          >
            <>
              <span style={{ display: "inline-block" }}>Type: {item.type}</span>
              <span style={{ display: "inline-block" }}>
                Odds: {item.value}
              </span>
            </>
          </Button>
        ))}
    </ButtonGroup>
  );
};

export default Table;
