import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

const PersonList = ({ allPeople }) => {
  return (
    <Col>
      <h4>All people</h4>
      <ul>
        {allPeople.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </Col>
  );
};

export default PersonList;
PersonList.propTypes = {
  allPeople: PropTypes.array,
};
