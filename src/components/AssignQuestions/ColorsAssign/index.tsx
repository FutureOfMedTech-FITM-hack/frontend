import react from 'react'
import './style.css'

interface IColorBlock {
    text: string;
    color: string;
    onSelected: () => void;
    selected: boolean;
}

const ColorBlock: react.FC<IColorBlock> = (props) => {
    return <div className='color-block__container' onClick={() => {
        props.onSelected();
    }}>
        <div className="circle" style={{background: props.color}}></div>
        <div className="text" style={{
            fontWeight: props.selected ? '600' : '500'
        }}> - {props.text}</div>
    </div>
}

interface IColorAssign {
    names: string[]
}

export const ColorsAssign: react.FC<IColorAssign> = (props) => {
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
    const [selected, setSelected] = react.useState(new Array(10).fill(false));

    return <>
        {props.names.map((e, index) => {
            return <ColorBlock 
                color={colors[index]}
                text={e}
                selected={selected[index]}
                onSelected={() => {
                    setSelected(
                        selected.map((sel, selIndex) => selIndex == index ? true : false)
                    );
                }}
            />
        })}
    </>
}