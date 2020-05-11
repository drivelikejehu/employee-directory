import React, { Component } from "react";
import List from "../components/EmployeeDirectory/List";
import axios from "axios";

class EmployeeDirectory extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
      this.getEmployees()
  }

  getEmployees = () => {
    axios
    .get("https://my.api.mockaroo.com/employee_directory.json?key=25bbe930")
    .then((res) => {
        console.log(res.data)
      this.setState({
        employees: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <h1>Check the directory</h1>
        <div className="container">
          <div className="row">
            Search Bar
          </div>
          </div>
        <List employees={this.state.employees} />
      </div>
    );
  }
}

export default EmployeeDirectory;
