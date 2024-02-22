import { createSlice } from "@reduxjs/toolkit";

 
 const userSlice=createSlice({
    name:'users',
    initialState:[],
    reducers:{
        addUser(state,action) {
            state.push(action.payload)
        },
        removeUser(state,action) {
            let index=state.findIndex((value)=>value.id=action.payload)
            state.splice(index,1)
        },
        deleteUsers(state,action) {
            return []
        }
    },
    extraReducers(builder) {
        builder.addCase(userSlice.actions.deleteUsers(),()=>{return []})
    }
 })
 export default userSlice
 export const {addUser,removeUser,deleteUsers}=userSlice.actions