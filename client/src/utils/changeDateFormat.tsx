/* 2023-07-18 자주 쓰는 함수를 정리하고 싶은데 파일명을 어떻게 해야할지 모르겠다 - 김다함 */

export const changeDateFormat = (date: string) => new Date(date.substr(0, 10)).toDateString();