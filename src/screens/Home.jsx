import * as React from "react";
import { FileUploader } from "baseui/file-uploader";
import { ListItem, ListItemLabel } from 'baseui/list';
import { useStyletron } from 'baseui';

import { useDispatch, useSelector } from "react-redux";
import { upload } from "../redux/actions/userActions";

const Uploader = () => {
  const dispatch = useDispatch();

  const uploadFile = (file) => {
    console.log(file)
    dispatch(upload(file[0]));
  }

  const [errorMessage, setErrorMessage] = React.useState("");
  return <FileUploader errorMessage={errorMessage} onDropAccepted={uploadFile} />;
}

const FileList = () => {
  const [css] = useStyletron();
  const { userInfo } = useSelector(state => state.user)

  if (!userInfo) {
    return null;
  }

  const { files } = userInfo;
  return (
    <ul
      className={css({
        width: '375px',
        paddingLeft: 0,
        paddingRight: 0,
      })}
    >
      {files.map(file => <ListItem>
        <a href={file}><ListItemLabel>{file}</ListItemLabel></a>
      </ListItem>)}
    </ul>
  );
}

const HomeScreen = () => {
  return (<div>
    <div>Welcome to StudyPal</div>
    <Uploader />
    <FileList />
  </div>);
};

export default HomeScreen;
