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

        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated',
            state.firstName = payload.firstName,
            state.imgURL = payload.imgURL,
            state.id = payload.uid
            state.errorMessage = null;
        },

        onLogout: ( state , { payload } ) => {
            state.status = 'not-authenticated',
            state.displayName = null,
            state.photoURL = null,
            state.uid = null
            state.errorMessage = payload;
        },
        
        onCheckingCredentials: ( state ) => {
            state.status = 'checking';
        }


    }
});


// Action creators are generated for each case reducer function
export const { onLogin , onLogout , onCheckingCredentials } = authSlice.actions;