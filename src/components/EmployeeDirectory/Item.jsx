import React from "react";

const Item = (props) => {
  const styles = {
    employeePic: {
      maxHeight: 60,
      maxWidth: 60,
      marginBottom: 5,
    },
  };
  return (
    <div className="row">
      <div className="col">
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            props.id +
            ".png"
          }
          alt="employee photo"
          style={styles.employeePic}
        ></img>
      </div>
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
