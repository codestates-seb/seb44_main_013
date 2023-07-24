/* 2023-07-22 htmlContent 전환(?) 훅 - 김다함 */
import dompurify from "dompurify";


export default function useChangeHtmlContent() {
  const sanitizer = dompurify.sanitize;

  const sanitize = (htmlContent: string) => {
    return sanitizer(htmlContent,
      { ALLOWED_TAGS: ["iframe", "img"], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] })
  };

  const setElementInlineStyle = (htmlContent: string) => {
    let copiedHtmlContent = htmlContent;
    copiedHtmlContent = copiedHtmlContent.replace(/<img/g, '<img style="width:100%; height:auto;"');
    copiedHtmlContent = copiedHtmlContent.replace(/<iframe/g, '<iframe style="width:100%;" height="696"');
    return copiedHtmlContent;
  }

  return [sanitize, setElementInlineStyle] as const;
};