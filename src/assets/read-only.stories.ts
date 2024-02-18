import type { Meta, StoryObj } from '@storybook/react';

import ReadOnly from '../readonly';

export default {
    title: 'ReadOnly',
    component: ReadOnly,
} as Meta <typeof ReadOnly>;

export const Primary: StoryObj<typeof ReadOnly> ={
    args:{
        name: ['Sergio' , ' Gutierrez']
    }
}