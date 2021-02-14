import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase/firebase.config";
import Loader from "react-loader-spinner";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GuideScreen = ({ history }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [guideData, setGuideData] = useState({});
  const [files, setFiles] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchGuideData = async (objID) => {
      try {
        setLoading(true);
        const documentRef = firestore.collection("guides").doc(objID);
        const doc = await documentRef.get();

        setGuideData(doc.data());
        setFiles(doc.data().files);
        setQuiz(doc.data().quiz);

        const videoData = await axios.get(
          "https://api.serpwow.com/live/search?api_key=E2BE20B629594319850FFFC0FE222AC2&q=atoms&search_type=videos"
        );

        const videoResults = videoData.data;

        setVideos(videoResults.video_results.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchGuideData(id);
  }, []);

  function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }

  const notify = () => toast.success("Link Copied to Clipboard!");

  return (
    <div>
      <ToastContainer />
      <div className='my-6 lg:my-8 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between'>
        <div>
          <p className='flex items-center text-indigo-700 text-xs'>
            <span>Dashboard</span>
            <span className='mx-2'>&gt;</span>
            <span>Create</span>
            <span className='mx-2'>&gt;</span>
            <span>Guide</span>
          </p>
          <h4 className='text-2xl font-bold leading-tight text-gray-800'>
            {guideData.name}
          </h4>
          <p>
            Authored by <span className='italic'>{guideData.author}</span>
          </p>
        </div>
        <div className='mt-6 lg:mt-0'>
          <button className='transition duration-150 ease-in-out hover:bg-yellow-600 focus:outline-none border bg-yellow-500 rounded text-white px-8 py-2 text-sm mr-2'>
            Download Study Guide
          </button>
          <CopyToClipboard text={window.location.href}>
            <button
              onClick={notify}
              className='transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none border bg-indigo-500 rounded text-white px-8 py-2 text-sm'>
              Share Link
            </button>
          </CopyToClipboard>
          <button
            onClick={() => history.goBack()}
            className='transition duration-150 ease-in-out rounded text-indigo-600 px-8 py-2 text-sm'>
            Back Home
          </button>
        </div>
      </div>
      {loading ? (
        <div className='w-full flex flex-row justify-center items-center pt-48'>
          <Loader
            type='BallTriangle'
            color='#4e46e5'
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div>
          <div className='w-full pt-12 bg-gray-50'>
            <div className='container mx-auto px-6 pb-10'>
              <div className='w-full h-full rounded flex flex-row flex-wrap'>
                <div className='block w-full lg:w-1/2'>
                  <div className='mb-8'>
                    <h1 class='text-gray-800 text-3xl'>Raw Files</h1>
                    <div class='flex flex-row mt-4 space-x-3'>
                      {files.map((file) => (
                        <img
                          class='w-28'
                          key={file.uploadTime}
                          src={file.downloadUrl}
                        />
                      ))}
                    </div>
                  </div>
                  <div className='mb-8'>
                    <h1 class='text-gray-800 text-3xl'>Raw Text Transcript</h1>
                    <div class='flex flex-row mt-4 space-x-3'>
                      {guideData.textTranscript}
                    </div>
                  </div>
                </div>
                <div className='block w-full lg:w-1/2'>
                  <div className='mb-8'>
                    <h1 class='text-gray-800 text-3xl'>Text Summary</h1>
                    <div class='flex flex-row mt-4 space-x-3'>
                      {guideData.summary}
                    </div>
                  </div>
                  <div className='mb-8'>
                    <h1 class='text-gray-800 text-3xl'>AI Generated Quiz</h1>
                    <div class='flex flex-col mt-4 space-y-3'>
                      {quiz.map((quizItem) => (
                        <div className='bg-white w-full py-4 px-2 rounded shadow-sm'>
                          <h2 class='font-semibold mb-2'>
                            {quizItem.question}
                          </h2>
                          <p>{quizItem.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-mask w-full'>
            <div className='container mx-auto px-6 py-16'>
              <h1 class='text-white font-bold text-3xl'>Generated Resources</h1>
              <div className='flex flex-row justify-between flex-wrap mt-12'>
                {videos.map((video) => {
                  const link = video.link;
                  const id = getId(link);
                  return (
                    <iframe
                      width='420'
                      height='315'
                      src={`https://www.youtube.com/embed/${id}`}></iframe>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuideScreen;
