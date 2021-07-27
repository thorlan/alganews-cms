import { Story, Meta } from '@storybook/react';

import Chart, { ChartProps } from '../components/Chart/Chart';

export default {
    title: 'Example/Chart',
    component: Chart,
} as Meta<typeof Chart>;

const Template: Story <typeof Chart> = (args) => <Chart {...args} />;

export const Default = Template.bind({})
Default.args = {
}

