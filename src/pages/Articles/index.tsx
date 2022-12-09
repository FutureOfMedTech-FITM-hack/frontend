import { Button, Typography } from 'antd'
import react from 'react'
import { useNavigate } from 'react-router-dom'
import { ArticlePreview } from '../../components/ArticlePreview'
import { Header } from '../../components/Header'
import './style.css'

export const Articles: react.FC = () => {
    const navigate = useNavigate();

    return <>
        <Header></Header>
        <div className="centered">
            <div className="sized_">
                <div className="article__heading">
                    <Typography.Title level={3}>Рекомендации</Typography.Title>
                    <Button type='primary' onClick={() => {
                        navigate('/articles/create')
                    }}>Написать рекомендацию</Button>
                </div>
                <div className="articles__list">
                    <ArticlePreview
                        title="Частые головные боли. Что делать, если боль становится невыносимой?"
                        doctorName='Севастьянов А. А.'
                        tags={['Мигрень', 'Опухоль']}
                        time='10.11.2022, 07:15' 
                    />
                    <ArticlePreview
                        title="Частые головные боли. Что делать, если боль становится невыносимой?"
                        doctorName='Севастьянов А. А.'
                        tags={['Гастрит']}
                        time='10.11.2022, 07:15'
                    />
                </div>
            </div>
        </div>
    </>
}