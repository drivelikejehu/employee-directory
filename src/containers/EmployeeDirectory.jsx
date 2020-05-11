import React, { Component } from "react";
import List from "../components/EmployeeDirectory/List";
import axios from "axios";

class EmployeeDirectory extends Component {
  state = {
    employees: [],
    employeesToDisplay: [],
    searchTerm: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  clearFilter = () => {
    this.setState({
      employeesToDisplay: this.state.employees,
      searchTerm: "",
    });
  };

  getEmployees = () => {
    axios
      .get("https://my.api.mockaroo.com/employee_directory.json?key=25bbe930")
      .then((res) => {
        console.log(res.data);
        this.setState({
          employees: res.data,
          employeesToDisplay: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("HandleSubmit");
    console.log(this.state.searchTerm);
    const employees = [...this.state.employees];
    const filteredEmployees = employees.filter((employee) => {
      const regex = new RegExp(this.state.searchTerm, "gi");
      return employee.firstName.match(regex);
    });
    this.setState({
      employeesToDisplay: filteredEmployees,
    });
  };

  render() {
    return (
      <div>
        <h1>Check the directory</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search the employee directory"
                        name="searchTerm"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              {this.state.employees.length !==
                this.state.employeesToDisplay.length && (
                <button className="btn btn-warning" onClick={this.clearFilter}>Clear Search</button>
              )}
            </div>
          </div>
        </div>
        <List employees={this.state.employeesToDisplay} />
      </div>
    );
  }
}

export default EmployeeDirectory;
