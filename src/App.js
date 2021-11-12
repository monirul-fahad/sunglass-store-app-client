import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Explore from "./Pages/Explore/Explore/Explore";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Products from "./Pages/Home/Products/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
// import AddProduct from "./Pages/AddProduct/AddProduct";
import PrivateRoute from "./Pages/Login/Login/PrivateRoute/PrivateRoute";
import Sidebar from "./Pages/Sidebar/Sidebar";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import ManageProduct from "./Pages/Dashboard/ManageProduct/ManageProduct";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Reviews from "./Pages/Dashboard/Reviews/Reviews";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/addProduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/manageProduct">
              <ManageProduct></ManageProduct>
            </Route>
            <Route path="/manageOrder">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/payment">
              <Payment></Payment>
            </Route>
            <Route path="/review">
              <Reviews></Reviews>
            </Route>
            <PrivateRoute path="/productDetails/:productId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/dashboard">
              <Sidebar></Sidebar>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
