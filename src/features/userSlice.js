import {createSlice} from '@reduxjs/toolkit';


//const [userName,setUserName] = useState(null);

const initialState ={
    // userName : null,
    // userEmail : null
    user:null

}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        login:(state,action) =>{
            state.user = action.payload;
        },
        logout: state =>{
            state.user= null
        }
    }
});

export const {login,logout} = userSlice.actions;
// export const selectUserName = state => state.user?.userName;
// export const selectUserEmail = state => state.user?.userEmail;
export const selectUser = state => state.user?.user;
export default userSlice.reducer;


