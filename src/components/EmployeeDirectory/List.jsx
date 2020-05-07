import React from "react";
import Item from "./Item";

const List = (props) => {
    console.log(props)
  return (
    <div className="container">
      <div className="row">
        <h1>You have {props.employees.length} employees</h1>
      </div>
      <div className="row">
        <div className="col">
          <ol>
            {props.employees.map((employee) => (
              <Item firstName={employee.firstName}
              lastName={employee.lastName}/>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default List;
