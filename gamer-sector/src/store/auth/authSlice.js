import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        firstName: null, 
        imgURL: null,
        id: null,
        errorMessage: null,
    },
    reducers: {

        login: ( state, { payload } ) => {
            state.status = 'authenticated',
            state.firstName = payload.firstName,
            state.imgURL = payload.imgURL,
            state.id = payload.uid
            state.errorMessage = null;
        },

        logout: ( state , { payload } ) => {
            state.status = 'not-authenticated',
            state.displayName = null,
            state.photoURL = null,
            state.uid = null
            state.errorMessage = payload;
        },
        
        checkingCredentials: ( state ) => {
            state.status = 'checking';
        }


    }
});


// Action creators are generated for each case reducer function
export const { login , logout , checkingCredentials } = authSlice.actions;