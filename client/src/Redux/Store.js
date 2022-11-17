import { configureStore, combineReducers } from '@reduxjs/toolkit';
import questionReducer from './questionsReducer';
import resultReducer from './resultReducer';

const rootreducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

export default configureStore({ reducer: rootreducer });
