/* 2023-07-04 포트폴리오 작성/수정 페이지 제목,태그 작성 Form - 김다함 */
import { SmallText } from '@/commons/atoms/Typography';
import ContegroyDropDown from '@/commons/molecules/CategoryDropDown';
import Tag from '@/commons/molecules/Tag';
import { FlexColumnWrapper, FlexWrapper } from '@/commons/styles/Containers.styled';
import { PortfolioTitleInput } from '@/commons/styles/Inputs.styled';
import { styled } from 'styled-components';
import tw from 'twin.macro';

interface TitleFormProps {
    isCreated: string;
}

const TitleFormContainer = styled.div`
    ${tw`w-screen px-16 py-7 rounded-t-2xl`};
    background-color: #161616;
    box-shadow: 0 -8px 10px -1px #a9a9a9;
`;

const TitleForm = ({ isCreated }: TitleFormProps) => {
    return (
        <TitleFormContainer>
            <FlexColumnWrapper gap={15}>
                <PortfolioTitleInput placeholder='Title' />
                <FlexWrapper gap={10}>
                    <ContegroyDropDown />
                    <SmallText color='white' className='pt-2'>{isCreated}</SmallText>
                </FlexWrapper>
                <div className='w-[40%] z-0'>
                    <Tag value='JavaScript' />
                    <Tag value='JavaScript' />
                    <Tag value='JavaScript' />
                    <Tag value='JavaScript' />
                    <Tag value='JavaScript' />
                    <Tag value='JavaScript' />
                    <Tag value='JavaScript' />
                    <Tag value='JavaScript' />
                    <Tag value='JavaScript' />
                </div>
                <div className='flex items-between'>
                    <textarea name="" id=""></textarea>

                </div>
            </FlexColumnWrapper>
        </TitleFormContainer>
    )
}

export default TitleForm;