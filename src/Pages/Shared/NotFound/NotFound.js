import React from "react";
import sleeping from "../../../images/sleepy-cat-mechanic.jpg";

const NotFound = () => {
  return (
    <div>
      <h4 className="text-center text-danger">Mechanic is sleeping</h4>
      <img className="w-75 mx-auto" src={sleeping} alt="" />
    </div>
  );
};

export default NotFound;
