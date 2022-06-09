import React from "react";
import { Link } from "react-router-dom";

const Card = (prop) => {

  const model= prop.value;
  return (
    <>
      <div className="col-md-2">
        <div className="card">
            <Link to={prop.link}>
          <div className="card-body">
            <img src={prop.value.image} />

            {
              model.name?
              <p>{model.name}</p>
             :null
            }
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Card;
