import react from 'react';
import { Header } from '../../components/Header';
import {Typography, Button} from 'antd';
import { ThePatientsTable } from '../../components/Tables/ThePatientsTable';
import { CreateUpdatePatient } from '../../components/Modals/CreateUpdatePatient';
import './styles.css'


export const Patients: react.FC = () => {
    const [opened, setOpened] = react.useState(false);
    return <>
        <CreateUpdatePatient 
            open={opened}
            setOpened={setOpened}
        ></CreateUpdatePatient>
        <Header></Header>
        <div className="sized">
            <div className="positioned">
                <div className="patients__content">
                    <div className="patients__head">
                        <Typography.Title level={3}>Пациенты</Typography.Title>
                        <Button type="primary" onClick={() => {
                            setOpened(true)
                        }}>Добавить пациента</Button>
                    </div>
                    <ThePatientsTable></ThePatientsTable>
                </div>
            </div>
        </div>
    </> 
}