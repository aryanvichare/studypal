import logo from "./logo.svg";
import "./App.css";

import * as React from "react";
import { FileUploader } from "baseui/file-uploader";

const Uploader = () => {
  const [errorMessage, setErrorMessage] = React.useState(
    ""
  );
  return <FileUploader errorMessage={errorMessage} />;
}

function App() {
  return (
    <div className='App'>
      <h1 className='text-4xl text-blue-500'>hello world</h1>
      <Uploader/>
    </div>
  );
}

export default App;
