import { getEditorDescription } from "danielbonifacio-sdk";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import useEditors from "../../core/hooks/userEditors";
import Profile from "../components/Profile";

export default function EditorsList() {

    const { editorsList, loading, fetchAllEditors } = useEditors();

    useEffect(() => {
        fetchAllEditors();
    }, [fetchAllEditors]) //código só executa na inicialização do componente!

    if (!editorsList.length) {
        return <EditorsListWrapper>
            <Skeleton width={328} height={82} />
            <Skeleton width={328} height={82} />
            <Skeleton width={328} height={82} />
        </EditorsListWrapper>
    }

    return <EditorsListWrapper>

        {editorsList.map(editor => {
            return <Profile
                key={editor.id}
                title={editor.name}
                description={getEditorDescription(new Date(editor.createdAt))}
                imgSource={editor.avatarUrls.small}
                editorId={editor.id}
            />
        })}

        {
            loading ? 'Buscando mais informações' : null
        }

    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
`;