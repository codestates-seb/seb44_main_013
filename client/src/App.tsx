import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
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
            <Route path="/boards/detail" element={<CommunityDetail />} />
          </Route>

          <Route path="/portfolios/:portfolioId" element={<PortfolioDetail />} />
          <Route path="/portfolio/edit" element={<PortfolioEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
