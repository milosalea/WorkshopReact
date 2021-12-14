import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/images/logo3.png";
import { Row, Col } from "react-bootstrap";

const Header = ({ title }) => {
  return (
    <Row className="headerBar">
      <Col>
        {" "}
        <img src={logo} width="100" height="50" alt="alea" />
      </Col>
      <Col style={{ textAlign: "center" }}>
        <h1>{title}</h1>
      </Col>
      <Col></Col>
    </Row>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
