import { AskCommisionBtn } from '@/commons/atoms/buttons/Button.styled';
import { BsArrowReturnLeft } from 'react-icons/bs';
import {
  ButtonHeader,
  ContentContainer,
  PortfolioContainer,
  UserCard,
  UserContainer,
} from './PortfolioDetail.styled';
import LikeBtn from '@/commons/atoms/buttons/LikeBtn';
import Bookmark from '@/components/bookmark/Bookmark';
import UserProfile from '@/commons/molecules/UserProfile';
import { Center, FlexColumnContainer, FlexWrapper } from '@/commons/styles/Containers.styled';
import Tag from '@/commons/molecules/Tag';
import { LabelText } from '@/commons/atoms/Typography';

interface PortfolioDetialProps {
  content: 'PortfolioType'
}

export default function PortfolioDetail({ content }: PortfolioDetialProps) {
  return (
    <FlexColumnContainer gap={10} bg='rgba(16, 16, 21, 1)'>
      <ButtonHeader>
        <BsArrowReturnLeft size={30} color='white' />
      </ButtonHeader>
      <ContentContainer>
        <PortfolioContainer>
          {content}
        </PortfolioContainer>
        <UserContainer>
          <UserCard>
            <FlexWrapper gap={0} className='justify-between'>
              <LikeBtn />
              <Bookmark />
            </FlexWrapper>
            <UserProfile type="portfolio" username="HOHO" />
            <Center>
              <AskCommisionBtn>의뢰 요청</AskCommisionBtn>
            </Center>
          </UserCard>
          <UserCard>
            <LabelText color='white'>Title</LabelText>
          </UserCard>
          <UserCard>
            <LabelText color='white'>Tags</LabelText>
            <FlexWrapper gap={8}>
              <Tag value="sdfsdfsdlkjflksdjfl" />
              <Tag value="jasdjlfsdjfva" />
              <Tag value="java" />
            </FlexWrapper>
          </UserCard>
        </UserContainer>
      </ContentContainer>
    </FlexColumnContainer>
  );
}
