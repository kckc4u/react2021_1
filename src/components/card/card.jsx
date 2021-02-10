import React from "react";

import "./card.css";

export const Card = ({ monster }) => (
  <div className="card-container">
    <img alt="Monster" src={`https://robohash.org/${monster.id}?set=set1&size=180x180`}/>
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);
