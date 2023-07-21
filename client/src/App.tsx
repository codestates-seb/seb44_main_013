import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from '@/store/index';
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
import LandingPage from './pages/landingpage/LandingPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SelectRole from './components/login/SelectRole';
import Neon from './pages/gisun/Neon';

const App = () => {
  //희재님 363137911116-hddsgl4il78hg3mfmssf0vanicga1vu4.apps.googleusercontent.com
  //내꺼 614000395362-h7u67qqcd1tcfnfae6cocbhj99680ru5.apps.googleusercontent.com
  const clientId = '363137911116-hddsgl4il78hg3mfmssf0vanicga1vu4.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route element={<MainLayout />}>
              <Route path="/main" element={<Main />} />
              <Route path="/members" element={<MyPage />} />
            </Route>
            <Route element={<CHeaderLayout />}>
              <Route path="/boards" element={<CommunityMain />} />
              <Route path="/boards/:id" element={<CommunityDetail />} />
              <Route path="/boards/edit/:id" element={<AddCommunity />} />
              <Route path="/boards/edit" element={<AddCommunity />} />
            </Route>
            <Route path="/portfolios/:portfolio_id" element={<PortfolioDetail />} />
            <Route path="/portfolio/edit" element={<PortfolioEdit />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup/role" element={<SelectRole />} />
            <Route path="/neon" element={<Neon />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default App;
