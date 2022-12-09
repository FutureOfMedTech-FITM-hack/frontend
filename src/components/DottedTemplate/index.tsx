import react from 'react';
import { Popover, Button } from 'antd';
import {EllipsisOutlined} from '@ant-design/icons'

interface DottedTemplate {
    content: react.ReactNode
}

export const DottedTemplate: react.FC<DottedTemplate> = (props) => {
    return <Popover content={props.content} trigger={'click'}>
        <Button type='text' icon={<EllipsisOutlined style={{transform: 'rotate(90deg)'}}/>}/>
    </Popover>
}