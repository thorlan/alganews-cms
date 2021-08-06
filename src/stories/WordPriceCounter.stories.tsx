import { Story, Meta } from '@storybook/react';

import WordPriceCounter, { WordPriceCounterProps } from '../app/components/WordPriceCounter';

export default {
    title: 'Example/WordPriceCounter',
    component: WordPriceCounter,
    argTypes: {
        onLogout: {
          action: 'logout'
        }
    }
    
} as Meta<typeof WordPriceCounter>;

const Template: Story<WordPriceCounterProps> = (args) =>
  <div>
    <WordPriceCounter {...args} />
  </div>


export const Default = Template.bind({})
Default.args = {
    wordsCount: 20,
    pricePerWord: 0.25
}



