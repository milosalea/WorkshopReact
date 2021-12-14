import React from "react";
import { Row, Col, Modal } from "react-bootstrap";
import Table from "./Table";
import { useSelector, useDispatch } from "react-redux";
import { addTicketItem } from "../store/tickets/tickets-slice";

const MatchDetails = ({ odds }) => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.gameData);
  const addNewTicketItem = (identifier) => {
    dispatch(addTicketItem(identifier));
  };
  return (
    <Row>
      <Col md={6}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Half Time</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table
              // TODO:  potrebno proslijediti prve 3 kvote u komponentu Table kroz props list // kvote se nalaze u listi odds
              insertTicketData={addNewTicketItem}
              ticket={tickets}
            ></Table>
          </Modal.Body>
        </Modal.Dialog>
      </Col>
      <Col md={6}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Full Time</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table
              // TODO:  potrebno proslijediti zadnje 3 kvote u komponentu Table kroz props list // kvote se nalaze u listi odds
              insertTicketData={addNewTicketItem}
              ticket={tickets}
            ></Table>
          </Modal.Body>
        </Modal.Dialog>
      </Col>
    </Row>
  );
};

export default MatchDetails;
