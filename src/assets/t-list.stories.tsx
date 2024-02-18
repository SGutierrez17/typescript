import type { Meta, StoryObj } from '@storybook/react';

import List from '../t-list';

export default {
    title: 'List',
    component: List,
    tags: ['autodocs']
} as Meta <typeof List>;

export const Primary: StoryObj<typeof List> ={
    args:{
        items: ['One', 'Two', 'Three'],
        renderItem: (item: unknown) => {
            const content = typeof item === 'string' ? item : 'Invalid type';
            return <span>{content}</span>; 
        }
    }
}