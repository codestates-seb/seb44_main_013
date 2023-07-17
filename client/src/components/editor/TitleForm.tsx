/* 2023-07-04 포트폴리오 작성/수정 페이지 제목,태그 작성 Form - 김다함 */
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import tw from 'twin.macro';

import { categoryTags } from '@/assets/data/categoryTags';
import { Tag as tag } from '@/types';
import { tags } from '@/modules/tagSlice';
import { call } from '@/utils/apiService';

import { FlexColumnWrapper, FlexWrapper } from '@/commons/styles/Containers.styled';
import { InputLabelText, SmallText } from '@/commons/atoms/Typography';
import { PortfolioEditButton } from '@/commons/styles/Buttons.styled';
import { PortfolioTitleInput } from '@/commons/styles/Inputs.styled';
import { category, openCategory } from '@/modules/categorySlice';
import { DarkTextArea } from '@/commons/styles/Inputs.styled';
import { ModalContainer } from '../modal/Modal.styled';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { BsCheck2 } from 'react-icons/bs';
import Tag from '@/commons/molecules/Tag';
import ContegroyDropDown from '@/commons/molecules/CategoryDropDown';

const TitleFormContainer = styled.div`
      ${tw`w-screen px-16 py-7 rounded-t-2xl z-20 bottom-0 absolute`};
      background-color: #161616;
      box-shadow: 0 -8px 10px -1px #a9a9a9;
  `;

interface TitleForm {
  setIsTitleFormOpen: Dispatch<SetStateAction<boolean>>;
  htmlContent: string;
  createdAt: string;
}

export default function TitleForm({ createdAt = '', setIsTitleFormOpen, htmlContent }: TitleForm) {
  const { register, handleSubmit, setValue, formState: { isSubmitting } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedCategory = useSelector(category);
  const selectedTags = useSelector(tags);

  const postPortfolio = (body: any) => call('/portfolios', 'POST', body);

  useEffect(() => {
    register("htmlContent", { required: true, minLength: 50 });
    setValue("htmlContent", htmlContent);
  }, [register]);

  const submitPortfolio: SubmitHandler<FieldValues> = async (data) => {
    postPortfolio({
      title: data.title,
      content: htmlContent,
      category: selectedCategory,
      tags: selectedTags,
      explains: data.explains,
    }).then((res) => navigate(`/portfolios/${res.portfolioId}`));
  };

  return (
    <ModalContainer>
      <TitleFormContainer>
        <FlexColumnWrapper gap={15}>
          <PortfolioTitleInput placeholder='Title' {...register("title", { required: true, minLength: 5 })} />
          <FlexWrapper gap={10}>
            <ContegroyDropDown />
            {createdAt &&
              <SmallText color='white' className='pt-2'>{createdAt}</SmallText>
            }
          </FlexWrapper>
          <div className='flex gap-1.5 w-[40%] flex-wrap z-0'>
            {
              categoryTags[selectedCategory].tags.map((tag: tag) => {
                return <Tag tag={tag} key={tag.tagId} />
              })
            }
          </div>
          <InputLabelText color='#c8c9cc'>소개글</InputLabelText>
          <div className='flex justify-between'>
            <DarkTextArea className='w-[42%] h-20' {...register('explains', { required: true, maxLength: 300 })} />
            <FlexWrapper gap={15}>
              <PortfolioEditButton color='dark'
                onClick={() => { setIsTitleFormOpen(false); dispatch(openCategory(false)) }}>
                <RiArrowGoBackFill size='25' color='white' />
              </PortfolioEditButton>
              <PortfolioEditButton color='light' onClick={handleSubmit(submitPortfolio)} disabled={isSubmitting}>
                <BsCheck2 size='25' color='black' />
              </PortfolioEditButton>
            </FlexWrapper>
          </div>
        </FlexColumnWrapper>
      </TitleFormContainer>
    </ModalContainer>
  )
}