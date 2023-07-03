import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import CategoryButton from './commons/atoms/buttons/CategoryButton';
import Header from './commons/atoms/header/Header';
import CategoryNavBar from './components/CategoryNavBar';
import Main from './pages/Main';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};

export default App;
