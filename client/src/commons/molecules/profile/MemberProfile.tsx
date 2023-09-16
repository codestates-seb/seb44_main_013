/* 2023-07-03 유저 프로필 컴포넌트 - 김다함 */
import { Member } from '@/types';

import { ColumnWrapper, MemberProfileWrapper } from '@/commons/molecules/profile/MemberProfile.styled';
import { SmallText } from '@/commons/atoms/text/Typography';
import Image from '@/commons/atoms/image/Image';
import Label from '@/commons/atoms/text/Label';
import circleNoImg from '@/assets/circleNoImg.png';

interface MemberProfile {
  type: 'board' | 'comment' | 'portfolio' | 'blackboard';
  member: Member;
  date?: string;
}

const ImageSizes: any = {
  board: 65,
  comment: 35,
  portfolio: 100,
  blackboard: 65,
};

interface IComponentFactory {
  [key: string]: JSX.Element;
}

const renderProfile = (type: string, name: string, id: number, date: string) => {
  const ComponentFactory:IComponentFactory = {
    portfolio: <Label text={name} type={type} url={`/members/${id}`} />,
    blackboard: (
    <ColumnWrapper>
      <Label text={name} type={type} url={`/members/${id}`} />
      <SmallText color='white'>{date}</SmallText>
    </ColumnWrapper>
    ),
    comment: (
      <ColumnWrapper>
        <Label text={name} type={type} url={`/members/${id}`} />
        <SmallText color='white'>{date}</SmallText>
      </ColumnWrapper>
    ),
    board: (
      <ColumnWrapper>
        <Label text={name} type={type} url={`/members/${id}`} />
        <SmallText color='white'>{date}</SmallText>
      </ColumnWrapper>
    )
  }

  return ComponentFactory[type];
}

export default function MemberProfile ({ type, member, date }: MemberProfile) {
  const itemPic = member.imageUrl === null ? circleNoImg : member.imageUrl;

  return (
    <MemberProfileWrapper gap={15}>
      <Image src={itemPic} url={`/members/${member.id}`} shape="circle" size={ImageSizes[type]} />
      {renderProfile(type, member.name, member.id, date as string)}
    </MemberProfileWrapper>
  );
};