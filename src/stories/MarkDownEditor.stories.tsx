import { Story, Meta } from '@storybook/react';

import MarkDownEditor, { MarkDownEditorProps } from '../app/components/MarkDownEditor';

export default {
    title: 'Example/MarkDownEditor',
    component: MarkDownEditor,
   /*  argTypes: {
        onLogout: {
          action: 'logout'
        }
    } */
    
} as Meta<typeof MarkDownEditor>;

const Template: Story<MarkDownEditorProps> = (args) =>
  <div>
    <MarkDownEditor {...args} />
  </div>


export const Default = Template.bind({})
Default.args = {
}



