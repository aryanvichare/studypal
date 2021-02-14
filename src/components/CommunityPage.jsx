import React from "react";
import DashboardNavigation from "./DashboardNavigation";
import { useSelector, useDispatch } from "react-redux";
import { loadGuides } from "../redux/actions/guidesActions";

const CommunityPage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadGuides());
  }, []);

  const { guides } = useSelector((state) => state.guides);
  console.log(guides);
  return (
    <div className='w-full'>
      <DashboardNavigation title='Community Study Guides' />
      <div className='px-6 py-6'>
        {(guides && guides.length )? guides.map(({id, author, files, keywords, name, quiz, summary, textTranscript}) => <div key={id}>
          <h1>{name}</h1>
          <p>{author}</p>
          <div>{(quiz && quiz.length) ? quiz.map(({question, answer}, idx) => <p>{`${question} - ${answer}`}</p>) : null}</div>
          <p>{keywords}</p>
          <p>{summary}</p>
          <p>{textTranscript}</p>
        </div>) : null}
      </div>
    </div>
  );
};

export default CommunityPage;
