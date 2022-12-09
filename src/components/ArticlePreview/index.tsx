import { ShareAltOutlined } from '@ant-design/icons'
import { Avatar, Tag, Typography } from 'antd'
import react from 'react'
import './style.css'

interface IArticelPreview{
    doctorName: string;
    tags: string[]
    title: string
    time: string
}


export const ArticlePreview: react.FC<IArticelPreview> = (props) => {
    return <div className="article-preview__container">
        <div className="article-preview__headings">
            <div className="article-preview__author">
                <Avatar>Врач</Avatar>
                <Typography.Text>{props.doctorName}</Typography.Text>
            </div>
            <ShareAltOutlined />
        </div>
        <div className="tags">
                {
                    props.tags.map(e => <Tag>{e}</Tag>)
                }
        </div>
        <Typography.Text style={{fontWeight: 'bold', marginTop: 30, paddingRight: 20}}>
            {props.title}
        </Typography.Text>
        <Typography.Text type='secondary'>{props.time}</Typography.Text>
    </div>
}