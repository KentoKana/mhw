import React from "react";
import { Link } from "react-router-dom";

const _404 = () => {
  return (
    <section className="404">
      <h1>404</h1>
      <Link to="/">Back To Home</Link>
    </section>
  );
};

export default _404;
