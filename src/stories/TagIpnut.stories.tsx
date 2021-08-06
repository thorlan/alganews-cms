import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { Tag } from 'react-tag-input';
import TagInput, { TagInputProps } from '../app/components/TagInput';

export default {
    title: 'Example/TagInput',
    component: TagInput,
} as Meta<typeof TagInput>;

const Template: Story<TagInputProps> = (args) =>
    <div>
        <TagInput {...args} />
    </div>

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Insira as tags deste post',
    tags: [{ id: '1', text: 'JavaScript' }],
};

export const VariousTags = Template.bind({});
VariousTags.args = {
    placeholder: 'Insira as tags deste post',
    tags: [
        { id: '1', text: 'JavaScript' },
        { id: '2', text: 'Java' },
        { id: '3', text: 'React' },
        { id: '4', text: 'Docker' },
        { id: '5', text: 'Kubernetes' },
        { id: '6', text: 'Camel' },
        { id: '7', text: 'Junit' },
    ],
};

export function WorkingLiveExample() {

    const [tags, setTags] = useState<Tag[]>([]);

    return <TagInput
        placeholder="Insira as tags deste post"
        tags={tags}
        onAdd={tag => setTags([...tags,tag])}
        onDelete={index => setTags(tags.filter((tag,i) => i !== index))}
    />
}

