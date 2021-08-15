import { useEffect } from "react";
import styled from "styled-components";
import PostService from "../../sdk/services/Post.service";
import Profile from "../components/Profile";

export default function EditorsList() {

    useEffect(() => {

        const posts = PostService.getAllPosts({
            size:20,
            page:0,
            sort:['id', 'desc']
        });
        console.log(posts);

        const post = PostService.getExistingPost(1);
        console.log(post);
    }, [])


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