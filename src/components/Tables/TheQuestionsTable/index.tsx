import { Button, Divider, Table, Tag } from 'antd'
import react from 'react'
import type { ColumnsType } from 'antd/es/table';
import { DottedTemplate } from '../../DottedTemplate';
import './style.css';


interface QuestionCell {
    name: string;
    regularity: string;
    illnesses: string;
}

export const TheQuestionsTable: react.FC = () => {

    const columns: ColumnsType<QuestionCell> = [
        {
            title: 'Название анкеты',
            key: 'name',
            dataIndex: 'name'
        },
        {
            title: 'Регулярность',
            key: 'regularity',
            dataIndex: 'regularity'
        },
        {
            title: 'Нозология',
            key: 'illnesses',
            dataIndex: 'illnesses',
            render: (value: string, record: QuestionCell, index: number) => {
                const content = <div className='illness__modal'>
                    <Button type='text'>Отправить пациенту</Button>
                    <Button type='text'>Редактировать</Button>
                    <Button type='text'>Сделать копию на основе</Button>
                    <Button type='text' danger>Удалить</Button>
                </div>

                return <div className='illness__container'>
                    <div className="illness__tags">
                        {value.split(' ').map((e) => <Tag>{e}</Tag>)}
                    </div>
                    <DottedTemplate content={content}></DottedTemplate>
                </div>
            }
        }
    ]

    const data: QuestionCell[] = [
        {
            name: "Состояние при мигрени",
            regularity: '1 раз в день',
            illnesses: "Болезнь1 Болезнь2"
        }
    ]

    return <Table columns={columns} dataSource={data}></Table>
}