import logo from "./logo.svg";
import "./App.css";

import React, { useEffect } from "react";
import { FileUploader } from "baseui/file-uploader";

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase/firebase.config";
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

        const { displayName, email } = user;
        const userPayload = { displayName, email };

        dispatch({ type: USER_AUTH_REHYDRATE, payload: userPayload });
      }
    });
    return () => unregisterAuthObserver();
  }, [dispatch]);

  return (
    <Router>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
            <Switch>
              <Route exact path='/' component={LoginScreen}></Route>
              <Route exact path='/register' component={SignUpScreen}></Route>
              <Route exact path='/home' component={HomeScreen}></Route>
            </Switch>
        </BaseProvider>
      </StyletronProvider>
    </Router>
  );
}

export default App;
