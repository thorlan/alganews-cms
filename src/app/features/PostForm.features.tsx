import { useState } from "react";
import { Tag } from "react-tag-input";
import WordPriceCounter from "../components/WordPriceCounter";
import Button from "../components/Button/Button";
import styled from "styled-components";
import ImageUpload from "../components/ImageUpload";
import Input from "../components/Input/Input";
import MarkDownEditor from "../components/MarkDownEditor";
import TagInput from "../components/TagInput";

export default function PostForm() {

    const [tags, setTags] = useState<Tag[]>([]);

    return <PostFormWrapper>
        <Input
            label="título"
            placeholder="e.g.: Como fiquei rico aprendendo React"
        />
        <ImageUpload
            label="Thumbnail do post"
        />
        <MarkDownEditor />
        <TagInput
            placeholder="Insira as tags deste post"
            tags={tags}
            onAdd={tag => setTags([...tags, tag])}
            onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
        />

        <PostFormSubmitWrapper>
            <WordPriceCounter
                wordsCount={2}
                pricePerWord={1}
            />

            <Button variant='primary' label='Salvar post' type='submit' />
        </PostFormSubmitWrapper>

    </PostFormWrapper>
}

const PostFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 24px
`;

const PostFormSubmitWrapper = styled.form`
    display: flex;
    justify-content: space-between;
    gap: 24px
`;