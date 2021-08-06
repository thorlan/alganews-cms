import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import Button, { ButtonProps } from '../app/components/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


const removerIcon = <Icon
    size={'24px'}
    path={mdiDelete}
/>

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'resetar senha',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  label: 'resetar senha',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  label: 'resetar senha',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'text',
  disabled: true,
  label: 'resetar senha',
};

export const RemoverImagem = Template.bind({});
RemoverImagem.args = {
  variant: 'removerImagem',
  disabled: false,
  label: 'Remover imagem',
  children: removerIcon
};

