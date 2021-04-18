import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddService from './Components/AddService/AddService';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import HandleCheckout from './Components/HandleCheckout/HandleCheckout';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import OrderList from './Components/Dashboard/OrderList/OrderList';
import AllOrders from './Components/Dashboard/AllOrders/AllOrders';
import ManageServices from './Components/Dashboard/ManageServices/ManageServices';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] =useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser ]}>
    <Router>
     <Switch>
     <Route path="/home">
       <Home></Home>
      </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
      </PrivateRoute>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/allOrders">
        <AllOrders></AllOrders>
      </Route>
      <Route path="/addAdmin">
        <MakeAdmin></MakeAdmin>
      </Route>
      <Route path="/addReview">
        <AddReview></AddReview>
      </Route>
      <Route path="/manageServices">
        <ManageServices></ManageServices>
      </Route>
      <PrivateRoute path="/service/:serviceId">
        <HandleCheckout></HandleCheckout>
      </PrivateRoute>
      <Route path="/addService">
        <AddService></AddService>
      </Route>
      <Route path="/orderList">
        <OrderList></OrderList>
      </Route>
     <Route exact path="/">
       <Home></Home>
        </Route>
     </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
