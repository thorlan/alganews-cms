import { useState } from "react";
import { Tag } from "react-tag-input";
import WordPriceCounter from "../components/WordPriceCounter";
import Button from "../components/Button/Button";
import styled from "styled-components";
import ImageUpload from "../components/ImageUpload";
import Input from "../components/Input/Input";
import MarkDownEditor from "../components/MarkDownEditor";
import TagInput from "../components/TagInput";
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown";
import React from "react";
import info from "../../core/utils/info";
import PostService from "../../sdk/services/Post.service";
import Loading from "../components/Loading/Index";

export default function PostForm() {

    const [tags, setTags] = useState<Tag[]>([]);
    const [body, setBody] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');

    const [publishing, setPublishing] = useState<boolean>(false);

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        try {
            setPublishing(true);

            const newPost = {
                body,
                title,
                tags: tags.map(tag => tag.text),
                imageUrl,
            }

            const insertedPost = await PostService.insertNewPost(newPost);

            info({
                title: 'Post salvo com sucesso',
                description: 'Você acabou de criar o post com o id ' + insertedPost.id
            })

        } finally {
            setPublishing(false);
        }

    }


    return <PostFormWrapper onSubmit={handleFormSubmit}>

        <Loading show={publishing} />

        <Input
            label="título"
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
            placeholder="e.g.: Como fiquei rico aprendendo React"
        />
        <ImageUpload
            label="Thumbnail do post"
            onImageUpload={setImageUrl}
        />
        <MarkDownEditor
            onChange={setBody}
        />
        <TagInput
            placeholder="Insira as tags deste post"
            tags={tags}
            onAdd={tag => setTags([...tags, tag])}
            onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
        />

        <PostFormSubmitWrapper>
            <WordPriceCounter
                wordsCount={countWordsInMarkdown(body)}
                pricePerWord={0.10}
            />

            <Button variant='primary' label='Salvar post' type='submit' />
        </PostFormSubmitWrapper>

    </PostFormWrapper>
}

const PostFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const PostFormSubmitWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
`;