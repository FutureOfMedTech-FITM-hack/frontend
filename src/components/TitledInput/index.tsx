import { Input, Typography } from 'antd';
import react from 'react';
import './style.css'

interface ITitledInput {
    title: string;
    placeholder?: string;
    inputComponent: react.ReactNode
}

export const TitledInput: react.FC<ITitledInput> = (props) => {
    return <div className='titled-input__container'>
        <Typography.Text type='secondary'>{props.title}</Typography.Text>
        {props.inputComponent}
    </div>
}