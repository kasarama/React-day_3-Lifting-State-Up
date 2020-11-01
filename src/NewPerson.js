import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";

function NewPerson(props) {
  const [person, setPerson] = useState(props.nextPerson);

  const savePerson = (event) => {
    event.preventDefault();

    if (person.name === "") {
      return;
    }
    props.addPerson(person);
  };

  const onChange = (event) => {
    const value = event.target.value;
    person.name = value;
    setPerson({ ...person });
  };

  useEffect(() => setPerson({ ...props.nextPerson }), [props.nextPerson]);
  return (
    <Col>
      <h4>Create new person</h4>
      <form>
        <input value={person.name} onChange={onChange} />
        <button className="primary" onClick={savePerson}>
          Save
        </button>
      </form>
    </Col>
  );
}

export default NewPerson;
