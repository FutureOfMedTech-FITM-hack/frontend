import { Typography } from 'antd'
import react from 'react'
import { useNavigate } from 'react-router-dom'
import { DoctorAdd } from '../../components/DoctorAdd'
import { DoctorPreview } from '../../components/DoctorPreview'
import { Header } from '../../components/Header'
import { MyNotification } from '../../components/MyNotification'
import { QuestionPreivew } from '../../components/QuerstionsPreview'
import './style.css'

export const MyDiary: react.FC = () => {
    const navigate = useNavigate();
    return <>
        <Header></Header>
        <div className="centered">
            <div className="sized_ my-diary__container">
                <div className="my-diary__header">
                    <Typography.Title level={3}>
                        Дневник пациента
                    </Typography.Title>
                </div>
                <div className="doctors">
                    <Typography.Text style={{fontWeight: 'bold'}}>Мой лечащий врач</Typography.Text>
                    <div className="doctor__blocks">
                        <DoctorPreview />
                        <DoctorPreview />
                        <DoctorAdd />
                    </div>
                </div>
                <div className="my-questions">
                    <Typography.Text style={{fontWeight: 'bold'}}>Мои анкеты</Typography.Text>
                    <div className="doctor__blocks">
                        <QuestionPreivew  
                            onHeatMapClick={() => {
                                navigate('/index/questions/1/heatmap')
                            }}
                            onQuestionClick={() => {
                                navigate('/index/questions/1/assign')
                            }}
                        />
                    </div>
                </div>
                <div className="my-notifications">
                    <Typography.Text style={{fontWeight: 'bold'}}>Мои Напоминания</Typography.Text>
                    <div className="not__blocks">
                        <MyNotification />
                    </div>
                </div>
            </div>
        </div>
    </>
}