import { NavLink } from "react-router-dom";
import "./Navigation.css"

/** Navigation bar with links for Jobly
 *
 * App -> Navigation
 *
 */

function Navigation({ currUser }) {
  return (
    <nav className="NavBar">
      <NavLink to="/" end>
        Jobly
      </NavLink>
      {!currUser &&
        <div className="no-curr-user">
          <NavLink to="/login" end>
          Login
          </NavLink>
          <NavLink to="/signup" end>
            Sign Up
          </NavLink>
        </div>
      }
      {currUser &&
        <div className="yes-curr-user">
          <NavLink to="/companies" end>
            Companies
          </NavLink>
          <NavLink to="/jobs" end>
            Jobs
          </NavLink>
          <NavLink to="/profile" end>
            Profile
          </NavLink>
          {/* enter useNavigate/Navigate to redirect home and setCurrUser to null */}
        </div>
      }
    </nav>
  );
}

export default Navigation;