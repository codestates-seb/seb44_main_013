/* 2023-07-22 htmlContent 전환(?) 훅 - 김다함 */
import dompurify from "dompurify";

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const media = ['iframe', 'img'];
const inlineElements = ['span', 'u', 'a', 'strong', 's', 'em'];
const blockElements = ['p', 'br'];

const ALLOWED_TAGS = [...headings, ...media, ...inlineElements, ...blockElements];

export default function useChangeHtmlContent() {
  const sanitizer = dompurify.sanitize;

  const sanitize = (htmlContent: string) => {
    return sanitizer(htmlContent,
      {
        ALLOWED_TAGS: ALLOWED_TAGS,
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'href']
      })
  };

  const setElementInlineStyle = (htmlContent: string) => {
    let copiedHtmlContent = htmlContent;
    copiedHtmlContent = copiedHtmlContent.replace(/<img/g, '<img style="width:100%; height:auto;"');
    copiedHtmlContent = copiedHtmlContent.replace(/<iframe/g, '<iframe style="width:100%;" height="696"');
    return copiedHtmlContent;
  }

  return [sanitize, setElementInlineStyle] as const;
};