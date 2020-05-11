import React from "react";

const Item = (props) => {
  return (
    <div className="row">
      <div className="col">{props.id}</div>
      <div className="col">
        {props.firstName} {props.lastName}
      </div>
      <div className="col">{props.email}</div>
      <div className="col">{props.timeZone}</div>
    </div>
  );
};

export default Item;
