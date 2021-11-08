import React from "react";
// import BasicTable from "./components_table/BasicTable";
// import SortingTable from "./components_table/SortingTable";
// import FilteringTable from "./components_table/FilteringTable";
// import PaginationTable from "./components_table/PaginationTable";
// import lodash from "./lodash";

// const App = () => {
//   return (
//     <div>
//       <PaginationTable />
//     </div>
//   );
// };

// export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
import ListEmployee from "./components/ListEmployee";
import ViewEmployee from "./components/ViewEmployee";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployee} />
            <Route path="/employees" exact component={ListEmployee} />
            <Route path="/add-employee/:id" exact component={CreateEmployee} />
            <Route path="/view-employee/:id" exact component={ViewEmployee} />
            {/* <Route
              path="/update-employee/:id"
              exact
              component={UpdateEmployee}
            /> */}
          </Switch>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
