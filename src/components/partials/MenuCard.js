import React from "react";
import { Link } from "react-router-dom";

const MenuCard = ({ heading, icon, sourceURL }) => {
  return (
    <Link to={`list/${sourceURL}`} className="menu-card__link">
      <div className="menu-card__heading-icon-wrapper">
        <h3 className="menu-card__heading">{heading}</h3>
        <img className="menu-card__icon" src={icon} alt={heading} />
      </div>
    </Link>
  );
};

export default MenuCard;
