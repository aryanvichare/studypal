import logo from "./logo.svg";
import "./App.css";

import * as React from "react";
import { FileUploader } from "baseui/file-uploader";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/SignUp";
import HomeScreen from "./screens/Home";

const Uploader = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  return <FileUploader errorMessage={errorMessage} />;
};

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeScreen}></Route>
        <Route exact path='/login' component={LoginScreen}></Route>
        <Route exact path='/register' component={SignUpScreen}></Route>
      </Switch>
    </Router>
  );
}

export default App;
