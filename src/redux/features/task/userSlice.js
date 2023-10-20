import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: "selim",
    email : 'ptanjim01@gmail.com',
}



const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
})



export default userSlice.reducer ;