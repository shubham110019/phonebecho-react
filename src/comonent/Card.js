import React from "react";
import { Link } from "react-router-dom";

const Card = (prop) => {
  return (
    <>
      <div className="col-md-2">
        <div className="card">
            <Link to={`brand/${prop.value.brand}`}>
          <div className="card-body">
            <img src={prop.value.image} />
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Card;
