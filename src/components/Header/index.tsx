import react from 'react'
import { Logo } from './logo';
import {Avatar, Typography} from 'antd';
import {useLocation} from 'react-router-dom';
import { green, grey } from '@ant-design/colors';

import './style.css';


export const Header: react.FC = () => {
    const [selected, setSelected] = react.useState(-1)
    const location = useLocation()
    console.log(location.pathname);

    var links = [
        "/patients",
        "/questions",
        "/articles",
        "https://t.me/+W2DTe7Qw5e9lYmVi"
    ]
    var linkText = [
        'Пациенты',
        'Анкеты',
        'Статьи',
        'Чаты'
    ]
    var avatarName = 'Врач'
    var fullName = 'Севастьянов А.А.'

    if (location.pathname.startsWith('/index')) {
        links = [
            '/index/diary',
            '/index/articles',
            'https://t.me/s4nspie'
        ]
        linkText = [
            'Дневник пациента',
            'Рекомендации',
            'Чаты'
        ]
        avatarName = 'Пациент'
        fullName = 'Иванов И.И.'
    }

    for (var i = 0; i < links.length; ++i) {
        if (i != selected) {
            if (location.pathname == links[i]) {
                setSelected(i);
            }
        }
    }

    return <div className="header__container">
        <div className="positioned">
            <div className="header__content">
                <div className="logo__container">
                    <Logo />
                    <div className="header__menu">
                        {
                            linkText.map(
                                e => <Typography.Link 
                                    href={links[linkText.indexOf(e)]}
                                    style ={{color: 
                                        linkText.indexOf(e) == selected ?
                                        '#00ABB5' : 'black'}}
                                >
                                    {e}
                                </Typography.Link>
                            )
                        }
                    </div>
                    <div className="doctor__menu">
                        <Avatar>{avatarName}</Avatar>
                        <div className="fi">{fullName}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}