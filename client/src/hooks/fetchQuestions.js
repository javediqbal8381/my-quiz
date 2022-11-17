// this is fetchQuesyions hook to fetch questions from backend

import { useEffect, useState } from 'react';
import data from '../database/data';
import { useDispatch } from 'react-redux';
import * as Action from '../Redux/questionsReducer';

export const useFetchQuestion = () => {

  const dispatch = useDispatch();
  const [getdata, setGetData] = useState({
    apiData: [],
    isLoading: false,

    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));
    (async () => {
      try {
        let question = await data;
        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: question }));
          dispatch(Action.startExamAction(question));
        } else {
          throw new Error('no Questions Avalible');
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);
  return [getdata, setGetData];
};



export const MoveNextQuestion=()=> async (dispatch) => { 


  
  try {
       dispatch(Action.moveNextAction())
  } catch (error) {
    console.log(error);
  }
}

export const MoveBackQuestion=()=> async (dispatch) => { 


  
  try {
       dispatch(Action.moveBackAction())
  } catch (error) {
    console.log(error);
  }
}
