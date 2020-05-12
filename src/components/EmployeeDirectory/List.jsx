import React from "react";
import Item from "./Item";

const List = (props) => {
  console.log(props);
  return (
<>
      <h2>There are {props.employees.length} employees</h2>
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Photo</th>
      <th scope="col">Full Name</th>
      <th scope="col">E-mail</th>
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
  <tbody>
    {props.employees.map(employee => (
          <Item key={employee.id} {...employee} />
        ))}
  </tbody>
</table>
</>
  );
};

export default List;
