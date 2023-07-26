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

  const enterToSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmpty = (search: string) => search === '';
    const isEmptyCurrentSearch = isEmpty(currentSearch);

    if (isEmptyCurrentSearch) {
      return setSearchs(data);
    }

    const toLowerCasify = (text: string) => {
      if(text === undefined || text === null){
        return ''
      }
      return text.toLowerCase();
    };
    const isIncludedCurrentSearchToTitle = (text: string) => toLowerCasify(text).includes(toLowerCasify(currentSearch));
    const isIncludedCurrentSearchToContent = (text: string) => toLowerCasify(text).includes(toLowerCasify(currentSearch));
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
        isIncludedCurrentSearchToMembername(element.name) ||
        isIncludedCurrentSearchToContent(element.content)
      )
    });

    return setSearchs(filteredData);

  };

  return (
    <SearchContainer onSubmit={enterToSearch}>
      <SearchIcon />
      <SearchBox type="text" onChange={handleChange} />
    </SearchContainer>
  );
}
