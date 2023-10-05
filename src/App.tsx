import './App.css'
import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Euros from './pages/Euros';
import { MarqueeMarkets } from './components/MarqueeMarkets';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {

  const queryClient = new QueryClient();
  
  return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <div className="flex flex-col h-screen w-screen">
              <Header />
              <MarqueeMarkets key={'marquee'} />

              <Routes>
                      <Route path="/" element={<Main/>} />
                      <Route path="/euros" element={<Euros/>}></Route>
              </Routes>
              <Footer />
            </div>
        </QueryClientProvider>
      </BrowserRouter>    
  );
}

export default App








