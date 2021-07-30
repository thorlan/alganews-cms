import { Story, Meta } from '@storybook/react';

import ImageUpload, { ImageUploadProps } from '../components/ImageUpload';

export default  {
    title: 'Example/ImageUpload',
    component: ImageUpload,
} as Meta<typeof ImageUpload>;

const Template: Story <typeof ImageUpload> = (args) => <ImageUpload {...args} />;

export const Default = Template.bind({})
Default.args = {
    label: 'Thumbnail do post'
}


