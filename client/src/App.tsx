import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Main from './pages/main/Main';
import CommunityDetail from './pages/community-detail/CommunityDetail';
import CommunityMain from './pages/community-main/CommunityMain';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import MyPage from './pages/mypage/Mypage';
import MainLayout from './commons/styles/layout/MainLayout';
// import { GlobalStyle } from './commons/styles/GlobalStyled';
import PortfolioDetail from './pages/portfolio-detail/PortfolioDetail';
import PortfolioEdit from './pages/portfolio-edit/PortfolioEdit';
import CHeaderLayout from './commons/styles/layout/CHeaderLayout';
import AddCommunity from './pages/community-add/AddCommunity';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <GlobalStyle /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/members" element={<MyPage />} />
          </Route>

          <Route element={<CHeaderLayout />}>
            <Route path="/boards" element={<CommunityMain />} />
            <Route path="/boards/:board_id" element={<CommunityDetail/>}/>
            <Route path="/boards/edit" element={<AddCommunity/>}/>
          </Route>

          <Route path="/portfolios/:portfolio_id" element={<PortfolioDetail />} />
          <Route path="/portfolio/edit" element={<PortfolioEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-left' />
    </QueryClientProvider>
  );
};

export default App;
