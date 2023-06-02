import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


/** Form for login.
 *
 * Props:
 * - handleLogin: function to call in parent.
 *
 * App -> RoutesList -> LoginForm
 */

function LoginForm({ handleLogin }) {
  const initialFormData = { username: "",
                            password: ""};
  const [loginData, setLoginData] = useState(initialFormData);

  const navigate = useNavigate();

  /** Call parent function and clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await handleLogin(loginData);
    } catch(error) {
      alert(error);
      return
    }
    setLoginData(initialFormData);
    navigate("/");
  }

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setLoginData(lData => ({
      ...lData,
      [name]: value,
    }));
   }

  return (
    <div className="LoginPage">
      <h1>Log In</h1>
      <Form className="LoginForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="loginUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={loginData.username} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={loginData.password} />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>

      </Form>
  </div>
  )
}

export default LoginForm;