import { Button, Table, Typography } from 'antd'
import react from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { TheQuestionsTable } from '../../components/Tables/TheQuestionsTable'
import { createNewQuestions, questions } from '../../store/reducers/questions'
import './style.css'

export const Questions: react.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getQuestions = useSelector(questions);

    return <>
        <Header></Header>
        <div className="centered">
            <div className="sized_">
                <div className="questions__header">
                    <Typography.Title level={3}>Анкеты</Typography.Title>
                    <Button type='primary' onClick={() => {
                        navigate('/questions/create');
                        dispatch(createNewQuestions())
                        console.log(getQuestions)
                    }}>Создать анкету</Button>
                </div>
                <TheQuestionsTable></TheQuestionsTable>
            </div>
        </div>
    </>
}