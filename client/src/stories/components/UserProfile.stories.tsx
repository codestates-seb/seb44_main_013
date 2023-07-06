import Label from '@/commons/atoms/Label';
import UserProfile from '@/commons/molecules/UserProfile';
import Image from '@/commons/atoms/Image';
import userImg from '@/assets/userImg.jpg';
import { FlexColumnWrapper, FlexContainer } from '@/commons/styles/Containers.styled';
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

const ImageSizes:any = {
    board: 65,
    comment: 35,
    portfolio: 100,
}

const LabelSizes:any = {
    board: 20,
    comment: 12,
    portfolio: 30
}

const Template: any = (args:any) => (
    <FlexContainer gap={15}>
        <Image url={userImg} shape='circle' size={ImageSizes[args.type]}/>
        { args.type === 'board' ?
            <FlexColumnWrapper gap={0}>
                <Label text={args.username} size={LabelSizes[args.type]}/>
                <span>{args.date}</span>
            </FlexColumnWrapper>
            :
            <Label text={args.username} size={LabelSizes[args.type]}/>
        }
    </FlexContainer>
);

export const BoardProfile = Template.bind({});
BoardProfile.args = {
    type:'board',
    username:'username',
    date:'2020.06.21'
}

export const CommentProfile = Template.bind({});
CommentProfile.args = {
    type:'comment',
    username:'username',
}

export const PofolProfile = Template.bind({});
CommentProfile.args = {
    type:'portfolio',
    username:'username',
}