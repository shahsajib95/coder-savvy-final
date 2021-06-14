import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
};

const slice = createSlice({
    name: áuth,
    initialState,
    reducers:{
        userLogged: (data, action) => {
            data.user = action.payload;
        },
    }
})

export const { userLogged } = slice.actions;

export default slice.reducer;