import UserProfile from '../../commons/molecules/UserProfile';
import { Meta } from '@storybook/react';

export default {
    title: 'Components/UserProfile',
    component: UserProfile,
    argTypes: {
    type: {
        options: ['board', 'comment', 'portfolio'],
        control: { type: 'select' },
    },
},
} as Meta;

export const BoardProfile = (args: any) => <BoardProfile {...args} />;
BoardProfile.args = {
    type:'board',
    username:'hello',
    date:'2020.06.21'
}

export const CommentProfile = (args: any) => <CommentProfile {...args} />;
CommentProfile.args = {
    type:'comment',
    username:'hello',
}

export const PofolProfile = (args: any) => <PofolProfile {...args} />;
CommentProfile.args = {
    type:'portfolio',
    username:'hello',
}