import React, { Component } from "react";
import List from "../components/EmployeeDirectory/List";

class EmployeeDirectory extends Component {
  state = {
    employees: [
      {
        id: 1,
        firstName: "Desiree",
        lastName: "Emanuelli",
        gender: "Female",
      },
      {
        id: 2,
        firstName: "Halley",
        lastName: "Risson",
        gender: "Female",
      },
      {
        id: 3,
        firstName: "Barrie",
        lastName: "Kytley",
        gender: "Female",
      },
    ],
  };

  render() {
    return (
      <div>
        <h1>Check the directory</h1>
        <List employees={this.state.employees} />
      </div>
    );
  }
}

export default EmployeeDirectory;
