import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Iuser } from "./types";

export const fetchUser = createAsyncThunk(
    'user/fetch',
    async () => {
      const response = await fetch('https://randomuser.me/api/')

      const data = await response.json()

      return data.results[0]
    },
  )


const initialState:Iuser = {
    isLoading: false,
    gender: '',
    email: '',
    name: {
        title: '',
        first: '',
        last: ''
    },
    location: {
        street: {
            number: '',
            name: '',
        },
        city: '',
        state: '',
        country: '',
        postcode: '',
        coordinates: {
            latitude: '',
            longitude: ''
        },
        timezone: {
            offset: '' ,
            description: ''
        },
    },
    picture: {
        large: '',
        medium: '',
        thumbnail: ''
    }
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.isLoading = true
        }),
        builder.addCase(fetchUser.rejected, (state) => {
            state.isLoading = true
        }),
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.gender = action.payload.gender
            state.name = action.payload.name
            state.location = action.payload.location
            state.email = action.payload.email
            state.picture = action.payload.picture
        })
    }
})


export default userSlice.reducer