import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


/** Form for signing up.
 *
 * Props:
 * - handleSignup: function to call in parent.
 *
 * App -> RoutesList -> SignupForm
 */

function SignupForm({ handleSignup }) {
  const initialFormData = { username: "",
                            password: "",
                            firstName: "",
                            lastName: "",
                            email: ""};
  const [signupData, setSignupData] = useState(initialFormData);

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSignup(signupData);
    setSignupData(initialFormData);
  }

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setSignupData(sData => ({
      ...sData,
      [name]: value,
    }));
   }

  return (
    <div className="SignupPage">
      <h1>Log In</h1>
      <Form className="SignupForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={signupData.username} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={signupData.password} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
              type="text"
              id="first-name"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={signupData.firstName} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
              type="text"
              id="last-name"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={signupData.lastName} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={signupData.email} />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
  </div>
  )
}

export default SignupForm;