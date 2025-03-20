import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        displayName: null, 
        photoURL: null,
        uid: null,        
    },
    reducers: {

        login: ( state, { payload } ) => {
            state.status = 'authenticated',
            state.displayName = payload.displayName,
            state.photoURL = payload.photoURL,
            state.uid = payload.uid
        },

        logout: ( state ) => {
            state.status = 'not-authenticated',
            state.displayName = null,
            state.photoURL = null,
            state.uid = null
        },
        
        checkingCredentials: ( state ) => {
            state.status = 'checking';
        }


    }
});


// Action creators are generated for each case reducer function
export const { login } = authSlice.actions;