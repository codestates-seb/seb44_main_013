/* 2023-07-04 포트폴리오 작성/수정 페이지 제목,태그 작성 Form - 김다함 */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { Tag, TitleFormProps } from '@/types';
import useTitleForm from '@/components/titleForm/useTitleForm';
import { categoryTags as CategoryTags } from '@/assets/data/category';
import { portfolio, setExplain, setTitle } from '@/store/portfolioSlice';

import {
  Row,
  Form,
  CreatedAt,
  InputLabel,
  GoBackButton,
  SubmitButton,
  TagsContainer,
  ExplainTextArea,
  TitleFormContainer,
  PortfolioTitleInput,
  BackgroundContainer,
} from '@/components/titleForm/TitleForm.styled';
import ContegroyDropDown from '@/commons/molecules/dropdown/CategoryDropDown';
import PortfolioTag from '@/commons/molecules/tag/Tag';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { BsCheck2 } from 'react-icons/bs';

export default function TitleForm({ setIsTitleFormOpen }: TitleFormProps) {
  const [categoryTags, setCategoryTags] = useState(CategoryTags);

  const savedPortfolio = useSelector(portfolio);
  const selectedCategory = savedPortfolio.category;
  const selectedTags = savedPortfolio.tags;

  const dispatch = useDispatch();

  const { submitPortfolio } = useTitleForm();

  const clickGoBackButton = () => {
    setIsTitleFormOpen(false);
  }

  useEffect(() => {
    const copiedCurrentTags = JSON.parse(JSON.stringify(categoryTags));
    const originTags = copiedCurrentTags[selectedCategory].tags as Tag[];
    const selectedTagIds = selectedTags.map((tag: Tag) => tag.id);
    const updatedTags = originTags.map((tag: Tag) => {
      return {
        ...tag,
        isSelected: selectedTagIds.includes(tag.id)
      }
    });
    copiedCurrentTags[selectedCategory].tags = updatedTags;
    setCategoryTags(copiedCurrentTags);
  }, []);

  return (
    <BackgroundContainer>
      <TitleFormContainer>
        <Form gap={15}>
          <PortfolioTitleInput placeholder='Title' value={savedPortfolio.title} onChange={(e) => dispatch(setTitle(e.target.value))} />
          <Row gap={10}>
            <ContegroyDropDown />
            {savedPortfolio.createdAt &&
              <CreatedAt color='white' className='pt-2'>{savedPortfolio.createdAt}</CreatedAt>
            }
          </Row>
          <TagsContainer>
            {
              categoryTags[selectedCategory].tags.map((tag: Tag) => {
                return <PortfolioTag tag={tag} key={tag.id} categoryTags={categoryTags} setCategoryTags={setCategoryTags} />
              })
            }
          </TagsContainer>
          <InputLabel color='#c8c9cc'>소개글</InputLabel>
          <ExplainTextArea value={savedPortfolio.explains} onChange={(e) => dispatch(setExplain(e.target.value))} />
          <Row gap={15}>
            <GoBackButton color='dark' onClick={clickGoBackButton}>
              <RiArrowGoBackFill size='25' color='white' />
            </GoBackButton>
            <SubmitButton color='light' onClick={submitPortfolio}>
              <BsCheck2 size='25' color='black' />
            </SubmitButton>
          </Row>
        </Form>
      </TitleFormContainer>
    </BackgroundContainer>
  )
}