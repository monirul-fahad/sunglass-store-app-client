import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "../../Sidebar/Sidebar";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="row">
      <Sidebar></Sidebar>
      <div
        className="pt-4 col-md-10 add-product"
        style={{ position: "absolute", right: "0", background: "white" }}
      >
        <h2>This is Manage all order page</h2>
        <Table striped bordered hover className="p-3 shadow">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Status</th>
            </tr>
          </thead>

          {orders.map((order) => (
            <tbody key={order._id}>
              <tr>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.item.name}</td>
                <td></td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
