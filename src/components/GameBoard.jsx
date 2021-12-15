import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Timer from "./Timer";
import GameInfo from "./GameInfo";
import ModalMessage from "./ModalMessage";
import Balance from "./Balance";
import PlayTicket from "./PlayTicket";
import MatchDetails from "./MatchDetails";
import { API_DATA } from "./../apiCall";

import BetButton from './BetButton'
const GameBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const [messageModal, setMessageModal] = useState("");
  const [modalType, setModalType] = useState("");

  const [data, setData] = useState([]);

  const openModal = (message, type) => {
    setMessageModal(message);
    setModalType(type);
    setShowModal(true);
    setTimeout(() => {
      closeModal();
    }, 3000);
  };
  const closeModal = () => setShowModal(false);

  const fetchData = async () => {
    try {
      const { data: response } = await API_DATA.getCurrentMatch();
      setData(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    // Fetch currentMatch from API
    fetchData();
  }, []);

  return (
    <Container>
      <Row className="teamInfo">
        <Col md={4} style={{ textAlign: "left" }}>
          <Timer
            fetchData={fetchData}
            openModal={openModal}
            payInOperator={data.payInOperator}
          />
        </Col>
        <Col md={4} style={{ fontSize: 35, textAlign: "center" }}>
          {/* TODO: U komponentu GameInfo proslijediti kroz props podatke iz API responsa  data.homeTeamName i  data.awayTeamName*/}
          <GameInfo homeTeam={data.homeTeamName} awayTeam={data.awayTeamName} />
        </Col>
        <Col md={4}>
          <Balance />
        </Col>
      </Row>
      <MatchDetails data={data} />
      <Row style={{ height: 60 }}>
        <Col md={6} sm={12}>
          {/** OVDJE */}
          <BetButton betValue={5} />
          <BetButton betValue={10} />
          <BetButton betValue={15} />
          {showModal && (
            <ModalMessage message={messageModal} type={modalType} />
          )}
        </Col>
        <Col md={6} sm={12}>
          <PlayTicket
            openModal={openModal}
            payInOperator={data.payInOperator}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default GameBoard;
