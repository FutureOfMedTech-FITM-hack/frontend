import { Alert, DatePicker, Input, Modal } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import react from 'react'
import { useAppDispatch } from '../../../store';
import { createUser } from '../../../store/reducers/patients/asyncThunks';
import { TitledInput } from '../../TitledInput';
import './style.css';


interface ICreateUpdatePatient {
    open: boolean;
    setOpened: (open: boolean) => void;
}

export const CreateUpdatePatient: react.FC<ICreateUpdatePatient> = (props) => {
    const dispatch = useAppDispatch();
    const [fam, setFam] = react.useState(' ');
    const [name, setNam] = react.useState(' ');
    const [midn, setMidn] = react.useState(' ');
    const [dob, setDob] = react.useState(' ');
    const [email, setEmail] = react.useState(' ');

    return <Modal 
        open={props.open}
        title="Добавить пациента"
        okText="Добавить пациента"
        cancelText="Отмена"
        onCancel={() => {
            props.setOpened(false)
        }}
        onOk={() => {
            dispatch(
                createUser({
                    fullname: fam + ' ' + name[0] + '.' + midn[0] + '.',
                    born: dob,
                    email: email
                })
            )
            props.setOpened(false)
        }}
        destroyOnClose
    >
        <div className="patient__content-modal">
            <TitledInput 
                title='Фамилия'
                inputComponent={<Input value={fam} onChange={(e) => {
                    setFam(e.target.value);
                }}></Input>}
            />
            <TitledInput 
                title='Имя'
                inputComponent={<Input
                    value={name}
                    onChange={(e) => {
                        setNam(e.target.value)
                    }}
                ></Input>}
            />
            <TitledInput 
                title='Отчество'
                inputComponent={<Input
                    value={midn}
                    onChange={(e) => {
                        setMidn(e.target.value);
                    }}
                ></Input>}
            />
            <TitledInput 
                title='Дата рождения'
                inputComponent={<DatePicker placeholder='Выберите дату'
                    onChange={(e) => {
                        setDob(e?.toDate().toISOString()!)
                    }}
                ></DatePicker>}
            />
            <TitledInput 
                title='Email'
                inputComponent={<Input
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                ></Input>}
            />
            <TitledInput 
                title='Телефон'
                inputComponent={<MaskedInput
                    mask={"+7(000)000-00-00"}
                ></MaskedInput>}
            />
            <TitledInput 
                title='Телефон доверенного лица'
                inputComponent={<MaskedInput
                    mask={"+7(000)000-00-00"}
                ></MaskedInput>}
            />
            {/* <Alert 
                type='info' 
                message='Если поле “Телефон доверенного лица” остается пустым, то при экстренной ситуации будет вызвана машина скорой помощи'
                showIcon
                
            ></Alert> */}
        </div>
    </Modal>
}