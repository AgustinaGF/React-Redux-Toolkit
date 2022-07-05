import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

// axios

export const userSlice = createSlice({
  name:'users',
  initialState:{
    list:[],
  },
  reducers:{
    setUserList: (state, action)=>{
      state.list =action.payload
    }
  },
});

export default userSlice.reducer;
//destructuracion, esto me permite usarla en fetchAllUsers

export const {setUserList} = userSlice.actions;

// funciones async
export const fetchAllUsers = () => (dispatch) =>{
  axios
    .get('https://reqres.in/api/users?per_page=12')
    .then((response)=>{
      //agrego mi dispatch para que me ejecute mi action
        dispatch(setUserList(response.data.data));
    })
  
    .catch((error)=>console.log(error))
}