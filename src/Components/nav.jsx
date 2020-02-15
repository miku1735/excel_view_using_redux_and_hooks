import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <a
          class="flex-sm-fill text-sm-center nav-link disabled"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        ></a>
        <div>
          <h1>Hospital Patient Details </h1>
        </div>
        <Link class="flex-sm-fill text-sm-center nav-link" to="/details">
          <h5>Details</h5>
        </Link>
        <Link class="flex-sm-fill text-sm-center nav-link" to="/internal">
          <h5>Internal</h5>
        </Link>
      </nav>
    );
  }
}

export default Nav;
