import { Button, Divider, Table } from 'antd'
import react from 'react'
import type { ColumnsType } from 'antd/es/table';
import { DottedTemplate } from '../../DottedTemplate';
import { CreateUpdateNotificationModal } from '../../Modals/CreateUpdateNotificationModal';


interface INotifiaction {
    name: string;
    regularity: string;
    time: string;
    key: string;
}

export const TheNotificationsTable: react.FC = (props) => {
    const [opened, setOpened] = react.useState(false);
    const columns: ColumnsType<INotifiaction> = [
        {
            key: 'name',
            title: 'Напоминание',
            dataIndex: 'name'
        },
        {
            key: 'regularity',
            title: 'Регулярность',
            dataIndex: 'regularity'
        },
        {
            key: 'time',
            title: 'Время',
            dataIndex: 'time',
            render: (el: string, data: any, id: any) => {
                const content = <div className='notif__actions'>
                    <Button type='text' onClick={() => {setOpened(true)}}>Редактировать</Button>
                    <Button type='text' danger>Удалить</Button>
                </div>

                return <div className='notif__time'>
                    <span>{el}</span>
                    <DottedTemplate content={content}></DottedTemplate>
                </div>
            }
        },
    ];
    const data: INotifiaction[] = [
        {
            key: '1',
            regularity: '1 раз в день',
            time: '10:00',
            name: 'Измерить давление'
        }
    ]

    return <>
        <Table 
            style={{marginTop: 30}} 
            columns={columns} 
            dataSource={data}
        ></Table>
        <CreateUpdateNotificationModal open={opened} setOpened={setOpened}></CreateUpdateNotificationModal>
    </>
}
