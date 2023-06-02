import { useContext } from "react";
import userContext from "./userContext";

/** Homepage for Jobly
 *
 * context:
 * - currUser: current user data
 *
 * App -> RoutesList -> Homepage
 *
 */

function Homepage() {
  const { currUser } = useContext(userContext);

  return (
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {currUser &&
      <h3>Welcome back, {currUser.username}</h3>}
      {!currUser &&
      <p>
        <a className="btn btn-primary fw-bold me-3" href="/login">
          Log in
        </a>
        <a className="btn btn-primary fw-bold" href="/signup">
          Sign up
          </a>
      </p>}
    </div>
    )
  }

  export default Homepage;