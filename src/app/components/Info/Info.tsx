import Icon from "@mdi/react";
import { mdiInformation } from "@mdi/js";
import * as I from './Info.styles';


export interface InfoProps {
    title: string
    description: string
}

export default function Info({ title, description }: InfoProps) {



    return <I.Wrapper>
        <I.InnerContent>
        <I.InfoIcon>
            <Icon 
                path={mdiInformation}
                color="#09f"
                size="48px"
                />
        </I.InfoIcon>
            <I.Messages>
                <I.Title>{title}</I.Title>
                <p>{description}</p>
            </I.Messages>

        </I.InnerContent>
    </I.Wrapper>
}