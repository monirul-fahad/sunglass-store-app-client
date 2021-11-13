import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./Sidebar.css";

const Sidebar = () => {
  const { logOut, user } = useAuth();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled li-style">
        <Link className="glassy" to="/">
          <h3>Glassy</h3>
        </Link>
        {!admin && (
          <>
            <li>
              <Link to="/myOrders" className="text-white">
                <span>Order List</span>
              </Link>
            </li>
            <li>
              <Link to="/payment" className="text-white">
                <span>Payment</span>
              </Link>
            </li>
            <li>
              <Link to="/review" className="text-white">
                <span>Review</span>
              </Link>
            </li>
          </>
        )}

        {admin && (
          <>
            <li>
              <Link to="/manageOrder" className="text-white">
                <span>Manage Order</span>
              </Link>
            </li>
            <li>
              <Link to="/manageProduct" className="text-white">
                <span>Manage Product</span>
              </Link>
            </li>
            <li>
              <Link to="/addProduct" className="text-white">
                <span>Add Product</span>
              </Link>
            </li>
            <li>
              <Link to="/makeAdmin" className="text-white">
                <span>Make Admin</span>
              </Link>
            </li>
          </>
        )}
      </ul>
      <div>
        <Link to="/login" className="text-white">
          <button onClick={logOut} className="btn btn-warning">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
