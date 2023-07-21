import { SearchBox, SearchContainer, SearchIcon } from './Search.styled';

export default function Search({ setSearchValue, currentSearch, data, setSearchs }: any) {
  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };
  // console.log(data);

  const 엔터치면검색 = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentSearch === '') {
      setSearchs(data);
    } else {
      setSearchs(
        data.filter((element: any) => {
          if ('data' in element) {
            return (
              element.data.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
              element.data.membername.toLowerCase().includes(currentSearch.toLowerCase())
            );
          } else {
            return (
              element.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
              element.content.toLowerCase().includes(currentSearch.toLowerCase())
              // element.name.toLowerCase().includes(currentSearch.toLowerCase())
              // 이름 받으면 주석 풀고 || 붙여서 처리
            );
          }
        })
      );
    }
  };

  return (
    <SearchContainer onSubmit={엔터치면검색}>
      <SearchIcon />
      <SearchBox type="text" onChange={handleChange} />
    </SearchContainer>
  );
}
