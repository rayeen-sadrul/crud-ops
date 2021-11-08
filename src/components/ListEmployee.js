import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";

const ListEmployee = (props) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees([...res.data]);
    });
  }, []);
  // console.log(employees[0]);

  const addEmployee = () => {
    props.history.push("/add-employee/_add");
  };

  const editEmployee = (id) => {
    props.history.push(`/add-employee/${id}`);
  };

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then((res) => {
      setEmployees(employees.filter((employee) => employee.id !== id));
    });
    alert(`${id} number Id is deleting....`);
  };

  const viewEmployee = (id) => {
    props.history.push(`/view-employee/${id}`);
  };

  return (
    <div>
      <h2 className="text-center">Employee List</h2>
      <div>
        <button type="button" className="btn btn-primary" onClick={addEmployee}>
          Add Employee
        </button>
      </div>
      <br />
      {employees.length > 0 ? (
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>{employee.date}</td>
                  <td>
                    <button
                      onClick={() => editEmployee(employee.id)}
                      className="btn btn-info">
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => deleteEmployee(employee.id)}
                      className="btn btn-danger">
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => viewEmployee(employee.id)}
                      className="btn btn-info">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ListEmployee;

// import React, { Component } from "react";
// import EmployeeService from "../services/EmployeeService";

// class ListEmployee extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employees: [],
//       currentPage: 1,
//       postsPerPage: 5,
//     };

//     this.addEmployee = this.addEmployee.bind(this);
//     this.editEmployee = this.editEmployee.bind(this);
//     this.deleteEmployee = this.deleteEmployee.bind(this);
//     this.viewEmployee = this.viewEmployee.bind(this);
//   }

//   componentDidMount() {
//     EmployeeService.getEmployees().then((res) => {
//       this.setState({ employees: res.data });
//     });
//   }

//   deleteEmployee(id) {
//     EmployeeService.deleteEmployee(id).then((res) => {
//       this.setState({
//         employees: this.state.employees.filter(
//           (employee) => employee.id !== id
//         ),
//       });
//     });
//     alert(`${id} number Id is deleting!!!!`);
//   }

//   viewEmployee(id) {
//     this.props.history.push(`/view-employee/${id}`);
//   }

//   editEmployee(id) {
//     this.props.history.push(`/add-employee/${id}`);
//   }

//   addEmployee() {
//     this.props.history.push("/add-employee/_add");
//   }

//   render() {
//     return (
//       <div>
//         <h2 className="text-center">Employee List</h2>
//         <div>
//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={this.addEmployee}>
//             Add Employee
//           </button>
//         </div>
//         <br />
//         <div className="row">
//           <table className="table table-striped table-bordered">
//             {this.state.employees.length > 0 ? (
//               <thead>
//                 <tr>
//                   <th>Employee First Name</th>
//                   <th>Employee Last Name</th>
//                   <th>Employee Email Id</th>
//                   <th>Date</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//             ) : (
//               ""
//             )}
//             <tbody>
//               {this.state.employees.map((employee) => (
//                 <tr key={employee.id}>
//                   <td>{employee.firstName}</td>
//                   <td>{employee.lastName}</td>
//                   <td>{employee.emailId}</td>
//                   <td>{employee.date}</td>
//                   <td>
//                     <button
//                       onClick={() => this.editEmployee(employee.id)}
//                       className="btn btn-info">
//                       Update
//                     </button>
//                     <button
//                       style={{ marginLeft: "10px" }}
//                       onClick={() => this.deleteEmployee(employee.id)}
//                       className="btn btn-danger">
//                       Delete
//                     </button>
//                     <button
//                       style={{ marginLeft: "10px" }}
//                       onClick={() => this.viewEmployee(employee.id)}
//                       className="btn btn-info">
//                       View
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }

// export default ListEmployee;
