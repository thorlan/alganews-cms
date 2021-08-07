import * as P from './Profile.styles';

export interface ProfileProps {
    title: string;
    description: string;
    imgSource: string;
}

function Profile(props: ProfileProps) {



    return <P.Wrapper tabIndex={0} href={"#"}>
        <P.Avatar src={props.imgSource} />
        <P.Info>
            <P.Name>{props.title}</P.Name>
            <P.Description>{props.description}</P.Description>
        </P.Info>
    </P.Wrapper>
}

export default Profile