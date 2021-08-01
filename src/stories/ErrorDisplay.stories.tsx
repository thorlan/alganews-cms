import { Story, Meta } from '@storybook/react';
import ErrorDisplay, { ErrorDisplayProps } from '../components/ErrorDisplay';

export default {
    title: 'Example/ErrorDisplay',
    component: ErrorDisplay,
} as Meta<typeof ErrorDisplay>;

const Template: Story<ErrorDisplayProps> = (args) =>
    <div>
        <ErrorDisplay {...args} />
    </div>

export const Default = Template.bind({});
Default.args = {
    small: false,
};

export const Small = Template.bind({});
Small.args = {
    small: true,
};

export const CustomTitleAndMessage = Template.bind({});
CustomTitleAndMessage.args = {
    small: false,
    title: 'Custom title here',
    message: 'Custom message here'
};
