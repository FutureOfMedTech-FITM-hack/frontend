import { Select } from 'antd'
import react from 'react'

interface IRegularitySelect {
    onChange?: (key: string) => void;
    value?: string;
}


export const RegularitySelect: react.FC<IRegularitySelect> = (props) => {
    return <Select onChange={(e) => {
        return props.onChange ? props.onChange(e) : ''
    }} value={props.value ? props.value : null}>
        <Select.Option key={'1'}>1 раз в день</Select.Option>
        <Select.Option key={'2'}>2 раза в день</Select.Option>
        <Select.Option key={'3'}>3 раза в день</Select.Option>
        <Select.Option key={'5'}>5 раз в день</Select.Option>
        <Select.Option key={'10'}>10 раз в день</Select.Option>
    </Select>
}