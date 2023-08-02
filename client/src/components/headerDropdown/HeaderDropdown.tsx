import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

import { VscBell } from 'react-icons/vsc';
import { HDropSection, HDropWrapper, ModalLink } from './HeaderDropdown.styled';
import { login } from '@/store/loginSlice';

export default function HeaderDropwdown() {
  ///link와 navigate를 혼용해도 되나?
  const dispatch = useDispatch();
  // const [, , removeCookies] = useCookies();
  const loginState = useSelector((state: RootState) => state.loginSlice.isLogin);
  const memberRole = localStorage.getItem('memberRole');
  const memberId = localStorage.getItem('memberId');
  const handleLogout = () => {
    dispatch(login({ isLogin: false }));
    console.log('로그아웃 실행');
    console.log(loginState);
  };

  return (
    <HDropWrapper>
      <HDropSection>
        <ModalLink>
          <div className="mr-1">
            <VscBell size="10" />
          </div>
          Alarm
        </ModalLink>
        <ModalLink>
          <Link to={`/members/${memberId}`}>My Page</Link>
        </ModalLink>
        {memberRole === 'PARTNER' && (
          <ModalLink>
            <Link to="/portfolio/edit">New Portfolio</Link>
          </ModalLink>
        )}
        <ModalLink onClick={handleLogout}>Log Out</ModalLink>
      </HDropSection>
    </HDropWrapper>
  );
}
