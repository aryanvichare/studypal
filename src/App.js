import logo from "./logo.svg";
import "./App.css";


import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/SignUp";
import HomeScreen from "./screens/Home";

const engine = new Styletron();


function App() {
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
