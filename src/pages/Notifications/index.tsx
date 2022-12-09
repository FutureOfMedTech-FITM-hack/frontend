import react from 'react';
import { Header } from '../../components/Header';
import { Breadcrumb, Typography, Button } from 'antd';
import './style.css';
import { TheNotificationsTable } from '../../components/Tables/TheNotificationsTable';
import { CreateUpdateNotificationModal } from '../../components/Modals/CreateUpdateNotificationModal';


export const Notifications: react.FC = () => {
    const [open, setOpened] = react.useState(false);

    return <>
        <Header></Header>
        <div className="centered">
            <div className="sized_">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        Пациенты
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Дневник пациента Иван Иванович
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Напоминания
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="notification__heading">
                    <Typography.Title level={3}>Напоминания</Typography.Title>
                    <Button type='primary' onClick={() => {
                        setOpened(true);
                    }}>Добавить напоминание</Button>
                </div>
                <TheNotificationsTable></TheNotificationsTable>
                <CreateUpdateNotificationModal open={open} setOpened={setOpened}></CreateUpdateNotificationModal>
            </div>
        </div>
    </>
}