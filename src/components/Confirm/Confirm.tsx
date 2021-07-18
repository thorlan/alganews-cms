import Button from '../Button/Button';
import * as C from './Confirm.styles';


export interface ConfirmProps {
    title: string
    onConfirm: () => any
    onCancel: () => any
  }

  export default function Confirm (props: ConfirmProps) {
    return <C.ConfirmWrapper>
      <C.ConfirmTitle>{props.title}</C.ConfirmTitle>
      <C.ConfirmButtonDisplay>
        <Button variant="danger" label="Não" onClick={props.onCancel}/>
        <Button variant="primary" label="Sim" onClick={props.onConfirm}/>
      </C.ConfirmButtonDisplay>
    </C.ConfirmWrapper>
  }