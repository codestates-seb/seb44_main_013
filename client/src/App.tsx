import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;