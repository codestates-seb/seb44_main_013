/* 2023-07-03 유저 프로필 컴포넌트 - 김다함 */
import { Member } from '@/types';

import { ColumnWrapper, MemberProfileWrapper } from '@/commons/molecules/profile/MemberProfile.styled';
import { SmallText } from '@/commons/atoms/text/Typography';
import Image from '@/commons/atoms/image/Image';
import Label from '@/commons/atoms/text/Label';
import nonUser from '@/assets/userImage/nonUser.svg';

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

const MemberProfile = ({ type, member, date }: MemberProfile) => {
  const itemPic = member.imageUrl === null ? nonUser : member.imageUrl;
  const src = typeof itemPic === 'string' ? itemPic : undefined;
  return (
    <MemberProfileWrapper gap={15}>
      <Image src={src} url={`/members/${member.id}`} shape="circle" size={ImageSizes[type]} />
      {type === 'portfolio' && <Label text={member.name} type={type} url={`/members/${member.id}`} />}
      {type !== 'portfolio' && (
        <ColumnWrapper>
          <Label text={member.name} type={type} url={`/members/${member.id}`} />
          <SmallText color={type === 'blackboard' ? 'white' : ''}>{date}</SmallText>
        </ColumnWrapper>
      )}
    </MemberProfileWrapper>
  );
};

export default MemberProfile;
