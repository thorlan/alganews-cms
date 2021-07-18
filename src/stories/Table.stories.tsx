import { Story, ComponentMeta } from '@storybook/react';

import Table from '../components/Table/Table';

export default {
    title: 'Example/Table',
    component: Table,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as ComponentMeta<typeof Table>;

const Template: Story<{}> = (args) => <Table {...args} />;

export const Default = Template.bind({})
Default.args = {
}

