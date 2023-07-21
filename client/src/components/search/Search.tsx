import { ChangeEventHandler } from 'react';
import { SearchBox, SearchContainer, SearchIcon } from './Search.styled';

interface SearchProps {
  setSearchValue: any,
  currentSearch: string,
  data: any,
  setSearchs: any,
}

export default function Search({ setSearchValue, currentSearch, data, setSearchs }: SearchProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };
  console.log(data);

  const 엔터치면검색 = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmpty = (search: string) => search === '';
    const isEmptyCurrentSearch = isEmpty(currentSearch);

    if (isEmptyCurrentSearch) {
      return setSearchs(data);
    }

    const toLowerCasify = (text: string) => text.toLowerCase();
    const isIncludedCurrentSearchToTitle = (text: string) => toLowerCasify(text).includes(toLowerCasify(currentSearch));
    const isIncludedCurrentSearchToMembername = (text: string) => toLowerCasify(text).includes(toLowerCasify(currentSearch));

    // early return pattern
    if ('data' in data[0]) {
      const filteredData = data.filter((element: any) => {
        return (
          isIncludedCurrentSearchToTitle(element.data.title) ||
          isIncludedCurrentSearchToMembername(element.data.membername)
        )
      });

      return setSearchs(filteredData);
    }

    const filteredData = data.filter((element: any) => {
      return (
        isIncludedCurrentSearchToTitle(element.title) ||
        isIncludedCurrentSearchToMembername(element.name)
      )
    });

    return setSearchs(filteredData);

    // setSearchs(
    //   data.filter(
    //     (element: any) => {
    //       if ('data' in element) {
    //         return (
    //           element.data.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
    //           element.data.membername.toLowerCase().includes(currentSearch.toLowerCase())
    //         )
    //       } else {
    //         return (
    //           element.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
    //           element.content.toLowerCase().includes(currentSearch.toLowerCase())
    //           // element.name.toLowerCase().includes(currentSearch.toLowerCase())
    //           // 이름 받으면 주석 풀고 || 붙여서 처리
    //         )
    //       }
    //     }
    //   )
    // );

  };

  return (
    <SearchContainer onSubmit={엔터치면검색}>
      <SearchIcon />
      <SearchBox type="text" onChange={handleChange} />
    </SearchContainer>
  );
}
