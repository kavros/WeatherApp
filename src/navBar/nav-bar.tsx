import { Component } from 'react';
import "reflect-metadata";
import { Link, Outlet } from 'react-router-dom';

class NavBar extends Component {
  render() {
     return <div className="Nav" >
      <div>
        <nav
          style={{ borderBottom: "solid 1px", paddingBottom: "1rem"}}>
          <Link to="/list">List</Link> |{" "}
          <Link to="/grid">Grid</Link> |{" "}
          <Link to="/example">Hooks</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  }
}

export default NavBar;
