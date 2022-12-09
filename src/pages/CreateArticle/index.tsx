import { Button, Input, Typography } from 'antd'
import react from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { TitledInput } from '../../components/TitledInput'
import './style.css'

export const CreateArticle: react.FC = () => {
    const navigate = useNavigate();
    return <>
        <Header></Header>
        <div className="centered">
            <div className="sized_ ">
                <div className="article-create__container">
                    <Typography.Title level={3}>Опубликовать рекомендацию</Typography.Title>
                    <TitledInput 
                        title='Введите заголовок'
                        inputComponent={<Input placeholder='Место для Вашего заголовка'></Input>}
                    />
                    <TitledInput 
                        title='Введите описание'
                        inputComponent={<Input.TextArea placeholder='Место для Вашего описания' rows={15}></Input.TextArea>}
                    />
                    <Button 
                        type='primary' 
                        style={{width: 200}}
                        onClick={() => {
                            navigate(-1)
                        }}
                    >Опубликовать запись</Button>
                </div>
            </div>
                
        </div>
    </>
}