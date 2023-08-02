import { Dispatch, SetStateAction } from 'react';

export interface Quill {
  isTitleFormOpen: boolean;
}

export interface TitleFormProps {
  setIsTitleFormOpen: Dispatch<SetStateAction<boolean>>;
}