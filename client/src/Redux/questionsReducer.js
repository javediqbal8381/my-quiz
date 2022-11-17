import { createSlice } from '@reduxjs/toolkit';

const questionReducer = createSlice({
  name: 'questions',
  initialState: {
    queue: [],
    answers: [0,1,2,0,1],
    trace: 0,
  },
  reducers: {
    startExamAction: (state, action) => {
      return {
        ...state,
        queue: action.payload
         
      };
    },
    moveNextAction :(state)=>{
      return{
        ...state,
        trace :state.trace + 1
      }
    },
    moveBackAction :(state)=>{
      return{
        ...state,
        trace :state.trace - 1
      }
    },
    resetAllAction:()=>{
      return{
        queue: [],
    answers: [],
    trace: 0,
      }
    }
  },
});

export const { startExamAction,moveNextAction,moveBackAction,resetAllAction} = questionReducer.actions;

export default questionReducer.reducer;
