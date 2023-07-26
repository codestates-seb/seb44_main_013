import ContegroyDropDown from '@/commons/molecules/CategoryDropDown';
import { Meta } from '@storybook/react';

export default {
    title: 'Components/DropDown',
    component: ContegroyDropDown,
    argTypes: {
        mode: {
            options: ['DarkMode', 'LightMode'],
            control: { type: 'radio' },
        },
    },
} as Meta;

export const CategoryDropDown = (args: any) => <ContegroyDropDown {...args} />;
