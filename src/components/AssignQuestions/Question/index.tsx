import { Typography } from 'antd'
import react from 'react'
import { ColorsAssign } from '../ColorsAssign'
import { NumberAssign } from '../NumberAssign'
import './style.css'

interface IAssignQuestion{
    type: "Colors" | "Input";
    title: string;
}

export const AssignQuestion: react.FC<IAssignQuestion> = (props) => {

    return <div className="assign-question-el__container">
        <Typography.Text style={{fontWeight: 'bold', marginBottom: 20}}>{props.title}</Typography.Text>
        {
            props.type == 'Colors' ? <ColorsAssign 
            names={[
                "Тошноты нет",
                "Что-то чувствую",
                "Небольшая тошнота",
                "Подташнивает",
                "Тошнит",
                "Очень тошнит",
                "Очень сильно тошнит",
                "Сейчас вырвет",
                "Рвота"
            ]}
        /> : <NumberAssign />
        }
    </div>
}