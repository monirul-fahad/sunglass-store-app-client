import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Header from "../../Shared/Header/Header";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loginUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    loginUser(email, password, location, history);

    e.preventDefault();
  };
  return (
    <>
      <Header></Header>
      <div className="text-center container my-5 login">
        {!isLoading && (
          <form onSubmit={handleSignUp}>
            <h3 className="text-primary">Please Login</h3>
            <div className="row mb-3">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  onBlur={handleEmailChange}
                  type="email"
                  className="form-control"
                  id="inputName"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  onBlur={handlePasswordChange}
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2"></div>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <br />
            <Link to="/register">New User? Please Register</Link>
          </form>
        )}
        {isLoading && <Spinner animation="border" variant="danger" />}
        {user?.email && <Alert variant="primary">Login Successful</Alert>}
        {authError && <Alert variant="danger">{authError}</Alert>}
      </div>
    </>
  );
};

export default Login;
