import react from 'react'
import {Tag, Button} from 'antd';

interface ISosComponent {
    text: string;
    id: string;
    onSosClick?: () => void
}

export const SosTableComponent: react.FC<ISosComponent> = (props) => {
    var color = 'green';
    if (props.text == 'На границе') color = 'yellow';
    if (props.text == 'Вне нормы') color = 'red';
    return <div className='patients__tag'>
        <Tag color={color} style={{height: 30, display: 'flex', alignItems: 'center'}}>{props.text}</Tag>
        {
            color == 'red' ? <Button danger type='primary' shape='round' 
                onClick={() => {
                    return props.onSosClick ? props.onSosClick() : null
                }}
            >SOS</Button> : <></>
        }
    </div>
}