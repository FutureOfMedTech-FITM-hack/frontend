import { Breadcrumb, Typography } from 'antd'
import react from 'react'
import { Header } from '../../components/Header'
import { Heatmap } from '../../components/Heatmap'
import './style.css'


export const QuestionHeatmap: react.FC = () => {
    return <>
        <Header />
        <div className="centered">
            <div className="sized_ q_heatmap__container">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        Дневник пациента
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Название анкеты
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Typography.Title level={3}>Название анкеты</Typography.Title>
                <Heatmap />
            </div>
        </div>
    </>
}