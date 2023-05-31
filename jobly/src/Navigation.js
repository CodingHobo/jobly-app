import { NavLink } from "react-router-dom";
import "./Navigation.css"

/** Navigation bar with links for Jobly */
// TODO: Parent -> etc

function Navigation() {
  return (
    <nav className="NavBar">
      <NavLink to="/" end>
        Jobly
      </NavLink>
      <NavLink to="/companies" end>
        Companies
      </NavLink>
      <NavLink to="/jobs" end>
        Jobs
      </NavLink>
    </nav>
  );
}

export default Navigation;