import React from "react";
import Locations, { LocationsHeading } from "./Locations";
import Elements, { ElementsHeading } from "./Elements";
import Resistances, { ResistancesHeading } from "./Resistances";
import Weaknesses, { WeaknessesHeading } from "./Weaknesses";
import TableList from "../tables/TableList";

const Monster = ({ monster }) => {
  console.log(monster);
  if (monster) {
    return (
      <div>
        <h1>{monster.name}</h1>
        <div>
          <TableList
            headings={["Description"]}
            children={[<p>{monster.description}</p>]}
          />
          <TableList
            headings={["Type", "Species"]}
            children={[monster.type, monster.species]}
          />
          <TableList
            headings={[ElementsHeading, ResistancesHeading, LocationsHeading]}
            children={[
              <Elements elements={monster.elements} />,
              <Resistances resistances={monster.resistances} />,
              <Locations locations={monster.locations} />
            ]}
          />
          <TableList
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
