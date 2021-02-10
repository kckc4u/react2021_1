import React from "react";

import { Card } from '../card/card.jsx';
import "./card-list.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster, i) => (
        <Card key={i} monster={monster} />
    ))}
  </div>
);
