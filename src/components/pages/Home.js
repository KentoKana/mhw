import React from "react";
import MenuCard from "../partials/MenuCard";
import homeMenuItems from "../../data/homeMenuItems";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <h1 className="home__heading">MHW</h1>
        <div className="home__menu-cards">
          {homeMenuItems.map((menuItem, index) => {
            return (
              <MenuCard
                key={index}
                heading={menuItem.label}
                sourceURL={menuItem.sourceURL}
                icon={menuItem.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
