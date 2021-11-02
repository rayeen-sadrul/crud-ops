import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <p className="navbar-brand">Employee Management</p>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
