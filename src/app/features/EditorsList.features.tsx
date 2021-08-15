import { useEffect, useState } from "react";
import styled from "styled-components";
import { User } from "../../sdk/@types";
import UserService from "../../sdk/services/User.service";
import getEditorDescription from "../../sdk/utils/getEditorDescription";
import Profile from "../components/Profile";

export default function EditorsList() {

    const [editors, setEditors] = useState<User.EditorSummary[]>([]);

    useEffect(() => {
        UserService.getAllEditors().then(setEditors);
    }, []) //código só executa na inicialização do componente!

    return <EditorsListWrapper>

        {
            editors.map(editor => {
                return <Profile
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