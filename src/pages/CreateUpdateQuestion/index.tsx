import { Button, Typography } from 'antd'
import react from 'react'
import { CreateQuestionHeader } from '../../components/Header/CreateHeader'
import { Question } from '../../components/Questions/Question'
import { QuestionTitle } from '../../components/Questions/QuestionTitle/QuestionTitle'
import {useSelector} from 'react-redux';
import './style.css'
import { addNewQuestion, getActiveQuestions } from '../../store/reducers/questions'
import { useDispatch } from 'react-redux/es/exports'

export const CreateUpdateQuestion: react.FC = () => {
    const questions = useSelector(getActiveQuestions);
    const dispatch = useDispatch();

    return <>
    <CreateQuestionHeader></CreateQuestionHeader>
    <div className="centered">
        <div className="sized__ question__container">
            <QuestionTitle />
            <Typography.Text>Сформируйте вопросы для анкеты</Typography.Text>
            <div className='title__container title__spaced quest__container'>
                {questions.map((e, index) => {
                    return <Question question={e} index={index}></Question>
                })}
                <Button onClick={() => {
                    dispatch(addNewQuestion())
                }}>Добавить вопрос</Button>
            </div>
        </div>
    </div>
    </>
}