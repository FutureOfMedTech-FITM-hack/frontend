import react from 'react'
import { Button, Divider, Popover, Table, Tag } from 'antd'
import {EllipsisOutlined} from '@ant-design/icons'
import './style.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { SosTableComponent } from '../../SosTableComponent';
import { DottedTemplate } from '../../DottedTemplate';
import { useAppDispatch, useAppSelector } from '../../../store';
import { usersGet } from '../../../store/reducers/patients';
import { getUsers } from '../../../store/reducers/patients/asyncThunks';
import { SosModal } from '../../Modals/SosModal';




export const ThePatientsTable: react.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [sosOpened, setSosOpened] = react.useState(false);
    const users = useAppSelector(usersGet);

    if (!users.length) {
        dispatch(
            getUsers()
        )
    }
    console.log(users);

    const columns = [
        {
            title: 'ФИО',
            dataIndex: 'fio',
            key: 'fio'
        },
        {
            title: 'Пол',
            dataIndex: 'male',
            key: 'male'
        },
        {
            title: 'Возраст',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: 'Результаты последней анкеты',
            dataIndex: 'results',
            key: 'results',
            render: (e: string, record: any, index: any) => {
                console.log(e, record, index)
                var color = 'green';
                if (e == 'На границе') color = 'yellow';
                if (e == 'Вне нормы') color = 'red';

                const patientContent = <div className='patients__click'>
                    <Button type='text'>Перейти в чат</Button>
                    <Button type='text' onClick={() => {
                        navigate(`/patients/${record.key}/diary`)
                    }}>Дневник пациента</Button>
                    <Button type='text'>Отправить анекту</Button>
                    <Button type='text'>Редактировать</Button>
                    <Button type='text'>Удалить</Button>
                    <Divider style={{margin: 0}}></Divider>
                    <Button type='text' style={{color: '#E30611'}} onClick={() => {
                        setSosOpened(true);
                    }}>SOS</Button>
                </div>

                return <div className='patients__cont'>
                    <SosTableComponent 
                        text={e} 
                        id={record.key}
                        onSosClick={() => {
                            setSosOpened(true)
                        }}
                    ></SosTableComponent>
                    <DottedTemplate content={patientContent}></DottedTemplate>
                </div>
            }
        }
    ]

    const data = [
        {
            fio: 'Васильев Василий Васильевич',
            male: 'Мужской',
            age: '20',
            results: 'На границе',
            key: '1'
        },
        {
            fio: 'Васильев Василий Васильевич',
            male: 'Мужской',
            age: '30',
            results: 'Вне нормы',
            key: '2'
        }
    ]


    return <>
        <Table columns={columns} dataSource={users.map(e => {
            {
                return {
                    fio: e.fio,
                    male: e.male,
                    age: e.dob,
                    results: e.results == 'ok' ? 'В норме' : 'Вне нормы',
                    key: e.key
                }
            }
        })} ></Table>
        <SosModal 
            open={sosOpened}
            onOpenChagen={setSosOpened}
        />
    </> 
}