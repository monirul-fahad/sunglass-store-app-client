import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Header from "../../Shared/Header/Header";
import "../Login/Login.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, registerUser, authError, isLoading } = useAuth();

  const history = useHistory();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    registerUser(name, email, password, history);
    e.preventDefault();
  };
  return (
    <>
      <Header></Header>

      <div className="text-center container my-5 login">
        {!isLoading && (
          <form onSubmit={handleLoginSubmit}>
            <h3 className="text-primary">Please Register</h3>
            <div className="row mb-3">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  onBlur={handleNameChange}
                  type="text"
                  className="form-control"
                  id="inputName"
                  required
                />
              </div>
            </div>
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
              Register
            </button>
            <br />
            <Link to="/login">
              Already Registered? <br /> Please Login
            </Link>
          </form>
        )}
        {isLoading && <Spinner animation="border" variant="danger" />}
        {user?.email && (
          <Alert variant="primary">Registration Successful</Alert>
        )}
        {authError && <Alert variant="danger">{authError}</Alert>}
      </div>
    </>
  );
};

export default Register;
