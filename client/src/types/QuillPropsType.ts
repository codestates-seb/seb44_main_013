import { Dispatch, SetStateAction } from 'react';

export interface QuillPropsType {
  htmlContent: string;
  setContentHandler: Dispatch<SetStateAction<string>>;
}