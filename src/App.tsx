import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { History } from './components/History'
import Currencyconverter from './components/CurrencyConvert'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
})

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Currencyconverter />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)

export default App
