import { ComponentStory, ComponentMeta } from '@storybook/react';

import SessionController, { SessionControllerProps } from '../app/components/SessionController';

export default {
    title: 'Example/SessionController',
    component: SessionController,
    argTypes: {
        onLogout: {
          action: 'logout'
        }
    }
    
} as ComponentMeta<typeof SessionController>;

const Template: ComponentStory<typeof SessionController> = (args) => <SessionController {...args} />;

export const Default = Template.bind({})
Default.args = {
    name: 'Thiago Orlandini Carvalho Antunes',
    description: 'uma descrição qualquer'
}



