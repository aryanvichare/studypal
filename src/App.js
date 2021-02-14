import "./App.css";

import React, { useEffect } from "react";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth, firestore } from "./firebase/firebase.config";
import { useSelector } from "react-redux";
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/SignUp";
import {
  USER_AUTH_REHYDRATE,
  USER_AUTH_REQUEST,
} from "./redux/constants/userConstants";
import LandingScreen from "./screens/Landing";
import DashboardScreen from "./screens/Dashboard";
import ProfileScreen from "./screens/Profile";
import CommunityScreen from "./screens/Community";

const engine = new Styletron();

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch({ type: USER_AUTH_REQUEST });

        const userPayload = await firestore
          .collection("users")
          .doc(user.email)
          .get();

        dispatch({ type: USER_AUTH_REHYDRATE, payload: userPayload.data() });
      }
    });
    return () => unregisterAuthObserver();
  }, [dispatch]);

  return (
    <Router>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Switch>
            <Route exact path='/' component={LandingScreen}></Route>
            <Route exact path='/login' component={LoginScreen}></Route>
            <Route exact path='/register' component={SignUpScreen}></Route>
            <PrivateRoute
              exact
              path='/dashboard'
              component={DashboardScreen}></PrivateRoute>
            <PrivateRoute
              exact
              path='/dashboard/profile'
              component={ProfileScreen}></PrivateRoute>
            <PrivateRoute
              exact
              path='/dashboard/community'
              component={CommunityScreen}></PrivateRoute>
          </Switch>
        </BaseProvider>
      </StyletronProvider>
    </Router>
  );
}

export default App;
