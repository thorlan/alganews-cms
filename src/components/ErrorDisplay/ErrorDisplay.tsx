import * as ED from './ErrorDisplay.styles';
import Icon from '@mdi/react';
import { mdiAlert } from '@mdi/js';
import Heading from '../Typography/Heading';


export interface ErrorDisplayProps {
    small: boolean;
    title?: string;
    message?: string;
}
//title usar os headings q ja temos

function ErrorDisplay({ small, title = 'Erro ao renderizar o componente', message = 'Erro desconhecido' }: ErrorDisplayProps) {

    return <ED.Wrapper>
        <Icon
            size={small ? '24px' : '48px'}
            path={mdiAlert}
        />
        <Heading level={1}>
            {title}
        </Heading>
        <ED.Message>
            {message}
        </ED.Message>

    </ED.Wrapper>
}


export default ErrorDisplay;