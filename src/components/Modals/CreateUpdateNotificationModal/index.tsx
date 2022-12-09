import react from 'react';
import {Input, Modal} from 'antd'
import './style.css';
import { TitledInput } from '../../TitledInput';
import {Select} from 'antd';
import { RegularitySelect } from '../../RegularitySelect';


interface ICreateUpdateNotificationModal {
    open: boolean;
    setOpened: (open: boolean) => void;
}

export const CreateUpdateNotificationModal: react.FC<ICreateUpdateNotificationModal> = (props) => {
    const optionTime = <Select mode='multiple'>
        {
            [...(Array(24).keys() as any)].map((e) => {
                var text = e.toString()
                if (e < 10) {
                    text = '0' + e.toString()
                }
                return <Select.Option key={text}>{text}:00</Select.Option>
            })
        }
    </Select>
    
    return <Modal 
        open={props.open} 
        onCancel={() => {props.setOpened(false)}}
        title={'Добавить напоминание'}
        okText="Добавить напоминание"
        cancelText="Отмена"
    >
        <div className='create-not__container'>
            <TitledInput 
                title='Напоминание' 
                placeholder='Введите напоминание'
                inputComponent={<Input placeholder='Напоминание'></Input>}
            ></TitledInput>
            <TitledInput 
                title='Регулярность' 
                placeholder='Введите напоминание'
                inputComponent={<RegularitySelect />}
            ></TitledInput>
            <TitledInput 
                title='Выберете время' 
                placeholder='Введите напоминание'
                inputComponent={optionTime}
            ></TitledInput>
        </div>
    </Modal>
}