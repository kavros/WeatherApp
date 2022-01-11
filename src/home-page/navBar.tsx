import { Component } from 'react';
import "reflect-metadata";
import { Link, Outlet } from 'react-router-dom';

class NavBar extends Component {
  render() {
     return <div className="Nav" >
      <div>
        <nav
          style={{ borderBottom: "solid 1px", paddingBottom: "1rem"}}>
          <Link to="/home">Home</Link> |{" "}
          <Link to="/grid">Details</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  }
}

export default NavBar;
