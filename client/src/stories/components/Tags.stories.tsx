import React from 'react';
import Tag from '@/commons/molecules/Tag';
import { Meta } from "@storybook/react"

export default {
    title: 'Components/Tag',
    component: Tag,
    argTypes: {
        mode: {
            options: ['DarkMode', 'LightMode'],
            control: { type: 'radio' }
        }
    }
} as Meta;

export const PortfolioTag = (args: any) => <Tag {...args} />
PortfolioTag.args = {
    value: 'JavaScript',
    isSelected: true
};