import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { IPatient } from '.';
import { doctorToken, origin } from '../../../network';


export const getUsers = createAsyncThunk(
    'patient/getPatients',
    async (thunkApi) => {
        const response = await axios.get(
            origin + 'api/users/list',
            {
                headers: {
                    Authorization: 'Bearer ' + doctorToken
                }
            }
        )
        console.log(response)
        const data = response.data;

        return data.map((e: any) => {
            return {
                fio: e.fio,
                male: e.gender,
                results: e.latest_form_result,
                dob: e.age,
                key: e.key,
            } as IPatient;
        }) 
    }
)

interface IPatientCreate {
    fullname: string;
    born: string;
    email: string;
}

export const createUser = createAsyncThunk(
    'patient/createPatient',
    async (patientData: IPatientCreate, thunkApi) => {
        console.log({
            ...patientData,
            password: "1234",
            gender: "Мужской"
        })
        const response = await axios.post(origin + 'api/auth/signup', {
            ...patientData,
            password: "1234",
            gender: "Мужской"
        }, {
            headers: {
                Authorization: 'Bearer ' + doctorToken,
                'Content-Type': 'application/json'
            }
        });
        const data = response.data;
        return {
            fio: data.fullname,
            male: "Мужской",
            dob: patientData.born,
            results: "ok"
        } as IPatient;
    }
)
