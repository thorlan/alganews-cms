import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Profile, { ProfileProps } from '../app/components/Profile';

export default {
    title: 'Example/Profile',
    component: Profile,
} as Meta<typeof Profile>;

const Template: Story<ProfileProps> = (args) => <BrowserRouter>
    <Route>
        <Profile {...args} />
    </Route>
</BrowserRouter>;

export const Default = Template.bind({})

Default.args = {
    title: 'Post não encontrado',
    editorId: 1,
    description: 'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.',
    imgSource: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
}


