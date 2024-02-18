import type { Meta, StoryObj } from '@storybook/react';

import PersonIdentity from '../person-identity';

export default {
    title: 'Person Identity',
    component: PersonIdentity,
} as Meta <typeof PersonIdentity>;

export const Primary: StoryObj<typeof PersonIdentity> ={
    args:{
        name: 'Sergio',
        age: '27',
        hobbies:['futbol','billar','comer']
    }
};