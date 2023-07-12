import { SearchBox, SearchContainer, SearchIcon } from './Search.styled';

export default function Search({setSearchValue, setEnterPress}: any) {

  // const [searchValue, setSearchValue] = useState('');
  // 위의 상태를 검색창이 있는 곳에 두고 setSearchValue를 Search 컴포넌트로 내려주었어요.
  // 여기서 input 의 value를 setSearchValue로 넣어서 검색창 있는 곳에서 value 값을 받았습니다!
  // 타입은 임시로 any로 두었어요! - 효정

  // const [enterPress, setEnterPress] = useState(false);
  // input에서 엔터키 쳐야 적용되게끔 하는 상태 설정해두었어요!
  // input onKeyDown이 그 코드구요
  // 검색창 있는 페이지에서 렌더링되고 나면 다시 false값으로 주는 코드까지 작성했습니다. - 효정

  const changeValue = (e: any) => {
      setSearchValue(e.target.value)
  }

  const handleKeyPress = (e: any) => {
    if(e.key === 'Enter'){
      setEnterPress(true);
    }
  }
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchBox type="text" onChange={changeValue} onKeyDown={handleKeyPress} />
    </SearchContainer>
  );
}
