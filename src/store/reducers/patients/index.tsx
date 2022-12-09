import {createSlice, createSelector} from '@reduxjs/toolkit';
import { RootState } from '../..';
import { createUser, getUsers } from './asyncThunks';

export interface IPatient {
    fio: string;
    male: string;
    dob: string;
    results: string;
    key: string;
}

interface IPatients {
    patients: IPatient[]
}

const initialState: IPatients = {
    patients: []
}

const patientSlice = createSlice({
    initialState: initialState,
    name: 'patientSlice',
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.patients = action.payload;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.patients = state.patients.concat([action.payload])
        })
    }
})

export default patientSlice.reducer

export const usersGet = createSelector((store: RootState) => store.patientsReducer.patients, (a) => a)
