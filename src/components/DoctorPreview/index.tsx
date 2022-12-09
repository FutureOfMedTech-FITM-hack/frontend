import { Avatar, Button, Typography } from 'antd'
import react from 'react'
import './style.css'


export const DoctorPreview: react.FC = () => {
    return <div className='doctor-preview__container'>
        <Avatar>Врач</Avatar>
        <div className="doctor-preview__content">
            <Typography.Text>Севастьянов А.А</Typography.Text>
            <Typography.Text type='secondary'>Врач гастроэнтеролог</Typography.Text>
            <Button>Написать врачу</Button>
        </div>
    </div>
}