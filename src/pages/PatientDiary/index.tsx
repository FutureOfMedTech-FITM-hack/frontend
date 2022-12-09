import react from 'react'
import { Header } from '../../components/Header'
import {Breadcrumb, Typography, Button} from 'antd';
import './style.css';
import { TheDiaryTable } from '../../components/Tables/TheDiaryTable';
import { useNavigate, useParams } from 'react-router-dom';


export const PatientDiary: react.FC = () => {
    const navigate = useNavigate();
    const {id} = useParams<{id: string}>();

    return <>
        <Header></Header>
        <div className='centered'>
            <div className="sized_">
                <Breadcrumb>
                    <Breadcrumb.Item>Пациенты</Breadcrumb.Item>
                    <Breadcrumb.Item>Дневник пациента Василий Васильевич</Breadcrumb.Item>
                </Breadcrumb>
                <div className="diary__headings">
                    <Typography.Title level={3}>Дневник пациента Василий Васильевич</Typography.Title>
                    <Button type='primary' onClick={() => {
                        navigate(`/patients/${id}/notifications`);
                    }}>Напоминания</Button>
                </div>
                <TheDiaryTable></TheDiaryTable>
            </div>
        </div>
    </>
}