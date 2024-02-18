import type { Meta, StoryObj } from '@storybook/react';

import BasicComponents from '../basic-components';

export default {
    title: 'Basic Components',
    component: BasicComponents,
} as Meta <typeof BasicComponents>;

export const Primary: StoryObj<typeof BasicComponents> ={
    args:{
        basic:['Interface', 'Type', 'Functions', 'Classes']
    }
};