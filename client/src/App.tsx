import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from '@/modules/index';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

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
import LandingPage from './pages/landingpage/LandingPage';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const clientId = '614000395362-h7u67qqcd1tcfnfae6cocbhj99680ru5.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <CookiesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<LandingPage />}></Route>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/members" element={<MyPage />} />
          </Route>
          <Route element={<CHeaderLayout />}>
            <Route path="/boards" element={<CommunityMain />} />
            <Route path="/boards/:id" element={<CommunityDetail />} />
            <Route path="/boards/edit" element={<AddCommunity />} />
          </Route>
          <Route
            path="/portfolios/:portfolio_id"
            element={<PortfolioDetail />}
          />
          <Route path="/portfolio/edit" element={<PortfolioEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </CookiesProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
