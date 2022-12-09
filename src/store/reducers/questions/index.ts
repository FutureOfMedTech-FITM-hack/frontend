import {createSlice, createSelector, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../..';

export interface IQuestion {
    type: "ten_choices" | "input",
    title: string;
    names?: string[],
    refMin?: number,
    refMax?: number,
}

interface Questions {
    questions: IQuestion[],
    title: string,
    description: string,
    regularity: string,
    illnesses: string[]
}

interface QuestionTable {
    questions: Questions[],
    active_questions_index: number
}

const initialState: QuestionTable = {
    questions: [],
    active_questions_index: -1
}

const questionSlice = createSlice({
    initialState: initialState,
    name: "questions",
    reducers: {
        createNewQuestions(state) {
            state.questions = state.questions.concat([{
                questions: [],
                title: "",
                description: "",
                regularity: "",
                illnesses: [""]
            }]);
            state.active_questions_index = state.questions.length - 1
        },
        setNameActiveQuestions(state, payload: PayloadAction<string>) {
            state.questions = state.questions.map((e, index) => {
                return index == state.active_questions_index ? 
                {
                    ...e,
                    title: payload.payload, 
                } : e
            })
        },
        setDescriptionActiveQuestions(state, payload: PayloadAction<string>) {
            state.questions = state.questions.map((e, index) => {
                return index == state.active_questions_index ? 
                {
                    ...e,
                    description: payload.payload, 
                } : e
            })
        },
        setRegularityActiveQuestions(state, payload: PayloadAction<string>) {
            state.questions = state.questions.map((e, index) => {
                return index == state.active_questions_index ? 
                {
                    ...e,
                    regularity: payload.payload, 
                } : e
            })
        },
        setIllnessesActiveQuestions(state, payload: PayloadAction<string[]>) {
            state.questions = state.questions.map((e, index) => {
                return index == state.active_questions_index ? 
                {
                    ...e,
                    illnesses: payload.payload, 
                } : e
            })
        },
        addNewQuestion(state) {
            state.questions[state.active_questions_index].questions = state.questions[state.active_questions_index].questions.concat([{
                title: "",
                type: "input",
                refMax: -100,
                refMin: 100,
                names: new Array(10).fill(' ')
            }])
        },
        setQuestion(state, payload: PayloadAction<{index: number, question: IQuestion}>) {
            state.questions[state.active_questions_index].questions = state.questions[state.active_questions_index].questions.map((e, index) => {
                return index == payload.payload.index ? payload.payload.question : e
            })
        }
    }
})

export default questionSlice.reducer

export const {
    createNewQuestions,
    setDescriptionActiveQuestions,
    setNameActiveQuestions,
    setRegularityActiveQuestions,
    setIllnessesActiveQuestions,
    setQuestion,
    addNewQuestion
} = questionSlice.actions;

export const getActiveQuestion = createSelector((store: RootState) => store.questionReducer.questions[store.questionReducer.active_questions_index], (e) => e)
export const questions = createSelector((store: RootState) => store.questionReducer.questions, (a) => a)
export const getActiveIndex = createSelector((store: RootState) => store.questionReducer.active_questions_index, (a) => a)
export const getActiveQuestions = createSelector((store: RootState) => store.questionReducer.questions[store.questionReducer.active_questions_index].questions, (a) => a)