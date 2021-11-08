import { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";

const ViewEmployee = (props) => {
  const [id] = useState(props.match.params.id);
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      setEmployee(res.data);
    });

    return () => {};
  }, [employee, id]);

  const cancel = () => {
    props.history.push("/employees");
  };

  return (
    <div>
      <div className="card col-md-6 offset-md-3 ">
        <h3 className="text-center">View Employee Details </h3>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h6>Employee First Name:</h6>
            </div>
            <div className="col">
              <p>{employee["firstName"]}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6>Employee Last Name:</h6>
            </div>
            <div className="col">
              <p>{employee["lastName"]}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6>Employee Email Id:</h6>
            </div>
            <div className="col">
              <p>{employee["emailId"]}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6>Date:</h6>
            </div>
            <div className="col">
              <p>{employee["date"]}</p>
            </div>
          </div>
          <button
            className="btn btn-info"
            onClick={cancel}
            type="button"
            style={{ marginLeft: "200px", marginTop: "20px" }}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
