import React from "react";
import Assets from "./Assets";
import Materials from "./Materials";
import TableList from "../tables/TableList";

const Armor = ({ armor }) => {
  console.log(armor);
  if (armor) {
    return (
      <div>
        <h1>{armor.name}</h1>
        {armor.assets ? (
          <>
            <TableList
              headings={["Images"]}
              children={[<Assets assets={armor.assets} />]}
            />
            <TableList
              headings={["Materials Required"]}
              children={[<Materials materials={armor.crafting.materials} />]}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    );
  } else {
    return <></>;
  }
};

export default Armor;
