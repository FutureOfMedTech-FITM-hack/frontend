import react from 'react';
import { Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { SosTableComponent } from '../../SosTableComponent';


interface DiaryCell {
    name: string;
    regularity: string;
    lastVisit: string;
    result: string;
    key: string;
}


export const TheDiaryTable: react.FC = () => {

    const columns: ColumnsType<DiaryCell> = [
        {
            dataIndex: 'name',
            key: 'name',
            title: 'Название анкеты',
        },
        {
            dataIndex: 'regularity',
            key: 'regularity',
            title: 'Регулярность'
        },
        {
            dataIndex: 'lastVisit',
            key: 'lastVisit',
            title: 'Регулярность'
        },
        {
            dataIndex: 'result',
            key: 'result',
            title: 'Результаты последней анкеты',
            render: (e: string, record: any, id: any) => {
                return <div className='diary__results'>
                    <SosTableComponent text={e} id={record.key}></SosTableComponent>
                    <Typography.Link 
                        style={{color: '#00ABB5', textDecoration: 'underline'}}
                        href='1/heatmap'
                    >Подробнее</Typography.Link>
                </div>
            }
        }
    ]

    const data: DiaryCell[] = [
        {
            name: 'Биохимический анализ крови',
            regularity: '1 раз в месяц',
            lastVisit: '07.12.2022, 17:30',
            result: 'В норме',
            key: '1'
        }
    ]
    

    return <Table style={{marginTop: 30}} columns={columns} dataSource={data}></Table>
}