import { Input, Modal } from 'antd'
import react from 'react'
import { TitledInput } from '../../TitledInput'
import './style.css'

interface ISosModal{
    open: boolean;
    onOpenChagen: (open: boolean) => void;
}

export const SosModal: react.FC<ISosModal> = (props) => {
    return <Modal
        title="SOS"
        open={props.open}
        onOk={() => {
            props.onOpenChagen(false);
        }}
        onCancel={() => {
            props.onOpenChagen(false);
        }}
        destroyOnClose
        okText={"Вызвать скорую"}
        cancelText="Закрыть"
    >
        <div className="sos__container">
            <TitledInput 
                title='Телефон пациента'
                inputComponent={<Input value={'+7(999)678-35-52'}/>
                }
            />
            <TitledInput 
                title='Телефон доверительного лица'
                inputComponent={<Input value={'+7(999)987-78-89'}/>
                }
            />
        </div>
    </Modal>
}