import React, { useState } from "react";
import { FileUploader } from "baseui/file-uploader";
import { ListItem, ListItemLabel } from "baseui/list";
import { useStyletron } from "baseui";

import { useDispatch, useSelector } from "react-redux";
import { upload } from "../redux/actions/userActions";
import { requestNLP } from "../redux/actions/fileActions";

export const Uploader = () => {
  const [trigger, setTrigger] = useState(false);
  const dispatch = useDispatch();

  const uploadFile = (file) => {
    console.log(file);
    dispatch(upload(file[0]));
    setTrigger(true);
  };

  const [errorMessage, setErrorMessage] = React.useState("");
  return (
    <div className='mb-8'>
      <FileUploader
        errorMessage={errorMessage}
        onDropAccepted={uploadFile}
        overrides={{
          FileDragAndDrop: {
            style: (props) => ({
              borderColor: props.$isDragActive
                ? props.$theme.colors.positive
                : props.$theme.colors.accent,
            }),
          },
          ContentMessage: {
            style: (props) => ({
              color: props.$theme.colors.accent,
            }),
          },
          ContentSeparator: {
            style: (props) => ({
              color: props.$theme.colors.accent,
            }),
          },
        }}
      />
    </div>
  );
};

export const FileList = () => {
  const [css] = useStyletron();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  if (!userInfo) {
    return null;
  }

  const { files } = userInfo;
  return (
    <ul
      className={css({
        width: "375px",
        paddingLeft: 0,
        paddingRight: 0,
      })}>
      {files
        ? files.map(({ fileName, downloadUrl, uploadTime }) => (
            <div key={`${uploadTime}-${fileName}`} className='my-4'>
              <ListItem>
                <img
                  className='w-12 object-cover mr-4'
                  src={downloadUrl}
                  alt=''
                />
                <a href={downloadUrl}>
                  <ListItemLabel>{`${new Date(uploadTime)} - ${fileName}`}</ListItemLabel>
                </a>
                <button onClick={() => dispatch(requestNLP(`${downloadUrl}`))}>Request NLP</button>
              </ListItem>
            </div>
          ))
        : null}
    </ul>
  );
};

const InsertFiles = () => {
  return (
    <div>
      <Uploader />
      <FileList />
    </div>
  );
};

export default InsertFiles;
