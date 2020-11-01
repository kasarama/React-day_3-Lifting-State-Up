/*
Der laves addPerson metoden i parent component som er en property af Child component: Se linje 47 i denne fil
I denne metode opdateres der personList med dens sætter
Child component udfører metoden og dens result er tingengælig i parent component:
Se her: https://github.com/kasarama/React-day_3-Lifting-State-Up/blob/3c93e52fe506225216d0e395e3c8abbc6dc6568d/src/NewPerson.js#L13
personList er en properyt af en enden child component: Se linje 46 i denne fil
*/

import "./App.css";
import React, { useState } from "react";
import PersonList from "./PersonList";
import NewPerson from "./NewPerson";
import { v4 as uuid } from "uuid";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  const initialData = [
    { id: uuid(), name: "Johan Koll" },
    { id: uuid(), name: "Mani Beck" },
    { id: uuid(), name: "Dora Explora" },
    { id: uuid(), name: "Jan Poul" },
  ];

  const [personList, setPersonList] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", name: "" });
  console.log(personList);

  const addPerson = (person) => {
    if (person.id === "") {
      person.id = uuid();
      personList.push(person);
    } else {
      let personToEdit = personList.find((p) => p.id === person.id);
      personToEdit.name = person.name;
    }
    setPersonList([...personList]);
    setNewPerson({ id: "", name: "" });
  };


  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col />
            <PersonList allPeople={personList} />
            <NewPerson nextPerson={newPerson} addPerson={addPerson} />
            <Col />
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
