// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEmployee from "./components/CreateEmployee";
import ListEmployee from "./components/ListEmployee";
import ViewEmployee from "./components/ViewEmployee";
// import UpdateEmployee from "./components/UpdateEmployee";
import "./App.css";
import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
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
}

export default App;
