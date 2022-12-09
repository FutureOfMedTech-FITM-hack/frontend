import { PlusOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import react from 'react'
import { useNavigate } from 'react-router-dom'

export const AssignHeader: react.FC = () => {
    const navigate = useNavigate();
    return <>
        <Button className="cross" icon={<PlusOutlined />} type='text' onClick={() => {
            navigate(-1);
        }}/>
        <div className='header__container'>
            <div className="positioned">
                <div className="logo__container">
                    <Typography.Title level={3}>Название анкеты</Typography.Title>
                    <Button type='primary' onClick={() => {
                        navigate(-1)
                    }}>Отправить анкету</Button>
                </div>
            </div>
        </div>
    </>
}