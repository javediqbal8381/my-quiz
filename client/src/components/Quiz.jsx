import React, { useEffect,useState } from 'react';
import Questions from './Questions';
import { useSelector,useDispatch } from 'react-redux';
import { MoveNextQuestion,MoveBackQuestion } from '../hooks/fetchQuestions';
import{PushAnswer} from '../hooks/resultHooks'
function Quiz() {
  const dispatch=useDispatch()
  const[checked,setChecked]=useState(undefined)
  const  result  = useSelector((state) => state.result.result);
  const queue =useSelector((state) => state.questions.queue)
  const trace =useSelector((state) => state.questions.trace)

  
  useEffect(() => {
    
  }, [dispatch]);

  const onNext = () => {
    if(trace < queue.length+1){
      dispatch(MoveNextQuestion())
      if(result.length <= trace){
        dispatch(PushAnswer(checked))
    console.log( `trace : ${trace}`)
    console.log(`queue.length : ${queue.length}`)
    console.log(`Result : ${result}`)

      }
    }
    setChecked(null)

  };


  const onPrevious = () => {
    if(trace >1){
      dispatch(MoveBackQuestion())

    }
    
  };
  function onChecked(check){
setChecked(check)  }

  return (
    <div>
      <h1 className="quizmainh1">My Quiz APP</h1>

      <Questions onChecked={onChecked} />

      <div className="questions-buttons">
      <button onClick={onPrevious} className="previosquestion">
          Back
        </button>
        <button onClick={onNext} className="next-question">
          Next
        </button>
      
      </div>
    </div>
  );
}

export default Quiz;
