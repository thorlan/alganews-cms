import Button from '../Button/Button';
import * as SC from './SessionController.styles';

export interface SessionControllerProps {
    name: string;
    description: string;
    onLogout?: () => any;
}

function SessionController(props: SessionControllerProps) {

    return <SC.Wrapper>
        <SC.Avatar src={'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} alt={'img profile'}></SC.Avatar>
            <SC.Name>{props.name}</SC.Name>
            <SC.Description>{props.description}</SC.Description>
            <Button onClick={props.onLogout} variant={'danger'} label={'Logout'} />
    </SC.Wrapper>
}

export default SessionController