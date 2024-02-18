import type { Meta, StoryObj } from '@storybook/react';

import AliasesUnion from '../aliases-union';

export default {
    title: 'AliasesUnion',
    component: AliasesUnion,
} as Meta <typeof AliasesUnion>;

export const Primary: StoryObj<typeof AliasesUnion> ={
    args:{
        ubication: 'Bucaramanga'
    }
}