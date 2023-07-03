import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import CategoryButton from './commons/atoms/buttons/CategoryButton';

const queryClient = new QueryClient();

const App = () => {
  return(
    <QueryClientProvider client={queryClient}>
      <CategoryButton category="dslkfjsdljf"/>
      <BrowserRouter>
        <Routes>
          <Route/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;