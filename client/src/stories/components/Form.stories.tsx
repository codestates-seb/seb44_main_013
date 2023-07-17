import TitleForm from '@/components/editor/TitleForm';
import { Meta } from '@storybook/react';

export default {
    title: 'Components/Form',
    component: TitleForm,
    argTypes: {
        mode: {
            options: ['DarkMode', 'LightMode'],
            control: { type: 'radio' },
        },
    },
} as Meta;

export const TitleAndTagsForm = (args: any) => <TitleForm {...args} />;
TitleAndTagsForm.args = {
    isCreated: '2023-07-05-WED',
}