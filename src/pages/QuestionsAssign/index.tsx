import { Button } from 'antd'
import react from 'react'
import { useNavigate } from 'react-router-dom'
import { AssignQuestion } from '../../components/AssignQuestions/Question'
import { AssignHeader } from '../../components/Header/AssignHeader'
import './style.css'


export const QuestionsAssign: react.FC = () => {
    const navigate = useNavigate();
    return <>
        <AssignHeader></AssignHeader>
        <div className="centered">
            <div className="sized__ assign-questions__container">
                <AssignQuestion type='Colors' title='Тошнота'/>
                <AssignQuestion type='Input' title='Уровень гемоглобина'/>
                <Button 
                    style={{width: 200}} 
                    type='primary'
                    onClick={() => {
                        navigate('/index/diary')
                    }}
                >Отправить</Button>
            </div>
        </div>
        
    </>
}