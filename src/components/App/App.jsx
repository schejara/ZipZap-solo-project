import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import About from '../About/About';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import UserPage from '../UserPage/UserPage';
import CategoryItem from '../CategoryItem/CategoryItem';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Admin from '../Admin/Admin';
import OrderConfirmation from '../Order_confirmation/Order_Confirmation';
import CheckOut from '../CheckOut/CheckOut';
import OrderHistory from '../Order_history/Order_history';
import ProductListing from '../ProductListing/ProductListing';
import ViewBag from '../ViewBag/ViewBag';
import ProductDetail from '../ProductDetail/ProductDetail';
import Category from '../category/category';
import CustomerInfoForm from '../CustomerInfo/CustomerInfo';

import './App.css';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
           <Redirect exact from="/" to="/home" />
         
          {/* Visiting localhost:5173/about will show the about page. */}
          

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Admin"
          >
            <Admin />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/About"
          >
            <About />
          </ProtectedRoute>
          
          
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Category"
          >
            <Category />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/CategoryItem/:id"
          >
            <CategoryItem/>
          </ProtectedRoute>      
          
          
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/OrderConfirmation"
          >
            <OrderConfirmation/>
          </ProtectedRoute>
          
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/OrderHistory"
          >
            <OrderHistory />
          </ProtectedRoute>
         
         
         
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/ViewBag"
          >
            < ViewBag/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/CheckOut"
          >
            < CheckOut/>
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/CustomerInfo"
          >
            < CustomerInfoForm/>
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/ProductListing"
          >
            < ProductListing/>
          </ProtectedRoute> 
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/ProductDetail/:id"
          >
            <ProductDetail/>
          </ProtectedRoute>      
          
          




          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>

          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
