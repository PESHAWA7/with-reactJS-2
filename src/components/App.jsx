import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return(
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );

};
function App() {
  return (
    <div>
      <h1 className="heading">PESHAWA7</h1>
      <img className="circle-img" src={contacts[1].imgURL}></img>

      {contacts.map(createCard)}
    </div>
  );
}

export default App;
