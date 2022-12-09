import { Typography } from 'antd'
import react from 'react'
import './style.css'


export const DoctorAdd: react.FC = () => {
    return <div className='doctor-add__container'>
        <Typography.Text style={{fontWeight: 'bold'}}>
            Прикрепиться к врачу
        </Typography.Text>
    </div>
}