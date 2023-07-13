import React from 'react';
import CategoryButton, { CategoryBtnProps } from '../../../commons/atoms/buttons/category/CategoryButton';
import { Meta } from "@storybook/react"

export default {
    title: 'Atoms/Buttons',
    component: CategoryButton,
    argTypes: {
        mode: {
            options: ['DarkMode', 'LightMode'],
            control: { type: 'radio' }
        }
    }
} as Meta;

export const CategoryBtn = (args: CategoryBtnProps) => <CategoryButton {...args} />
CategoryBtn.args = { category: '웹' };