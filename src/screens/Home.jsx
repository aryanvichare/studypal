import * as React from "react";
import { FileUploader } from "baseui/file-uploader";
import { StatefulInput } from 'baseui/input';

const Uploader = () => {

  const upload = (e) => {
    console.log(e)
  }

  const [errorMessage, setErrorMessage] = React.useState(
    ""
  );
  return <FileUploader errorMessage={errorMessage} />;
}

const HomeScreen = () => {
  return (<div>Welcome to StudyPal <Uploader/></div>);
};

export default HomeScreen;
