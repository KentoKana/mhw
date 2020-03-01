import React from "react";
import Locations, { LocationsHeading } from "./Locations";
import Elements, { ElementsHeading } from "./Elements";
import Resistances, { ResistancesHeading } from "./Resistances";
import Weaknesses, { WeaknessesHeading } from "./Weaknesses";

import Table from "./Table";
const Monster = ({ monster }) => {
  console.log(monster);
  if (monster) {
    return (
      <div>
        <h1>{monster.name}</h1>
        <div>
          <h2>Description:</h2>
          <p>{monster.description}</p>
          <h2>Type:</h2>
          <p>{monster.type}</p>
        </div>
        <div>
          <Table
            headings={[ElementsHeading, ResistancesHeading, LocationsHeading]}
            children={[
              <Elements elements={monster.elements} />,
              <Resistances resistances={monster.resistances} />,
              <Locations locations={monster.locations} />
            ]}
          />
          <Table
            headings={[WeaknessesHeading]}
            children={[<Weaknesses weaknesses={monster.weaknesses} />]}
          />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Monster;
