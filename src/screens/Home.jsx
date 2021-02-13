import * as React from "react";
import { FileUploader } from "baseui/file-uploader";

import { useDispatch } from "react-redux";
import { upload } from "../redux/actions/userActions";

const Uploader = () => {
  const dispatch = useDispatch();

  const uploadFile = (file) => {
    console.log(file)
    dispatch(upload(file[0]));
  }

  const [errorMessage, setErrorMessage] = React.useState("");
  return <FileUploader errorMessage={errorMessage} onDropAccepted={uploadFile}/>;
}

const HomeScreen = () => {
  return (<div>Welcome to StudyPal <Uploader/></div>);
};

export default HomeScreen;
