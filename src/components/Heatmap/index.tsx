import { Divider, Typography } from 'antd'
import react from 'react'
import './style.css'

interface IColoredRect {
    level: number;
}

const ColoredRect: react.FC<IColoredRect> = (props) => {
    const colors = [
        '#56D96B',
        'rgba(86, 217, 107, 0.8)',
        'linear-gradient(0deg, rgba(245, 199, 33, 0.1), rgba(245, 199, 33, 0.1)), rgba(86, 217, 107, 0.6)',
        'rgba(245, 199, 33, 0.6)',
        'rgba(245, 199, 33, 0.8)',
        '#F5C721',
        'linear-gradient(0deg, rgba(249, 87, 33, 0.3), rgba(249, 87, 33, 0.3)), rgba(245, 199, 33, 0.8)',
        'rgba(249, 87, 33, 0.8)',
        '#F95721'
    ]

    return <div className='rect' style={{background: colors[props.level]}}></div>
}

interface IHeatmapParam {
    title: string;
    levels: number[];
}

const HeatmapParam: react.FC<IHeatmapParam> = (props) => {
    return <>
        <div className="heatmap__param">
            <div className="heatmap-param__heading">
                <Typography.Text style={{fontSize: 16}}>{props.title}</Typography.Text>
            </div>
            {props.levels.map(e => <ColoredRect level={e} />)}
        </div>
        <Divider style={{margin: 0}}/>
    </>
}

const HeatmapHeadings: react.FC = () => {
    return <>
        <Divider style={{margin: 0}}/>
        <div className='heatmap__headings'>
            <div className="heatmap-param__heading">
                <Typography.Text style={{fontWeight: 'bold', fontSize: 16}}>Показатели</Typography.Text>
            </div>
        </div>
        <Divider style={{margin: 0}}/>
    </> 
}

export const Heatmap: react.FC = () => {
    return <div className="heatmap__container">
        <HeatmapHeadings />
        <HeatmapParam
            title='Тошнота'
            levels={[0, 2, 1, 5, 2, 8, 2]} 
        />
        <HeatmapParam
            title='Уровень гемоглобина'
            levels={[4, 0, 1, 7, 3, 8, 6]} 
        />
    </div>
}