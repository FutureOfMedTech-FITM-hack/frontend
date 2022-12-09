import { Divider, Input, Select } from 'antd'
import react from 'react'
import { TitledInput } from '../../TitledInput'
import { InputNumberQuestion } from '../InputNumberQuestion'
import { TenChoicesQuestion } from '../TenChoicesQuestion'
import questions, { getActiveQuestions, IQuestion, setQuestion } from '../../../store/reducers/questions'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux/es/exports'
import { useAppDispatch } from '../../../store'

export const Question: react.FC<{question: IQuestion, index: number}> = (props) => {
    const dispatch = useAppDispatch();


    return <>
        <TitledInput
            title={'Вопрос ' + props.index}
            inputComponent={
                <Input onChange={() => {}}/>
            }
        ></TitledInput>
        <TitledInput
            title='Тип ответа'
            inputComponent={
                <Select value={props.question.type} onChange={(e) => {
                    dispatch(setQuestion(
                        {
                            index: props.index, 
                            question: {...props.question, type: e}
                        }
                    ))
                }}>
                    <Select.Option key={"ten_choices"}>Шкала от 1 до 10</Select.Option>
                    <Select.Option key={"input"}>Ввод числа</Select.Option>
                </Select>
            }
        ></TitledInput>
        {
            props.question.type == 'input' ? <InputNumberQuestion
                refMax={props.question.refMax!}
                refMin={props.question.refMin!}
                onChange={(refMin, refMax) => {
                    dispatch(setQuestion({index: props.index, question: {...props.question, refMin: refMin, refMax: refMax}}))
                }}
            ></InputNumberQuestion> : <TenChoicesQuestion 
                names={props.question.names!}
                onChange={(names) => {
                    dispatch(setQuestion({
                        index: props.index, question: {...props.question, names: names}
                    }))
                }}
            />
        }
        <Divider></Divider>
    </>
}