import { createSlice } from '@reduxjs/toolkit';

export const resultReducer = createSlice({
  name: 'result',
  initialState: {
    userId: null,
    result: [],
  },
  reducers: {
    setUserID: (state, action) => {
      state.userId = action.payload;
    },
    pushResultAction:(state,action)=>{
      state.result.push(action.payload)
    },
    updateResultAction:(state,action)=>{
      const{trace,checked}=action.payload
      state.result.fill(checked,trace,trace + 1)
    },
    resetresultAction:()=>{
     return{
      userId: null,
      result: [],
     }
    }
  },
});

export const { setUserID,pushResultAction,resetresultAction,updateResultAction } = resultReducer.actions;

export default resultReducer.reducer;
