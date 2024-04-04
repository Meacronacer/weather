import { createSlice } from "@reduxjs/toolkit";
import { IsavedUsers } from "./types";


const initialState: IsavedUsers = {
    users: []
}


const savedUsersSlice = createSlice({
    name: 'savedUsers',
    initialState,
    reducers: {
        addNewUser: (state, action) => {
            state.users.push(action.payload)
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((_, index) => index !== action.payload)
        }
    }
})


export const { addNewUser, removeUser } = savedUsersSlice.actions
export default savedUsersSlice.reducer


