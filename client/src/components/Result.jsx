import React from 'react';
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';
import{resetAllAction} from '../Redux/questionsReducer'
import{resetresultAction} from '../Redux/resultReducer'
import { useDispatch,useSelector } from 'react-redux';


function Result() {
  const dispatch=useDispatch()
 const{questions:{queue,answers},result:{userId,result}}=useSelector(state=>state)
  function onRestart(){
    dispatch(resetAllAction())
    dispatch(resetresultAction())
     
  }

  return (

    <div>
      <h1 className="quizmainh1">My Quiz APP</h1>

      <div className="result">
        <div>
          <span>Username</span>
          <span>javed</span>
        </div>
        <div>
          <span>Total quiz points</span>
          <span>67</span>
        </div>
        <div>
          <span>Total questions</span>
          <span>77</span>
        </div>
        <div>
          <span>Total attmpts</span>
          <span>2</span>
        </div>
        <div>
          <span>Total Earn Points</span>
          <span>8</span>
        </div>
        <div>
          <span>Quiz result</span>
          <span>passed</span>
        </div>
      </div>
      <div>
        <Link onClick={onRestart} to="/">Restart</Link>
      </div>
      <ResultTable />
    </div>
  );
}

export default Result;
