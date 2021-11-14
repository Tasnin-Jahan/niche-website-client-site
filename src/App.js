import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import MoreProducts from './Pages/MoreProducts/MoreProducts';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/moreProducts">
              <MoreProducts />
            </Route>
            <PrivateRoute path="/productDetail/:id">
              <ProductDetail />
            </PrivateRoute>
            <Route path="/dashBoard">
              <DashBoard />
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
