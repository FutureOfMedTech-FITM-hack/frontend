import { Checkbox, Input, Typography } from 'antd'
import react from 'react'
import './style.css'

interface ITenChoices {
    names: string[],
    onChange: (names: string[]) => void;
}

export const TenChoicesQuestion: react.FC<ITenChoices> = (props) => {
    const [checked, setChecked] = react.useState(false);
    const [data, setData] = react.useState(props.names)

    return <div className="ten-choices__container">
        <Checkbox onChange={(e) => {
            setChecked(e.target.checked);
            console.log(e.target.checked)
        }}>Подписать значения шкалы</Checkbox>
        {
            checked ? ([...(new Array(10)).keys() as any]).map((e: number) => {
                return <div className='choices__question-names'>
                    <Typography.Text style={{width: 20}}>{e+1}</Typography.Text>
                    <Input 
                        placeholder='Введите значение (необязательно)' 
                        value={props.names[e]}
                        onChange={(ee) => {
                            var names = data.map((eee, index) => index == e ? ee.target.value : eee );
                            setData(names);
                            props.onChange(names)
                        }} 
                    />
                </div>
            }) : <></>
        }
    </div>
}