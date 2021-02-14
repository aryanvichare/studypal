import React, { useState } from "react";
import { FileUploader } from "baseui/file-uploader";
import { ListItem, ListItemLabel } from "baseui/list";
import { useStyletron } from "baseui";

import { useDispatch, useSelector } from "react-redux";
import { upload } from "../redux/actions/userActions";
import { requestNLP, processNLP } from "../redux/actions/fileActions";

export const Uploader = () => {
  const [trigger, setTrigger] = useState(false);
  const dispatch = useDispatch();

  const uploadFile = (file) => {
    console.log(file);
    dispatch(upload(file[0]));
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

const FileListItem = (props) => {
  const [nlp, setNlp] = useState(null);
  const [showNlp, setShowNlp] = useState(null);

  const { arg, idx } = props;
  if (!arg) {
    return null;
  }
  const { fileName, downloadUrl, timestamp, uploadTime } = arg;

  const makeRequest = (fileName, idx) => {
    processNLP(fileName)
      .then(({ transcription, keyWords }) => {
        setNlp(keyWords);
      });
  }

  return (
    <div key={`${timestamp || uploadTime}-${fileName}`} className='my-4'>
      <ListItem>
        <img
          className='w-12 object-cover mr-4'
          src={downloadUrl}
          alt=''
        />
        <a href={downloadUrl}>
          <ListItemLabel>{`${new Date(timestamp || uploadTime)} - ${fileName}`}</ListItemLabel>
        </a>
        {nlp ? <>
          <div style={{ display: showNlp ? 'block' : 'none', position: 'absolute', zIndex: 1, 'background': 'white'}}>
            {nlp.map((keyWord, idx) => <p key={keyWord.name}>{`${idx}. ${keyWord.name}`}</p>)}
          </div>
          <button onClick={() => setShowNlp(!showNlp)}>Toggle</button></> :
          <button onClick={() => makeRequest(`${timestamp || uploadTime}-${fileName}`, idx)}>Request NLP</button>}
      </ListItem>
    </div>
  );
}

export const FileList = () => {
  const [css] = useStyletron();
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
        ? files.map((arg, idx) => <FileListItem  key={`${idx}-${arg.timestamp}-${arg.fileName}`} {...{ arg, idx }} />) : null}
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
