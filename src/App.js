import "./App.css";

import React, { useEffect } from "react";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth, firestore } from "./firebase/firebase.config";
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/SignUp";
import HomeScreen from "./screens/Home";
import {
  USER_AUTH_REHYDRATE,
  USER_AUTH_REQUEST,
} from "./redux/constants/userConstants";

const engine = new Styletron();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch({ type: USER_AUTH_REQUEST });

        const userPayload = await firestore.collection("users").doc(user.email).get()

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
            <Route exact path='/' component={HomeScreen}></Route>
            <Route exact path='/login' component={LoginScreen}></Route>
            <Route exact path='/register' component={SignUpScreen}></Route>
          </Switch>
        </BaseProvider>
      </StyletronProvider>
    </Router>
  );
}

export default App;
