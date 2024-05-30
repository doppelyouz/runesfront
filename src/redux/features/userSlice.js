// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
setUser : (state,action)=>{
    state.user = action.payload
},
setRealBalance : (state,action)=>{
    state.user.real_balance = action.payload
},
setFehuBalance : (state, action)=>{
    state.user.fehu_balance = action.payload
},

  },
  // В случае использования асинхронных действий (thunks), вы можете добавить extraReducers
});

export const { setUser, setFehuBalance, setRealBalance } = userSlice.actions;

export default userSlice.reducer;
