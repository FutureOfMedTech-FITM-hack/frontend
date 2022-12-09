import { Button, Tag, Typography } from 'antd'
import react from 'react'
import './style.css'

interface IQuestionPreivew {
    onQuestionClick: () => void;
    onHeatMapClick: () => void;
}

export const QuestionPreivew: react.FC<IQuestionPreivew> = (props) => {
    return <div className='question-preview__container'>
        <Typography.Text style={{fontWeight: 'bold'}}>Название анкеты</Typography.Text>
        <span>
            <Typography.Text type='secondary'>Регулярность: </Typography.Text>
            <Typography.Text>2 раза в день </Typography.Text>
        </span>
        <span>
            <Typography.Text type='secondary'>Последнее прохождение: </Typography.Text>
            <Typography.Text>07.12.2022</Typography.Text>
        </span>
        <span>
            <Typography.Text type='secondary'>Последний результат: </Typography.Text>
            <Tag color='green'>В норме</Tag>
        </span>
        <div className="buttons">
            <Button onClick={() => {props.onHeatMapClick()}}>Тепловая карта</Button>
            <Button type='primary' onClick={() => {props.onQuestionClick()}}>Заполнить анкету</Button>
        </div>
    </div>
}