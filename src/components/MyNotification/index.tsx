import { Checkbox, Typography } from 'antd'
import react from 'react'
import './style.css'

export const MyNotification: react.FC = () => {
    return <div className='notification__container'>
        <Typography.Text>Заполнить анкету “Название анкеты”</Typography.Text>
        <Typography.Text>08.12.2022, 10:00</Typography.Text>
        <Typography.Text>Севастьянов А.А.</Typography.Text>
        <Checkbox>Выполнено</Checkbox>
    </div>
}