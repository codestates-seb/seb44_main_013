import React from 'react';
import TextArea from '../../commons/atoms/TextArea';
import { Meta } from "@storybook/react"

export default {
    title: 'Atoms/Input',
    component: TextArea,
    argTypes: {
        mode: {
            options: ['DarkMode', 'LightMode'],
            control: { type: 'radio' }
        }
    }
} as Meta;

export const ProfileIntroTextArea = (args: any) => <TextArea {...args} />
// ProfileIntroTextArea.args = { category: '웹' };