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
    <>
    <tr>
      <th scope="row">{props.id}</th>
      <td><img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            props.id +
            ".png"
          }
          alt="employee profile"
          style={styles.employeePic}
        ></img>
        </td>
        <td>{props.firstName} {props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        </tr>
        </>
  );
};

export default Item;
