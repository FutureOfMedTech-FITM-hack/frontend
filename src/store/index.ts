import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import questionReducer from './reducers/questions';
import patientsReducer from './reducers/patients';

const baseReducer = combineReducers({questionReducer, patientsReducer})


const store = configureStore({reducer: baseReducer})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

