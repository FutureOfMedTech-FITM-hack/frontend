import { Input, Select, Typography } from 'antd'
import react from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { getActiveIndex, getActiveQuestion, questions, setDescriptionActiveQuestions, setIllnessesActiveQuestions, setNameActiveQuestions, setRegularityActiveQuestions } from '../../../store/reducers/questions'
import { RegularitySelect } from '../../RegularitySelect'
import { TitledInput } from '../../TitledInput'
import './style.css'

export const QuestionTitle: react.FC = () => {
    const dispatch = useDispatch();
    const activeQuestion = useSelector(getActiveQuestion);
    return <>
        <Typography.Text>Введите общую информацию</Typography.Text>
        <div className='title__container title__spaced'>
            <TitledInput 
                title='Название'
                inputComponent={
                    <Input placeholder='Введите название' onChange={(e) => {
                        dispatch(setNameActiveQuestions(e.target.value))
                    }} value={activeQuestion.title}/>
                }
            />
            <TitledInput 
                title='Описание'
                inputComponent={
                    <Input.TextArea rows={4} placeholder='Введите описание' onChange={(e) => {
                        dispatch(setDescriptionActiveQuestions(e.target.value))
                    }}
                    value={activeQuestion.description}
                    />
                }
            />
            <TitledInput 
                title='Регулярность'
                inputComponent={
                    <RegularitySelect onChange={
                        (e) => dispatch(setRegularityActiveQuestions(e))
                    }
                    value={activeQuestion.regularity}
                    />
                }
            />
            <TitledInput 
                title='Нозология'
                inputComponent={
                    <Select mode='tags' value={activeQuestion.illnesses} onChange={(e) => {
                        dispatch(setIllnessesActiveQuestions(e));
                    }}/>
                }
            />
        </div>
    </>
}