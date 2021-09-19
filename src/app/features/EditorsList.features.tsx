import { getEditorDescription, User, UserService } from "orlandini-sdk";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import Profile from "../components/Profile";

export default function EditorsList() {

    const [editors, setEditors] = useState<User.EditorSummary[]>([]);

    useEffect(() => {
        UserService.getAllEditors().then(setEditors);
    }, []) //código só executa na inicialização do componente!

    if(!editors.length){
        return <EditorsListWrapper>
            <Skeleton width={328} height={82}/>
            <Skeleton width={328} height={82}/>
            <Skeleton width={328} height={82}/>
        </EditorsListWrapper>
    }

    return <EditorsListWrapper>

        {
            editors.map(editor => {
                return <Profile
                    key={editor.id}
                    title={editor.name}
                    description={getEditorDescription(new Date(editor.createdAt))}
                    imgSource={editor.avatarUrls.small}
                    editorId={editor.id}
                />
            })
        }

    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
`;