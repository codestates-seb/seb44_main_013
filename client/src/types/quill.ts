import { Dispatch, SetStateAction } from 'react';

export interface Quill {
  htmlContent: string;
  setContentHandler: Dispatch<SetStateAction<string>>;
  isTitleFormOpen: boolean;
}