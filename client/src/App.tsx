import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from '@/modules/index';
import { Provider } from 'react-redux';

import Main from './pages/main/Main';
import CommunityDetail from './pages/community-detail/CommunityDetail';
import CommunityMain from './pages/community-main/CommunityMain';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import MyPage from './pages/mypage/Mypage';
import MainLayout from './commons/styles/layout/MainLayout';
import PortfolioDetail from './pages/portfolio-detail/PortfolioDetail';
import PortfolioEdit from './pages/portfolio-edit/PortfolioEdit';
import CHeaderLayout from './commons/styles/layout/CHeaderLayout';
import AddCommunity from './pages/community-add/AddCommunity';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/members" element={<MyPage />} />
          </Route>
          <Route element={<CHeaderLayout />}>
            <Route path="/boards" element={<CommunityMain />} />
            <Route path="/boards/:board_id" element={<CommunityDetail />} />
            <Route path="/boards/edit" element={<AddCommunity />} />
          </Route>
          <Route path="/portfolios/:portfolio_id" element={<PortfolioDetail />} />
          <Route path="/portfolio/edit" element={<PortfolioEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
