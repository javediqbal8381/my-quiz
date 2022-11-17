import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchQuestion } from '../hooks/fetchQuestions';
import { updateResult } from '../hooks/resultHooks';

function Questions(props) {

const dispatch=useDispatch()
const [checked, setChecked] = useState(undefined);
const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const questions = useSelector((state) => state.questions.queue[state.questions.trace]);
  const {trace} = useSelector(state =>state.questions)
  useEffect(() => {
    dispatch(updateResult({trace,checked}))
  },[checked]);

  function onSelect(i) {
    setChecked(true);
      props.onChecked(i)
      setChecked(i)
  }

  if (isLoading) return <h3>Loading</h3>;
  if (serverError) return <h3>serverError</h3>;

  return (
    <div className="questions">
      <h2>Question : {questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((opt, i) => (
          < div key={i}>
            <li > 
              <input
                type="radio"
                value={false}
                name="options"
                id={`q ${i}-option`}
                onChange={()=> onSelect(i)}
              />
            </li>
            <p>{opt}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
