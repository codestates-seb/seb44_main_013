/* 2023-07-04 포트폴리오 작성/수정 페이지 제목,태그 작성 Form - 김다함 */
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PortfolioContent, Tag as tag, TitleForm as titleForm } from '@/types';
import { categoryTags } from '@/assets/data/categoryTags';

import { category, openCategory } from '@/modules/categorySlice';
import { setTag, tags } from '@/modules/tagSlice';
import { call } from '@/utils/apiService';

import { PortfolioTitleInput, TitleFormContainer } from '@/components/editor/Editor.styled';
import { FlexColumnWrapper, FlexWrapper } from '@/commons/styles/Containers.styled';
import { PortfolioEditButton } from '@/pages/portfolio-edit/PortfolioEdit.styled';
import { InputLabelText, SmallText } from '@/commons/atoms/text/Typography';
import { DarkTextArea } from '@/components/editor/Editor.styled';
import { ModalContainer } from '@/components/modal/Modal.styled';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { BsCheck2 } from 'react-icons/bs';
import Tag from '@/commons/molecules/tag/Tag';
import ContegroyDropDown from '@/commons/molecules/dropdown/CategoryDropDown';

export default function TitleForm({ setIsTitleFormOpen, htmlContent, portfolio, setPortfolio, portfolioId }: titleForm) {
  const { register, handleSubmit, setValue, getValues, formState: { isSubmitting } } = useForm();
  const selectedCategory = useSelector(category);
  const selectedTags = useSelector(tags);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postPortfolio = (body: PortfolioContent) => call('/portfolios', 'POST', body);
  const modifyPortfolio = (body: PortfolioContent) => call(`/portfolios/${portfolioId}`, 'PATCH', body);

  const alertValidation = (message: string) => { alert(message); return false };
  const checkValidation = (data: FieldValues) => {
    if (htmlContent.length < 50) return alertValidation('본문을 50자 이상 작성해주세요.');
    if (data.title.length < 5) return alertValidation('제목을 5글자 이상 작성해주세요.');
    if (selectedTags.length < 1) return alertValidation('태그를 최소 1개 이상 선택해주세요.');
    if (data.explains > 300) return alertValidation('소개글은 최대 300자까지 작성 가능합니다.');
    return true;
  }

  const saveFields = () => {
    setPortfolio({
      title: getValues("title"),
      category: selectedCategory,
      tags: selectedTags,
      explains: getValues("explains"),
    })
  }

  const submitPortfolio: SubmitHandler<FieldValues> = (data: FieldValues) => {
    const validate = checkValidation(data);
    if (!validate) return;
    const body = {
      title: data.title,
      content: htmlContent,
      category: selectedCategory,
      tags: selectedTags,
      explains: data.explains,
    };
    if (portfolioId)
      modifyPortfolio(body).then(() => navigate(`/portfolios/${portfolioId}`))
    else postPortfolio(body).then((res) => navigate(`/portfolios/${res.portfolioId}`));
  };

  useEffect(() => {
    if (portfolio) {
      setValue("title", portfolio.title);
      setValue("explains", portfolio.explains);
      dispatch(setTag(portfolio.tags));
    }
    register("htmlContent");
    setValue("htmlContent", htmlContent);
  }, [])

  return (
    <ModalContainer>
      <TitleFormContainer>
        <FlexColumnWrapper gap={15}>
          <PortfolioTitleInput placeholder='Title' {...register("title")} />
          <FlexWrapper gap={10}>
            <ContegroyDropDown />
            {portfolio?.createdAt &&
              <SmallText color='white' className='pt-2'>{portfolio.createdAt}</SmallText>
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
            <DarkTextArea className='w-[45%] h-20' {...register('explains')} />
            <FlexWrapper gap={15}>
              <PortfolioEditButton color='dark'
                onClick={() => {
                  saveFields();
                  setIsTitleFormOpen(false);
                  dispatch(openCategory(false));
                }}>
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