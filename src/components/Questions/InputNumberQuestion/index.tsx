import { Divider, Input } from 'antd'
import react from 'react'
import { TitledInput } from '../../TitledInput'
import './style.css'

interface IInputNumber {
    refMin: number,
    refMax: number,
    onChange: (refMin: number, refMax: number) => void
}

export const InputNumberQuestion: react.FC<IInputNumber> = (props) => {
    const [data, setData] = react.useState(props)

    return <TitledInput
        title='Укажите референсные значения'
        inputComponent={
            <div className='ref-input__container'>
                <Input type='number' onChange={(e) => {
                    setData({...data, refMin: parseInt(e.target.value)})
                    props.onChange(parseInt(e.target.value), data.refMax);
                }} value={props.refMin}/> - <Input 
                    type='number'
                    onChange={(e) => {
                        setData({...data, refMax: parseInt(e.target.value)})
                        props.onChange(data.refMin, parseInt(e.target.value));
                    }}
                    value={props.refMax}
                />
            </div>
        }
    />
}
