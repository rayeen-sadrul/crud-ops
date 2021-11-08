import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";

const CreateEmployee = (props) => {
  const [id] = useState(props.match.params.id);
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    date: "",
  });

  useEffect(() => {
    if (id === "_add") {
      return;
    } else {
      EmployeeService.getEmployeeById(id).then((res) => {
        let employee = res.data;
        setEmployee({
          firstName: employee.firstName,
          lastName: employee.lastName,
          emailId: employee.emailId,
          date: employee.date,
        });
      });
    }
  }, [id]);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmployee((values) => ({ ...values, [name]: value }));
  };

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employees = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      emailId: employee.emailId,
      date: employee.date,
    };
    console.log("employee => " + JSON.stringify(employees));
    if (id === "_add") {
      EmployeeService.createEmployee(employees).then((res) => {
        props.history.push("/employees");
      });
    } else {
      EmployeeService.updateEmployee(employees, id).then((res) => {
        props.history.push("/employees");
      });
    }
  };

  const cancel = () => {
    props.history.push("/employees");
  };

  const getTitle = () => {
    if (id === "_add") {
      return <h3 className="text-center">Add Employee</h3>;
    } else {
      return <h3 className="text-center">Update Employee</h3>;
    }
  };

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={employee.firstName}
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={employee.lastName}
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={employee.emailId}
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="Date"
                    name="date"
                    className="form-control"
                    value={employee.date}
                    onChange={changeHandler}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={saveOrUpdateEmployee}
                  type="submit">
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  type="button"
                  style={{ marginLeft: "10px" }}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
