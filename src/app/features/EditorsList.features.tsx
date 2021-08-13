import styled from "styled-components";
//import { User } from "../../sdk/@types/User"
import Profile from "../components/Profile";

export default function EditorsList() {

   // const editors: User.EditorSummary[] = [];

    return <EditorsListWrapper>
        <Profile
            title="Thiago Orlandini"
            description="criador de conteúdo há 3 anos"
            imgSource="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            editorId={1}
        />
        <Profile
            title="Teste Nome"
            description="criador de conteúdo há 3 anos"
            imgSource="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            editorId={2}
        />
        <Profile
            title="Adalberto Lindo"
            description="criador de conteúdo há 3 anos"
            imgSource="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            editorId={3}
        />
        <Profile
            title="Antonio Nunes"
            description="criador de conteúdo há 3 anos"
            imgSource="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            editorId={4}
        />
        <Profile
            title="Cristiano Ronaldo"
            description="criador de conteúdo há 3 anos"
            imgSource="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            editorId={5}
        />
    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
`;