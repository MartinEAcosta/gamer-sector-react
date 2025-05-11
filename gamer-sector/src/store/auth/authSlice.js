import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        user: {},
        errorMessage: null,
    },
    reducers: {

        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = null;
        },

        onLogout: ( state , { payload } ) => {
            state.status = 'not-authenticated';,
            state.user = { },
            state.errorMessage = payload;
        },
        
        onCheckingCredentials: ( state ) => {
            state.status = 'checking';
            state.user = { };
        }


    }
});


// Action creators are generated for each case reducer function
export const { onLogin , onLogout , onCheckingCredentials } = authSlice.actions;