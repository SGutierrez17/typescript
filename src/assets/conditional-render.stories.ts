import type { Meta, StoryObj } from '@storybook/react';

import ConditionalRender from '../conditional-render';

export default {
    title: 'ConditionalRender',
    component: ConditionalRender,
} as Meta <typeof ConditionalRender>;

export const Primary: StoryObj<typeof ConditionalRender> ={
    args:{
        name: 'Sergio',
        age: '27',
        car: 'BMW'
    }
};